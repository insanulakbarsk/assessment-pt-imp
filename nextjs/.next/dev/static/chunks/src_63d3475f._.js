(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Loading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lottie$2d$react$2f$build$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lottie-react/build/index.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Preloader() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "2f8af319e77ec6342bf717b4e19be36218fe147ac0ca0a9567a2c247ac39f594") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2f8af319e77ec6342bf717b4e19be36218fe147ac0ca0a9567a2c247ac39f594";
    }
    const [animationData, setAnimationData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Preloader[useEffect()]": ()=>{
                fetch("/assets/loading.json").then(_PreloaderUseEffectAnonymous).then({
                    "Preloader[useEffect() > (anonymous)()]": (data)=>setAnimationData(data)
                }["Preloader[useEffect() > (anonymous)()]"]);
            }
        })["Preloader[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== animationData) {
        t2 = animationData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lottie$2d$react$2f$build$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            animationData: animationData,
            loop: true,
            className: "w-40 h-40"
        }, void 0, false, {
            fileName: "[project]/src/components/Loading.tsx",
            lineNumber: 35,
            columnNumber: 27
        }, this);
        $[3] = animationData;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/Loading.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_s(Preloader, "+/p0QD7YYwxXewweWlZ3zDgjvak=");
_c = Preloader;
function _PreloaderUseEffectAnonymous(res) {
    return res.json();
}
var _c;
__turbopack_context__.k.register(_c, "Preloader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Loading.tsx [app-client] (ecmascript) <export default as Loading>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loading",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.tsx [app-client] (ecmascript)");
}),
"[project]/src/app/posts/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loading$3e$__ = __turbopack_context__.i("[project]/src/components/Loading.tsx [app-client] (ecmascript) <export default as Loading>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PostDetailPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "4ba9aee862b98270c9a519634c3e2cb6b7c05b9f19f9cd3f7b07c8c502eb5564") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4ba9aee862b98270c9a519634c3e2cb6b7c05b9f19f9cd3f7b07c8c502eb5564";
    }
    const [post, setPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    let t1;
    if ($[1] !== params.id || $[2] !== router) {
        t0 = ({
            "PostDetailPage[useEffect()]": ()=>{
                const fetchPost = {
                    "PostDetailPage[useEffect() > fetchPost]": async ()=>{
                        ;
                        try {
                            const token = localStorage.getItem("token");
                            const res = await fetch(`/api/proxy/posts/${params.id}`, {
                                method: "GET",
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            });
                            const data = await res.json();
                            setPost(data);
                        } catch (t2) {
                            const err = t2;
                            console.error(err);
                            alert("Failed to fetch post");
                            router.push("/posts");
                        }
                    }
                }["PostDetailPage[useEffect() > fetchPost]"];
                if (params.id) {
                    fetchPost();
                }
            }
        })["PostDetailPage[useEffect()]"];
        t1 = [
            params.id,
            router
        ];
        $[1] = params.id;
        $[2] = router;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!post) {
        let t2;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loading$3e$__["Loading"], {}, void 0, false, {
                fileName: "[project]/src/app/posts/[id]/page.js",
                lineNumber: 63,
                columnNumber: 12
            }, this);
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        return t2;
    }
    let t2;
    let t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 40
        };
        t3 = {
            opacity: 1,
            y: 0
        };
        t4 = {
            duration: 0.6
        };
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
    }
    let t5;
    if ($[9] !== post.title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 leading-snug",
            children: post.title
        }, void 0, false, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[9] = post.title;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== post.isi) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed",
            children: post.isi
        }, void 0, false, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[11] = post.isi;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const t7 = post.user?.name || "Unknown";
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "✍️ ",
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== post.created_at) {
        t9 = new Date(post.created_at).toLocaleString("id-ID", {
            dateStyle: "long",
            timeStyle: "short"
        });
        $[15] = post.created_at;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "🕓 ",
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t8;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== params.id || $[23] !== router) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "px-6 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300",
            onClick: {
                "PostDetailPage[<button>.onClick]": async ()=>{
                    if (confirm("Yakin mau hapus postingan ini?")) {
                        ;
                        try {
                            const token_0 = localStorage.getItem("token");
                            await fetch(`/api/proxy/posts/${params.id}`, {
                                method: "DELETE",
                                headers: {
                                    Authorization: `Bearer ${token_0}`
                                }
                            });
                            router.push("/posts");
                        } catch (t13) {
                            alert("Gagal menghapus postingan");
                        }
                    }
                }
            }["PostDetailPage[<button>.onClick]"],
            children: "🗑 Hapus"
        }, void 0, false, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[22] = params.id;
        $[23] = router;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== params.id || $[26] !== router) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "px-6 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300",
            onClick: {
                "PostDetailPage[<button>.onClick]": ()=>router.push(`/posts/${params.id}/edit`)
            }["PostDetailPage[<button>.onClick]"],
            children: "✏️ Edit"
        }, void 0, false, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[25] = params.id;
        $[26] = router;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== t12 || $[29] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 mt-8",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t13;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t11 || $[32] !== t14 || $[33] !== t5 || $[34] !== t6) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black py-20 px-6 flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t2,
                animate: t3,
                transition: t4,
                className: "max-w-3xl w-full bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10",
                children: [
                    t5,
                    t6,
                    t11,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/posts/[id]/page.js",
                lineNumber: 195,
                columnNumber: 179
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[31] = t11;
        $[32] = t14;
        $[33] = t5;
        $[34] = t6;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    return t15;
}
_s(PostDetailPage, "OIOBxat+NEFlN33afm3P3815YxM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PostDetailPage;
var _c;
__turbopack_context__.k.register(_c, "PostDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_63d3475f._.js.map