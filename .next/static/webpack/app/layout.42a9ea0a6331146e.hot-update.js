"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c1ee5fe15e24\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzk2OTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJjMWVlNWZlMTVlMjRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Providers.tsx":
/*!**************************************!*\
  !*** ./app/components/Providers.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CartProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var use_shopping_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-shopping-cart */ \"(app-pages-browser)/./node_modules/use-shopping-cart/dist/react.es.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction CartProvider(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(use_shopping_cart__WEBPACK_IMPORTED_MODULE_1__.CartProvider, {\n        mode: \"payment\",\n        cartMode: \"client-only\",\n        stripe: \"pk_test_51OZ6CQDE6RSHs6R39MzkPOLYEJhN6m9hY9MdIjexAZMKYFAHvsXdQWEwtHizf4vFBC59NF2KyDQoFtDKHWNeOmPA00OBIiWXsC\",\n        // successUrl=\"http://localhost:3000/stripe/success\"\n        successUrl: \"https://https://e-commerce-web-weld.vercel.app/stripe/success\",\n        // cancelUrl=\"http://localhost:3000/stripe/error\"\n        cancelUrl: \"https://https://e-commerce-web-weld.vercel.app/stripe/error\",\n        currency: \"USD\",\n        billingAddressCollection: false,\n        shouldPersist: true,\n        language: \"en-US\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Q2\\\\Wednesday Classes\\\\Projects\\\\Next JS Project\\\\E-Commerce-Web\\\\my-app\\\\app\\\\components\\\\Providers.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = CartProvider;\nvar _c;\n$RefreshReg$(_c, \"CartProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb3ZpZGVycy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdnRTtBQUVqRCxTQUFTQSxhQUFhLEtBQXFDO1FBQXJDLEVBQUVFLFFBQVEsRUFBMkIsR0FBckM7SUFDbkMscUJBQ0UsOERBQUNELDJEQUFXQTtRQUNWRSxNQUFLO1FBQ0xDLFVBQVM7UUFDVEMsUUFBUUMsNkdBQWtDO1FBQzFDLG9EQUFvRDtRQUNwREcsWUFBVztRQUNYLGlEQUFpRDtRQUNqREMsV0FBVTtRQUVWQyxVQUFTO1FBQ1RDLDBCQUEwQjtRQUMxQkMsZUFBZTtRQUNmQyxVQUFTO2tCQUVSWjs7Ozs7O0FBR1A7S0FuQndCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Qcm92aWRlcnMudHN4P2IxZDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIGFzIFVTQ1Byb3ZpZGVyIH0gZnJvbSBcInVzZS1zaG9wcGluZy1jYXJ0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VVNDUHJvdmlkZXJcclxuICAgICAgbW9kZT1cInBheW1lbnRcIlxyXG4gICAgICBjYXJ0TW9kZT1cImNsaWVudC1vbmx5XCJcclxuICAgICAgc3RyaXBlPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfS0VZIGFzIHN0cmluZ31cclxuICAgICAgLy8gc3VjY2Vzc1VybD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zdHJpcGUvc3VjY2Vzc1wiXHJcbiAgICAgIHN1Y2Nlc3NVcmw9XCJodHRwczovL2h0dHBzOi8vZS1jb21tZXJjZS13ZWItd2VsZC52ZXJjZWwuYXBwL3N0cmlwZS9zdWNjZXNzXCJcclxuICAgICAgLy8gY2FuY2VsVXJsPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3N0cmlwZS9lcnJvclwiXHJcbiAgICAgIGNhbmNlbFVybD1cImh0dHBzOi8vaHR0cHM6Ly9lLWNvbW1lcmNlLXdlYi13ZWxkLnZlcmNlbC5hcHAvc3RyaXBlL2Vycm9yXCJcclxuICAgICAgXHJcbiAgICAgIGN1cnJlbmN5PVwiVVNEXCJcclxuICAgICAgYmlsbGluZ0FkZHJlc3NDb2xsZWN0aW9uPXtmYWxzZX1cclxuICAgICAgc2hvdWxkUGVyc2lzdD17dHJ1ZX1cclxuICAgICAgbGFuZ3VhZ2U9XCJlbi1VU1wiXHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVVNDUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkNhcnRQcm92aWRlciIsIlVTQ1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJtb2RlIiwiY2FydE1vZGUiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSSVBFX0tFWSIsInN1Y2Nlc3NVcmwiLCJjYW5jZWxVcmwiLCJjdXJyZW5jeSIsImJpbGxpbmdBZGRyZXNzQ29sbGVjdGlvbiIsInNob3VsZFBlcnNpc3QiLCJsYW5ndWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Providers.tsx\n"));

/***/ })

});