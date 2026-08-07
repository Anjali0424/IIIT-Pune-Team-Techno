module.exports = [
"[project]/components/app-shell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$home$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/home-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$voice$2d$chat$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/voice-chat-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$animal$2d$health$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/animal-health-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$dairy$2d$feed$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/dairy-feed-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$weather$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/weather-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$prices$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/prices-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$schemes$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/schemes-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$vaccination$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/vaccination-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$emergency$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/emergency-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$offline$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/offline-screen.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function AppShell() {
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('home');
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('mr');
    const [online, setOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const update = ()=>setOnline(navigator.onLine);
        update();
        window.addEventListener('online', update);
        window.addEventListener('offline', update);
        return ()=>{
            window.removeEventListener('online', update);
            window.removeEventListener('offline', update);
        };
    }, []);
    const go = (s)=>setScreen(s);
    const back = ()=>setScreen('home');
    const shared = {
        lang,
        setLang,
        go,
        back,
        online
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-dvh w-full justify-center bg-secondary/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex min-h-dvh w-full max-w-md flex-col overflow-hidden bg-background shadow-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: screen === 'home' ? -24 : 24
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: screen === 'home' ? 24 : -24
                    },
                    transition: {
                        duration: 0.28,
                        ease: 'easeOut'
                    },
                    className: "flex flex-1 flex-col",
                    children: [
                        screen === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$home$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HomeScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 50,
                            columnNumber: 35
                        }, this),
                        screen === 'voice' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$voice$2d$chat$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoiceChatScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 51,
                            columnNumber: 36
                        }, this),
                        screen === 'health' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$animal$2d$health$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimalHealthScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 52,
                            columnNumber: 37
                        }, this),
                        screen === 'dairy' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$dairy$2d$feed$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DairyFeedScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 53,
                            columnNumber: 36
                        }, this),
                        screen === 'weather' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$weather$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeatherScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 54,
                            columnNumber: 38
                        }, this),
                        screen === 'prices' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$prices$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PricesScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 55,
                            columnNumber: 37
                        }, this),
                        screen === 'schemes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$schemes$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemesScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 56,
                            columnNumber: 38
                        }, this),
                        screen === 'vaccination' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$vaccination$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VaccinationScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 57,
                            columnNumber: 42
                        }, this),
                        screen === 'emergency' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$emergency$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmergencyScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 58,
                            columnNumber: 40
                        }, this),
                        screen === 'offline' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$offline$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OfflineScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 59,
                            columnNumber: 38
                        }, this)
                    ]
                }, screen, true, {
                    fileName: "[project]/components/app-shell.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/app-shell.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/app-shell.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/app-shell.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/screen-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScreenHeader",
    ()=>ScreenHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ScreenHeader({ screen, lang, onBack }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-20 flex items-center gap-3 bg-primary px-4 py-4 text-primary-foreground shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                "aria-label": "Go back",
                className: "flex size-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25 active:scale-95",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "size-6"
                }, void 0, false, {
                    fileName: "[project]/components/screen-header.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screen-header.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-lg font-semibold text-balance",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCREEN_TITLES"][screen][lang]
            }, void 0, false, {
                fileName: "[project]/components/screen-header.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screen-header.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/screens/animal-health-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimalHealthScreen",
    ()=>AnimalHealthScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.mjs [app-ssr] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.mjs [app-ssr] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.mjs [app-ssr] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const LEVEL_STYLES = {
    low: {
        bar: 'bg-emerald-500',
        label: {
            mr: 'कमी',
            hi: 'कम',
            en: 'Low'
        }
    },
    medium: {
        bar: 'bg-amber-500',
        label: {
            mr: 'मध्यम',
            hi: 'मध्यम',
            en: 'Medium'
        }
    },
    high: {
        bar: 'bg-rose-600',
        label: {
            mr: 'गंभीर',
            hi: 'गंभीर',
            en: 'High'
        }
    }
};
function AnimalHealthScreen({ lang, back }) {
    const [animal, setAnimal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANIMAL_TYPES"][0]);
    const [symptoms, setSymptoms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleSymptom = (label)=>{
        setSymptoms((prev)=>{
            const parts = prev.split(',').map((p)=>p.trim()).filter(Boolean);
            if (parts.includes(label)) return parts.filter((p)=>p !== label).join(', ');
            return [
                ...parts,
                label
            ].join(', ');
        });
    };
    const selected = symptoms.split(',').map((p)=>p.trim());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "health",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/animal-health-screen.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-foreground",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].animalType[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex flex-wrap gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANIMAL_TYPES"].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setAnimal(a),
                                        className: `rounded-full px-4 py-1.5 text-sm font-medium transition-all active:scale-95 ${animal.key === a.key ? 'bg-primary text-primary-foreground shadow' : 'bg-secondary text-secondary-foreground'}`,
                                        children: a.labels[lang]
                                    }, a.key, false, {
                                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mt-5 block text-sm font-semibold text-foreground",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].symptoms[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: symptoms,
                                onChange: (e)=>setSymptoms(e.target.value),
                                rows: 2,
                                placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].symptomsPlaceholder[lang],
                                className: "mt-2 w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_SYMPTOMS"].map((s)=>{
                                    const label = s.labels[lang];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleSymptom(label),
                                        className: `rounded-full px-3 py-1 text-xs font-medium transition-all active:scale-95 ${selected.includes(label) ? 'bg-primary/15 text-primary ring-1 ring-primary/30' : 'bg-secondary text-secondary-foreground'}`,
                                        children: label
                                    }, s.key, false, {
                                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setResult((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeSymptoms"])(animal.key, symptoms)),
                                disabled: !symptoms.trim(),
                                className: "mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-base font-semibold text-primary-foreground shadow-md transition-all active:scale-[0.98] disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                                        className: "size-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].checkHealth[lang]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "mt-4 flex flex-col gap-3",
                        children: [
                            result.level === 'high' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 rounded-3xl bg-destructive px-5 py-4 text-destructive-foreground shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "size-6 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-balance",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].contactVet[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultCard, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/animal-health-screen.tsx",
                                    lineNumber: 120,
                                    columnNumber: 21
                                }, this),
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].possibleCauses[lang],
                                items: result.causes,
                                lang: lang,
                                tint: "bg-indigo-50 text-indigo-700"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultCard, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/animal-health-screen.tsx",
                                    lineNumber: 127,
                                    columnNumber: 21
                                }, this),
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].precautions[lang],
                                items: result.precautions,
                                lang: lang,
                                tint: "bg-amber-50 text-amber-700"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultCard, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/animal-health-screen.tsx",
                                    lineNumber: 134,
                                    columnNumber: 21
                                }, this),
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].recommendedFeed[lang],
                                items: result.feed,
                                lang: lang,
                                tint: "bg-emerald-50 text-emerald-700"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-foreground",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].emergencyLevel[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold text-foreground",
                                                children: LEVEL_STYLES[result.level].label[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex gap-1.5",
                                        children: [
                                            'low',
                                            'medium',
                                            'high'
                                        ].map((lvl, i)=>{
                                            const active = result.level === 'low' && i === 0 || result.level === 'medium' && i <= 1 || result.level === 'high';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-2.5 flex-1 rounded-full ${active ? LEVEL_STYLES[result.level].bar : 'bg-secondary'}`
                                            }, lvl, false, {
                                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            result.level !== 'low' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:18002330418",
                                className: "flex items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-base font-semibold text-primary-foreground shadow-md active:scale-[0.98]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "size-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].contactVet[lang].replace('🚨 ', '')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 rounded-2xl bg-secondary/60 px-4 py-3 text-center text-xs leading-relaxed text-muted-foreground text-pretty",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].disclaimer[lang]
                    }, void 0, false, {
                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/animal-health-screen.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/animal-health-screen.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function ResultCard({ icon, title, items, lang, tint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `flex size-9 items-center justify-center rounded-xl ${tint}`,
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-foreground",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/animal-health-screen.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3 flex flex-col gap-2",
                children: items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex gap-2 text-sm leading-relaxed text-card-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            it[lang]
                        ]
                    }, i, true, {
                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/screens/animal-health-screen.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/animal-health-screen.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/screens/dairy-feed-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DairyFeedScreen",
    ()=>DairyFeedScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DairyFeedScreen({ lang, back }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "dairy",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/dairy-feed-screen.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAIRY_CARDS"].map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 14
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: i * 0.06
                            },
                            className: `flex gap-4 rounded-3xl p-5 shadow-sm ring-1 ring-border/60 ${card.color}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/70 text-3xl shadow-sm",
                                    "aria-hidden": true,
                                    children: card.emoji
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/dairy-feed-screen.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-semibold text-foreground text-balance",
                                            children: card.title[lang]
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/dairy-feed-screen.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm leading-relaxed text-foreground/75 text-pretty",
                                            children: card.body[lang]
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/dairy-feed-screen.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/screens/dairy-feed-screen.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/screens/dairy-feed-screen.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/screens/dairy-feed-screen.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/dairy-feed-screen.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/dairy-feed-screen.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/screens/emergency-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmergencyScreen",
    ()=>EmergencyScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$siren$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Siren$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/siren.mjs [app-ssr] (ecmascript) <export default as Siren>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function EmergencyScreen({ lang, back }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "emergency",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/emergency-screen.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.96
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        className: "flex items-center gap-4 rounded-3xl bg-destructive px-5 py-5 text-destructive-foreground shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                animate: {
                                    scale: [
                                        1,
                                        1.12,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 1.2,
                                    repeat: Number.POSITIVE_INFINITY
                                },
                                className: "flex size-12 items-center justify-center rounded-2xl bg-white/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$siren$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Siren$3e$__["Siren"], {
                                    className: "size-7"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/emergency-screen.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].contactVet[lang].replace('🚨 ', '')
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/emergency-screen.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-destructive-foreground/85 text-pretty",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].disclaimer[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/emergency-screen.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/emergency-screen.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 flex flex-col gap-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMERGENCY_CONTACTS"].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: `tel:${c.phone}`,
                                initial: {
                                    opacity: 0,
                                    y: 14
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: i * 0.08
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                className: `flex items-center gap-4 rounded-3xl px-5 py-5 shadow-md ${c.color}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-2xl",
                                        children: c.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/emergency-screen.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-semibold",
                                                children: c.label[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm opacity-85",
                                                children: c.phone
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/screens/emergency-screen.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "size-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/emergency-screen.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, c.phone, true, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/emergency-screen.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/emergency-screen.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/emergency-screen.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/screens/home-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeScreen",
    ()=>HomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.mjs [app-ssr] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.mjs [app-ssr] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function HomeScreen({ lang, setLang, go, online }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "rounded-b-3xl bg-primary px-5 pb-6 pt-6 text-primary-foreground shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        "aria-hidden": true,
                                        children: "🐄"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-bold tracking-tight",
                                        children: "PashuRakshak AI"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${online ? 'bg-white/20' : 'bg-black/20'}`,
                                children: [
                                    online ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 27,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 27,
                                        columnNumber: 55
                                    }, this),
                                    online ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].online[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].offline[lang]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-balance",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].greetingLine1[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-primary-foreground/85 text-pretty",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].greetingLine2[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANG_LABELS"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLang(l.id),
                                className: `rounded-full px-4 py-1.5 text-sm font-medium transition-all active:scale-95 ${lang === l.id ? 'bg-white text-primary shadow' : 'bg-white/15 text-primary-foreground hover:bg-white/25'}`,
                                children: l.label
                            }, l.id, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-5 pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-5 overflow-hidden rounded-3xl shadow-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/healthy-cows-hero.png",
                            alt: "Healthy cows and buffalo grazing on a green farm",
                            width: 640,
                            height: 360,
                            priority: true,
                            className: "h-44 w-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/home-screen.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>go('voice'),
                                whileTap: {
                                    scale: 0.94
                                },
                                className: "relative flex size-28 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl",
                                "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].tapToSpeak[lang],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "absolute inset-0 rounded-full bg-primary/40",
                                        animate: {
                                            scale: [
                                                1,
                                                1.35,
                                                1
                                            ],
                                            opacity: [
                                                0.6,
                                                0,
                                                0.6
                                            ]
                                        },
                                        transition: {
                                            duration: 2.2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: 'easeOut'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                        className: "size-11"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-base font-semibold text-foreground",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].tapToSpeak[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].askAnything[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-7 grid grid-cols-3 gap-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FEATURES"].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>go(f.id),
                                initial: {
                                    opacity: 0,
                                    y: 12
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.05 * i,
                                    duration: 0.3
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                className: "flex flex-col items-center gap-2 rounded-2xl bg-card p-3 shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `flex size-12 items-center justify-center rounded-2xl text-2xl ${f.color}`,
                                        "aria-hidden": true,
                                        children: f.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-center text-xs font-medium leading-tight text-card-foreground text-balance",
                                        children: f.labels[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `${f.id}-${i}`, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/home-screen.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/screens/offline-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OfflineScreen",
    ()=>OfflineScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-off.mjs [app-ssr] (ecmascript) <export default as CloudOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.mjs [app-ssr] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.mjs [app-ssr] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const OFFLINE_TOPICS = [
    {
        emoji: '🐄',
        label: {
            mr: 'सामान्य आजार व उपाय',
            hi: 'सामान्य रोग व उपाय',
            en: 'Common illnesses & care'
        }
    },
    {
        emoji: '🌾',
        label: {
            mr: 'चारा व पोषण',
            hi: 'चारा व पोषण',
            en: 'Feed & nutrition'
        }
    },
    {
        emoji: '🥛',
        label: {
            mr: 'दूध वाढवण्याचे उपाय',
            hi: 'दूध बढ़ाने के उपाय',
            en: 'Milk boosting tips'
        }
    },
    {
        emoji: '🔔',
        label: {
            mr: 'लसीकरण वेळापत्रक',
            hi: 'टीकाकरण समय-सारणी',
            en: 'Vaccination schedule'
        }
    },
    {
        emoji: '📞',
        label: {
            mr: 'आपत्कालीन संपर्क',
            hi: 'आपातकालीन संपर्क',
            en: 'Emergency contacts'
        }
    }
];
function OfflineScreen({ lang, back, online }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "offline",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/offline-screen.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-3 rounded-3xl px-5 py-4 shadow-sm ring-1 ${online ? 'bg-primary/10 ring-primary/30' : 'bg-amber-50 ring-amber-200'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex size-11 items-center justify-center rounded-2xl ${online ? 'bg-primary text-primary-foreground' : 'bg-amber-500 text-white'}`,
                                children: online ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                    className: "size-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/offline-screen.tsx",
                                    lineNumber: 37,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                    className: "size-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/offline-screen.tsx",
                                    lineNumber: 37,
                                    columnNumber: 53
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/offline-screen.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: `size-2.5 rounded-full ${online ? 'bg-primary' : 'bg-amber-500'}`,
                                                animate: {
                                                    opacity: [
                                                        1,
                                                        0.4,
                                                        1
                                                    ]
                                                },
                                                transition: {
                                                    duration: 1.6,
                                                    repeat: Number.POSITIVE_INFINITY
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/offline-screen.tsx",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-bold text-foreground",
                                                children: online ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].online[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].offline[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/offline-screen.tsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/screens/offline-screen.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-sm text-foreground/70 text-pretty",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].offlineNote[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/offline-screen.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/offline-screen.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/offline-screen.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__["CloudOff"], {
                                        className: "size-5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/offline-screen.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-foreground",
                                        children: lang === 'mr' ? 'ऑफलाइन उपलब्ध माहिती' : lang === 'hi' ? 'ऑफलाइन उपलब्ध जानकारी' : 'Available offline'
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/offline-screen.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/offline-screen.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-col gap-2",
                                children: OFFLINE_TOPICS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 rounded-2xl bg-secondary/50 px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                "aria-hidden": true,
                                                children: t.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/offline-screen.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-foreground",
                                                children: t.label[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/offline-screen.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "ml-auto size-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/offline-screen.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, t.emoji, true, {
                                        fileName: "[project]/components/screens/offline-screen.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/screens/offline-screen.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/offline-screen.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/offline-screen.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/offline-screen.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/screens/prices-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricesScreen",
    ()=>PricesScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.mjs [app-ssr] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function PricesScreen({ lang, back }) {
    const sorted = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MILK_PRICES"]
    ].sort((a, b)=>b.price - a.price);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "prices",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/prices-screen.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3",
                    children: sorted.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 14
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: i * 0.06
                            },
                            className: `rounded-3xl bg-card p-5 shadow-sm ring-1 ${p.best ? 'ring-2 ring-primary' : 'ring-border/60'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-semibold text-foreground",
                                                    children: p.dairy[lang]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/screens/prices-screen.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "size-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/screens/prices-screen.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 21
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].lastUpdated[lang],
                                                        ": ",
                                                        p.updated[lang]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/screens/prices-screen.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/screens/prices-screen.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-primary",
                                                children: [
                                                    "₹",
                                                    p.price,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-muted-foreground",
                                                        children: "/L"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/screens/prices-screen.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/screens/prices-screen.tsx",
                                                lineNumber: 38,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/prices-screen.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/screens/prices-screen.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                p.best && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/prices-screen.tsx",
                                            lineNumber: 46,
                                            columnNumber: 19
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].bestPrice[lang]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/screens/prices-screen.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, p.dairy.en, true, {
                            fileName: "[project]/components/screens/prices-screen.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/screens/prices-screen.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/prices-screen.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/prices-screen.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/screens/schemes-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SchemesScreen",
    ()=>SchemesScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.mjs [app-ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.mjs [app-ssr] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function SchemesScreen({ lang, back }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "schemes",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/schemes-screen.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCHEMES"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 14
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: i * 0.06
                            },
                            className: "overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-primary/10 px-5 py-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-foreground text-balance",
                                        children: s.name[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/schemes-screen.tsx",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/schemes-screen.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 px-5 py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                className: "size-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                                lineNumber: 30,
                                                columnNumber: 25
                                            }, this),
                                            label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].benefits[lang],
                                            value: s.benefit[lang],
                                            tint: "bg-emerald-50 text-emerald-700"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/schemes-screen.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                className: "size-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                                lineNumber: 36,
                                                columnNumber: 25
                                            }, this),
                                            label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].eligibility[lang],
                                            value: s.eligibility[lang],
                                            tint: "bg-sky-50 text-sky-700"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/schemes-screen.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex size-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "size-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                                                lineNumber: 44,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/screens/schemes-screen.tsx",
                                                            lineNumber: 43,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold text-foreground",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].documents[lang]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/screens/schemes-screen.tsx",
                                                            lineNumber: 46,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/screens/schemes-screen.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 flex flex-wrap gap-1.5",
                                                    children: s.documents.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
                                                            children: d[lang]
                                                        }, d.en, false, {
                                                            fileName: "[project]/components/screens/schemes-screen.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/screens/schemes-screen.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/screens/schemes-screen.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-md active:scale-[0.98]",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].apply[lang],
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/screens/schemes-screen.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/screens/schemes-screen.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/screens/schemes-screen.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/screens/schemes-screen.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/screens/schemes-screen.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/schemes-screen.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/schemes-screen.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
function Row({ icon, label, value, tint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `flex size-8 items-center justify-center rounded-lg ${tint}`,
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/components/screens/schemes-screen.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-foreground",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/screens/schemes-screen.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/schemes-screen.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 pl-10 text-sm leading-relaxed text-card-foreground/80 text-pretty",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/screens/schemes-screen.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/schemes-screen.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/screens/vaccination-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VaccinationScreen",
    ()=>VaccinationScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.mjs [app-ssr] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$syringe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Syringe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/syringe.mjs [app-ssr] (ecmascript) <export default as Syringe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function VaccinationScreen({ lang, back }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "vaccination",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/vaccination-screen.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative pl-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-2 left-[10px] top-2 w-0.5 bg-border"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/vaccination-screen.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VACCINES"].map((v, i)=>{
                                const done = v.status === 'done';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 12
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: i * 0.06
                                    },
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute -left-6 top-4 flex size-5 items-center justify-center rounded-full ring-4 ring-background ${done ? 'bg-emerald-500' : 'bg-amber-500'}`,
                                            children: done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "size-3 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                lineNumber: 37,
                                                columnNumber: 30
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/vaccination-screen.tsx",
                                            lineNumber: 32,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-3xl p-4 shadow-sm ring-1 ${done ? 'bg-emerald-50 ring-emerald-200' : 'bg-amber-50 ring-amber-200'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base font-semibold text-foreground",
                                                            children: v.animal[lang]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${done ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'}`,
                                                            children: done ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].completed[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].upcoming[lang]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 flex items-center gap-1.5 text-sm font-medium text-foreground/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$syringe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Syringe$3e$__["Syringe"], {
                                                            className: "size-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 23
                                                        }, this),
                                                        v.vaccine[lang]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 flex items-center gap-1.5 text-xs text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                                            className: "size-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 23
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].dueDate[lang],
                                                        ": ",
                                                        v.date[lang]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/screens/vaccination-screen.tsx",
                                            lineNumber: 40,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/screens/vaccination-screen.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/screens/vaccination-screen.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/screens/vaccination-screen.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/vaccination-screen.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/vaccination-screen.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/screens/voice-chat-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceChatScreen",
    ()=>VoiceChatScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.mjs [app-ssr] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$speech$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-speech.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function VoiceChatScreen({ lang, setLang, back }) {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [thinking, setThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const idRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(1);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { isListening, isSpeaking, transcript, startListening, stopListening, speak, stopSpeaking } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$speech$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpeech"])(lang);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }, [
        messages,
        thinking,
        transcript
    ]);
    const handleUserInput = (text)=>{
        const clean = text.trim();
        if (!clean) return;
        const userMsg = {
            id: idRef.current++,
            role: 'user',
            text: clean
        };
        setMessages((m)=>[
                ...m,
                userMsg
            ]);
        setThinking(true);
        window.setTimeout(()=>{
            const reply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateReply"])(clean, lang);
            setThinking(false);
            setMessages((m)=>[
                    ...m,
                    {
                        id: idRef.current++,
                        role: 'ai',
                        text: reply
                    }
                ]);
            speak(reply);
        }, 900);
    };
    const handleMic = ()=>{
        if (isListening) {
            stopListening();
        } else {
            stopSpeaking();
            startListening(handleUserInput);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-secondary/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-20 bg-primary px-4 py-4 text-primary-foreground shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: back,
                                "aria-label": "Go back",
                                className: "flex size-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "size-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "flex-1 text-lg font-semibold",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCREEN_TITLES"].voice[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANG_LABELS"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLang(l.id),
                                className: `rounded-full px-3.5 py-1 text-sm font-medium transition-all active:scale-95 ${lang === l.id ? 'bg-white text-primary shadow' : 'bg-white/15 text-primary-foreground hover:bg-white/25'}`,
                                children: l.label
                            }, l.id, false, {
                                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    messages.length === 0 && !isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                        lang: lang,
                        onPick: handleUserInput
                    }, void 0, false, {
                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: [
                            messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatBubble, {
                                    message: m,
                                    lang: lang,
                                    onSpeak: ()=>speak(m.text)
                                }, m.id, false, {
                                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)),
                            isListening && transcript && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-[80%] rounded-3xl rounded-br-md bg-primary/70 px-4 py-2.5 text-sm text-primary-foreground",
                                    children: transcript
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            thinking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 rounded-3xl rounded-bl-md bg-card px-4 py-3 shadow-sm ring-1 ring-border/60",
                                    children: [
                                        0,
                                        1,
                                        2
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "size-2 rounded-full bg-primary",
                                            animate: {
                                                y: [
                                                    0,
                                                    -5,
                                                    0
                                                ],
                                                opacity: [
                                                    0.4,
                                                    1,
                                                    0.4
                                                ]
                                            },
                                            transition: {
                                                duration: 0.9,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: i * 0.15
                                            }
                                        }, i, false, {
                                            fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border bg-card px-4 pb-6 pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: (isListening || isSpeaking) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 6
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "mb-3 text-sm font-medium text-primary",
                                children: isListening ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].listening[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].speaking[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/screens/voice-chat-screen.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center justify-center",
                            children: [
                                isListening && [
                                    0,
                                    1
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "absolute rounded-full bg-primary/30",
                                        style: {
                                            width: 72,
                                            height: 72
                                        },
                                        animate: {
                                            scale: [
                                                1,
                                                2.1
                                            ],
                                            opacity: [
                                                0.5,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 1.6,
                                            repeat: Number.POSITIVE_INFINITY,
                                            delay: i * 0.8,
                                            ease: 'easeOut'
                                        }
                                    }, i, false, {
                                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: handleMic,
                                    whileTap: {
                                        scale: 0.92
                                    },
                                    className: `relative flex size-[72px] items-center justify-center rounded-full text-primary-foreground shadow-lg ${isListening ? 'bg-rose-600' : 'bg-primary'}`,
                                    "aria-label": isListening ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].stop[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].tapToSpeak[lang],
                                    children: isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                        className: "size-7 fill-current"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                        lineNumber: 169,
                                        columnNumber: 30
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                        className: "size-8"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                        lineNumber: 169,
                                        columnNumber: 75
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/screens/voice-chat-screen.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-xs text-muted-foreground",
                            children: isListening ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].stop[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].tapToSpeak[lang]
                        }, void 0, false, {
                            fileName: "[project]/components/screens/voice-chat-screen.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/voice-chat-screen.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function ChatBubble({ message, lang, onSpeak }) {
    const isUser = message.role === 'user';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: `flex ${isUser ? 'justify-end' : 'justify-start'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex max-w-[82%] flex-col gap-1 ${isUser ? 'items-end' : 'items-start'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-2 text-[11px] font-medium text-muted-foreground",
                    children: isUser ? `👨‍🌾 ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].you[lang]}` : `🤖 ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].assistant[lang]}`
                }, void 0, false, {
                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-3xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${isUser ? 'rounded-br-md bg-primary text-primary-foreground' : 'rounded-bl-md bg-card text-card-foreground ring-1 ring-border/60'}`,
                    children: message.text
                }, void 0, false, {
                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onSpeak,
                    className: "flex items-center gap-1 px-2 text-[11px] font-medium text-primary hover:underline",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                            className: "size-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/voice-chat-screen.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].speaking[lang].replace('...', '')
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/screens/voice-chat-screen.tsx",
            lineNumber: 198,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/screens/voice-chat-screen.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
function EmptyState({ lang, onPick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center pt-8 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-5xl",
                "aria-hidden": true,
                children: "🤖"
            }, void 0, false, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 max-w-[15rem] text-sm text-muted-foreground text-pretty",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].askAnything[lang]
            }, void 0, false, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 mb-2 text-xs font-semibold text-foreground",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].quickHelp[lang]
            }, void 0, false, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUICK_PROMPTS"][lang].map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onPick(q),
                        className: "rounded-full bg-card px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm ring-1 ring-border/60 transition-colors hover:bg-secondary active:scale-95",
                        children: q
                    }, q, false, {
                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/voice-chat-screen.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/screens/weather-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeatherScreen",
    ()=>WeatherScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.mjs [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as TriangleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function WeatherScreen({ lang, back }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "weather",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/weather-screen.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 14
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "overflow-hidden rounded-3xl bg-gradient-to-br from-sky-400 to-cyan-500 p-6 text-white shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-sm text-white/90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/weather-screen.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER"].place[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/weather-screen.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/weather-screen.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-6xl font-bold leading-none",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER"].temp,
                                                    "°"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/screens/weather-screen.tsx",
                                                lineNumber: 29,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-base font-medium",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER"].condition[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/weather-screen.tsx",
                                                lineNumber: 30,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/screens/weather-screen.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            rotate: 360
                                        },
                                        transition: {
                                            duration: 40,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: 'linear'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                            className: "size-20 text-yellow-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/weather-screen.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/weather-screen.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/weather-screen.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex items-center gap-2 rounded-2xl bg-white/15 px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                        className: "size-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/weather-screen.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].humidity[lang],
                                            ": ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER"].humidity,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/screens/weather-screen.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/weather-screen.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/weather-screen.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 14
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.08
                        },
                        className: "mt-4 rounded-3xl bg-warning/25 p-5 shadow-sm ring-1 ring-warning/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex size-9 items-center justify-center rounded-xl bg-warning text-warning-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                                            className: "size-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/weather-screen.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/weather-screen.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-foreground",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER"].alertTitle[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/weather-screen.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/weather-screen.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-pretty text-sm leading-relaxed text-foreground/80",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER"].advice[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/weather-screen.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/weather-screen.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-foreground",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI"].livestockAdvice[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/weather-screen.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-3 flex flex-col gap-2",
                                children: [
                                    {
                                        mr: 'सकाळी लवकर व संध्याकाळी चारा द्या.',
                                        hi: 'सुबह जल्दी व शाम को चारा दें।',
                                        en: 'Feed early morning and evening.'
                                    },
                                    {
                                        mr: 'गोठ्यात हवा खेळती ठेवा.',
                                        hi: 'गौशाला में हवादार रखें।',
                                        en: 'Keep the shed well ventilated.'
                                    },
                                    {
                                        mr: 'थंड व स्वच्छ पाणी सतत ठेवा.',
                                        hi: 'ठंडा व साफ पानी हमेशा रखें।',
                                        en: 'Keep cool clean water available.'
                                    }
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex gap-2 text-sm leading-relaxed text-card-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/weather-screen.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            item[lang]
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/screens/weather-screen.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/screens/weather-screen.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/weather-screen.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/weather-screen.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/weather-screen.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/hooks/use-speech.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpeech",
    ()=>useSpeech
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-ssr] (ecmascript)");
'use client';
;
;
function getRecognitionCtor() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const w = undefined;
}
function useSpeech(lang) {
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transcript, setTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [supported, setSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const finalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('');
    const onFinalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const Ctor = getRecognitionCtor();
        const synth = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
        setSupported(Boolean(Ctor) || Boolean(synth));
        return ()=>{
            try {
                recognitionRef.current?.abort();
                synth?.cancel();
            } catch  {
            /* noop */ }
        };
    }, []);
    const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            recognitionRef.current?.stop();
        } catch  {
        /* noop */ }
        setIsListening(false);
    }, []);
    const startListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((onFinal)=>{
        const Ctor = getRecognitionCtor();
        if (!Ctor) {
            setSupported(false);
            return;
        }
        // Cancel any ongoing speech so the mic doesn't capture it
        try {
            window.speechSynthesis?.cancel();
        } catch  {
        /* noop */ }
        setIsSpeaking(false);
        const recognition = new Ctor();
        recognition.lang = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPEECH_LOCALE"][lang];
        recognition.continuous = false;
        recognition.interimResults = true;
        finalRef.current = '';
        onFinalRef.current = onFinal ?? null;
        setTranscript('');
        recognition.onresult = (e)=>{
            let interim = '';
            let finalText = '';
            for(let i = e.resultIndex; i < e.results.length; i++){
                const res = e.results[i];
                if (res.isFinal) finalText += res[0].transcript;
                else interim += res[0].transcript;
            }
            if (finalText) finalRef.current += finalText;
            setTranscript((finalRef.current + interim).trim());
        };
        recognition.onerror = ()=>{
            setIsListening(false);
        };
        recognition.onend = ()=>{
            setIsListening(false);
            const result = finalRef.current.trim();
            if (result && onFinalRef.current) onFinalRef.current(result);
        };
        recognitionRef.current = recognition;
        try {
            recognition.start();
            setIsListening(true);
        } catch  {
            setIsListening(false);
        }
    }, [
        lang
    ]);
    const speak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((text)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const synth = undefined;
        const utter = undefined;
        const voices = undefined;
        const match = undefined;
    }, [
        lang
    ]);
    const stopSpeaking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            window.speechSynthesis?.cancel();
        } catch  {
        /* noop */ }
        setIsSpeaking(false);
    }, []);
    return {
        isListening,
        isSpeaking,
        transcript,
        supported,
        startListening,
        stopListening,
        speak,
        stopSpeaking,
        setTranscript
    };
}
}),
"[project]/lib/assistant.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LANG_LABELS",
    ()=>LANG_LABELS,
    "QUICK_PROMPTS",
    ()=>QUICK_PROMPTS,
    "SPEECH_LOCALE",
    ()=>SPEECH_LOCALE,
    "UI",
    ()=>UI,
    "generateReply",
    ()=>generateReply
]);
const LANG_LABELS = [
    {
        id: 'mr',
        label: 'मराठी'
    },
    {
        id: 'hi',
        label: 'हिंदी'
    },
    {
        id: 'en',
        label: 'English'
    }
];
const SPEECH_LOCALE = {
    mr: 'mr-IN',
    hi: 'hi-IN',
    en: 'en-IN'
};
const UI = {
    greetingLine1: {
        mr: 'नमस्कार शेतकरी मित्रा! 👋',
        hi: 'नमस्ते किसान मित्र! 👋',
        en: 'Hello, farmer friend! 👋'
    },
    greetingLine2: {
        mr: 'मी तुमचा पशू आरोग्य सहाय्यक आहे.',
        hi: 'मैं आपका पशु स्वास्थ्य सहायक हूँ।',
        en: 'I am your livestock health assistant.'
    },
    tapToSpeak: {
        mr: 'बोलण्यासाठी दाबा',
        hi: 'बोलने के लिए दबाएं',
        en: 'Tap to Speak'
    },
    listening: {
        mr: 'ऐकत आहे...',
        hi: 'सुन रहा हूँ...',
        en: 'Listening...'
    },
    speaking: {
        mr: 'बोलत आहे...',
        hi: 'बोल रहा हूँ...',
        en: 'Speaking...'
    },
    stop: {
        mr: 'थांबा',
        hi: 'रुकें',
        en: 'Stop'
    },
    askAnything: {
        mr: 'तुमच्या जनावरांबद्दल काहीही विचारा',
        hi: 'अपने पशुओं के बारे में कुछ भी पूछें',
        en: 'Ask anything about your animals'
    },
    you: {
        mr: 'तुम्ही',
        hi: 'आप',
        en: 'You'
    },
    assistant: {
        mr: 'सहाय्यक',
        hi: 'सहायक',
        en: 'Assistant'
    },
    quickHelp: {
        mr: 'पटकन विचारा',
        hi: 'जल्दी पूछें',
        en: 'Quick questions'
    },
    disclaimer: {
        mr: 'ही माहिती फक्त जागरूकतेसाठी आहे आणि पशुवैद्यकीय सल्ल्याला पर्याय नाही.',
        hi: 'यह जानकारी केवल जागरूकता के लिए है और पशु चिकित्सा सलाह का विकल्प नहीं है।',
        en: 'This guidance is for awareness only and does not replace professional veterinary advice.'
    },
    online: {
        mr: 'AI शी जोडलेले',
        hi: 'AI से जुड़ा हुआ',
        en: 'Connected to AI'
    },
    offline: {
        mr: 'ऑफलाइन AI उपलब्ध',
        hi: 'ऑफलाइन AI उपलब्ध',
        en: 'Offline AI Available'
    },
    offlineNote: {
        mr: 'इंटरनेटशिवाय सामान्य पशु मार्गदर्शन उपलब्ध आहे.',
        hi: 'इंटरनेट के बिना सामान्य पशु मार्गदर्शन उपलब्ध है।',
        en: 'Common livestock guidance is available without internet.'
    },
    animalType: {
        mr: 'जनावराचा प्रकार',
        hi: 'पशु का प्रकार',
        en: 'Animal Type'
    },
    symptoms: {
        mr: 'लक्षणे',
        hi: 'लक्षण',
        en: 'Symptoms'
    },
    symptomsPlaceholder: {
        mr: 'उदा. ताप, खात नाही, तोंडात फोड',
        hi: 'जैसे बुखार, खाना न खाना, मुंह में छाले',
        en: 'e.g. fever, not eating, mouth blisters'
    },
    checkHealth: {
        mr: 'तपासा',
        hi: 'जाँचें',
        en: 'Check Health'
    },
    possibleCauses: {
        mr: 'संभाव्य कारणे',
        hi: 'संभावित कारण',
        en: 'Possible Causes'
    },
    precautions: {
        mr: 'त्वरित काळजी',
        hi: 'तत्काल सावधानियाँ',
        en: 'Immediate Precautions'
    },
    recommendedFeed: {
        mr: 'शिफारस केलेला चारा',
        hi: 'अनुशंसित आहार',
        en: 'Recommended Feed'
    },
    emergencyLevel: {
        mr: 'आपत्कालीन पातळी',
        hi: 'आपातकालीन स्तर',
        en: 'Emergency Level'
    },
    contactVet: {
        mr: '🚨 त्वरित पशुवैद्यकाशी संपर्क साधा',
        hi: '🚨 तुरंत पशु चिकित्सक से संपर्क करें',
        en: '🚨 Contact Veterinarian Immediately'
    },
    bestPrice: {
        mr: 'सर्वोत्तम भाव',
        hi: 'सर्वोत्तम भाव',
        en: 'Best Price'
    },
    lastUpdated: {
        mr: 'शेवटचे अपडेट',
        hi: 'अंतिम अपडेट',
        en: 'Last Updated'
    },
    benefits: {
        mr: 'फायदे',
        hi: 'लाभ',
        en: 'Benefits'
    },
    eligibility: {
        mr: 'पात्रता',
        hi: 'पात्रता',
        en: 'Eligibility'
    },
    documents: {
        mr: 'आवश्यक कागदपत्रे',
        hi: 'आवश्यक दस्तावेज़',
        en: 'Required Documents'
    },
    apply: {
        mr: 'अर्ज करा',
        hi: 'आवेदन करें',
        en: 'Apply'
    },
    dueDate: {
        mr: 'नियोजित तारीख',
        hi: 'नियत तिथि',
        en: 'Due Date'
    },
    completed: {
        mr: 'पूर्ण',
        hi: 'पूर्ण',
        en: 'Completed'
    },
    upcoming: {
        mr: 'येणारे',
        hi: 'आगामी',
        en: 'Upcoming'
    },
    humidity: {
        mr: 'आर्द्रता',
        hi: 'नमी',
        en: 'Humidity'
    },
    livestockAdvice: {
        mr: 'जनावरांसाठी सल्ला',
        hi: 'पशुओं के लिए सलाह',
        en: 'Livestock Advice'
    },
    loading: {
        mr: 'लोड होत आहे…',
        hi: 'लोड हो रहा है…',
        en: 'Loading…'
    },
    retry: {
        mr: 'पुन्हा प्रयत्न करा',
        hi: 'पुनः प्रयास करें',
        en: 'Retry'
    },
    failedToLoad: {
        mr: 'माहिती लोड करताना त्रुटी आली. तुमचे इंटरनेट कनेक्शन तपासा.',
        hi: 'जानकारी लोड करने में त्रुटि हुई। अपना इंटरनेट कनेक्शन जांचें।',
        en: 'Failed to load data. Please check your internet connection.'
    },
    all: {
        mr: 'सर्व',
        hi: 'सभी',
        en: 'All'
    },
    searchSchemes: {
        mr: 'योजना शोधा…',
        hi: 'योजनाएं खोजें…',
        en: 'Search schemes…'
    },
    noSchemesFound: {
        mr: 'कोणतीही योजना सापडली नाही',
        hi: 'कोई योजना नहीं मिली',
        en: 'No schemes found'
    },
    searchContacts: {
        mr: 'संपर्क शोधा…',
        hi: 'संपर्क खोजें…',
        en: 'Search contacts…'
    },
    noContactsFound: {
        mr: 'कोणतेही संपर्क सापडले नाहीत',
        hi: 'कोई संपर्क नहीं मिला',
        en: 'No contacts found'
    },
    allDistricts: {
        mr: 'सर्व जिल्हे',
        hi: 'सभी जिले',
        en: 'All Districts'
    },
    addVaccination: {
        mr: 'लसीकरण जोडा',
        hi: 'टीकाकरण जोड़ें',
        en: 'Add Vaccination'
    },
    save: {
        mr: 'जतन करा',
        hi: 'सेव करें',
        en: 'Save'
    },
    cancel: {
        mr: 'रद्द करा',
        hi: 'रद्द करें',
        en: 'Cancel'
    },
    animalName: {
        mr: 'जनावराचे नाव',
        hi: 'पशु का नाम',
        en: 'Animal Name'
    },
    ownerName: {
        mr: 'मालकाचे नाव',
        hi: 'मालिक का नाम',
        en: 'Owner Name'
    },
    vaccineName: {
        mr: 'लसीचे नाव',
        hi: 'टीके का नाम',
        en: 'Vaccine Name'
    },
    vaccinationDate: {
        mr: 'लसीकरण तारीख',
        hi: 'टीकाकरण तिथि',
        en: 'Vaccination Date'
    },
    markCompleted: {
        mr: 'पूर्ण करा',
        hi: 'पूर्ण करें',
        en: 'Mark Completed'
    },
    revertToUpcoming: {
        mr: 'येणारे करा',
        hi: 'आगामी करें',
        en: 'Revert to Upcoming'
    },
    deleteVaccination: {
        mr: 'हटवा',
        hi: 'हटाएं',
        en: 'Delete'
    },
    filterUpcoming: {
        mr: 'येणारे',
        hi: 'आगामी',
        en: 'Upcoming'
    },
    filterCompleted: {
        mr: 'पूर्ण',
        hi: 'पूर्ण',
        en: 'Completed'
    },
    filterDueToday: {
        mr: 'आज देय',
        hi: 'आज देय',
        en: 'Due Today'
    },
    filterDueTomorrow: {
        mr: 'उद्या देय',
        hi: 'कल देय',
        en: 'Due Tomorrow'
    },
    noVaccinations: {
        mr: 'कोणतेही लसीकरण रेकॉर्ड नाही',
        hi: 'कोई टीकाकरण रिकॉर्ड नहीं',
        en: 'No vaccination records'
    },
    confirmDeleteVaccination: {
        mr: 'हे लसीकरण रेकॉर्ड हटवायचे का?',
        hi: 'क्या यह टीकाकरण रिकॉर्ड हटाना है?',
        en: 'Delete this vaccination record?'
    }
};
const QUICK_PROMPTS = {
    mr: [
        'माझ्या गाईला ताप आहे',
        'दूध कमी झाले आहे',
        'चारा कोणता द्यावा?',
        'लसीकरण कधी?'
    ],
    hi: [
        'मेरी गाय को बुखार है',
        'दूध कम हो गया है',
        'कौन सा चारा दें?',
        'टीकाकरण कब?'
    ],
    en: [
        'My cow has fever',
        'Milk yield has dropped',
        'Which feed to give?',
        'When to vaccinate?'
    ]
};
const REPLIES = [
    {
        keywords: [
            'fever',
            'ताप',
            'बुखार',
            'hot',
            'temperature'
        ],
        reply: {
            mr: 'तापाच्या जनावराला सावलीत ठेवा, भरपूर स्वच्छ पाणी द्या आणि तापमान नोंदवा. १२ तासांत सुधारणा नसेल तर पशुवैद्यकाशी संपर्क साधा.',
            hi: 'बुखार वाले पशु को छाँव में रखें, भरपूर साफ पानी दें और तापमान नोट करें। 12 घंटे में सुधार न हो तो पशु चिकित्सक से संपर्क करें।',
            en: 'Keep the feverish animal in shade, give plenty of clean water and record its temperature. If there is no improvement in 12 hours, contact a veterinarian.'
        }
    },
    {
        keywords: [
            'milk',
            'दूध',
            'yield',
            'कमी'
        ],
        reply: {
            mr: 'दूध कमी होण्याची कारणे म्हणजे कमी चारा, पाणी किंवा तणाव. संतुलित आहार, खनिज मिश्रण आणि नियमित दूध काढणे सुरू ठेवा.',
            hi: 'दूध कम होने के कारण कम चारा, पानी या तनाव हो सकते हैं। संतुलित आहार, खनिज मिश्रण और नियमित दूध निकालना जारी रखें।',
            en: 'Lower milk yield can be due to less fodder, water or stress. Continue a balanced ration, mineral mixture and milking at regular times.'
        }
    },
    {
        keywords: [
            'feed',
            'चारा',
            'खाणे',
            'nutrition',
            'पोषण'
        ],
        reply: {
            mr: 'दररोज ३०-४० किलो हिरवा चारा, थोडा वाळलेला चारा आणि ५०-१०० ग्रॅम खनिज मिश्रण द्या. आहार अचानक बदलू नका.',
            hi: 'रोज़ 30-40 किलो हरा चारा, थोड़ा सूखा चारा और 50-100 ग्राम खनिज मिश्रण दें। आहार अचानक न बदलें।',
            en: 'Give 30-40 kg green fodder daily, some dry fodder and 50-100 g mineral mixture. Do not change the diet suddenly.'
        }
    },
    {
        keywords: [
            'vaccine',
            'vaccinat',
            'लस',
            'टीका',
            'लसीकरण'
        ],
        reply: {
            mr: 'FMD लस दर ६ महिन्यांनी आणि HS लस पावसाळ्यापूर्वी द्या. तुमच्या लसीकरण स्मरणपत्रात पुढील तारखा पहा.',
            hi: 'FMD टीका हर 6 महीने और HS टीका बरसात से पहले लगवाएं। अपने टीकाकरण रिमाइंडर में अगली तिथियाँ देखें।',
            en: 'Give the FMD vaccine every 6 months and the HS vaccine before monsoon. Check your vaccination reminder for the next dates.'
        }
    },
    {
        keywords: [
            'diarrhea',
            'loose',
            'हगवण',
            'दस्त',
            'पातळ'
        ],
        reply: {
            mr: 'जुलाबासाठी स्वच्छ पाणी आणि मीठ-गूळ पाणी द्या. वाळलेला चारा द्या. रक्त किंवा अशक्तपणा दिसल्यास त्वरित पशुवैद्यक.',
            hi: 'दस्त के लिए साफ पानी और नमक-गुड़ पानी दें। सूखा चारा दें। खून या कमजोरी दिखे तो तुरंत पशु चिकित्सक।',
            en: 'For diarrhea give clean water and salt-jaggery water, plus dry fodder. If you see blood or weakness, see a vet immediately.'
        }
    },
    {
        keywords: [
            'heat',
            'summer',
            'ऊन',
            'गर्मी',
            'उष्ण'
        ],
        reply: {
            mr: 'उन्हाळ्यात सकाळी ११ ते ४ जनावरे सावलीत ठेवा, गोठ्यात हवा खेळती ठेवा आणि थंड पाणी सतत उपलब्ध ठेवा.',
            hi: 'गर्मी में सुबह 11 से 4 पशुओं को छाँव में रखें, गौशाला में हवा रखें और ठंडा पानी हमेशा उपलब्ध रखें।',
            en: 'In summer keep animals in shade from 11 AM to 4 PM, keep the shed ventilated and provide cool water at all times.'
        }
    },
    {
        keywords: [
            'scheme',
            'योजना',
            'loan',
            'कर्ज',
            'subsidy',
            'अनुदान'
        ],
        reply: {
            mr: 'पशु किसान क्रेडिट कार्ड आणि राष्ट्रीय गोकुळ मिशन सारख्या योजना उपलब्ध आहेत. सरकारी योजना विभागात तपशील पहा.',
            hi: 'पशु किसान क्रेडिट कार्ड और राष्ट्रीय गोकुल मिशन जैसी योजनाएं उपलब्ध हैं। सरकारी योजना अनुभाग में विवरण देखें।',
            en: 'Schemes like the Pashu Kisan Credit Card and Rashtriya Gokul Mission are available. Check the Government Schemes section for details.'
        }
    }
];
const FALLBACK = {
    mr: 'मी समजून घेण्याचा प्रयत्न करत आहे. कृपया जनावराचा प्रकार आणि लक्षणे थोडक्यात सांगा, जसे "गाईला ताप आहे".',
    hi: 'मैं समझने की कोशिश कर रहा हूँ। कृपया पशु का प्रकार और लक्षण संक्षेप में बताएं, जैसे "गाय को बुखार है"।',
    en: 'I am trying to understand. Please tell me the animal type and symptoms briefly, like "cow has fever".'
};
function generateReply(text, lang) {
    const t = text.toLowerCase();
    for (const item of REPLIES){
        if (item.keywords.some((k)=>t.includes(k.toLowerCase()))) {
            return item.reply[lang];
        }
    }
    return FALLBACK[lang];
}
}),
"[project]/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANIMAL_TYPES",
    ()=>ANIMAL_TYPES,
    "COMMON_SYMPTOMS",
    ()=>COMMON_SYMPTOMS,
    "DAIRY_CARDS",
    ()=>DAIRY_CARDS,
    "EMERGENCY_CONTACTS",
    ()=>EMERGENCY_CONTACTS,
    "FEATURES",
    ()=>FEATURES,
    "MILK_PRICES",
    ()=>MILK_PRICES,
    "SCHEMES",
    ()=>SCHEMES,
    "SCREEN_TITLES",
    ()=>SCREEN_TITLES,
    "VACCINES",
    ()=>VACCINES,
    "WEATHER",
    ()=>WEATHER,
    "analyzeSymptoms",
    ()=>analyzeSymptoms
]);
const FEATURES = [
    {
        id: 'health',
        emoji: '🐄',
        labels: {
            mr: 'पशू आरोग्य',
            hi: 'पशु स्वास्थ्य',
            en: 'Animal Health'
        },
        color: 'bg-emerald-100 text-emerald-700'
    },
    {
        id: 'dairy',
        emoji: '🥛',
        labels: {
            mr: 'दूध व डेअरी',
            hi: 'दूध व डेयरी',
            en: 'Dairy & Milk'
        },
        color: 'bg-sky-100 text-sky-700'
    },
    {
        id: 'dairy',
        emoji: '🌾',
        labels: {
            mr: 'चारा सल्ला',
            hi: 'चारा सलाह',
            en: 'Feed Advice'
        },
        color: 'bg-amber-100 text-amber-700'
    },
    {
        id: 'schemes',
        emoji: '🏛',
        labels: {
            mr: 'सरकारी योजना',
            hi: 'सरकारी योजना',
            en: 'Govt Schemes'
        },
        color: 'bg-indigo-100 text-indigo-700'
    },
    {
        id: 'weather',
        emoji: '🌦',
        labels: {
            mr: 'हवामान अलर्ट',
            hi: 'मौसम अलर्ट',
            en: 'Weather Alerts'
        },
        color: 'bg-cyan-100 text-cyan-700'
    },
    {
        id: 'prices',
        emoji: '💰',
        labels: {
            mr: 'दूध व बाजारभाव',
            hi: 'दूध व मंडी भाव',
            en: 'Milk & Mandi'
        },
        color: 'bg-green-100 text-green-700'
    },
    {
        id: 'vaccination',
        emoji: '🔔',
        labels: {
            mr: 'लसीकरण',
            hi: 'टीकाकरण',
            en: 'Vaccination'
        },
        color: 'bg-orange-100 text-orange-700'
    },
    {
        id: 'emergency',
        emoji: '📞',
        labels: {
            mr: 'आपत्कालीन डॉक्टर',
            hi: 'आपातकालीन डॉक्टर',
            en: 'Emergency Vet'
        },
        color: 'bg-rose-100 text-rose-700'
    },
    {
        id: 'offline',
        emoji: '📴',
        labels: {
            mr: 'ऑफलाइन मोड',
            hi: 'ऑफलाइन मोड',
            en: 'Offline Mode'
        },
        color: 'bg-slate-100 text-slate-700'
    }
];
const SCREEN_TITLES = {
    home: {
        mr: 'मुख्यपृष्ठ',
        hi: 'होम',
        en: 'Home'
    },
    voice: {
        mr: 'आवाज सहाय्यक',
        hi: 'आवाज सहायक',
        en: 'Voice Assistant'
    },
    health: {
        mr: 'पशू आरोग्य',
        hi: 'पशु स्वास्थ्य',
        en: 'Animal Health'
    },
    dairy: {
        mr: 'दूध व चारा',
        hi: 'दूध व चारा',
        en: 'Dairy & Feed'
    },
    weather: {
        mr: 'हवामान',
        hi: 'मौसम',
        en: 'Weather'
    },
    prices: {
        mr: 'दूध व बाजारभाव',
        hi: 'दूध व मंडी भाव',
        en: 'Milk & Mandi Prices'
    },
    schemes: {
        mr: 'सरकारी योजना',
        hi: 'सरकारी योजना',
        en: 'Government Schemes'
    },
    vaccination: {
        mr: 'लसीकरण',
        hi: 'टीकाकरण',
        en: 'Vaccination Reminder'
    },
    emergency: {
        mr: 'आपत्कालीन मदत',
        hi: 'आपातकालीन मदद',
        en: 'Emergency'
    },
    offline: {
        mr: 'ऑफलाइन मोड',
        hi: 'ऑफलाइन मोड',
        en: 'Offline Mode'
    }
};
const ANIMAL_TYPES = [
    {
        key: 'Cow',
        labels: {
            mr: 'गाय',
            hi: 'गाय',
            en: 'Cow'
        }
    },
    {
        key: 'Buffalo',
        labels: {
            mr: 'म्हैस',
            hi: 'भैंस',
            en: 'Buffalo'
        }
    },
    {
        key: 'Goat',
        labels: {
            mr: 'शेळी',
            hi: 'बकरी',
            en: 'Goat'
        }
    },
    {
        key: 'Sheep',
        labels: {
            mr: 'मेंढी',
            hi: 'भेड़',
            en: 'Sheep'
        }
    },
    {
        key: 'Poultry',
        labels: {
            mr: 'कोंबडी',
            hi: 'मुर्गी',
            en: 'Poultry'
        }
    }
];
const COMMON_SYMPTOMS = [
    {
        key: 'fever',
        labels: {
            mr: 'ताप',
            hi: 'बुखार',
            en: 'Fever'
        }
    },
    {
        key: 'appetite',
        labels: {
            mr: 'भूक मंदावली',
            hi: 'भूख न लगना',
            en: 'Loss of appetite'
        }
    },
    {
        key: 'diarrhea',
        labels: {
            mr: 'जुलाब',
            hi: 'दस्त',
            en: 'Diarrhea'
        }
    },
    {
        key: 'blister',
        labels: {
            mr: 'तोंडात फोड',
            hi: 'मुंह में छाले',
            en: 'Mouth blisters'
        }
    },
    {
        key: 'limp',
        labels: {
            mr: 'लंगडणे',
            hi: 'लंगड़ाना',
            en: 'Limping'
        }
    },
    {
        key: 'milk',
        labels: {
            mr: 'दूध कमी',
            hi: 'दूध कम',
            en: 'Reduced milk'
        }
    },
    {
        key: 'cough',
        labels: {
            mr: 'खोकला',
            hi: 'खांसी',
            en: 'Coughing'
        }
    },
    {
        key: 'bloat',
        labels: {
            mr: 'पोट फुगणे',
            hi: 'पेट फूलना',
            en: 'Bloating'
        }
    }
];
function analyzeSymptoms(_animal, symptoms) {
    const s = symptoms.toLowerCase();
    const has = (...k)=>k.some((x)=>s.includes(x.toLowerCase()));
    let level = 'low';
    const causes = [];
    const precautions = [];
    const feed = [];
    if (has('blister', 'mouth', 'foot', 'lame', 'limp', 'drool', 'फोड', 'तोंड', 'खूर', 'लंगड', 'लाळ', 'छाले', 'मुंह', 'खुर', 'लंगड़')) {
        level = 'high';
        causes.push({
            mr: 'लाळ्या खुरकूत (FMD) असण्याची शक्यता',
            hi: 'खुरपका-मुंहपका रोग (FMD) की संभावना',
            en: 'Possible Foot-and-Mouth Disease (FMD)'
        });
        precautions.push({
            mr: 'जनावराला ताबडतोब कळपापासून वेगळे करा',
            hi: 'पशु को तुरंत झुंड से अलग करें',
            en: 'Isolate the animal from the herd immediately'
        });
        precautions.push({
            mr: 'तोंड व खूर सौम्य जंतुनाशकाने धुवा आणि जागा कोरडी ठेवा',
            hi: 'मुंह व खुर को हल्के एंटीसेप्टिक से धोएं और जगह सूखी रखें',
            en: 'Wash mouth and hooves with mild antiseptic and keep bedding dry'
        });
        feed.push({
            mr: 'भिजवलेली हरभरा व हिरवा चारा असा मऊ, सहज चावता येणारा आहार',
            hi: 'भिगोया चना व हरा चारा जैसा नरम, आसानी से चबाने वाला आहार',
            en: 'Soft, easy-to-chew feed like soaked gram and green fodder'
        });
    }
    if (has('bloat', 'swollen stomach', 'gas', 'फुग', 'पोट फुग', 'फूल', 'पेट फूल', 'गॅस')) {
        level = level === 'high' ? 'high' : 'medium';
        causes.push({
            mr: 'जास्त हिरवा चारा किंवा धान्यामुळे पोट फुगणे',
            hi: 'अधिक हरा चारा या अनाज से पेट फूलना',
            en: 'Bloat from excess green fodder or grain'
        });
        precautions.push({
            mr: 'जनावराला हळू चालवा आणि ताजा द्विदल चारा टाळा',
            hi: 'पशु को धीरे चलाएं और ताज़ा फलीदार चारा न दें',
            en: 'Walk the animal slowly and avoid fresh legume fodder'
        });
        feed.push({
            mr: 'गवत/कडबा असा कोरडा चारा; एक दिवस ओला हिरवा चारा टाळा',
            hi: 'पुआल जैसा सूखा चारा; एक दिन गीली हरी घास न दें',
            en: 'Dry roughage such as straw; avoid wet lush grass for a day'
        });
    }
    if (has('diarrhea', 'loose', 'dung', 'जुलाब', 'हगवण', 'शेण', 'दस्त', 'पातळ')) {
        level = level === 'high' ? 'high' : 'medium';
        causes.push({
            mr: 'पचनसंस्थेचा संसर्ग किंवा दूषित पाणी',
            hi: 'पाचन संक्रमण या दूषित पानी',
            en: 'Digestive infection or contaminated water'
        });
        precautions.push({
            mr: 'स्वच्छ पाणी व मीठ-गूळ पाणी (जलसंजीवनी) द्या',
            hi: 'साफ पानी व नमक-गुड़ पानी (ओआरएस) दें',
            en: 'Provide clean water and oral rehydration (salt + jaggery water)'
        });
        feed.push({
            mr: 'शेण घट्ट होईपर्यंत भाताची पेज व कोरडा चारा द्या',
            hi: 'गोबर सामान्य होने तक चावल का पानी व सूखा चारा दें',
            en: 'Boiled rice water and dry fodder until stool firms up'
        });
    }
    if (has('fever', 'hot', 'temperature', 'ताप', 'बुखार')) {
        level = level === 'high' ? 'high' : 'medium';
        causes.push({
            mr: 'संसर्ग किंवा गोचिडांमुळे येणारा ताप',
            hi: 'संक्रमण या किलनी से होने वाला बुखार',
            en: 'Infection or tick-borne fever'
        });
        precautions.push({
            mr: 'जनावराला सावलीत ठेवा व भरपूर स्वच्छ पाणी द्या',
            hi: 'पशु को छाँव में रखें व भरपूर साफ पानी दें',
            en: 'Keep the animal in shade with plenty of clean water'
        });
        feed.push({
            mr: 'हलका हिरवा चारा व पाण्यात खनिज मिश्रण',
            hi: 'हल्का हरा चारा व पानी में खनिज मिश्रण',
            en: 'Light green fodder and mineral mixture in water'
        });
    }
    if (has('cough', 'breath', 'nasal', 'pneumonia', 'खोकला', 'श्वास', 'खांसी', 'सांस')) {
        level = level === 'high' ? 'high' : 'medium';
        causes.push({
            mr: 'श्वसनसंस्थेचा संसर्ग',
            hi: 'श्वसन संक्रमण',
            en: 'Respiratory infection'
        });
        precautions.push({
            mr: 'उबदार, कोरड्या व हवेशीर गोठ्यात वाऱ्यापासून दूर ठेवा',
            hi: 'गर्म, सूखे व हवादार शेड में सीधी हवा से दूर रखें',
            en: 'Move to a warm, dry, well-ventilated shed away from drafts'
        });
        feed.push({
            mr: 'खाण्यास प्रोत्साहन देण्यासाठी गुळासह कोमट मॅश',
            hi: 'खाने के लिए गुड़ के साथ गुनगुना मैश',
            en: 'Warm mash with jaggery to encourage intake'
        });
    }
    if (has('milk', 'udder', 'mastitis', 'lump', 'दूध', 'कास', 'स्तनदाह', 'थन', 'गाठ')) {
        level = level === 'high' ? 'high' : 'medium';
        causes.push({
            mr: 'स्तनदाह (मस्टायटिस) किंवा पोषणाचा ताण असण्याची शक्यता',
            hi: 'थनैला (मस्टाइटिस) या पोषण तनाव की संभावना',
            en: 'Possible mastitis or nutritional stress'
        });
        precautions.push({
            mr: 'पूर्ण दूध काढा, कास स्वच्छ व कोरडी ठेवा, कोमट शेक द्या',
            hi: 'पूरा दूध निकालें, थन साफ व सूखा रखें, गर्म सेंक दें',
            en: 'Milk out fully, keep the udder clean and dry, apply a warm compress'
        });
        feed.push({
            mr: 'कॅल्शियम व खनिज मिश्रणासह संतुलित आहार',
            hi: 'कैल्शियम व खनिज मिश्रण सहित संतुलित आहार',
            en: 'Balanced ration with calcium and mineral mixture'
        });
    }
    if (has('appetite', 'not eating', 'weak', 'भूक', 'खात नाही', 'अशक्त', 'भूख', 'खा नहीं', 'कमजोर')) {
        causes.push({
            mr: 'सामान्य अशक्तपणा किंवा आजाराची सुरुवात',
            hi: 'सामान्य कमजोरी या बीमारी की शुरुआत',
            en: 'General weakness or early illness'
        });
        precautions.push({
            mr: '१२ तास बारकाईने निरीक्षण करा व तापमान नोंदवा',
            hi: '12 घंटे ध्यान से देखें व तापमान नोट करें',
            en: 'Observe closely for 12 hours and record the temperature'
        });
        feed.push({
            mr: 'रुचकर हिरवा चारा, गूळ पाणी व खनिज मिश्रण',
            hi: 'स्वादिष्ट हरा चारा, गुड़ पानी व खनिज मिश्रण',
            en: 'Palatable green fodder, jaggery water and mineral mixture'
        });
    }
    if (causes.length === 0) {
        causes.push({
            mr: 'वर्णनावरून लक्षणे स्पष्ट होत नाहीत',
            hi: 'विवरण से लक्षण स्पष्ट नहीं हैं',
            en: 'Symptoms are unclear from the description'
        });
        precautions.push({
            mr: 'जनावराला आराम व पुरेसे पाणी द्या आणि बारकाईने निरीक्षण करा',
            hi: 'पशु को आराम व पर्याप्त पानी दें और ध्यान से देखें',
            en: 'Keep the animal comfortable, hydrated and observe closely'
        });
        feed.push({
            mr: 'स्वच्छ पाणी व खनिज मिश्रणासह नेहमीचा संतुलित आहार',
            hi: 'साफ पानी व खनिज मिश्रण सहित सामान्य संतुलित आहार',
            en: 'Normal balanced feed with clean water and mineral mixture'
        });
    }
    return {
        causes,
        precautions,
        feed,
        level
    };
}
const DAIRY_CARDS = [
    {
        emoji: '🥛',
        color: 'bg-sky-50',
        title: {
            mr: 'दूध वाढवण्याचे उपाय',
            hi: 'दूध बढ़ाने के उपाय',
            en: 'Boost Milk Production'
        },
        body: {
            mr: 'दिवसातून दोन वेळा नियमित दूध काढा आणि संतुलित आहार द्या. गाभण जनावरांना जास्त काळजी.',
            hi: 'दिन में दो बार नियमित दूध निकालें और संतुलित आहार दें। गाभिन पशुओं का विशेष ध्यान रखें।',
            en: 'Milk at regular times twice a day and feed a balanced ration. Give extra care to pregnant animals.'
        }
    },
    {
        emoji: '🌾',
        color: 'bg-amber-50',
        title: {
            mr: 'चारा सल्ला',
            hi: 'चारा सलाह',
            en: 'Feed Recommendation'
        },
        body: {
            mr: 'हिरवा चारा, वाळलेला चारा आणि थोडा खुराक यांचे प्रमाण ठेवा. दररोज ३०-४० किलो हिरवा चारा.',
            hi: 'हरा चारा, सूखा चारा और थोड़ा दाना संतुलित रखें। रोज़ 30-40 किलो हरा चारा दें।',
            en: 'Balance green fodder, dry fodder and a little concentrate. Give 30-40 kg green fodder daily.'
        }
    },
    {
        emoji: '💧',
        color: 'bg-cyan-50',
        title: {
            mr: 'पाणी',
            hi: 'पानी',
            en: 'Water Intake'
        },
        body: {
            mr: 'स्वच्छ पाणी नेहमी उपलब्ध ठेवा. एका गाईला दररोज ४०-८० लिटर पाणी लागते.',
            hi: 'साफ पानी हमेशा उपलब्ध रखें। एक गाय को रोज़ 40-80 लिटर पानी चाहिए।',
            en: 'Keep clean water always available. A cow needs 40-80 litres of water per day.'
        }
    },
    {
        emoji: '🧂',
        color: 'bg-orange-50',
        title: {
            mr: 'खनिज मिश्रण',
            hi: 'खनिज मिश्रण',
            en: 'Mineral Mixture'
        },
        body: {
            mr: 'दररोज ५०-१०० ग्रॅम खनिज मिश्रण खुराकात मिसळा. यामुळे प्रजनन व दूध सुधारते.',
            hi: 'रोज़ 50-100 ग्राम खनिज मिश्रण दाने में मिलाएं। इससे प्रजनन व दूध सुधरता है।',
            en: 'Mix 50-100 g mineral mixture in feed daily. It improves fertility and milk yield.'
        }
    },
    {
        emoji: '🍃',
        color: 'bg-emerald-50',
        title: {
            mr: 'पोषण मार्गदर्शन',
            hi: 'पोषण मार्गदर्शन',
            en: 'Nutrition Guidance'
        },
        body: {
            mr: 'दूध देणाऱ्या जनावरांना प्रथिनयुक्त आहार व कॅल्शियम द्या. अचानक आहार बदलू नका.',
            hi: 'दूध देने वाले पशुओं को प्रोटीनयुक्त आहार व कैल्शियम दें। अचानक आहार न बदलें।',
            en: 'Give lactating animals protein-rich feed and calcium. Never change the diet suddenly.'
        }
    }
];
const WEATHER = {
    place: {
        mr: 'अहमदनगर, महाराष्ट्र',
        hi: 'अहमदनगर, महाराष्ट्र',
        en: 'Ahmednagar, Maharashtra'
    },
    temp: 38,
    humidity: 62,
    condition: {
        mr: 'ऊन व दमट',
        hi: 'धूप व उमस',
        en: 'Sunny & Humid'
    },
    alertTitle: {
        mr: 'तीव्र उष्णता अलर्ट',
        hi: 'तेज़ गर्मी अलर्ट',
        en: 'High Heat Alert'
    },
    advice: {
        mr: 'सकाळी ११ ते दुपारी ४ या वेळेत जनावरांना सावलीत ठेवा आणि भरपूर पाणी द्या.',
        hi: 'सुबह 11 से दोपहर 4 बजे तक पशुओं को छाँव में रखें और भरपूर पानी दें।',
        en: 'Keep cattle under shade between 11 AM and 4 PM and give plenty of water.'
    }
};
const MILK_PRICES = [
    {
        dairy: {
            mr: 'अमूल संकलन केंद्र',
            hi: 'अमूल संग्रह केंद्र',
            en: 'Amul Collection Center'
        },
        price: 38,
        updated: {
            mr: 'आज सकाळी ६:००',
            hi: 'आज सुबह 6:00',
            en: 'Today 6:00 AM'
        }
    },
    {
        dairy: {
            mr: 'गोकुळ डेअरी',
            hi: 'गोकुल डेयरी',
            en: 'Gokul Dairy'
        },
        price: 42,
        updated: {
            mr: 'आज सकाळी ७:३०',
            hi: 'आज सुबह 7:30',
            en: 'Today 7:30 AM'
        },
        best: true
    },
    {
        dairy: {
            mr: 'महानंद डेअरी',
            hi: 'महानंद डेयरी',
            en: 'Mahanand Dairy'
        },
        price: 40,
        updated: {
            mr: 'आज सकाळी ६:१५',
            hi: 'आज सुबह 6:15',
            en: 'Today 6:15 AM'
        }
    },
    {
        dairy: {
            mr: 'स्थानिक सहकारी संस्था',
            hi: 'स्थानीय सहकारी संस्था',
            en: 'Local Cooperative'
        },
        price: 36,
        updated: {
            mr: 'काल रात्री ८:००',
            hi: 'कल रात 8:00',
            en: 'Yesterday 8:00 PM'
        }
    }
];
const DOC_AADHAAR = {
    mr: 'आधार कार्ड',
    hi: 'आधार कार्ड',
    en: 'Aadhaar Card'
};
const DOC_BANK = {
    mr: 'बँक पासबुक',
    hi: 'बैंक पासबुक',
    en: 'Bank Passbook'
};
const SCHEMES = [
    {
        name: {
            mr: 'राष्ट्रीय गोकुळ मिशन',
            hi: 'राष्ट्रीय गोकुल मिशन',
            en: 'Rashtriya Gokul Mission'
        },
        benefit: {
            mr: 'देशी गोवंश संवर्धन व दुग्ध उत्पादन वाढीसाठी अनुदान.',
            hi: 'देशी गौवंश संवर्धन व दुग्ध उत्पादन वृद्धि हेतु अनुदान।',
            en: 'Subsidy for indigenous breed development and higher milk output.'
        },
        eligibility: {
            mr: 'नोंदणीकृत पशुपालक व दूध उत्पादक शेतकरी.',
            hi: 'पंजीकृत पशुपालक व दूध उत्पादक किसान।',
            en: 'Registered cattle owners and milk-producing farmers.'
        },
        documents: [
            DOC_AADHAAR,
            {
                mr: '७/१२ उतारा',
                hi: 'भूमि रिकॉर्ड (7/12)',
                en: 'Land Record (7/12)'
            },
            DOC_BANK,
            {
                mr: 'जनावराचा फोटो',
                hi: 'पशु का फोटो',
                en: 'Animal Photo'
            }
        ]
    },
    {
        name: {
            mr: 'पशु किसान क्रेडिट कार्ड',
            hi: 'पशु किसान क्रेडिट कार्ड',
            en: 'Pashu Kisan Credit Card'
        },
        benefit: {
            mr: 'कमी व्याजदरात जनावरांच्या पालनासाठी कर्ज.',
            hi: 'कम ब्याज दर पर पशुपालन हेतु ऋण।',
            en: 'Low-interest loan for cattle rearing and dairy needs.'
        },
        eligibility: {
            mr: 'जनावरे असलेले कोणतेही शेतकरी.',
            hi: 'पशु रखने वाले कोई भी किसान।',
            en: 'Any farmer who owns milch or draught animals.'
        },
        documents: [
            DOC_AADHAAR,
            {
                mr: 'PAN कार्ड',
                hi: 'PAN कार्ड',
                en: 'PAN Card'
            },
            DOC_BANK,
            {
                mr: 'जनावर मालकीचा पुरावा',
                hi: 'पशु स्वामित्व प्रमाण',
                en: 'Cattle Ownership Proof'
            }
        ]
    },
    {
        name: {
            mr: 'पशुधन विमा योजना',
            hi: 'पशुधन बीमा योजना',
            en: 'Livestock Insurance Scheme'
        },
        benefit: {
            mr: 'जनावराच्या मृत्यूवर विमा संरक्षण, हप्त्यावर अनुदान.',
            hi: 'पशु की मृत्यु पर बीमा सुरक्षा, प्रीमियम पर अनुदान।',
            en: 'Insurance cover on animal death with subsidy on premium.'
        },
        eligibility: {
            mr: 'गाय, म्हैस असलेले शेतकरी.',
            hi: 'गाय, भैंस रखने वाले किसान।',
            en: 'Farmers owning cows or buffaloes.'
        },
        documents: [
            DOC_AADHAAR,
            DOC_BANK,
            {
                mr: 'जनावर आरोग्य प्रमाणपत्र',
                hi: 'पशु स्वास्थ्य प्रमाणपत्र',
                en: 'Animal Health Certificate'
            }
        ]
    }
];
const VACCINES = [
    {
        animal: {
            mr: 'गंगा (गाय)',
            hi: 'गंगा (गाय)',
            en: 'Ganga (Cow)'
        },
        vaccine: {
            mr: 'FMD लस',
            hi: 'FMD टीका',
            en: 'FMD Vaccine'
        },
        date: {
            mr: '१० जाने २०२६',
            hi: '10 जन 2026',
            en: '10 Jan 2026'
        },
        status: 'done'
    },
    {
        animal: {
            mr: 'भोलू (म्हैस)',
            hi: 'भोलू (भैंस)',
            en: 'Bholu (Buffalo)'
        },
        vaccine: {
            mr: 'HS लस',
            hi: 'HS टीका',
            en: 'HS Vaccine'
        },
        date: {
            mr: '०२ फेब्रु २०२६',
            hi: '02 फर 2026',
            en: '02 Feb 2026'
        },
        status: 'done'
    },
    {
        animal: {
            mr: 'गंगा (गाय)',
            hi: 'गंगा (गाय)',
            en: 'Ganga (Cow)'
        },
        vaccine: {
            mr: 'ब्रुसेलोसिस',
            hi: 'ब्रुसेलोसिस',
            en: 'Brucellosis'
        },
        date: {
            mr: '१८ ऑग २०२६',
            hi: '18 अग 2026',
            en: '18 Aug 2026'
        },
        status: 'upcoming'
    },
    {
        animal: {
            mr: 'मोती (शेळी)',
            hi: 'मोती (बकरी)',
            en: 'Moti (Goat)'
        },
        vaccine: {
            mr: 'PPR लस',
            hi: 'PPR टीका',
            en: 'PPR Vaccine'
        },
        date: {
            mr: '२५ ऑग २०२६',
            hi: '25 अग 2026',
            en: '25 Aug 2026'
        },
        status: 'upcoming'
    },
    {
        animal: {
            mr: 'भोलू (म्हैस)',
            hi: 'भोलू (भैंस)',
            en: 'Bholu (Buffalo)'
        },
        vaccine: {
            mr: 'जंतनाशक',
            hi: 'कृमिनाशक',
            en: 'Deworming'
        },
        date: {
            mr: '०५ सप्टें २०२६',
            hi: '05 सित 2026',
            en: '05 Sep 2026'
        },
        status: 'upcoming'
    }
];
const EMERGENCY_CONTACTS = [
    {
        emoji: '📞',
        label: {
            mr: 'पशुवैद्यकाला कॉल करा',
            hi: 'पशु चिकित्सक को कॉल करें',
            en: 'Call Veterinarian'
        },
        phone: '18002330418',
        color: 'bg-primary text-primary-foreground'
    },
    {
        emoji: '🚑',
        label: {
            mr: 'पशु रुग्णवाहिका',
            hi: 'पशु एम्बुलेंस',
            en: 'Animal Ambulance'
        },
        phone: '1962',
        color: 'bg-rose-600 text-white'
    },
    {
        emoji: '☎',
        label: {
            mr: 'सरकारी हेल्पलाइन',
            hi: 'सरकारी हेल्पलाइन',
            en: 'Government Helpline'
        },
        phone: '18001801551',
        color: 'bg-indigo-600 text-white'
    }
];
}),
];

//# sourceMappingURL=_1b67-nx._.js.map