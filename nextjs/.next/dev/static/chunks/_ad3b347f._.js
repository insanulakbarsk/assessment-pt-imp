(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/posts/[id]/edit/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditPostPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$daisyui$2f$components$2f$toast$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/daisyui/components/toast/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function EditPostPage() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        isi: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    // Ambil data post berdasarkan ID
    const fetchPost = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`/api/proxy/posts/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!res.ok) throw new Error("Gagal memuat data post");
            const data = await res.json();
            setForm({
                title: data.title,
                isi: data.isi
            });
        } catch (err) {
            alert(err.message);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditPostPage.useEffect": ()=>{
            if (id) fetchPost();
        }
    }["EditPostPage.useEffect"], [
        id
    ]);
    const handleChange = (e)=>setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    const handleSubmit = async (e_0)=>{
        e_0.preventDefault();
        setLoading(true);
        try {
            const token_0 = localStorage.getItem("token");
            const res_0 = await fetch(`/api/proxy/posts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token_0}`
                },
                body: JSON.stringify(form)
            });
            console.log(res_0);
            if (!res_0.ok) throw new Error("Gagal memperbarui post");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$daisyui$2f$components$2f$toast$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Post berhasil diperbaharui!");
            router.push("/posts");
        } catch (err_0) {
            alert(err_0.message);
        } finally{
            setLoading(false);
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-base-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "loading loading-spinner loading-lg text-primary"
        }, void 0, false, {
            fileName: "[project]/src/app/posts/[id]/edit/page.js",
            lineNumber: 70,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/posts/[id]/edit/page.js",
        lineNumber: 69,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-base-200 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card w-full max-w-lg bg-base-100 shadow-xl p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-center mb-6 text-primary",
                    children: "✏️ Edit Post"
                }, void 0, false, {
                    fileName: "[project]/src/app/posts/[id]/edit/page.js",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-semibold mb-2 text-gray-700",
                                    children: "Judul"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/posts/[id]/edit/page.js",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "title",
                                    placeholder: "Masukkan judul post",
                                    className: "input input-bordered w-full",
                                    value: form.title,
                                    onChange: handleChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/posts/[id]/edit/page.js",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/posts/[id]/edit/page.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-semibold mb-2 text-gray-700",
                                    children: "Isi"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/posts/[id]/edit/page.js",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    name: "isi",
                                    placeholder: "Tulis isi post di sini...",
                                    className: "textarea textarea-bordered w-full h-40",
                                    value: form.isi,
                                    onChange: handleChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/posts/[id]/edit/page.js",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/posts/[id]/edit/page.js",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>router.push("/posts"),
                                    className: "btn btn-outline btn-secondary",
                                    children: "Batal"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/posts/[id]/edit/page.js",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: `btn btn-primary ${loading ? "loading" : ""}`,
                                    children: "Simpan Perubahan"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/posts/[id]/edit/page.js",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/posts/[id]/edit/page.js",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/posts/[id]/edit/page.js",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/posts/[id]/edit/page.js",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/posts/[id]/edit/page.js",
        lineNumber: 72,
        columnNumber: 10
    }, this);
}
_s(EditPostPage, "V8Kd27ob3rEZ/wdlG0M7lyxD/Sk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = EditPostPage;
var _c;
__turbopack_context__.k.register(_c, "EditPostPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/daisyui/components/toast/object.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    ".toast": {
        "@layer daisyui.component": {
            "position": "fixed",
            "inset-inline-start": "auto",
            "inset-inline-end": "calc(0.25rem * 4)",
            "top": "auto",
            "bottom": "calc(0.25rem * 4)",
            "display": "flex",
            "flex-direction": "column",
            "gap": "calc(0.25rem * 2)",
            "background-color": "transparent",
            "translate": "var(--toast-x, 0) var(--toast-y, 0)",
            "width": "max-content",
            "max-width": "calc(100vw - 2rem)",
            "& > *": {
                "@media (prefers-reduced-motion: no-preference)": {
                    "animation": "toast 0.25s ease-out"
                }
            }
        }
    },
    ".toast-start": {
        "@layer daisyui.modifier": {
            "inset-inline-start": "calc(0.25rem * 4)",
            "inset-inline-end": "auto",
            "--toast-x": "0"
        }
    },
    ".toast-center": {
        "@layer daisyui.modifier": {
            "inset-inline-start": "calc(1/2 * 100%)",
            "inset-inline-end": "calc(1/2 * 100%)",
            "--toast-x": "-50%"
        }
    },
    ".toast-end": {
        "@layer daisyui.modifier": {
            "inset-inline-start": "auto",
            "inset-inline-end": "calc(0.25rem * 4)",
            "--toast-x": "0"
        }
    },
    ".toast-bottom": {
        "@layer daisyui.modifier": {
            "top": "auto",
            "bottom": "calc(0.25rem * 4)",
            "--toast-y": "0"
        }
    },
    ".toast-middle": {
        "@layer daisyui.modifier": {
            "top": "calc(1/2 * 100%)",
            "bottom": "auto",
            "--toast-y": "-50%"
        }
    },
    ".toast-top": {
        "@layer daisyui.modifier": {
            "top": "calc(0.25rem * 4)",
            "bottom": "auto",
            "--toast-y": "0"
        }
    },
    "@keyframes toast": {
        "0%": {
            "scale": "0.9",
            "opacity": 0
        },
        "100%": {
            "scale": "1",
            "opacity": 1
        }
    }
};
}),
"[project]/node_modules/daisyui/functions/addPrefix.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPrefix",
    ()=>addPrefix
]);
const defaultExcludedPrefixes = [
    "color-",
    "size-",
    "radius-",
    "border",
    "depth",
    "noise"
];
const excludedSelectors = [
    "prose"
];
const shouldExcludeVariable = (variableName, excludedPrefixes)=>{
    if (variableName.startsWith("tw")) {
        return true;
    }
    return excludedPrefixes.some((excludedPrefix)=>variableName.startsWith(excludedPrefix));
};
const prefixVariable = (variableName, prefix, excludedPrefixes)=>{
    if (shouldExcludeVariable(variableName, excludedPrefixes)) {
        return variableName;
    }
    return `${prefix}${variableName}`;
};
const getPrefixedSelector = (selector, prefix)=>{
    if (!selector.startsWith(".")) return selector;
    if (excludedSelectors.includes(selector.slice(1))) return selector;
    return `.${prefix}${selector.slice(1)}`;
};
const getPrefixedKey = (key, prefix, excludedPrefixes)=>{
    const prefixAmpDot = prefix ? `&.${prefix}` : "";
    if (!prefix) return key;
    if (key.startsWith(".") && excludedSelectors.includes(key.slice(1))) return key;
    if (key.startsWith("--")) {
        const variableName = key.slice(2);
        return `--${prefixVariable(variableName, prefix, excludedPrefixes)}`;
    }
    if (key.startsWith("@") || key.startsWith("[")) {
        return key;
    }
    if (key.startsWith("&")) {
        // If it's a complex selector with :not(), :has(), etc.
        if (key.match(/:[a-z-]+\(/)) {
            return key.replace(/\.([\w-]+)/g, (m, cls)=>excludedSelectors.includes(cls) ? `.${cls}` : `.${prefix}${cls}`);
        }
        // For simple &. cases
        if (key.startsWith("&.")) {
            if (excludedSelectors.includes(key.slice(2))) return key;
            return `${prefixAmpDot}${key.slice(2)}`;
        }
        // For other & cases (like &:hover or &:not(...))
        return key.replace(/\.([\w-]+)/g, (m, cls)=>excludedSelectors.includes(cls) ? `.${cls}` : `.${prefix}${cls}`);
    }
    if (key.startsWith(":")) {
        return key.replace(/\.([\w-]+)/g, (m, cls)=>excludedSelectors.includes(cls) ? `.${cls}` : `.${prefix}${cls}`);
    }
    if (key.includes(".") && !key.includes(" ") && !key.includes(">") && !key.includes("+") && !key.includes("~")) {
        return key.split(".").filter(Boolean).map((part)=>excludedSelectors.includes(part) ? part : prefix + part).join(".").replace(/^/, ".");
    }
    if (key.includes(">") || key.includes("+") || key.includes("~")) {
        // For comma-separated selectors
        if (key.includes(",")) {
            return key.split(/\s*,\s*/).map((part)=>{
                // Replace class names with prefixed versions for each part
                return part.replace(/\.([\w-]+)/g, (m, cls)=>excludedSelectors.includes(cls) ? `.${cls}` : `.${prefix}${cls}`);
            }).join(", ");
        }
        // For simple combinators (not comma-separated)
        let processedKey = key.replace(/\.([\w-]+)/g, (m, cls)=>excludedSelectors.includes(cls) ? `.${cls}` : `.${prefix}${cls}`);
        // Add a space before combinators at the beginning
        if (processedKey.startsWith(">") || processedKey.startsWith("+") || processedKey.startsWith("~")) {
            processedKey = ` ${processedKey}`;
        }
        return processedKey;
    }
    if (key.includes(" ")) {
        return key.split(/\s+/).map((part)=>{
            if (part.startsWith(".")) {
                return excludedSelectors.includes(part.slice(1)) ? part : getPrefixedSelector(part, prefix);
            }
            return part;
        }).join(" ");
    }
    if (key.includes(":")) {
        const [selector, ...pseudo] = key.split(":");
        if (selector.startsWith(".")) {
            return `${excludedSelectors.includes(selector.slice(1)) ? selector : getPrefixedSelector(selector, prefix)}:${pseudo.join(":")}`;
        }
        return key.replace(/\.([\w-]+)/g, (m, cls)=>excludedSelectors.includes(cls) ? `.${cls}` : `.${prefix}${cls}`);
    }
    if (key.startsWith(".")) {
        return excludedSelectors.includes(key.slice(1)) ? key : getPrefixedSelector(key, prefix);
    }
    return key;
};
const processArrayValue = (value, prefix, excludedPrefixes)=>{
    return value.map((item)=>{
        if (typeof item === "string") {
            if (item.startsWith(".")) {
                return excludedSelectors.includes(item.slice(1)) ? item : prefix ? `.${prefix}${item.slice(1)}` : item;
            }
            return processStringValue(item, prefix, excludedPrefixes);
        }
        return item;
    });
};
const processStringValue = (value, prefix, excludedPrefixes)=>{
    if (prefix === 0) return value;
    return value.replace(/var\(--([^)]+)\)/g, (match, variableName)=>{
        if (shouldExcludeVariable(variableName, excludedPrefixes)) {
            return match;
        }
        return `var(--${prefix}${variableName})`;
    });
};
const processValue = (value, prefix, excludedPrefixes)=>{
    if (Array.isArray(value)) {
        return processArrayValue(value, prefix, excludedPrefixes);
    } else if (typeof value === "object" && value !== null) {
        return addPrefix(value, prefix, excludedPrefixes);
    } else if (typeof value === "string") {
        return processStringValue(value, prefix, excludedPrefixes);
    } else {
        return value;
    }
};
const addPrefix = (obj, prefix, excludedPrefixes = defaultExcludedPrefixes)=>{
    return Object.entries(obj).reduce((result, [key, value])=>{
        const newKey = getPrefixedKey(key, prefix, excludedPrefixes);
        result[newKey] = processValue(value, prefix, excludedPrefixes);
        return result;
    }, {});
};
}),
"[project]/node_modules/daisyui/components/toast/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$daisyui$2f$components$2f$toast$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/daisyui/components/toast/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$daisyui$2f$functions$2f$addPrefix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/daisyui/functions/addPrefix.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = ({ addComponents, prefix = '' })=>{
    const prefixedtoast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$daisyui$2f$functions$2f$addPrefix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPrefix"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$daisyui$2f$components$2f$toast$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], prefix);
    addComponents({
        ...prefixedtoast
    });
};
}),
]);

//# sourceMappingURL=_ad3b347f._.js.map