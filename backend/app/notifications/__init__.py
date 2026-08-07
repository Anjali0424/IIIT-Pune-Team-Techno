"""Vaccination reminder notifications package.

Provides a cron/CLI-runnable worker (``reminder_runner``) that sends reminders
for vaccinations due today, due tomorrow or overdue, through pluggable delivery
providers (see ``providers``), with a JSON dedupe log (see ``state``) so each
reminder is sent only once per (vaccination, due date, status) combination.
"""
