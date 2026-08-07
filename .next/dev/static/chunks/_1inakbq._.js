(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/VoiceButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceButton",
    ()=>VoiceButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
'use client';
;
;
;
function VoiceButton({ lang, onPress, listening = false, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onPress,
        "aria-label": listening ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].stop[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].tapToSpeak[lang],
        className: `flex size-8 shrink-0 items-center justify-center rounded-full transition-colors active:scale-95 ${listening ? 'bg-rose-600 text-white' : 'bg-primary/10 text-primary'} ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/components/VoiceButton.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VoiceButton.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = VoiceButton;
var _c;
__turbopack_context__.k.register(_c, "VoiceButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/VoiceSearchModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceSearchModal",
    ()=>VoiceSearchModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVoiceSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useVoiceSearch.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function errorMessage(code) {
    switch(code){
        case 'unsupported':
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].voiceUnsupported;
        case 'permission-denied':
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].voicePermissionDenied;
        case 'no-speech':
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].voiceNoSpeech;
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].voiceFailed;
    }
}
function VoiceSearchModal({ open, lang, onResult, onInterim, onClose }) {
    _s();
    const { interim, error, start, abort, resetError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVoiceSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceSearch"])(lang);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('listening');
    const [recognized, setRecognized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const closeTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onResultRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onResult);
    const onInterimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onInterim);
    const onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceSearchModal.useEffect": ()=>{
            onResultRef.current = onResult;
        }
    }["VoiceSearchModal.useEffect"], [
        onResult
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceSearchModal.useEffect": ()=>{
            onInterimRef.current = onInterim;
        }
    }["VoiceSearchModal.useEffect"], [
        onInterim
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceSearchModal.useEffect": ()=>{
            onCloseRef.current = onClose;
        }
    }["VoiceSearchModal.useEffect"], [
        onClose
    ]);
    const beginListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceSearchModal.useCallback[beginListening]": ()=>{
            resetError();
            setRecognized('');
            setPhase('listening');
            start({
                "VoiceSearchModal.useCallback[beginListening]": (text)=>{
                    const trimmed = text.trim();
                    if (!trimmed) return;
                    setRecognized(trimmed);
                    setPhase('searching');
                    onResultRef.current(trimmed);
                    closeTimerRef.current = window.setTimeout({
                        "VoiceSearchModal.useCallback[beginListening]": ()=>onCloseRef.current()
                    }["VoiceSearchModal.useCallback[beginListening]"], 1100);
                }
            }["VoiceSearchModal.useCallback[beginListening]"]);
        }
    }["VoiceSearchModal.useCallback[beginListening]"], [
        resetError,
        start
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceSearchModal.useEffect": ()=>{
            if (!open) return;
            beginListening();
            return ({
                "VoiceSearchModal.useEffect": ()=>{
                    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
                    abort();
                }
            })["VoiceSearchModal.useEffect"];
        }
    }["VoiceSearchModal.useEffect"], [
        open,
        beginListening,
        abort
    ]);
    // Feed the live transcript into the page's search box.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceSearchModal.useEffect": ()=>{
            if (open && interim) onInterimRef.current?.(interim);
        }
    }["VoiceSearchModal.useEffect"], [
        interim,
        open
    ]);
    // Surface recognition errors inside the modal.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceSearchModal.useEffect": ()=>{
            if (open && error) setPhase('error');
        }
    }["VoiceSearchModal.useEffect"], [
        error,
        open
    ]);
    const handleClose = ()=>{
        if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
        abort();
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.2
            },
            onClick: handleClose,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].tapToSpeak[lang],
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    type: "button",
                    onClick: handleClose,
                    "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].cancel[lang],
                    className: "absolute right-5 top-6 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "size-5"
                    }, void 0, false, {
                        fileName: "[project]/components/VoiceSearchModal.tsx",
                        lineNumber: 126,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VoiceSearchModal.tsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex h-40 w-40 items-center justify-center",
                            children: [
                                phase === 'listening' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        0,
                                        1,
                                        2
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "absolute inset-0 rounded-full bg-rose-500/50",
                                            initial: false,
                                            animate: {
                                                scale: [
                                                    1,
                                                    2.2
                                                ],
                                                opacity: [
                                                    0.55,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 1.8,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: i * 0.6,
                                                ease: 'easeOut'
                                            }
                                        }, i, false, {
                                            fileName: "[project]/components/VoiceSearchModal.tsx",
                                            lineNumber: 135,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VoiceSearchModal.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "relative flex size-32 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15",
                                    animate: phase === 'listening' ? {
                                        scale: [
                                            1,
                                            1.07,
                                            1
                                        ]
                                    } : {
                                        scale: 1
                                    },
                                    transition: phase === 'listening' ? {
                                        duration: 1.4,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: 'easeInOut'
                                    } : {
                                        duration: 0.2
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: `flex size-24 items-center justify-center rounded-full text-white ${phase === 'error' ? 'bg-white/15' : 'bg-rose-600'}`,
                                        animate: phase === 'listening' ? {
                                            boxShadow: [
                                                '0 0 24px 4px rgba(225,29,72,0.55)',
                                                '0 0 72px 20px rgba(225,29,72,0.25)',
                                                '0 0 24px 4px rgba(225,29,72,0.55)'
                                            ]
                                        } : {
                                            boxShadow: [
                                                '0 0 24px 4px rgba(225,29,72,0.45)',
                                                '0 0 44px 12px rgba(225,29,72,0.3)',
                                                '0 0 24px 4px rgba(225,29,72,0.45)'
                                            ]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: 'easeInOut'
                                        },
                                        children: phase === 'searching' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "size-10 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VoiceSearchModal.tsx",
                                            lineNumber: 188,
                                            columnNumber: 21
                                        }, this) : phase === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            className: "size-10"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VoiceSearchModal.tsx",
                                            lineNumber: 190,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            className: "size-11"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VoiceSearchModal.tsx",
                                            lineNumber: 192,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/VoiceSearchModal.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/VoiceSearchModal.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VoiceSearchModal.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        phase === 'listening' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "mt-7 flex h-10 items-center justify-center gap-1.5",
                            children: [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "w-1.5 rounded-full bg-white",
                                    style: {
                                        height: 28
                                    },
                                    initial: false,
                                    animate: {
                                        scaleY: [
                                            0.35,
                                            1.5,
                                            0.45,
                                            1.2,
                                            0.35
                                        ]
                                    },
                                    transition: {
                                        duration: 0.9,
                                        repeat: Number.POSITIVE_INFINITY,
                                        delay: i * 0.1,
                                        ease: 'easeInOut'
                                    }
                                }, i, false, {
                                    fileName: "[project]/components/VoiceSearchModal.tsx",
                                    lineNumber: 206,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VoiceSearchModal.tsx",
                            lineNumber: 200,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex min-h-24 w-full flex-col items-center justify-start text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: phase === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-semibold text-rose-300",
                                            children: errorMessage(error ?? 'failed')[lang]
                                        }, void 0, false, {
                                            fileName: "[project]/components/VoiceSearchModal.tsx",
                                            lineNumber: 234,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: beginListening,
                                            className: "mt-5 flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-lg active:scale-95",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                    className: "size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VoiceSearchModal.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 23
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].tapToSpeak[lang]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VoiceSearchModal.tsx",
                                            lineNumber: 237,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, "error", true, {
                                    fileName: "[project]/components/VoiceSearchModal.tsx",
                                    lineNumber: 227,
                                    columnNumber: 19
                                }, this) : recognized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-white/70",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].recognized[lang]
                                        }, void 0, false, {
                                            fileName: "[project]/components/VoiceSearchModal.tsx",
                                            lineNumber: 254,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 max-w-xs text-xl font-bold text-white text-balance",
                                            children: recognized
                                        }, void 0, false, {
                                            fileName: "[project]/components/VoiceSearchModal.tsx",
                                            lineNumber: 255,
                                            columnNumber: 21
                                        }, this),
                                        phase === 'searching' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            className: "mt-2 flex items-center gap-2 text-sm font-medium text-rose-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "size-3.5 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VoiceSearchModal.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 25
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].searching[lang]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VoiceSearchModal.tsx",
                                            lineNumber: 259,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, "recognized", true, {
                                    fileName: "[project]/components/VoiceSearchModal.tsx",
                                    lineNumber: 247,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-medium text-white/90",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].listening[lang]
                                        }, void 0, false, {
                                            fileName: "[project]/components/VoiceSearchModal.tsx",
                                            lineNumber: 277,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 max-w-xs text-lg font-semibold text-white text-balance",
                                            children: interim || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].speakNow[lang]
                                        }, void 0, false, {
                                            fileName: "[project]/components/VoiceSearchModal.tsx",
                                            lineNumber: 278,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, "listening", true, {
                                    fileName: "[project]/components/VoiceSearchModal.tsx",
                                    lineNumber: 270,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VoiceSearchModal.tsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VoiceSearchModal.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VoiceSearchModal.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this)
            ]
        }, "voice-search-modal", true, {
            fileName: "[project]/components/VoiceSearchModal.tsx",
            lineNumber: 107,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VoiceSearchModal.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(VoiceSearchModal, "EEjse6J81ltJksJmr6zD3cmNe5I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVoiceSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceSearch"]
    ];
});
_c = VoiceSearchModal;
var _c;
__turbopack_context__.k.register(_c, "VoiceSearchModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$home$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/home-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$voice$2d$chat$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/voice-chat-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$animal$2d$health$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/animal-health-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$dairy$2d$feed$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/dairy-feed-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$weather$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/weather-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$prices$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/prices-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$schemes$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/schemes-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$vaccination$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/vaccination-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$emergency$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/emergency-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$village$2d$head$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/village-head-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$offline$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/offline-screen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('mr');
    const [online, setOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            const update = {
                "AppShell.useEffect.update": ()=>setOnline(navigator.onLine)
            }["AppShell.useEffect.update"];
            update();
            window.addEventListener('online', update);
            window.addEventListener('offline', update);
            return ({
                "AppShell.useEffect": ()=>{
                    window.removeEventListener('online', update);
                    window.removeEventListener('offline', update);
                }
            })["AppShell.useEffect"];
        }
    }["AppShell.useEffect"], []);
    const go = (s)=>setScreen(s);
    const back = ()=>setScreen('home');
    const shared = {
        lang,
        setLang,
        go,
        back,
        online
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-dvh w-full justify-center bg-secondary/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex min-h-dvh w-full max-w-md flex-col overflow-hidden bg-background shadow-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        screen === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$home$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 51,
                            columnNumber: 35
                        }, this),
                        screen === 'voice' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$voice$2d$chat$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceChatScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 52,
                            columnNumber: 36
                        }, this),
                        screen === 'health' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$animal$2d$health$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimalHealthScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 53,
                            columnNumber: 37
                        }, this),
                        screen === 'dairy' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$dairy$2d$feed$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DairyFeedScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 54,
                            columnNumber: 36
                        }, this),
                        screen === 'weather' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$weather$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeatherScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 55,
                            columnNumber: 38
                        }, this),
                        screen === 'prices' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$prices$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PricesScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 56,
                            columnNumber: 37
                        }, this),
                        screen === 'schemes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$schemes$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SchemesScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 57,
                            columnNumber: 38
                        }, this),
                        screen === 'vaccination' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$vaccination$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VaccinationScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 58,
                            columnNumber: 42
                        }, this),
                        screen === 'emergency' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$emergency$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmergencyScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 59,
                            columnNumber: 40
                        }, this),
                        screen === 'village' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$village$2d$head$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VillageHeadScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 60,
                            columnNumber: 38
                        }, this),
                        screen === 'offline' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$offline$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OfflineScreen"], {
                            ...shared
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 61,
                            columnNumber: 38
                        }, this)
                    ]
                }, screen, true, {
                    fileName: "[project]/components/app-shell.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/app-shell.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/app-shell.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/app-shell.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(AppShell, "DBNs2I7RRqleO7SFcVQlNlrhgAY=");
_c = AppShell;
var _c;
__turbopack_context__.k.register(_c, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screen-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScreenHeader",
    ()=>ScreenHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
'use client';
;
;
;
function ScreenHeader({ screen, lang, onBack }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-20 flex items-center gap-3 bg-primary px-4 py-4 text-primary-foreground shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                "aria-label": "Go back",
                className: "flex size-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25 active:scale-95",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-lg font-semibold text-balance",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCREEN_TITLES"][screen][lang]
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
_c = ScreenHeader;
var _c;
__turbopack_context__.k.register(_c, "ScreenHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/animal-health-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimalHealthScreen",
    ()=>AnimalHealthScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.mjs [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.mjs [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.mjs [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [animal, setAnimal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMAL_TYPES"][0]);
    const [symptoms, setSymptoms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "health",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/animal-health-screen.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-foreground",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].animalType[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex flex-wrap gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMAL_TYPES"].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mt-5 block text-sm font-semibold text-foreground",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].symptoms[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: symptoms,
                                onChange: (e)=>setSymptoms(e.target.value),
                                rows: 2,
                                placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].symptomsPlaceholder[lang],
                                className: "mt-2 w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMON_SYMPTOMS"].map((s)=>{
                                    const label = s.labels[lang];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setResult((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeSymptoms"])(animal.key, symptoms)),
                                disabled: !symptoms.trim(),
                                className: "mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-base font-semibold text-primary-foreground shadow-md transition-all active:scale-[0.98] disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                                        className: "size-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].checkHealth[lang]
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
                    result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            result.level === 'high' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 rounded-3xl bg-destructive px-5 py-4 text-destructive-foreground shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "size-6 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-balance",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].contactVet[lang]
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultCard, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/animal-health-screen.tsx",
                                    lineNumber: 120,
                                    columnNumber: 21
                                }, this),
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].possibleCauses[lang],
                                items: result.causes,
                                lang: lang,
                                tint: "bg-indigo-50 text-indigo-700"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultCard, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/animal-health-screen.tsx",
                                    lineNumber: 127,
                                    columnNumber: 21
                                }, this),
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].precautions[lang],
                                items: result.precautions,
                                lang: lang,
                                tint: "bg-amber-50 text-amber-700"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultCard, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/animal-health-screen.tsx",
                                    lineNumber: 134,
                                    columnNumber: 21
                                }, this),
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].recommendedFeed[lang],
                                items: result.feed,
                                lang: lang,
                                tint: "bg-emerald-50 text-emerald-700"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-foreground",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].emergencyLevel[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/animal-health-screen.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex gap-1.5",
                                        children: [
                                            'low',
                                            'medium',
                                            'high'
                                        ].map((lvl, i)=>{
                                            const active = result.level === 'low' && i === 0 || result.level === 'medium' && i <= 1 || result.level === 'high';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            result.level !== 'low' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:18002330418",
                                className: "flex items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-base font-semibold text-primary-foreground shadow-md active:scale-[0.98]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "size-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].contactVet[lang].replace('🚨 ', '')
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 rounded-2xl bg-secondary/60 px-4 py-3 text-center text-xs leading-relaxed text-muted-foreground text-pretty",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].disclaimer[lang]
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
_s(AnimalHealthScreen, "RTo7mfKeapJV1ww73j/5ACSsKdQ=");
_c = AnimalHealthScreen;
function ResultCard({ icon, title, items, lang, tint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `flex size-9 items-center justify-center rounded-xl ${tint}`,
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/components/screens/animal-health-screen.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3 flex flex-col gap-2",
                children: items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex gap-2 text-sm leading-relaxed text-card-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c1 = ResultCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimalHealthScreen");
__turbopack_context__.k.register(_c1, "ResultCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/dairy-feed-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DairyFeedScreen",
    ()=>DairyFeedScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function DairyFeedScreen({ lang, back }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "dairy",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/dairy-feed-screen.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAIRY_CARDS"].map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/70 text-3xl shadow-sm",
                                    "aria-hidden": true,
                                    children: card.emoji
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/dairy-feed-screen.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-semibold text-foreground text-balance",
                                            children: card.title[lang]
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/dairy-feed-screen.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = DairyFeedScreen;
var _c;
__turbopack_context__.k.register(_c, "DairyFeedScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/emergency-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmergencyScreen",
    ()=>EmergencyScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$siren$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Siren$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/siren.mjs [app-client] (ecmascript) <export default as Siren>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VoiceButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceSearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VoiceSearchModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/data-states.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$emergency$2d$contacts$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/emergency-contacts.json.[json].cjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const ALL_CONTACTS = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$emergency$2d$contacts$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const CATEGORY_ORDER = [
    'Veterinary Doctor',
    'Animal Ambulance',
    'Police',
    'Fire',
    'Government Helpline',
    'Veterinary Hospital'
];
const CATEGORY_LABELS = {
    'Veterinary Doctor': {
        mr: 'पशुवैद्यक',
        hi: 'पशु चिकित्सक',
        en: 'Animal Doctor'
    },
    'Animal Ambulance': {
        mr: 'पशु रुग्णवाहिका',
        hi: 'पशु एम्बुलेंस',
        en: 'Animal Ambulance'
    },
    'Veterinary Hospital': {
        mr: 'पशुवैद्यकीय रुग्णालय',
        hi: 'पशु चिकित्सालय',
        en: 'Veterinary Hospital'
    },
    'Government Helpline': {
        mr: 'सरकारी हेल्पलाइन',
        hi: 'सरकारी हेल्पलाइन',
        en: 'Government Helpline'
    },
    Police: {
        mr: 'पोलीस',
        hi: 'पुलिस',
        en: 'Police'
    },
    Fire: {
        mr: 'अग्निशमन',
        hi: 'अग्निशमन',
        en: 'Fire Brigade'
    }
};
const CATEGORY_META = {
    'Veterinary Doctor': {
        emoji: '🚑',
        color: 'bg-primary text-primary-foreground'
    },
    'Animal Ambulance': {
        emoji: '🐄',
        color: 'bg-rose-600 text-white'
    },
    'Veterinary Hospital': {
        emoji: '👨‍⚕️',
        color: 'bg-emerald-600 text-white'
    },
    'Government Helpline': {
        emoji: '🏛️',
        color: 'bg-indigo-600 text-white'
    },
    Police: {
        emoji: '🚓',
        color: 'bg-slate-700 text-white'
    },
    Fire: {
        emoji: '🚒',
        color: 'bg-orange-600 text-white'
    }
};
const FALLBACK_META = {
    emoji: '📞',
    color: 'bg-primary text-primary-foreground'
};
const QUICK_EMERGENCY = [
    {
        key: 'animal-ambulance',
        emoji: '🚑',
        color: 'bg-rose-600 text-white',
        phone: '1962',
        label: {
            mr: 'पशु रुग्णवाहिका',
            hi: 'पशु एम्बुलेंस',
            en: 'Animal Ambulance'
        }
    },
    {
        key: 'police',
        emoji: '🚓',
        color: 'bg-slate-700 text-white',
        phone: '100',
        label: {
            mr: 'पोलीस',
            hi: 'पुलिस',
            en: 'Police'
        }
    },
    {
        key: 'fire',
        emoji: '🚒',
        color: 'bg-orange-600 text-white',
        phone: '101',
        label: {
            mr: 'अग्निशमन',
            hi: 'अग्निशमन',
            en: 'Fire Brigade'
        }
    },
    {
        key: 'emergency-112',
        emoji: '☎️',
        color: 'bg-indigo-600 text-white',
        phone: '112',
        label: {
            mr: '112 आपत्कालीन',
            hi: '112 आपातकालीन',
            en: '112 Emergency'
        }
    }
];
const FAVOURITES_KEY = 'grammitra.favourite_contacts';
function loadFavourites() {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const raw = window.localStorage.getItem(FAVOURITES_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.filter((x)=>typeof x === 'string') : [];
    } catch  {
        return [];
    }
}
function saveFavourites(ids) {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        window.localStorage.setItem(FAVOURITES_KEY, JSON.stringify(ids));
    } catch  {
    /* noop */ }
}
const DISTRICT_CENTERS = {
    Pune: {
        lat: 18.5204,
        lng: 73.8567
    },
    Mumbai: {
        lat: 19.076,
        lng: 72.8777
    },
    Nashik: {
        lat: 19.9975,
        lng: 73.7898
    },
    Nagpur: {
        lat: 21.1458,
        lng: 79.0882
    },
    Kolhapur: {
        lat: 16.705,
        lng: 74.2433
    },
    Sangli: {
        lat: 16.8532,
        lng: 74.581
    },
    Ahmednagar: {
        lat: 19.0948,
        lng: 74.738
    }
};
const MAX_DISTRICT_DISTANCE_KM = 150;
function haversineKm(lat1, lng1, lat2, lng2) {
    const toRad = (d)=>d * Math.PI / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(a));
}
function nearestDistrict(lat, lng) {
    let best = null;
    let bestKm = Number.POSITIVE_INFINITY;
    for (const [name, center] of Object.entries(DISTRICT_CENTERS)){
        const km = haversineKm(lat, lng, center.lat, center.lng);
        if (km < bestKm) {
            bestKm = km;
            best = name;
        }
    }
    return best && bestKm <= MAX_DISTRICT_DISTANCE_KM ? best : null;
}
function EmergencyScreen({ lang, back }) {
    _s();
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [district, setDistrict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchInput, setSearchInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [favourites, setFavourites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [voiceOpen, setVoiceOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmergencyScreen.useEffect": ()=>{
            setFavourites(loadFavourites());
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !('geolocation' in navigator)) return;
            navigator.geolocation.getCurrentPosition({
                "EmergencyScreen.useEffect": (pos)=>{
                    const d = nearestDistrict(pos.coords.latitude, pos.coords.longitude);
                    if (d) setDistrict(d);
                }
            }["EmergencyScreen.useEffect"], {
                "EmergencyScreen.useEffect": ()=>{
                /* permission denied or unavailable → show all contacts */ }
            }["EmergencyScreen.useEffect"], {
                timeout: 8000,
                maximumAge: 5 * 60 * 1000
            });
        }
    }["EmergencyScreen.useEffect"], []);
    const toggleFavourite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EmergencyScreen.useCallback[toggleFavourite]": (id)=>{
            setFavourites({
                "EmergencyScreen.useCallback[toggleFavourite]": (prev)=>{
                    const next = prev.includes(id) ? prev.filter({
                        "EmergencyScreen.useCallback[toggleFavourite]": (x)=>x !== id
                    }["EmergencyScreen.useCallback[toggleFavourite]"]) : [
                        ...prev,
                        id
                    ];
                    saveFavourites(next);
                    return next;
                }
            }["EmergencyScreen.useCallback[toggleFavourite]"]);
        }
    }["EmergencyScreen.useCallback[toggleFavourite]"], []);
    const q = searchInput.trim().toLowerCase();
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EmergencyScreen.useMemo[filtered]": ()=>{
            let list = ALL_CONTACTS;
            if (category !== 'All') list = list.filter({
                "EmergencyScreen.useMemo[filtered]": (c)=>c.type === category
            }["EmergencyScreen.useMemo[filtered]"]);
            if (district) list = list.filter({
                "EmergencyScreen.useMemo[filtered]": (c)=>c.district === district || c.district === 'All India'
            }["EmergencyScreen.useMemo[filtered]"]);
            if (q) {
                list = list.filter({
                    "EmergencyScreen.useMemo[filtered]": (c)=>{
                        const labels = CATEGORY_LABELS[c.type];
                        const haystack = [
                            c.name,
                            c.type,
                            labels?.mr,
                            labels?.hi,
                            labels?.en
                        ].filter(Boolean).join(' ').toLowerCase();
                        return haystack.includes(q);
                    }
                }["EmergencyScreen.useMemo[filtered]"]);
            }
            return list;
        }
    }["EmergencyScreen.useMemo[filtered]"], [
        category,
        district,
        q
    ]);
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EmergencyScreen.useMemo[grouped]": ()=>{
            const fav = filtered.filter({
                "EmergencyScreen.useMemo[grouped].fav": (c)=>favourites.includes(c.id)
            }["EmergencyScreen.useMemo[grouped].fav"]);
            const rest = filtered.filter({
                "EmergencyScreen.useMemo[grouped].rest": (c)=>!favourites.includes(c.id)
            }["EmergencyScreen.useMemo[grouped].rest"]);
            return {
                fav,
                rest
            };
        }
    }["EmergencyScreen.useMemo[grouped]"], [
        filtered,
        favourites
    ]);
    const renderCard = (c, i)=>{
        const meta = CATEGORY_META[c.type] ?? FALLBACK_META;
        const isFav = favourites.includes(c.id);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            className: `rounded-3xl px-5 pb-5 pt-5 shadow-md ${meta.color}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-3xl",
                            children: meta.emoji
                        }, void 0, false, {
                            fileName: "[project]/components/screens/emergency-screen.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate text-lg font-bold",
                                    children: c.name
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/emergency-screen.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm opacity-85",
                                    children: [
                                        CATEGORY_LABELS[c.type]?.[lang] ?? c.type,
                                        c.district !== 'All India' ? ` · ${c.district}` : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/screens/emergency-screen.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-2xl font-extrabold tracking-wider",
                                    children: c.phone
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/emergency-screen.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/screens/emergency-screen.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>toggleFavourite(c.id),
                            "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].favourite[lang],
                            "aria-pressed": isFav,
                            className: `flex size-11 shrink-0 items-center justify-center rounded-full transition-colors active:scale-95 ${isFav ? 'bg-white/25 text-yellow-300' : 'bg-white/10 text-white/85'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                className: `size-6 ${isFav ? 'fill-yellow-300 text-yellow-300' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/screens/emergency-screen.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/screens/emergency-screen.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: `tel:${c.phone}`,
                    className: "mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-white/20 py-3.5 text-base font-bold transition-transform active:scale-[0.98]",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].callNow[lang],
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                            className: "size-5"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/emergency-screen.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/screens/emergency-screen.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            ]
        }, c.id, true, {
            fileName: "[project]/components/screens/emergency-screen.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "emergency",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/emergency-screen.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$siren$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Siren$3e$__["Siren"], {
                                    className: "size-7"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/emergency-screen.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].contactVet[lang].replace('🚨 ', '')
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/emergency-screen.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-destructive-foreground/85 text-pretty",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].disclaimer[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/emergency-screen.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/emergency-screen.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-foreground",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].quickEmergency[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid grid-cols-2 gap-3",
                                children: QUICK_EMERGENCY.map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${btn.phone}`,
                                        className: `flex items-center justify-center gap-3 rounded-3xl px-4 py-5 shadow-md transition-transform active:scale-[0.98] ${btn.color}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl",
                                                children: btn.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold leading-tight",
                                                children: btn.label[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, btn.key, true, {
                                        fileName: "[project]/components/screens/emergency-screen.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/emergency-screen.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 flex items-center gap-2 rounded-full bg-card px-4 py-2.5 shadow-sm ring-1 ring-border/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "size-4 shrink-0 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: searchInput,
                                onChange: (e)=>setSearchInput(e.target.value),
                                placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].searchEmergency[lang],
                                className: "min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground",
                                type: "search"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceButton"], {
                                lang: lang,
                                onPress: ()=>setVoiceOpen(true)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/emergency-screen.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    district && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setDistrict(null),
                        className: "mt-4 flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-transform active:scale-95",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base",
                                children: "📍"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].locationFiltered[lang],
                            " · ",
                            district,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "opacity-60",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/emergency-screen.tsx",
                        lineNumber: 295,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid grid-cols-3 gap-3",
                        children: CATEGORY_ORDER.map((t)=>{
                            const meta = CATEGORY_META[t] ?? FALLBACK_META;
                            const active = category === t;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setCategory(active ? 'All' : t),
                                "aria-pressed": active,
                                className: `flex flex-col items-center gap-2 rounded-3xl px-2 py-4 text-center shadow-sm ring-1 transition-all active:scale-95 ${active ? `${meta.color} ring-2 ring-ring/60 ring-offset-2 ring-offset-background` : 'bg-card text-card-foreground ring-border/60'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl",
                                        children: meta.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/emergency-screen.tsx",
                                        lineNumber: 323,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold leading-tight",
                                        children: CATEGORY_LABELS[t]?.[lang] ?? t
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/emergency-screen.tsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, t, true, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 312,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/screens/emergency-screen.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].noContactsFound[lang]
                    }, void 0, false, {
                        fileName: "[project]/components/screens/emergency-screen.tsx",
                        lineNumber: 334,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 flex flex-col gap-3",
                        children: [
                            grouped.fav.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "px-1 text-sm font-bold uppercase tracking-wide text-muted-foreground",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].favourites[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/emergency-screen.tsx",
                                        lineNumber: 339,
                                        columnNumber: 17
                                    }, this),
                                    grouped.fav.map((c, i)=>renderCard(c, i))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 338,
                                columnNumber: 15
                            }, this),
                            grouped.rest.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    grouped.fav.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 px-1 text-sm font-bold uppercase tracking-wide text-muted-foreground",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].all[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/emergency-screen.tsx",
                                        lineNumber: 348,
                                        columnNumber: 19
                                    }, this),
                                    grouped.rest.map((c, i)=>renderCard(c, grouped.fav.length + i))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/emergency-screen.tsx",
                                lineNumber: 346,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/emergency-screen.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "tel:",
                        className: "mt-6 flex w-full items-center justify-center gap-2 rounded-3xl bg-card py-4 text-base font-bold text-foreground shadow-sm ring-1 ring-border/60 transition-transform active:scale-[0.98]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].openDialPad[lang]
                    }, void 0, false, {
                        fileName: "[project]/components/screens/emergency-screen.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/emergency-screen.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceSearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceSearchModal"], {
                open: voiceOpen,
                lang: lang,
                onClose: ()=>setVoiceOpen(false),
                onInterim: setSearchInput,
                onResult: setSearchInput
            }, void 0, false, {
                fileName: "[project]/components/screens/emergency-screen.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/emergency-screen.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
_s(EmergencyScreen, "ih7q/iNHQ/px3yi4onFatNrS754=");
_c = EmergencyScreen;
var _c;
__turbopack_context__.k.register(_c, "EmergencyScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/home-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeScreen",
    ()=>HomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.mjs [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.mjs [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.mjs [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function HomeScreen({ lang, setLang, go, online }) {
    _s();
    const [cropOpen, setCropOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "rounded-b-3xl bg-primary px-5 pb-6 pt-6 text-primary-foreground shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        "aria-hidden": true,
                                        children: "🐄"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-bold tracking-tight",
                                        children: "PashuRakshak AI"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${online ? 'bg-white/20' : 'bg-black/20'}`,
                                children: [
                                    online ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 30,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 30,
                                        columnNumber: 55
                                    }, this),
                                    online ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].online[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].offline[lang]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-balance",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].greetingLine1[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-primary-foreground/85 text-pretty",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].greetingLine2[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANG_LABELS"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLang(l.id),
                                className: `rounded-full px-4 py-1.5 text-sm font-medium transition-all active:scale-95 ${lang === l.id ? 'bg-white text-primary shadow' : 'bg-white/15 text-primary-foreground hover:bg-white/25'}`,
                                children: l.label
                            }, l.id, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-5 pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-5 overflow-hidden rounded-3xl shadow-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/healthy-cows-hero.png",
                            alt: "Healthy cows and buffalo grazing on a green farm",
                            width: 640,
                            height: 360,
                            priority: true,
                            className: "h-44 w-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/home-screen.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex items-start justify-center gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>setCropOpen(true),
                                        whileTap: {
                                            scale: 0.94
                                        },
                                        className: "relative flex size-28 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl",
                                        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].captureCrop[lang],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                className: "size-11"
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/home-screen.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-center text-sm font-semibold text-foreground text-balance",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].captureCrop[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>go('voice'),
                                        whileTap: {
                                            scale: 0.94
                                        },
                                        className: "relative flex size-28 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl",
                                        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].tapToSpeak[lang],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                className: "size-11"
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/home-screen.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-center text-sm font-semibold text-foreground text-balance",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].speak[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-center text-xs text-muted-foreground",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].askAnything[lang]
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-7 grid grid-cols-3 gap-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FEATURES"].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `flex size-12 items-center justify-center rounded-2xl text-2xl ${f.color}`,
                                        "aria-hidden": true,
                                        children: f.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-center text-xs font-medium leading-tight text-card-foreground text-balance",
                                        children: f.labels[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `${f.id}-${i}`, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/home-screen.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(HomeScreen, "3QGWbzndDnYo3aZDmgbQb17vpJc=");
_c = HomeScreen;
var _c;
__turbopack_context__.k.register(_c, "HomeScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/offline-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OfflineScreen",
    ()=>OfflineScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-off.mjs [app-client] (ecmascript) <export default as CloudOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.mjs [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.mjs [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "offline",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/offline-screen.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-3 rounded-3xl px-5 py-4 shadow-sm ring-1 ${online ? 'bg-primary/10 ring-primary/30' : 'bg-amber-50 ring-amber-200'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex size-11 items-center justify-center rounded-2xl ${online ? 'bg-primary text-primary-foreground' : 'bg-amber-500 text-white'}`,
                                children: online ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                    className: "size-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/offline-screen.tsx",
                                    lineNumber: 37,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-bold text-foreground",
                                                children: online ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].online[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].offline[lang]
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-sm text-foreground/70 text-pretty",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].offlineNote[lang]
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__["CloudOff"], {
                                        className: "size-5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/offline-screen.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-col gap-2",
                                children: OFFLINE_TOPICS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 rounded-2xl bg-secondary/50 px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                "aria-hidden": true,
                                                children: t.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/offline-screen.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-foreground",
                                                children: t.label[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/offline-screen.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
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
_c = OfflineScreen;
var _c;
__turbopack_context__.k.register(_c, "OfflineScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/prices-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricesScreen",
    ()=>PricesScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.mjs [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function PricesScreen({ lang, back }) {
    const sorted = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILK_PRICES"]
    ].sort((a, b)=>b.price - a.price);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "prices",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/prices-screen.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3",
                    children: sorted.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-semibold text-foreground",
                                                    children: p.dairy[lang]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/screens/prices-screen.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "size-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/screens/prices-screen.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 21
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].lastUpdated[lang],
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-primary",
                                                children: [
                                                    "₹",
                                                    p.price,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                p.best && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/prices-screen.tsx",
                                            lineNumber: 46,
                                            columnNumber: 19
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].bestPrice[lang]
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
_c = PricesScreen;
var _c;
__turbopack_context__.k.register(_c, "PricesScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/schemes-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SchemesScreen",
    ()=>SchemesScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.mjs [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.mjs [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VoiceButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceSearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VoiceSearchModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/data-states.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const CATEGORIES = [
    'All',
    'Dairy',
    'Livestock',
    'Agriculture',
    'Loans',
    'Insurance',
    'Women',
    'Youth',
    'Education'
];
const CATEGORY_LABELS = {
    All: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].all,
    Dairy: {
        mr: 'दुग्ध व्यवसाय',
        hi: 'डेयरी',
        en: 'Dairy'
    },
    Livestock: {
        mr: 'पशुधन',
        hi: 'पशुधन',
        en: 'Livestock'
    },
    Agriculture: {
        mr: 'शेती',
        hi: 'कृषि',
        en: 'Agriculture'
    },
    Loans: {
        mr: 'कर्ज',
        hi: 'ऋण',
        en: 'Loans'
    },
    Insurance: {
        mr: 'विमा',
        hi: 'बीमा',
        en: 'Insurance'
    },
    Women: {
        mr: 'महिला',
        hi: 'महिला',
        en: 'Women'
    },
    Youth: {
        mr: 'युवा',
        hi: 'युवा',
        en: 'Youth'
    },
    Education: {
        mr: 'शिक्षण',
        hi: 'शिक्षा',
        en: 'Education'
    }
};
function isValidOfficialUrl(url) {
    if (!url) return false;
    try {
        const u = new URL(url);
        return u.protocol === 'http:' || u.protocol === 'https:';
    } catch  {
        return false;
    }
}
function SchemesScreen({ lang, back }) {
    _s();
    const [searchInput, setSearchInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [schemes, setSchemes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reloadKey, setReloadKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [applyTarget, setApplyTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [unavailableId, setUnavailableId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [voiceOpen, setVoiceOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Debounce typing so we don't fire a request per keystroke.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SchemesScreen.useEffect": ()=>{
            const timer = window.setTimeout({
                "SchemesScreen.useEffect.timer": ()=>setSearch(searchInput.trim())
            }["SchemesScreen.useEffect.timer"], 400);
            return ({
                "SchemesScreen.useEffect": ()=>window.clearTimeout(timer)
            })["SchemesScreen.useEffect"];
        }
    }["SchemesScreen.useEffect"], [
        searchInput
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SchemesScreen.useEffect": ()=>{
            let active = true;
            setLoading(true);
            setError(null);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getSchemes({
                search: search || undefined,
                category: category === 'All' ? undefined : category
            }).then({
                "SchemesScreen.useEffect": (data)=>{
                    if (active) setSchemes(data);
                }
            }["SchemesScreen.useEffect"]).catch({
                "SchemesScreen.useEffect": (err)=>{
                    if (active) setError(err instanceof Error ? err.message : String(err));
                }
            }["SchemesScreen.useEffect"]).finally({
                "SchemesScreen.useEffect": ()=>{
                    if (active) setLoading(false);
                }
            }["SchemesScreen.useEffect"]);
            return ({
                "SchemesScreen.useEffect": ()=>{
                    active = false;
                }
            })["SchemesScreen.useEffect"];
        }
    }["SchemesScreen.useEffect"], [
        search,
        category,
        reloadKey
    ]);
    const handleApply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SchemesScreen.useCallback[handleApply]": (s)=>{
            if (!isValidOfficialUrl(s.official_url)) {
                setApplyTarget(null);
                setUnavailableId(s.id);
                return;
            }
            setUnavailableId(null);
            setApplyTarget(s);
        }
    }["SchemesScreen.useCallback[handleApply]"], []);
    const confirmApply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SchemesScreen.useCallback[confirmApply]": ()=>{
            if (!applyTarget) return;
            window.open(applyTarget.official_url, '_blank', 'noopener,noreferrer');
            setApplyTarget(null);
        }
    }["SchemesScreen.useCallback[confirmApply]"], [
        applyTarget
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "schemes",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/schemes-screen.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 rounded-full bg-card px-4 py-2.5 shadow-sm ring-1 ring-border/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "size-4 shrink-0 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: searchInput,
                                onChange: (e)=>setSearchInput(e.target.value),
                                placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].searchSchemes[lang],
                                className: "min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground",
                                type: "search"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceButton"], {
                                lang: lang,
                                onPress: ()=>setVoiceOpen(true)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/schemes-screen.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "no-scrollbar mt-4 flex gap-2 overflow-x-auto",
                        children: CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCategory(c),
                                className: `shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all active:scale-95 ${category === c ? 'bg-primary text-primary-foreground shadow' : 'bg-card text-card-foreground ring-1 ring-border/60'}`,
                                children: CATEGORY_LABELS[c]?.[lang] ?? c
                            }, c, false, {
                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/schemes-screen.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingState"], {
                        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].loading[lang]
                    }, void 0, false, {
                        fileName: "[project]/components/screens/schemes-screen.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorState"], {
                        lang: lang,
                        message: error,
                        onRetry: ()=>setReloadKey((k)=>k + 1)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/schemes-screen.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this) : schemes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].noSchemesFound[lang]
                    }, void 0, false, {
                        fileName: "[project]/components/screens/schemes-screen.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 flex flex-col gap-4",
                        children: schemes.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-primary/10 px-5 py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-bold text-foreground text-balance",
                                            children: s.name[lang]
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/schemes-screen.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/schemes-screen.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 px-5 py-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                    className: "size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/screens/schemes-screen.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 27
                                                }, this),
                                                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].benefits[lang],
                                                value: s.benefits[lang],
                                                tint: "bg-emerald-50 text-emerald-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                    className: "size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/screens/schemes-screen.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 27
                                                }, this),
                                                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].eligibility[lang],
                                                value: s.eligibility[lang],
                                                tint: "bg-sky-50 text-sky-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex size-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                    className: "size-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/screens/schemes-screen.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-foreground",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].documents[lang]
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/screens/schemes-screen.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex flex-wrap gap-1.5",
                                                        children: s.required_documents.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
                                                                children: d[lang]
                                                            }, d.en, false, {
                                                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/screens/schemes-screen.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this),
                                            unavailableId === s.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm font-medium text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        className: "size-4 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/screens/schemes-screen.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 23
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].officialUnavailable[lang]
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleApply(s),
                                                className: "flex items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-md active:scale-[0.98]",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].apply[lang],
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "size-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/screens/schemes-screen.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                                lineNumber: 190,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/screens/schemes-screen.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, s.id, true, {
                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/schemes-screen.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/schemes-screen.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            applyTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center",
                onClick: ()=>setApplyTarget(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "w-full max-w-sm overflow-hidden rounded-3xl bg-card shadow-2xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 pb-4 pt-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold leading-relaxed text-foreground text-balance",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].redirectConfirm[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/schemes-screen.tsx",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/screens/schemes-screen.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 px-5 pb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setApplyTarget(null),
                                    className: "flex flex-1 items-center justify-center rounded-2xl bg-secondary py-3 text-sm font-semibold text-secondary-foreground active:scale-[0.98]",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].cancel[lang]
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/schemes-screen.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: confirmApply,
                                    className: "flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-md active:scale-[0.98]",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].continue[lang],
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/schemes-screen.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/screens/schemes-screen.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/screens/schemes-screen.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/screens/schemes-screen.tsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/schemes-screen.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceSearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceSearchModal"], {
                open: voiceOpen,
                lang: lang,
                onClose: ()=>setVoiceOpen(false),
                onInterim: setSearchInput,
                onResult: (text)=>{
                    setSearchInput(text);
                    setSearch(text.trim());
                }
            }, void 0, false, {
                fileName: "[project]/components/screens/schemes-screen.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/schemes-screen.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(SchemesScreen, "gEGftmOzozHhxxscJPEuzSHls14=");
_c = SchemesScreen;
function Row({ icon, label, value, tint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `flex size-8 items-center justify-center rounded-lg ${tint}`,
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/components/screens/schemes-screen.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-foreground",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/screens/schemes-screen.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/schemes-screen.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 pl-10 text-sm leading-relaxed text-card-foreground/80 text-pretty",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/screens/schemes-screen.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/schemes-screen.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_c1 = Row;
var _c, _c1;
__turbopack_context__.k.register(_c, "SchemesScreen");
__turbopack_context__.k.register(_c1, "Row");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/vaccination-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VaccinationScreen",
    ()=>VaccinationScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.mjs [app-client] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$syringe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Syringe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/syringe.mjs [app-client] (ecmascript) <export default as Syringe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VoiceButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceSearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VoiceSearchModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/data-states.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const FILTERS = [
    {
        id: 'all',
        labelKey: 'all'
    },
    {
        id: 'upcoming',
        labelKey: 'filterUpcoming'
    },
    {
        id: 'completed',
        labelKey: 'filterCompleted'
    },
    {
        id: 'today',
        labelKey: 'filterDueToday'
    },
    {
        id: 'tomorrow',
        labelKey: 'filterDueTomorrow'
    }
];
const ANIMAL_TYPES = [
    'Cow',
    'Buffalo',
    'Goat',
    'Sheep',
    'Poultry',
    'Dog'
];
const EMPTY_FORM = {
    animal_name: '',
    owner_name: '',
    animal_type: 'Cow',
    vaccine_name: '',
    vaccination_date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])()
};
function VaccinationScreen({ lang, back }) {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY_FORM);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formError, setFormError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [actionError, setActionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchInput, setSearchInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [voiceOpen, setVoiceOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchRecords = async (f)=>{
        setLoading(true);
        setError(null);
        try {
            const data = f === 'all' ? await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getVaccinations() : f === 'upcoming' ? await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getUpcomingVaccinations() : f === 'completed' ? await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getVaccinations({
                status: 'completed'
            }) : f === 'today' ? await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getVaccinationsDueToday() : await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getVaccinationsDueTomorrow();
            setRecords(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VaccinationScreen.useEffect": ()=>{
            void fetchRecords('all');
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["VaccinationScreen.useEffect"], []);
    const changeFilter = (f)=>{
        setFilter(f);
        void fetchRecords(f);
    };
    const refresh = ()=>{
        void fetchRecords(filter);
    };
    const q = searchInput.trim().toLowerCase();
    const filteredRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VaccinationScreen.useMemo[filteredRecords]": ()=>{
            if (!q) return records;
            return records.filter({
                "VaccinationScreen.useMemo[filteredRecords]": (v)=>{
                    const haystack = [
                        v.animal_name,
                        v.animal_type,
                        v.vaccine_name,
                        v.owner_name
                    ].filter(Boolean).join(' ').toLowerCase();
                    return haystack.includes(q);
                }
            }["VaccinationScreen.useMemo[filteredRecords]"]);
        }
    }["VaccinationScreen.useMemo[filteredRecords]"], [
        records,
        q
    ]);
    const handleAdd = async (e)=>{
        e.preventDefault();
        setSaving(true);
        setFormError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].createVaccination({
                animal_name: form.animal_name.trim(),
                owner_name: form.owner_name.trim(),
                animal_type: form.animal_type,
                vaccine_name: form.vaccine_name.trim(),
                vaccination_date: form.vaccination_date,
                status: 'upcoming'
            });
            setShowForm(false);
            setForm(EMPTY_FORM);
            refresh();
        } catch (err) {
            setFormError(err instanceof Error ? err.message : String(err));
        } finally{
            setSaving(false);
        }
    };
    const handleMarkCompleted = async (id)=>{
        setActionError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].updateVaccination(id, {
                status: 'completed'
            });
            refresh();
        } catch (err) {
            setActionError(err instanceof Error ? err.message : String(err));
        }
    };
    const handleRevert = async (id)=>{
        setActionError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].updateVaccination(id, {
                status: 'upcoming'
            });
            refresh();
        } catch (err) {
            setActionError(err instanceof Error ? err.message : String(err));
        }
    };
    const handleDelete = async (id)=>{
        if (!window.confirm(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].confirmDeleteVaccination[lang])) return;
        setActionError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].deleteVaccination(id);
            refresh();
        } catch (err) {
            setActionError(err instanceof Error ? err.message : String(err));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "vaccination",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/vaccination-screen.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "no-scrollbar flex gap-2 overflow-x-auto",
                        children: FILTERS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>changeFilter(f.id),
                                className: `shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all active:scale-95 ${filter === f.id ? 'bg-primary text-primary-foreground shadow' : 'bg-card text-card-foreground ring-1 ring-border/60'}`,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"][f.labelKey][lang]
                            }, f.id, false, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center gap-2 rounded-full bg-card px-4 py-2.5 shadow-sm ring-1 ring-border/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "size-4 shrink-0 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: searchInput,
                                onChange: (e)=>setSearchInput(e.target.value),
                                placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].searchVaccinations[lang],
                                className: "min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground",
                                type: "search"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceButton"], {
                                lang: lang,
                                onPress: ()=>setVoiceOpen(true)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowForm((v)=>!v),
                        className: "mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-md active:scale-[0.98]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].addVaccination[lang],
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `size-4 transition-transform ${showForm ? 'rotate-180' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleAdd,
                        className: "mt-4 flex flex-col gap-3 rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].animalName[lang],
                                value: form.animal_name,
                                onChange: (v)=>setForm((f)=>({
                                            ...f,
                                            animal_name: v
                                        })),
                                placeholder: "Ganga"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].ownerName[lang],
                                value: form.owner_name,
                                onChange: (v)=>setForm((f)=>({
                                            ...f,
                                            owner_name: v
                                        })),
                                placeholder: "Rajendra Kale"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "mb-1 block text-xs font-semibold text-muted-foreground",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].animalType[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: form.animal_type,
                                        onChange: (e)=>setForm((f)=>({
                                                    ...f,
                                                    animal_type: e.target.value
                                                })),
                                        className: "w-full rounded-2xl border-0 bg-secondary px-4 py-2.5 text-sm text-foreground outline-none ring-1 ring-border/60 focus:ring-2 focus:ring-primary",
                                        children: ANIMAL_TYPES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: t,
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].vaccineName[lang],
                                value: form.vaccine_name,
                                onChange: (v)=>setForm((f)=>({
                                            ...f,
                                            vaccine_name: v
                                        })),
                                placeholder: "FMD Vaccine / FMD लस"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "mb-1 block text-xs font-semibold text-muted-foreground",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].vaccinationDate[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: form.vaccination_date,
                                        onChange: (e)=>setForm((f)=>({
                                                    ...f,
                                                    vaccination_date: e.target.value
                                                })),
                                        className: "w-full rounded-2xl border-0 bg-secondary px-4 py-2.5 text-sm text-foreground outline-none ring-1 ring-border/60 focus:ring-2 focus:ring-primary",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this),
                            formError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium text-destructive",
                                children: formError
                            }, void 0, false, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 251,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setShowForm(false);
                                            setFormError(null);
                                        },
                                        className: "flex-1 rounded-2xl bg-secondary py-2.5 text-sm font-semibold text-secondary-foreground active:scale-[0.98]",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].cancel[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: saving,
                                        className: "flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground shadow active:scale-[0.98] disabled:opacity-60",
                                        children: [
                                            saving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "size-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                lineNumber: 270,
                                                columnNumber: 28
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].save[lang]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    actionError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 rounded-2xl bg-destructive/10 px-4 py-2.5 text-xs font-medium text-destructive",
                        children: actionError
                    }, void 0, false, {
                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this) : null,
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "size-8 animate-spin text-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/vaccination-screen.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorState"], {
                            lang: lang,
                            message: error,
                            onRetry: ()=>refresh()
                        }, void 0, false, {
                            fileName: "[project]/components/screens/vaccination-screen.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this) : records.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                            label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].noVaccinations[lang]
                        }, void 0, false, {
                            fileName: "[project]/components/screens/vaccination-screen.tsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this) : filteredRecords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                            label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].noVaccinations[lang]
                        }, void 0, false, {
                            fileName: "[project]/components/screens/vaccination-screen.tsx",
                            lineNumber: 298,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-5 pl-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-2 left-[10px] top-2 w-0.5 bg-border"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: filteredRecords.map((v, i)=>{
                                    const done = v.status === 'completed';
                                    const dueLabel = v.next_due_date ?? v.vaccination_date;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute -left-6 top-4 flex size-5 items-center justify-center rounded-full ring-4 ring-background ${done ? 'bg-emerald-500' : 'bg-amber-500'}`,
                                                children: done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "size-3 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 32
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                lineNumber: 315,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `rounded-3xl p-4 shadow-sm ring-1 ${done ? 'bg-emerald-50 ring-emerald-200' : 'bg-amber-50 ring-amber-200'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "min-w-0 text-base font-semibold text-foreground",
                                                                children: [
                                                                    v.animal_name,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-1 text-sm font-medium text-muted-foreground",
                                                                        children: [
                                                                            "(",
                                                                            v.animal_type,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                                        lineNumber: 331,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${done ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'}`,
                                                                children: done ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].completed[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].upcoming[lang]
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 flex items-center gap-1.5 text-sm font-medium text-foreground/80",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$syringe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Syringe$3e$__["Syringe"], {
                                                                className: "size-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 25
                                                            }, this),
                                                            v.vaccine_name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 flex items-center gap-1.5 text-xs text-muted-foreground",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                                                className: "size-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 25
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].dueDate[lang],
                                                            ": ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(dueLabel, lang)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 flex gap-2",
                                                        children: [
                                                            done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleRevert(v.id),
                                                                className: "flex items-center gap-1 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold text-foreground ring-1 ring-emerald-200 active:scale-95",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                                        className: "size-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].revertToUpcoming[lang]
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleMarkCompleted(v.id),
                                                                className: "flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white active:scale-95",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "size-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                                        lineNumber: 367,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].markCompleted[lang]
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(v.id),
                                                                className: "flex items-center gap-1 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive ring-1 ring-destructive/20 active:scale-95",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "size-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                                        lineNumber: 375,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].deleteVaccination[lang]
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                                lineNumber: 323,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, v.id, true, {
                                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                                        lineNumber: 308,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/screens/vaccination-screen.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/vaccination-screen.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/vaccination-screen.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceSearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceSearchModal"], {
                open: voiceOpen,
                lang: lang,
                onClose: ()=>setVoiceOpen(false),
                onInterim: setSearchInput,
                onResult: setSearchInput
            }, void 0, false, {
                fileName: "[project]/components/screens/vaccination-screen.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/vaccination-screen.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s(VaccinationScreen, "V3cOKlC7HXVAJv308q56m3SywlU=");
_c = VaccinationScreen;
function Field({ label, value, onChange, placeholder }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mb-1 block text-xs font-semibold text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/screens/vaccination-screen.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                required: true,
                className: "w-full rounded-2xl border-0 bg-secondary px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 ring-1 ring-border/60 focus:ring-2 focus:ring-primary"
            }, void 0, false, {
                fileName: "[project]/components/screens/vaccination-screen.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/vaccination-screen.tsx",
        lineNumber: 412,
        columnNumber: 5
    }, this);
}
_c1 = Field;
var _c, _c1;
__turbopack_context__.k.register(_c, "VaccinationScreen");
__turbopack_context__.k.register(_c1, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/village-head-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VillageHeadScreen",
    ()=>VillageHeadScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVoiceSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useVoiceSearch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/data-states.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const STATUS_FILTERS = [
    'all',
    'pending',
    'in_progress',
    'resolved'
];
const STATUS_LABELS = {
    pending: 'statusPending',
    in_progress: 'statusInProgress',
    resolved: 'statusResolved'
};
const STATUS_STYLES = {
    pending: 'bg-amber-100 text-amber-700',
    in_progress: 'bg-sky-100 text-sky-700',
    resolved: 'bg-emerald-100 text-emerald-700'
};
const EMPTY_FORM = {
    name: '',
    phone: '',
    village: '',
    issue: ''
};
function voiceErrorMessage(code) {
    switch(code){
        case 'unsupported':
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].voiceUnsupported;
        case 'permission-denied':
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].voicePermissionDenied;
        case 'no-speech':
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].voiceNoSpeech;
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].voiceFailed;
    }
}
function VillageHeadScreen({ lang, back }) {
    _s();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('farmer');
    // Farmer mode state
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY_FORM);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formError, setFormError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Head mode state
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [issues, setIssues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reloadKey, setReloadKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { listening, interim, error: voiceError, start, stop, resetError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVoiceSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceSearch"])(lang);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VillageHeadScreen.useEffect": ()=>{
            if (role !== 'head') return;
            let active = true;
            setLoading(true);
            setError(null);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getIssues({
                status: filter === 'all' ? undefined : filter
            }).then({
                "VillageHeadScreen.useEffect": (data)=>{
                    if (active) setIssues(data);
                }
            }["VillageHeadScreen.useEffect"]).catch({
                "VillageHeadScreen.useEffect": (err)=>{
                    if (active) setError(err instanceof Error ? err.message : String(err));
                }
            }["VillageHeadScreen.useEffect"]).finally({
                "VillageHeadScreen.useEffect": ()=>{
                    if (active) setLoading(false);
                }
            }["VillageHeadScreen.useEffect"]);
            return ({
                "VillageHeadScreen.useEffect": ()=>{
                    active = false;
                }
            })["VillageHeadScreen.useEffect"];
        }
    }["VillageHeadScreen.useEffect"], [
        role,
        filter,
        reloadKey
    ]);
    const handleDictate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VillageHeadScreen.useCallback[handleDictate]": ()=>{
            if (listening) {
                stop();
                return;
            }
            resetError();
            start({
                "VillageHeadScreen.useCallback[handleDictate]": (text)=>setForm({
                        "VillageHeadScreen.useCallback[handleDictate]": (f)=>({
                                ...f,
                                issue: f.issue ? `${f.issue.trim()} ${text}` : text
                            })
                    }["VillageHeadScreen.useCallback[handleDictate]"])
            }["VillageHeadScreen.useCallback[handleDictate]"]);
        }
    }["VillageHeadScreen.useCallback[handleDictate]"], [
        listening,
        start,
        stop,
        resetError
    ]);
    const setField = (field, value)=>{
        setForm((f)=>({
                ...f,
                [field]: value
            }));
        setFormError(null);
        resetError();
    };
    const submit = async ()=>{
        if (!form.name.trim() || !form.phone.trim() || !form.village.trim() || !form.issue.trim()) {
            setFormError(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].fillAllFields[lang]);
            return;
        }
        setSending(true);
        setFormError(null);
        setSent(false);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].createIssue({
                reporter_name: form.name.trim(),
                phone: form.phone.trim(),
                village: form.village.trim(),
                issue_text: form.issue.trim()
            });
            setForm(EMPTY_FORM);
            setSent(true);
        } catch (err) {
            setFormError(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiError"] && err.status === 429 ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].rateLimitExceeded[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].sendFailed[lang]);
        } finally{
            setSending(false);
        }
    };
    const changeStatus = async (issue, status)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].updateIssueStatus(issue.id, status);
            setReloadKey((k)=>k + 1);
        } catch  {
            setError(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].sendFailed[lang]);
        }
    };
    const removeIssue = async (issue)=>{
        if (!window.confirm(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].confirmDeleteReport[lang])) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].deleteIssue(issue.id);
            setReloadKey((k)=>k + 1);
        } catch  {
            setError(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].sendFailed[lang]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "village",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/village-head-screen.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex rounded-full bg-card p-1 shadow-sm ring-1 ring-border/60",
                        children: [
                            {
                                id: 'farmer',
                                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].roleFarmer[lang]
                            },
                            {
                                id: 'head',
                                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].roleHead[lang]
                            }
                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setRole(r.id),
                                className: `flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-all active:scale-95 ${role === r.id ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground'}`,
                                children: r.label
                            }, r.id, false, {
                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/village-head-screen.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    role === 'farmer' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FarmerForm, {
                        lang: lang,
                        form: form,
                        listening: listening,
                        interim: interim,
                        voiceError: voiceError,
                        sending: sending,
                        sent: sent,
                        error: formError,
                        onField: setField,
                        onDictate: handleDictate,
                        onStop: stop,
                        onSubmit: submit,
                        onResetError: resetError
                    }, void 0, false, {
                        fileName: "[project]/components/screens/village-head-screen.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-scrollbar flex gap-2 overflow-x-auto",
                                children: STATUS_FILTERS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilter(s),
                                        className: `shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all active:scale-95 ${filter === s ? 'bg-primary text-primary-foreground shadow' : 'bg-card text-card-foreground ring-1 ring-border/60'}`,
                                        children: s === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].all[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"][STATUS_LABELS[s]][lang]
                                    }, s, false, {
                                        fileName: "[project]/components/screens/village-head-screen.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingState"], {
                                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].loading[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorState"], {
                                lang: lang,
                                message: error,
                                onRetry: ()=>setReloadKey((k)=>k + 1)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this) : issues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].noReports[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-col gap-3",
                                children: issues.map((issue, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        className: "rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "truncate text-base font-semibold text-foreground",
                                                                children: [
                                                                    issue.reporter_name,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-normal text-muted-foreground",
                                                                        children: [
                                                                            ' · ',
                                                                            issue.village
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/screens/village-head-screen.tsx",
                                                                        lineNumber: 239,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-0.5 text-xs text-muted-foreground",
                                                                children: [
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].reportedBy[lang],
                                                                    ": ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(issue.created_at?.slice(0, 10), lang)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/screens/village-head-screen.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[issue.status]}`,
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"][STATUS_LABELS[issue.status]][lang]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/screens/village-head-screen.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                                lineNumber: 235,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm text-foreground text-pretty",
                                                children: issue.issue_text
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                                lineNumber: 255,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex flex-wrap items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `tel:${issue.phone}`,
                                                        className: "flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary active:scale-95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "size-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 25
                                                            }, this),
                                                            issue.phone
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/screens/village-head-screen.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 23
                                                    }, this),
                                                    issue.status !== 'in_progress' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>void changeStatus(issue, 'in_progress'),
                                                        className: "rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700 active:scale-95",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].markInProgress[lang]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/screens/village-head-screen.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 25
                                                    }, this),
                                                    issue.status !== 'resolved' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>void changeStatus(issue, 'resolved'),
                                                        className: "rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 active:scale-95",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].markResolved[lang]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/screens/village-head-screen.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>void removeIssue(issue),
                                                        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].deleteReport[lang],
                                                        className: "ml-auto flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive active:scale-95",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "size-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/screens/village-head-screen.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/screens/village-head-screen.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                                lineNumber: 257,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, issue.id, true, {
                                        fileName: "[project]/components/screens/village-head-screen.tsx",
                                        lineNumber: 228,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/village-head-screen.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/village-head-screen.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/village-head-screen.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(VillageHeadScreen, "WKBJZKE2VbupZueVzP4vA6NvdUI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVoiceSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceSearch"]
    ];
});
_c = VillageHeadScreen;
function FarmerForm({ lang, form, listening, interim, voiceError, sending, sent, error, onField, onDictate, onStop, onSubmit, onResetError }) {
    const issueValue = listening ? interim || form.issue : form.issue;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-5 flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].yourName[lang],
                value: form.name,
                placeholder: "",
                onChange: (v)=>onField('name', v)
            }, void 0, false, {
                fileName: "[project]/components/screens/village-head-screen.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].yourPhone[lang],
                value: form.phone,
                type: "tel",
                placeholder: "",
                onChange: (v)=>onField('phone', v)
            }, void 0, false, {
                fileName: "[project]/components/screens/village-head-screen.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].yourVillage[lang],
                value: form.village,
                placeholder: "",
                onChange: (v)=>onField('village', v)
            }, void 0, false, {
                fileName: "[project]/components/screens/village-head-screen.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mb-1.5 block text-sm font-semibold text-foreground",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].describeProblem[lang]
                    }, void 0, false, {
                        fileName: "[project]/components/screens/village-head-screen.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: issueValue,
                                onChange: (e)=>{
                                    onField('issue', e.target.value);
                                    onResetError();
                                },
                                placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].issuePlaceholder[lang],
                                rows: 4,
                                className: "w-full resize-none rounded-3xl bg-card px-4 py-3.5 pr-14 text-sm text-foreground shadow-sm ring-1 ring-border/60 outline-none placeholder:text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: listening ? onStop : onDictate,
                                "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].speakIssue[lang],
                                className: `absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full transition-all active:scale-95 ${listening ? 'bg-destructive text-destructive-foreground' : 'bg-primary text-primary-foreground'}`,
                                children: listening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "size-2 rounded-full bg-white",
                                    animate: {
                                        scale: [
                                            1,
                                            1.6,
                                            1
                                        ]
                                    },
                                    transition: {
                                        duration: 1,
                                        repeat: Number.POSITIVE_INFINITY
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/village-head-screen.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/village-head-screen.tsx",
                                    lineNumber: 382,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/village-head-screen.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/village-head-screen.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    listening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-xs font-medium text-destructive",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].listening[lang]
                    }, void 0, false, {
                        fileName: "[project]/components/screens/village-head-screen.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this),
                    voiceError && !listening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-xs text-destructive",
                        children: voiceErrorMessage(voiceError)[lang]
                    }, void 0, false, {
                        fileName: "[project]/components/screens/village-head-screen.tsx",
                        lineNumber: 390,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/village-head-screen.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            sent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0,
                    y: 6
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "flex items-center gap-2 rounded-2xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "size-4 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/village-head-screen.tsx",
                        lineNumber: 400,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].reportSent[lang]
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/village-head-screen.tsx",
                lineNumber: 395,
                columnNumber: 9
            }, this),
            error && !listening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-2xl bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/screens/village-head-screen.tsx",
                lineNumber: 405,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: ()=>void onSubmit(),
                disabled: sending,
                whileTap: {
                    scale: 0.97
                },
                className: "flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground shadow-lg disabled:opacity-60",
                children: [
                    sending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "size-5 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/village-head-screen.tsx",
                        lineNumber: 416,
                        columnNumber: 20
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                        className: "size-5"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/village-head-screen.tsx",
                        lineNumber: 416,
                        columnNumber: 66
                    }, this),
                    sending ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].sending[lang] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].sendReport[lang]
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/village-head-screen.tsx",
                lineNumber: 410,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/village-head-screen.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, this);
}
_c1 = FarmerForm;
function Field({ label, value, type = 'text', placeholder, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mb-1.5 block text-sm font-semibold text-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/screens/village-head-screen.tsx",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: value,
                type: type,
                placeholder: placeholder,
                onChange: (e)=>onChange(e.target.value),
                className: "w-full rounded-3xl bg-card px-4 py-3 text-sm text-foreground shadow-sm ring-1 ring-border/60 outline-none placeholder:text-muted-foreground"
            }, void 0, false, {
                fileName: "[project]/components/screens/village-head-screen.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/village-head-screen.tsx",
        lineNumber: 437,
        columnNumber: 5
    }, this);
}
_c2 = Field;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "VillageHeadScreen");
__turbopack_context__.k.register(_c1, "FarmerForm");
__turbopack_context__.k.register(_c2, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/voice-chat-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceChatScreen",
    ()=>VoiceChatScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$speech$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-speech.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceSearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VoiceSearchModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function VoiceChatScreen({ lang, setLang, back }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [thinking, setThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [voiceOpen, setVoiceOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const idRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { isSpeaking, speak, stopSpeaking } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$speech$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeech"])(lang);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceChatScreen.useEffect": ()=>{
            scrollRef.current?.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }["VoiceChatScreen.useEffect"], [
        messages,
        thinking
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
            const reply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateReply"])(clean, lang);
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
        stopSpeaking();
        setVoiceOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-secondary/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-20 bg-primary px-4 py-4 text-primary-foreground shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: back,
                                "aria-label": "Go back",
                                className: "flex size-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "size-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "flex-1 text-lg font-semibold",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCREEN_TITLES"].voice[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANG_LABELS"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLang(l.id),
                                className: `rounded-full px-3.5 py-1 text-sm font-medium transition-all active:scale-95 ${lang === l.id ? 'bg-white text-primary shadow' : 'bg-white/15 text-primary-foreground hover:bg-white/25'}`,
                                children: l.label
                            }, l.id, false, {
                                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                        lang: lang,
                        onPick: handleUserInput
                    }, void 0, false, {
                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: [
                            messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatBubble, {
                                    message: m,
                                    lang: lang,
                                    onSpeak: ()=>speak(m.text)
                                }, m.id, false, {
                                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)),
                            thinking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 rounded-3xl rounded-bl-md bg-card px-4 py-3 shadow-sm ring-1 ring-border/60",
                                    children: [
                                        0,
                                        1,
                                        2
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border bg-card px-4 pb-6 pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].speaking[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/screens/voice-chat-screen.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: handleMic,
                                whileTap: {
                                    scale: 0.92
                                },
                                className: "flex size-[72px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg",
                                "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].tapToSpeak[lang],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                    className: "size-8"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/screens/voice-chat-screen.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-xs text-muted-foreground",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].tapToSpeak[lang]
                        }, void 0, false, {
                            fileName: "[project]/components/screens/voice-chat-screen.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VoiceSearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceSearchModal"], {
                open: voiceOpen,
                lang: lang,
                onClose: ()=>setVoiceOpen(false),
                onResult: handleUserInput
            }, void 0, false, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/voice-chat-screen.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(VoiceChatScreen, "lveiaPINEFC2NCtc8Bur9rGhxBs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$speech$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeech"]
    ];
});
_c = VoiceChatScreen;
function ChatBubble({ message, lang, onSpeak }) {
    const isUser = message.role === 'user';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: `flex ${isUser ? 'justify-end' : 'justify-start'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex max-w-[82%] flex-col gap-1 ${isUser ? 'items-end' : 'items-start'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-2 text-[11px] font-medium text-muted-foreground",
                    children: isUser ? `👨‍🌾 ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].you[lang]}` : `🤖 ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].assistant[lang]}`
                }, void 0, false, {
                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-3xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${isUser ? 'rounded-br-md bg-primary text-primary-foreground' : 'rounded-bl-md bg-card text-card-foreground ring-1 ring-border/60'}`,
                    children: message.text
                }, void 0, false, {
                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this),
                !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onSpeak,
                    className: "flex items-center gap-1 px-2 text-[11px] font-medium text-primary hover:underline",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                            className: "size-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/voice-chat-screen.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].speaking[lang].replace('...', '')
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/screens/voice-chat-screen.tsx",
                    lineNumber: 182,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/screens/voice-chat-screen.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/screens/voice-chat-screen.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_c1 = ChatBubble;
function EmptyState({ lang, onPick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center pt-8 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-5xl",
                "aria-hidden": true,
                children: "🤖"
            }, void 0, false, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 max-w-[15rem] text-sm text-muted-foreground text-pretty",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].askAnything[lang]
            }, void 0, false, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 mb-2 text-xs font-semibold text-foreground",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].quickHelp[lang]
            }, void 0, false, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUICK_PROMPTS"][lang].map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onPick(q),
                        className: "rounded-full bg-card px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm ring-1 ring-border/60 transition-colors hover:bg-secondary active:scale-95",
                        children: q
                    }, q, false, {
                        fileName: "[project]/components/screens/voice-chat-screen.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/screens/voice-chat-screen.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/voice-chat-screen.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
_c2 = EmptyState;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "VoiceChatScreen");
__turbopack_context__.k.register(_c1, "ChatBubble");
__turbopack_context__.k.register(_c2, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/weather-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeatherScreen",
    ()=>WeatherScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.mjs [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as TriangleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screen-header.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function WeatherScreen({ lang, back }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screen$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenHeader"], {
                screen: "weather",
                lang: lang,
                onBack: back
            }, void 0, false, {
                fileName: "[project]/components/screens/weather-screen.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-sm text-white/90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/weather-screen.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER"].place[lang]
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-6xl font-bold leading-none",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER"].temp,
                                                    "°"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/screens/weather-screen.tsx",
                                                lineNumber: 29,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-base font-medium",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER"].condition[lang]
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            rotate: 360
                                        },
                                        transition: {
                                            duration: 40,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: 'linear'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex items-center gap-2 rounded-2xl bg-white/15 px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                        className: "size-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/weather-screen.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].humidity[lang],
                                            ": ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER"].humidity,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex size-9 items-center justify-center rounded-xl bg-warning text-warning-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-foreground",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER"].alertTitle[lang]
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-pretty text-sm leading-relaxed text-foreground/80",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEATHER"].advice[lang]
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-foreground",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].livestockAdvice[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/screens/weather-screen.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
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
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex gap-2 text-sm leading-relaxed text-card-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = WeatherScreen;
var _c;
__turbopack_context__.k.register(_c, "WeatherScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/data-states.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState,
    "ErrorState",
    ()=>ErrorState,
    "LoadingState",
    ()=>LoadingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
'use client';
;
;
;
function LoadingState({ label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "size-8 animate-spin text-primary"
            }, void 0, false, {
                fileName: "[project]/components/ui/data-states.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/data-states.tsx",
                lineNumber: 11,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/data-states.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = LoadingState;
function EmptyState({ label, hint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-2 py-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-4xl",
                "aria-hidden": true,
                children: "🔍"
            }, void 0, false, {
                fileName: "[project]/components/ui/data-states.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/data-states.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-[16rem] text-xs text-muted-foreground",
                children: hint
            }, void 0, false, {
                fileName: "[project]/components/ui/data-states.tsx",
                lineNumber: 23,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/data-states.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c1 = EmptyState;
function ErrorState({ lang, message, onRetry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-3 py-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-4xl",
                "aria-hidden": true,
                children: "⚠️"
            }, void 0, false, {
                fileName: "[project]/components/ui/data-states.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-[16rem] text-sm font-semibold text-foreground",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].failedToLoad[lang]
            }, void 0, false, {
                fileName: "[project]/components/ui/data-states.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-[16rem] text-xs text-muted-foreground text-pretty",
                children: message
            }, void 0, false, {
                fileName: "[project]/components/ui/data-states.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onRetry,
                className: "rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow active:scale-95",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].retry[lang]
            }, void 0, false, {
                fileName: "[project]/components/ui/data-states.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/data-states.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c2 = ErrorState;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LoadingState");
__turbopack_context__.k.register(_c1, "EmptyState");
__turbopack_context__.k.register(_c2, "ErrorState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-speech.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpeech",
    ()=>useSpeech
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function getRecognitionCtor() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const w = window;
    return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}
function useSpeech(lang) {
    _s();
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transcript, setTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [supported, setSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const finalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    const onFinalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSpeech.useEffect": ()=>{
            const Ctor = getRecognitionCtor();
            const synth = ("TURBOPACK compile-time truthy", 1) ? window.speechSynthesis : "TURBOPACK unreachable";
            setSupported(Boolean(Ctor) || Boolean(synth));
            return ({
                "useSpeech.useEffect": ()=>{
                    try {
                        recognitionRef.current?.abort();
                        synth?.cancel();
                    } catch  {
                    /* noop */ }
                }
            })["useSpeech.useEffect"];
        }
    }["useSpeech.useEffect"], []);
    const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeech.useCallback[stopListening]": ()=>{
            try {
                recognitionRef.current?.stop();
            } catch  {
            /* noop */ }
            setIsListening(false);
        }
    }["useSpeech.useCallback[stopListening]"], []);
    const startListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeech.useCallback[startListening]": (onFinal)=>{
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
            recognition.lang = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPEECH_LOCALE"][lang];
            recognition.continuous = false;
            recognition.interimResults = true;
            finalRef.current = '';
            onFinalRef.current = onFinal ?? null;
            setTranscript('');
            recognition.onresult = ({
                "useSpeech.useCallback[startListening]": (e)=>{
                    let interim = '';
                    let finalText = '';
                    for(let i = e.resultIndex; i < e.results.length; i++){
                        const res = e.results[i];
                        if (res.isFinal) finalText += res[0].transcript;
                        else interim += res[0].transcript;
                    }
                    if (finalText) finalRef.current += finalText;
                    setTranscript((finalRef.current + interim).trim());
                }
            })["useSpeech.useCallback[startListening]"];
            recognition.onerror = ({
                "useSpeech.useCallback[startListening]": ()=>{
                    setIsListening(false);
                }
            })["useSpeech.useCallback[startListening]"];
            recognition.onend = ({
                "useSpeech.useCallback[startListening]": ()=>{
                    setIsListening(false);
                    const result = finalRef.current.trim();
                    if (result && onFinalRef.current) onFinalRef.current(result);
                }
            })["useSpeech.useCallback[startListening]"];
            recognitionRef.current = recognition;
            try {
                recognition.start();
                setIsListening(true);
            } catch  {
                setIsListening(false);
            }
        }
    }["useSpeech.useCallback[startListening]"], [
        lang
    ]);
    const speak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeech.useCallback[speak]": (text)=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !window.speechSynthesis) return;
            const synth = window.speechSynthesis;
            synth.cancel();
            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPEECH_LOCALE"][lang];
            utter.rate = 0.95;
            utter.pitch = 1;
            const voices = synth.getVoices();
            const match = voices.find({
                "useSpeech.useCallback[speak]": (v)=>v.lang === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPEECH_LOCALE"][lang]
            }["useSpeech.useCallback[speak]"]) ?? voices.find({
                "useSpeech.useCallback[speak]": (v)=>v.lang.startsWith(lang)
            }["useSpeech.useCallback[speak]"]);
            if (match) utter.voice = match;
            utter.onstart = ({
                "useSpeech.useCallback[speak]": ()=>setIsSpeaking(true)
            })["useSpeech.useCallback[speak]"];
            utter.onend = ({
                "useSpeech.useCallback[speak]": ()=>setIsSpeaking(false)
            })["useSpeech.useCallback[speak]"];
            utter.onerror = ({
                "useSpeech.useCallback[speak]": ()=>setIsSpeaking(false)
            })["useSpeech.useCallback[speak]"];
            synth.speak(utter);
        }
    }["useSpeech.useCallback[speak]"], [
        lang
    ]);
    const stopSpeaking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeech.useCallback[stopSpeaking]": ()=>{
            try {
                window.speechSynthesis?.cancel();
            } catch  {
            /* noop */ }
            setIsSpeaking(false);
        }
    }["useSpeech.useCallback[stopSpeaking]"], []);
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
_s(useSpeech, "vlAS2E0FfXb2iHecngmx86M3Q/8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useVoiceSearch.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoiceSearch",
    ()=>useVoiceSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assistant.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function getRecognitionCtor() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const w = window;
    return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}
function useVoiceSearch(lang) {
    _s();
    const [supported, setSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [listening, setListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [interim, setInterim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const finalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    const onFinalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hadErrorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const langRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(lang);
    langRef.current = lang;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoiceSearch.useEffect": ()=>{
            setSupported(Boolean(getRecognitionCtor()));
            return ({
                "useVoiceSearch.useEffect": ()=>{
                    try {
                        recognitionRef.current?.abort();
                    } catch  {
                    /* noop */ }
                    recognitionRef.current = null;
                }
            })["useVoiceSearch.useEffect"];
        }
    }["useVoiceSearch.useEffect"], []);
    const abort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceSearch.useCallback[abort]": ()=>{
            onFinalRef.current = null;
            hadErrorRef.current = false;
            try {
                recognitionRef.current?.abort();
            } catch  {
            /* noop */ }
            recognitionRef.current = null;
            setListening(false);
        }
    }["useVoiceSearch.useCallback[abort]"], []);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceSearch.useCallback[stop]": ()=>{
            try {
                recognitionRef.current?.stop();
            } catch  {
            /* noop */ }
            setListening(false);
        }
    }["useVoiceSearch.useCallback[stop]"], []);
    const resetError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceSearch.useCallback[resetError]": ()=>setError(null)
    }["useVoiceSearch.useCallback[resetError]"], []);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceSearch.useCallback[start]": (onFinal)=>{
            const Ctor = getRecognitionCtor();
            if (!Ctor) {
                setSupported(false);
                setError('unsupported');
                return;
            }
            // Abort any previous session so we always listen fresh.
            try {
                recognitionRef.current?.abort();
            } catch  {
            /* noop */ }
            try {
                window.speechSynthesis?.cancel();
            } catch  {
            /* noop */ }
            const recognition = new Ctor();
            recognition.lang = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assistant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPEECH_LOCALE"][langRef.current];
            recognition.continuous = false;
            recognition.interimResults = true;
            recognition.maxAlternatives = 1;
            finalRef.current = '';
            onFinalRef.current = onFinal ?? null;
            hadErrorRef.current = false;
            setError(null);
            setInterim('');
            recognition.onresult = ({
                "useVoiceSearch.useCallback[start]": (e)=>{
                    let interimText = '';
                    let finalText = '';
                    for(let i = e.resultIndex; i < e.results.length; i++){
                        const res = e.results[i];
                        if (res.isFinal) finalText += res[0].transcript;
                        else interimText += res[0].transcript;
                    }
                    if (finalText) finalRef.current += finalText;
                    setInterim((finalRef.current + interimText).trim());
                }
            })["useVoiceSearch.useCallback[start]"];
            recognition.onerror = ({
                "useVoiceSearch.useCallback[start]": (e)=>{
                    const code = e?.error;
                    if (code === 'not-allowed' || code === 'service-not-allowed') {
                        hadErrorRef.current = true;
                        setError('permission-denied');
                    } else if (code === 'no-speech' || code === 'audio-capture') {
                        hadErrorRef.current = true;
                        setError('no-speech');
                    } else if (code === 'aborted') {
                    // Manual stop — not an error.
                    } else {
                        hadErrorRef.current = true;
                        setError('failed');
                    }
                    setListening(false);
                }
            })["useVoiceSearch.useCallback[start]"];
            recognition.onend = ({
                "useVoiceSearch.useCallback[start]": ()=>{
                    setListening(false);
                    const result = finalRef.current.trim();
                    if (result) {
                        setInterim('');
                        if (onFinalRef.current) {
                            const cb = onFinalRef.current;
                            onFinalRef.current = null;
                            cb(result);
                        }
                    } else if (!hadErrorRef.current) {
                        // Recognition ended with nothing recognized and no error was reported.
                        setError('no-speech');
                    }
                }
            })["useVoiceSearch.useCallback[start]"];
            recognitionRef.current = recognition;
            try {
                recognition.start();
                setListening(true);
            } catch  {
                hadErrorRef.current = true;
                setError('failed');
                setListening(false);
            }
        }
    }["useVoiceSearch.useCallback[start]"], []);
    return {
        supported,
        listening,
        interim,
        error,
        start,
        stop,
        abort,
        resetError
    };
}
_s(useVoiceSearch, "kDhLjm6vATxRHfhvcKN4eCv6SEc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Reusable API client for the GramMitra AI FastAPI backend.
 *
 * All request logic lives here so screens stay clean and the backend URL is
 * configured in exactly one place (NEXT_PUBLIC_API_URL).
 */ __turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = ("TURBOPACK compile-time value", "http://127.0.0.1:8100") ?? 'http://127.0.0.1:8100';
class ApiError extends Error {
    status;
    constructor(message, status){
        super(message);
        this.name = 'ApiError';
        this.status = status;
    }
}
function buildQuery(params) {
    if (!params) return '';
    const search = new URLSearchParams();
    for (const [key, value] of Object.entries(params)){
        if (value !== undefined && value !== null && value !== '') {
            search.set(key, String(value));
        }
    }
    const query = search.toString();
    return query ? `?${query}` : '';
}
async function readError(res) {
    try {
        const body = await res.json();
        if (body.detail) {
            if (typeof body.detail === 'string') return body.detail;
            return JSON.stringify(body.detail);
        }
    } catch  {
    /* not JSON */ }
    return `Request failed (${res.status})`;
}
async function request(path, options = {}, timeoutMs = 15000) {
    const controller = new AbortController();
    const timeout = window.setTimeout(()=>controller.abort(), timeoutMs);
    const isFormData = options.body instanceof FormData;
    try {
        const res = await fetch(`${API_URL}${path}`, {
            ...options,
            signal: options.signal ?? controller.signal,
            headers: {
                // Let the browser set the multipart boundary for FormData payloads.
                ...isFormData ? {} : {
                    'Content-Type': 'application/json'
                },
                ...options.headers ?? {}
            }
        });
        if (!res.ok) {
            const detail = await readError(res);
            throw new ApiError(detail, res.status);
        }
        if (res.status === 204) return undefined;
        return await res.json();
    } finally{
        window.clearTimeout(timeout);
    }
}
const api = {
    /* ----------------------------- Government Schemes ---------------------------- */ getSchemes (params) {
        return request(`/schemes${buildQuery(params)}`);
    },
    getScheme (id) {
        return request(`/schemes/${encodeURIComponent(id)}`);
    },
    /* ------------------------------- Vaccination ------------------------------- */ getVaccinations (params) {
        return request(`/vaccination${buildQuery(params)}`);
    },
    getUpcomingVaccinations () {
        return request('/vaccination/upcoming');
    },
    getVaccinationsDueToday () {
        return request('/vaccination/due/today');
    },
    getVaccinationsDueTomorrow () {
        return request('/vaccination/due/tomorrow');
    },
    createVaccination (payload) {
        return request('/vaccination', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },
    updateVaccination (id, payload) {
        return request(`/vaccination/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
    },
    deleteVaccination (id) {
        return request(`/vaccination/${id}`, {
            method: 'DELETE'
        });
    },
    /* ------------------------------- Emergency -------------------------------- */ getContacts (params) {
        return request(`/contacts${buildQuery(params)}`);
    },
    createContact (payload) {
        return request('/emergency', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },
    /* ---------------------------- Village Head issues ---------------------------- */ getIssues (params) {
        return request(`/issues${buildQuery(params)}`);
    },
    createIssue (payload) {
        return request('/issues', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },
    updateIssueStatus (id, status) {
        return request(`/issues/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                status
            })
        });
    },
    deleteIssue (id) {
        return request(`/issues/${id}`, {
            method: 'DELETE'
        });
    },
    /* ------------------------------- AI Crop Doctor ------------------------------ */ analyzeCrop (image, speechText, language) {
        const form = new FormData();
        form.append('image', image, 'crop-photo.jpg');
        form.append('speech_text', speechText);
        form.append('language', language);
        // AI vision analysis can take longer than a normal API call.
        return request('/api/crop/analyze', {
            method: 'POST',
            body: form
        }, 45000);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/assistant.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    voiceUnsupported: {
        mr: 'या ब्राउझरवर आवाज शोध उपलब्ध नाही.',
        hi: 'इस ब्राउज़र पर वॉइस सर्च उपलब्ध नहीं है।',
        en: 'Voice search is not supported on this browser.'
    },
    voicePermissionDenied: {
        mr: 'मायक्रोफोन परवानगी आवश्यक आहे.',
        hi: 'माइक्रोफोन अनुमति आवश्यक है।',
        en: 'Microphone permission is required.'
    },
    voiceNoSpeech: {
        mr: 'आवाज आढळला नाही. कृपया पुन्हा प्रयत्न करा.',
        hi: 'कोई आवाज़ नहीं मिली। कृपया पुनः प्रयास करें।',
        en: 'No speech detected. Please try again.'
    },
    voiceFailed: {
        mr: 'आवाज शोध अयशस्वी. कृपया पुन्हा प्रयत्न करा.',
        hi: 'वॉइस सर्च विफल हुई। कृपया पुनः प्रयास करें।',
        en: 'Voice search failed. Please try again.'
    },
    searchEmergency: {
        mr: 'आपत्कालीन सेवा शोधा...',
        hi: 'आपातकालीन सेवा खोजें...',
        en: 'Search emergency service...'
    },
    callNow: {
        mr: '📞 आता कॉल करा',
        hi: '📞 अभी कॉल करें',
        en: '📞 Call Now'
    },
    quickEmergency: {
        mr: '🚨 त्वरित आपत्कालीन',
        hi: '🚨 त्वरित आपातकालीन',
        en: '🚨 Quick Emergency'
    },
    openDialPad: {
        mr: '☎ डायल पॅड उघडा',
        hi: '☎ डायल पैड खोलें',
        en: '☎ Open Dial Pad'
    },
    favourite: {
        mr: 'आवडते',
        hi: 'पसंदीदा',
        en: 'Favourite'
    },
    favourites: {
        mr: 'आवडते संपर्क',
        hi: 'पसंदीदा संपर्क',
        en: 'Favourite Contacts'
    },
    locationFiltered: {
        mr: 'तुमच्या जवळचे संपर्क',
        hi: 'आपके पास के संपर्क',
        en: 'Contacts near you'
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
    },
    roleFarmer: {
        mr: 'शेतकरी',
        hi: 'किसान',
        en: 'Farmer'
    },
    roleHead: {
        mr: 'सरपंच',
        hi: 'सरपंच',
        en: 'Village Head'
    },
    yourName: {
        mr: 'तुमचे नाव',
        hi: 'आपका नाम',
        en: 'Your Name'
    },
    yourPhone: {
        mr: 'फोन नंबर',
        hi: 'फोन नंबर',
        en: 'Phone Number'
    },
    yourVillage: {
        mr: 'गावाचे नाव',
        hi: 'गांव का नाम',
        en: 'Village Name'
    },
    describeProblem: {
        mr: 'तुमची समस्या थोडक्यात सांगा',
        hi: 'अपनी समस्या संक्षेप में बताएं',
        en: 'Describe your problem briefly'
    },
    speakIssue: {
        mr: 'बोलून सांगा',
        hi: 'बोलकर बताएं',
        en: 'Speak'
    },
    issuePlaceholder: {
        mr: 'उदा. गावातील पाण्याची टाकी बिघडली आहे',
        hi: 'जैसे गांव की पानी की टंकी खराब है',
        en: 'e.g. the village water tank is broken'
    },
    sendReport: {
        mr: 'अहवाल पाठवा',
        hi: 'रिपोर्ट भेजें',
        en: 'Send Report'
    },
    sending: {
        mr: 'पाठवत आहे…',
        hi: 'भेज रहे हैं…',
        en: 'Sending…'
    },
    reportSent: {
        mr: 'अहवाल सरपंचांना पाठवला गेला आहे.',
        hi: 'रिपोर्ट सरपंच को भेज दी गई है।',
        en: 'Report sent to the Village Head.'
    },
    fillAllFields: {
        mr: 'कृपया सर्व तपशील भरा.',
        hi: 'कृपया सभी विवरण भरें।',
        en: 'Please fill in all details.'
    },
    rateLimitExceeded: {
        mr: 'तुम्ही खूप जास्त अहवाल पाठवले आहेत. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा.',
        hi: 'आपने बहुत सारी रिपोर्ट भेजीं। कृपया कुछ देर बाद प्रयास करें।',
        en: 'Too many reports sent. Please try again after some time.'
    },
    sendFailed: {
        mr: 'अहवाल पाठवता आला नाही. पुन्हा प्रयत्न करा.',
        hi: 'रिपोर्ट नहीं भेजी जा सकी। पुनः प्रयास करें।',
        en: 'Could not send the report. Please try again.'
    },
    statusPending: {
        mr: 'प्रलंबित',
        hi: 'लंबित',
        en: 'Pending'
    },
    statusInProgress: {
        mr: 'कार्यरत',
        hi: 'कार्यरत',
        en: 'In Progress'
    },
    statusResolved: {
        mr: 'सोडवले',
        hi: 'हल हो गया',
        en: 'Resolved'
    },
    markInProgress: {
        mr: 'कार्यरत करा',
        hi: 'कार्यरत करें',
        en: 'Mark In Progress'
    },
    markResolved: {
        mr: 'सोडवले करा',
        hi: 'हल हुआ करें',
        en: 'Mark Resolved'
    },
    deleteReport: {
        mr: 'हटवा',
        hi: 'हटाएं',
        en: 'Delete'
    },
    confirmDeleteReport: {
        mr: 'हा अहवाल हटवायचा का?',
        hi: 'क्या यह रिपोर्ट हटानी है?',
        en: 'Delete this report?'
    },
    noReports: {
        mr: 'अद्याप कोणतेही अहवाल नाहीत',
        hi: 'अभी तक कोई रिपोर्ट नहीं',
        en: 'No reports yet'
    },
    reportedBy: {
        mr: 'अहवाल देणारे',
        hi: 'रिपोर्टकर्ता',
        en: 'Reported by'
    },
    issuesCount: {
        mr: 'एकूण अहवाल',
        hi: 'कुल रिपोर्ट',
        en: 'Total reports'
    },
    officialUnavailable: {
        mr: 'अधिकृत वेबसाइट सध्या उपलब्ध नाही.',
        hi: 'आधिकारिक वेबसाइट वर्तमान में उपलब्ध नहीं है।',
        en: 'Official website is currently unavailable.'
    },
    redirectConfirm: {
        mr: 'तुम्हाला अधिकृत सरकारी वेबसाइटवर पुनर्निर्देशित केले जाईल.',
        hi: 'आपको आधिकारिक सरकारी वेबसाइट पर पुनर्निर्देशित किया जाएगा।',
        en: 'You will be redirected to the official government website.'
    },
    continue: {
        mr: 'पुढे जा',
        hi: 'जारी रखें',
        en: 'Continue'
    },
    recognized: {
        mr: 'ओळखले:',
        hi: 'पहचाना गया:',
        en: 'Recognized:'
    },
    searching: {
        mr: 'शोधत आहे...',
        hi: 'खोज रहे हैं...',
        en: 'Searching...'
    },
    speakNow: {
        mr: 'बोला...',
        hi: 'बोलिए...',
        en: 'Speak now...'
    },
    searchVaccinations: {
        mr: 'लसीकरण शोधा…',
        hi: 'टीकाकरण खोजें…',
        en: 'Search vaccinations…'
    },
    /* ------------------------------ AI Crop Doctor ------------------------------ */ cropDoctor: {
        mr: 'पीक डॉक्टर',
        hi: 'फसल डॉक्टर',
        en: 'Crop Doctor'
    },
    captureCrop: {
        mr: 'पिकाचा फोटो घ्या',
        hi: 'फसल का फोटो लें',
        en: 'Capture Crop'
    },
    speak: {
        mr: 'बोला',
        hi: 'बोलिए',
        en: 'Speak'
    },
    cropDoctorTagline: {
        mr: 'पिकाचा फोटो घ्या किंवा बोला, रोग ओळखू',
        hi: 'फसल का फोटो लें या बोलें, रोग पहचानें',
        en: 'Snap a photo or speak — we identify the disease'
    },
    takeCropPhoto: {
        mr: '📷 पिकाचा फोटो घ्या',
        hi: '📷 फसल का फोटो लें',
        en: '📷 Take crop photo'
    },
    retake: {
        mr: 'पुन्हा घ्या',
        hi: 'फिर से लें',
        en: 'Retake'
    },
    remove: {
        mr: 'काढा',
        hi: 'हटाएं',
        en: 'Remove'
    },
    analyzing: {
        mr: 'तपासत आहे…',
        hi: 'जांच हो रही है…',
        en: 'Analyzing…'
    },
    analyzingHint: {
        mr: 'तुमच्या फोटोची आणि वर्णनाची तपासणी होत आहे',
        hi: 'आपके फोटो और विवरण की जांच हो रही है',
        en: 'Checking your photo and description'
    },
    analysisHint: {
        mr: 'रोग ओळखण्यासाठी पिकाच्या पानाचे आणि फळाचे फोटो स्पष्ट घ्या.',
        hi: 'रोग पहचानने के लिए पत्ते और फल के साफ फोटो लें।',
        en: 'Take a clear photo of the leaves and fruit for the best result.'
    },
    nowSpeakSymptoms: {
        mr: 'आता लक्षणे बोलून सांगा',
        hi: 'अब लक्षण बोलकर बताएं',
        en: 'Now speak the symptoms'
    },
    speakSymptomsHint: {
        mr: 'उदा. "पानावर पांढरे डाग आहेत"',
        hi: 'जैसे "पत्तों पर सफेद दाग हैं"',
        en: 'e.g. "my cotton leaves have white spots"'
    },
    skip: {
        mr: 'वगळा',
        hi: 'छोड़ें',
        en: 'Skip'
    },
    diagnose: {
        mr: 'तपासणी करा',
        hi: 'जांच करें',
        en: 'Diagnose'
    },
    retrySpeaking: {
        mr: 'पुन्हा बोला',
        hi: 'फिर बोलिए',
        en: 'Speak again'
    },
    diagnosisReady: {
        mr: 'तुमचे निदान तयार आहे',
        hi: 'आपका निदान तैयार है',
        en: 'Your diagnosis is ready'
    },
    crop: {
        mr: 'पीक',
        hi: 'फसल',
        en: 'Crop'
    },
    disease: {
        mr: 'रोग',
        hi: 'रोग',
        en: 'Disease'
    },
    confidence: {
        mr: 'आत्मविश्वास',
        hi: 'विश्वास',
        en: 'Confidence'
    },
    cause: {
        mr: 'कारण',
        hi: 'कारण',
        en: 'Cause'
    },
    recommendedMedicine: {
        mr: 'शिफारस केलेले औषध',
        hi: 'अनुशंसित दवा',
        en: 'Recommended Medicine'
    },
    organicTreatment: {
        mr: 'सेंद्रिय उपाय',
        hi: 'जैविक उपचार',
        en: 'Organic Treatment'
    },
    chemicalTreatment: {
        mr: 'रासायनिक उपचार',
        hi: 'रासायनिक उपचार',
        en: 'Chemical Treatment'
    },
    prevention: {
        mr: 'प्रतिबंध',
        hi: 'रोकथाम',
        en: 'Prevention'
    },
    pest: {
        mr: 'कीडक',
        hi: 'कीट',
        en: 'Pest'
    },
    nutrientDeficiency: {
        mr: 'पोषक घटकांची कमतरता',
        hi: 'पोषक तत्वों की कमी',
        en: 'Nutrient Deficiency'
    },
    severityLabel: {
        mr: 'तीव्रता',
        hi: 'गंभीरता',
        en: 'Severity'
    },
    listen: {
        mr: 'ऐका',
        hi: 'सुनें',
        en: 'Listen'
    },
    stopListening: {
        mr: 'ऐकणे थांबवा',
        hi: 'सुनना बंद करें',
        en: 'Stop'
    },
    newDiagnosis: {
        mr: 'नवीन तपासणी',
        hi: 'नई जांच',
        en: 'New diagnosis'
    },
    imageTypeError: {
        mr: 'फक्त JPG, JPEG किंवा PNG फोटो.',
        hi: 'केवल JPG, JPEG या PNG फोटो।',
        en: 'Only JPG, JPEG or PNG photos.'
    },
    imageSizeError: {
        mr: 'फोटो खूप मोठा आहे (जास्तीत जास्त १० MB).',
        hi: 'फोटो बहुत बड़ा है (अधिकतम 10 MB)।',
        en: 'Photo is too large (max 10 MB).'
    },
    cropAnalysisFailed: {
        mr: 'तपासणी अयशस्वी. पुन्हा प्रयत्न करा.',
        hi: 'जांच विफल रही। पुनः प्रयास करें।',
        en: 'Analysis failed. Please try again.'
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        id: 'village',
        emoji: '🏘️',
        labels: {
            mr: 'सरपंचांना कळवा',
            hi: 'सरपंच को बताएं',
            en: 'Report to Head'
        },
        color: 'bg-violet-100 text-violet-700'
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
    village: {
        mr: 'सरपंच अहवाल',
        hi: 'सरपंच रिपोर्ट',
        en: 'Village Head'
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/emergency-contacts.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "police-emergency",
        "district": "All India",
        "name": "Police Emergency",
        "phone": "100",
        "type": "Police"
    },
    {
        "id": "fire-emergency",
        "district": "All India",
        "name": "Fire Brigade",
        "phone": "101",
        "type": "Fire"
    },
    {
        "id": "national-emergency",
        "district": "All India",
        "name": "National Emergency Number",
        "phone": "112",
        "type": "Government Helpline"
    },
    {
        "id": "animal-ambulance-national",
        "district": "All India",
        "name": "Animal Ambulance (Govt)",
        "phone": "1962",
        "type": "Animal Ambulance"
    },
    {
        "id": "kisan-call-center",
        "district": "All India",
        "name": "Kisan Call Center",
        "phone": "18001801551",
        "type": "Government Helpline"
    },
    {
        "id": "pashudhan-helpline",
        "district": "All India",
        "name": "Animal Husbandry Helpline (Pashudhan)",
        "phone": "18002330418",
        "type": "Government Helpline"
    },
    {
        "id": "vet-doctor-pune-1",
        "district": "Pune",
        "name": "Dr. Suresh Patil - Veterinary Clinic",
        "phone": "9822012345",
        "type": "Veterinary Doctor"
    },
    {
        "id": "vet-doctor-pune-2",
        "district": "Pune",
        "name": "Dr. Anita Deshmukh - Animal Care",
        "phone": "9860011223",
        "type": "Veterinary Doctor"
    },
    {
        "id": "vet-hospital-pune",
        "district": "Pune",
        "name": "Pune Veterinary Hospital",
        "phone": "02024444444",
        "type": "Veterinary Hospital"
    },
    {
        "id": "vet-ambulance-pune",
        "district": "Pune",
        "name": "Pune Animal Ambulance Service",
        "phone": "9619201010",
        "type": "Animal Ambulance"
    },
    {
        "id": "vet-doctor-ahmednagar-1",
        "district": "Ahmednagar",
        "name": "Dr. Rajendra Kale - Rural Vet Clinic",
        "phone": "9422005566",
        "type": "Veterinary Doctor"
    },
    {
        "id": "vet-doctor-ahmednagar-2",
        "district": "Ahmednagar",
        "name": "Dr. Manisha Bhosale - Veterinary Doctor",
        "phone": "9850554433",
        "type": "Veterinary Doctor"
    },
    {
        "id": "vet-hospital-ahmednagar",
        "district": "Ahmednagar",
        "name": "Ahmednagar District Veterinary Hospital",
        "phone": "02412345678",
        "type": "Veterinary Hospital"
    },
    {
        "id": "vet-ambulance-ahmednagar",
        "district": "Ahmednagar",
        "name": "Ahmednagar Animal Ambulance",
        "phone": "1962",
        "type": "Animal Ambulance"
    },
    {
        "id": "vet-doctor-nashik-1",
        "district": "Nashik",
        "name": "Dr. Vikram Jadhav - Veterinary Doctor",
        "phone": "9765112233",
        "type": "Veterinary Doctor"
    },
    {
        "id": "vet-hospital-nashik",
        "district": "Nashik",
        "name": "Nashik Government Veterinary Hospital",
        "phone": "02532345678",
        "type": "Veterinary Hospital"
    },
    {
        "id": "vet-doctor-nagpur-1",
        "district": "Nagpur",
        "name": "Dr. Priya Wagh - Animal Hospital",
        "phone": "9890112233",
        "type": "Veterinary Doctor"
    },
    {
        "id": "vet-hospital-nagpur",
        "district": "Nagpur",
        "name": "Nagpur Veterinary Hospital",
        "phone": "07122567890",
        "type": "Veterinary Hospital"
    },
    {
        "id": "vet-doctor-kolhapur-1",
        "district": "Kolhapur",
        "name": "Dr. Santosh Pawar - Veterinary Doctor",
        "phone": "9822114455",
        "type": "Veterinary Doctor"
    },
    {
        "id": "vet-ambulance-nashik",
        "district": "Nashik",
        "name": "Nashik Animal Ambulance",
        "phone": "1962",
        "type": "Animal Ambulance"
    },
    {
        "id": "vet-hospital-mumbai",
        "district": "Mumbai",
        "name": "Mumbai Veterinary Dispensary",
        "phone": "02222881234",
        "type": "Veterinary Hospital"
    },
    {
        "id": "vet-doctor-sangli-1",
        "district": "Sangli",
        "name": "Dr. Nilesh Kamble - Veterinary Doctor",
        "phone": "9845447788",
        "type": "Veterinary Doctor"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "todayISO",
    ()=>todayISO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const LANG_LOCALE = {
    mr: 'mr-IN',
    hi: 'hi-IN',
    en: 'en-IN'
};
function formatDate(dateStr, lang = 'en') {
    if (!dateStr) return '';
    const date = new Date(`${dateStr}T00:00:00`);
    if (Number.isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString(LANG_LOCALE[lang] ?? 'en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}
function todayISO() {
    const now = new Date();
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const day = `${now.getDate()}`.padStart(2, '0');
    return `${now.getFullYear()}-${month}-${day}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1inakbq._.js.map