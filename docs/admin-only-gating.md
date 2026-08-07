# Admin-Only Access for Vaccination Notifications — Implementation Guide

> **Status: DOCUMENTATION ONLY — NOT BUILT**
> This file describes *how* to gate the Vaccination Notification feature behind an
> **admin-only** role. **No code has been changed to implement this.** Use this as
> the design + merge checklist when you are ready to build it.

---

## 1. Goal

Restrict the **Vaccination Notification option** so that only **admins** can use or
manage it. Concretely, the following surfaces should become admin-only:

| # | Surface | Location today | Why gate it |
|---|---------|----------------|-------------|
| 1 | "Get notified on this phone" button + reminder banner | `components/vaccination-reminder-banner.tsx`, mounted in `components/screens/vaccination-screen.tsx` | Only admins manage the vaccination schedule for the village |
| 2 | Browser Notification permission prompt + polling | `hooks/use-vaccination-notifications.ts` | Follows from (1) |
| 3 | Vaccination **create / update / delete** actions | `components/screens/vaccination-screen.tsx` → `lib/api.ts` → `backend/app/routes/vaccination.py` | Admin-only data management |
| 4 | Backend reminder worker (send SMS/console reminders) | `backend/app/notifications/reminder_runner.py` (CLI/cron) | Only admins may trigger notifications |

The **core principle: enforcement must happen on the backend.** Hiding a button in
the UI is not security — it is convenience only.

---

## 2. Current State (verified, as of this writing)

- **No authentication exists.** No login, no passwords, no tokens, no user table.
- Backend has only three tables: `Vaccination`, `VillageIssue`, `IssueRateLimit`
  (`backend/app/database/models.py`). There is **no `User`/`Admin` model**.
- The only "role" in the app is a **client-side toggle** in
  `components/screens/village-head-screen.tsx:15` (`type Role = 'farmer' | 'head'`).
  Anyone can switch it; it provides **no real security** and must **not** be copied
  as the pattern for admin gating.
- Vaccination endpoints (`backend/app/routes/vaccination.py`) accept requests from
  **any** caller with **no access control**.
- The API client (`lib/api.ts`) sends **no credentials/headers**.

---

## 3. Recommended Design (layered: backend authority + frontend UX)

### 3.1 Backend — Identity & Roles

1. **Add a `User` model** (`backend/app/database/models.py`):
   - fields: `id`, `username`, `hashed_password`, `role` (`"admin" | "farmer"`), `created_at`.
2. **Add auth schemas** (`backend/app/schemas.py`):
   - `UserCreate`, `UserLogin`, `TokenResponse`, and a `Role` enum.
3. **Add a token strategy** — pick ONE:
   - **(A) JWT (recommended)** — `POST /auth/login` returns a signed JWT; stateless,
     works well with FastAPI dependencies. Requires adding `PyJWT`/`python-jose` +
     `passlib` (or `pwdlib`) to `backend/requirements.txt`.
   - **(B) Long-lived API token (simpler, hackathon-friendly)** — admins are issued a
     random token stored hashed in the DB; clients send `Authorization: Bearer <token>`.
     No session store needed.
   - **(C) HTTP Basic auth over HTTPS** — simplest, but weak; only acceptable for a
     single admin in a demo.

### 3.2 Backend — Enforce "admin only"

1. **Add a FastAPI dependency** `get_current_user` that reads the `Authorization`
   header, validates the token, and loads the `User` from the DB
   (pattern: `backend/app/services/auth_service.py`).
2. **Add a `require_admin` dependency** that wraps `get_current_user` and rejects
   non-admins with `403 Forbidden` (`backend/app/routes/deps.py` or inline).
3. **Protect the vaccination routes** (`backend/app/routes/vaccination.py`):
   - `POST /vaccination` (create), `PUT /vaccination/{id}` (update),
     `DELETE /vaccination/{id}` (delete) → add `Depends(require_admin)`.
   - **Decision point:** should `GET /vaccination` (read) stay public so the
     reminder banner can show to everyone? Recommended: **yes**, reads stay public,
     writes are admin-only.
4. **Add an admin-only trigger for the reminder worker:**
   - New route `POST /vaccination/reminders/run` (admin-only) that invokes the logic
     in `backend/app/notifications/reminder_runner.py`.
   - Refactor `reminder_runner.py`: move the "collect + send" logic into a callable
     function (e.g. `run_reminders(provider, lang, due)`), so both the CLI and the
     API route share it. The **CLI itself** stays admin-run via cron (it runs on the
     server, so only server operators can call it — inherently admin-only).
5. **Wire it up** in `backend/app/main.py`:
   - `app.include_router(auth.router)`
   - Optionally a dependency that applies auth globally for protected prefixes.

### 3.3 Frontend — UX gating (UX only, never security)

1. **Auth state** — add a lightweight module (e.g. `lib/auth.ts`):
   - `login(username, password) -> token`, `logout()`, `isAdmin()`.
   - Store the token in `localStorage` (with the existing caveats — see §4).
2. **Attach the token** in the API client (`lib/api.ts`): include
   `Authorization: Bearer <token>` in `request()` headers when a token exists.
3. **Gate the UI in `components/vaccination-reminder-banner.tsx`:**
   - Only render the **"Get notified on this phone"** button and the reminder banner
     when `isAdmin()` is true.
   - Non-admins see nothing (or a read-only "vaccination schedule" card).
4. **Gate the management actions** in `components/screens/vaccination-screen.tsx`:
   - Hide/disable **Add, Mark Completed, Delete, Revert** for non-admins.
   - Show a short localized notice like *"Only admins can add or change vaccinations."*
     (add strings to `lib/assistant.ts` `UI` dict in `mr/hi/en`).
5. **Add an admin login entry point** — e.g. a discreet "Admin" link on the home
   screen (`components/screens/home-screen.tsx`) that opens a small login dialog
   (username + password), calling the new `/auth/login` endpoint.

### 3.4 Frontend hook (`hooks/use-vaccination-notifications.ts`)

- Only the hook is used **inside** the admin-gated banner, so it inherits the gating
  automatically. No change strictly required; optionally short-circuit when
  `isAdmin()` is false.

---

## 4. Security Notes (read before building)

- **Never rely on client-side hiding alone.** The backend `require_admin` dependency
  is the enforcement point; the frontend gating is only UX.
- **Token storage:** `localStorage` is XSS-accessible. Acceptable for a hackathon;
  for production prefer an `httpOnly` cookie or a short-lived access token +
  refresh token.
- **Password handling:** never store plaintext — hash with `bcrypt`/`argon2`
  (via `passlib`/`pwdlib`). Enforce HTTPS in any real deployment.
- **Seed an admin:** provide a one-time script or env-configurable default admin
  (`ADMIN_USERNAME`/`ADMIN_PASSWORD`) created on first startup — never hardcode
  credentials in committed source.
- **Do not copy the `village-head-screen.tsx` role toggle pattern** for admin gating;
  it is client-side only and provides no security.

---

## 5. Files to Change (NOT changed yet — checklist for implementation)

### Backend
- `backend/app/database/models.py` — add `User` model
- `backend/app/database/database.py` — (no change unless adding a table import in `init_db`)
- `backend/app/schemas.py` — auth + role schemas
- `backend/app/services/auth_service.py` — *new*: token issue/validate, password hashing
- `backend/app/routes/auth.py` — *new*: `POST /auth/login`, optional `POST /auth/register`
- `backend/app/routes/deps.py` — *new*: `get_current_user`, `require_admin`
- `backend/app/routes/vaccination.py` — add `Depends(require_admin)` on write routes;
  add `POST /vaccination/reminders/run` (admin)
- `backend/app/notifications/reminder_runner.py` — extract reusable `run_reminders()` for the API route
- `backend/app/main.py` — include the auth router
- `backend/requirements.txt` — add JWT/password deps

### Frontend
- `lib/auth.ts` — *new*: token storage + `isAdmin()`
- `lib/api.ts` — attach `Authorization` header; add `login()` call
- `components/vaccination-reminder-banner.tsx` — render only for admins
- `components/screens/vaccination-screen.tsx` — hide admin actions for non-admins
- `components/screens/home-screen.tsx` — add discreet Admin login entry
- `components/admin-login-dialog.tsx` — *new* (optional)
- `lib/assistant.ts` — localized strings for admin-gating messages

---

## 6. Acceptance Criteria (how to verify once built)

1. **Unauthenticated / non-admin** requests to `POST /vaccination`,
   `PUT /vaccination/{id}`, `DELETE /vaccination/{id}` → **403**.
2. **Admin** requests to the same endpoints → **200/201**.
3. `GET /vaccination` (read) still works for everyone → **200**.
4. `POST /vaccination/reminders/run` → **403 for non-admin**, **200 for admin**.
5. CLI worker (`python -m app.notifications.reminder_runner`) still works unchanged
   (server-side, inherently admin-only).
6. Non-admin browser users: **no** "Get notified" button, **no** add/delete controls.
7. Admin browser users: full banner + management controls after login.
8. Auth failure paths (bad token, expired token, wrong password) return clean,
   localized error messages; frontend shows a friendly retry state.

---

## 7. Open Questions / Decisions Required

- [ ] Should **reads** (`GET /vaccination`) stay public, or also be admin-only?
      (Recommended: public for reads, admin-only for writes.)
- [ ] Token strategy: **JWT** vs **long-lived API token** vs **Basic auth**?
      (Recommended for a hackathon: long-lived API token, least moving parts.)
- [ ] Should the reminder banner be visible (read-only) to farmers, with only the
      "manage / enable notifications" controls hidden? Or fully hidden?
- [ ] Single admin account, or multiple admins with a registration flow?
- [ ] Where does the admin seed/registration happen (env vars vs one-time CLI)?

---

*End of document. Nothing in the repository was modified; this is design guidance only.*
