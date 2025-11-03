(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/axios.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:8000",
    withCredentials: true
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PostDetailPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "e052e9637373958fc3827a52befa1c402c833e53371a4725eb564be2b57ebe5c") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e052e9637373958fc3827a52befa1c402c833e53371a4725eb564be2b57ebe5c";
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
                            const res = await fetch("/api/proxy/posts/" + params.id, {
                                method: "GET",
                                headers: {
                                    "Authorization": `Bearer ${token}`
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
    console.log(post);
    if (!post) {
        let t2;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mt-20",
                children: "Loading..."
            }, void 0, false, {
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
    if ($[6] !== post.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold mb-4",
            children: post.title
        }, void 0, false, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[6] = post.title;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== post.isi) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-4 whitespace-pre-line",
            children: post.isi
        }, void 0, false, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[8] = post.isi;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const t4 = post.user?.name || "Unknown";
    let t5;
    if ($[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "By: ",
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== post.created_at) {
        t6 = new Date(post.created_at).toLocaleString();
        $[12] = post.created_at;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-4",
            children: [
                "Created at: ",
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t5 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-500 mb-6",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[16] = t5;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== params.id || $[20] !== router) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn btn-error",
            onClick: {
                "PostDetailPage[<button>.onClick]": async ()=>{
                    if (confirm("Delete this post?")) {
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
                        } catch (t10) {
                            alert("Failed to delete post");
                        }
                    }
                }
            }["PostDetailPage[<button>.onClick]"],
            children: "Delete"
        }, void 0, false, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[19] = params.id;
        $[20] = router;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== params.id || $[23] !== router) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn btn-secondary",
            onClick: {
                "PostDetailPage[<button>.onClick]": ()=>router.push(`/posts/${params.id}/edit`)
            }["PostDetailPage[<button>.onClick]"],
            children: "Edit"
        }, void 0, false, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[22] = params.id;
        $[23] = router;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== t10 || $[26] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-actions",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t9;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t11 || $[29] !== t2 || $[30] !== t3 || $[31] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card bg-base-100 shadow-xl p-6",
                children: [
                    t2,
                    t3,
                    t8,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/posts/[id]/page.js",
                lineNumber: 169,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/posts/[id]/page.js",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[28] = t11;
        $[29] = t2;
        $[30] = t3;
        $[31] = t8;
        $[32] = t12;
    } else {
        t12 = $[32];
    }
    return t12;
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

//# sourceMappingURL=src_58536c0a._.js.map