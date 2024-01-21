"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/redux-thunk";
exports.ids = ["vendor-chunks/redux-thunk"];
exports.modules = {

/***/ "(ssr)/./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/** A function that accepts a potential \"extra argument\" value to be injected later,\r\n * and returns an instance of the thunk middleware that uses that value\r\n */ function createThunkMiddleware(extraArgument) {\n    // Standard Redux middleware definition pattern:\n    // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware\n    var middleware = function middleware(_ref) {\n        var dispatch = _ref.dispatch, getState = _ref.getState;\n        return function(next) {\n            return function(action) {\n                // The thunk middleware looks for any functions that were passed to `store.dispatch`.\n                // If this \"action\" is really a function, call it and return the result.\n                if (typeof action === \"function\") {\n                    // Inject the store's `dispatch` and `getState` methods, as well as any \"extra arg\"\n                    return action(dispatch, getState, extraArgument);\n                } // Otherwise, pass the action down the middleware chain as usual\n                return next(action);\n            };\n        };\n    };\n    return middleware;\n}\nvar thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version\n// with whatever \"extra arg\" they want to inject into their thunks\nthunk.withExtraArgument = createThunkMiddleware;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thunk);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztDQUVDLEdBQ0QsU0FBU0Esc0JBQXNCQyxhQUFhO0lBQzFDLGdEQUFnRDtJQUNoRCwwRkFBMEY7SUFDMUYsSUFBSUMsYUFBYSxTQUFTQSxXQUFXQyxJQUFJO1FBQ3ZDLElBQUlDLFdBQVdELEtBQUtDLFFBQVEsRUFDeEJDLFdBQVdGLEtBQUtFLFFBQVE7UUFDNUIsT0FBTyxTQUFVQyxJQUFJO1lBQ25CLE9BQU8sU0FBVUMsTUFBTTtnQkFDckIscUZBQXFGO2dCQUNyRix3RUFBd0U7Z0JBQ3hFLElBQUksT0FBT0EsV0FBVyxZQUFZO29CQUNoQyxtRkFBbUY7b0JBQ25GLE9BQU9BLE9BQU9ILFVBQVVDLFVBQVVKO2dCQUNwQyxFQUFFLGdFQUFnRTtnQkFHbEUsT0FBT0ssS0FBS0M7WUFDZDtRQUNGO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUO0FBRUEsSUFBSU0sUUFBUVIseUJBQXlCLHVFQUF1RTtBQUM1RyxrRUFBa0U7QUFFbEVRLE1BQU1DLGlCQUFpQixHQUFHVDtBQUMxQixpRUFBZVEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9lcy9pbmRleC5qcz81MTFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHBvdGVudGlhbCBcImV4dHJhIGFyZ3VtZW50XCIgdmFsdWUgdG8gYmUgaW5qZWN0ZWQgbGF0ZXIsXHJcbiAqIGFuZCByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSB0aHVuayBtaWRkbGV3YXJlIHRoYXQgdXNlcyB0aGF0IHZhbHVlXHJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKGV4dHJhQXJndW1lbnQpIHtcbiAgLy8gU3RhbmRhcmQgUmVkdXggbWlkZGxld2FyZSBkZWZpbml0aW9uIHBhdHRlcm46XG4gIC8vIFNlZTogaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjd3JpdGluZy1jdXN0b20tbWlkZGxld2FyZVxuICB2YXIgbWlkZGxld2FyZSA9IGZ1bmN0aW9uIG1pZGRsZXdhcmUoX3JlZikge1xuICAgIHZhciBkaXNwYXRjaCA9IF9yZWYuZGlzcGF0Y2gsXG4gICAgICAgIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIC8vIFRoZSB0aHVuayBtaWRkbGV3YXJlIGxvb2tzIGZvciBhbnkgZnVuY3Rpb25zIHRoYXQgd2VyZSBwYXNzZWQgdG8gYHN0b3JlLmRpc3BhdGNoYC5cbiAgICAgICAgLy8gSWYgdGhpcyBcImFjdGlvblwiIGlzIHJlYWxseSBhIGZ1bmN0aW9uLCBjYWxsIGl0IGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAvLyBJbmplY3QgdGhlIHN0b3JlJ3MgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBtZXRob2RzLCBhcyB3ZWxsIGFzIGFueSBcImV4dHJhIGFyZ1wiXG4gICAgICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhQXJndW1lbnQpO1xuICAgICAgICB9IC8vIE90aGVyd2lzZSwgcGFzcyB0aGUgYWN0aW9uIGRvd24gdGhlIG1pZGRsZXdhcmUgY2hhaW4gYXMgdXN1YWxcblxuXG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIG1pZGRsZXdhcmU7XG59XG5cbnZhciB0aHVuayA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZSgpOyAvLyBBdHRhY2ggdGhlIGZhY3RvcnkgZnVuY3Rpb24gc28gdXNlcnMgY2FuIGNyZWF0ZSBhIGN1c3RvbWl6ZWQgdmVyc2lvblxuLy8gd2l0aCB3aGF0ZXZlciBcImV4dHJhIGFyZ1wiIHRoZXkgd2FudCB0byBpbmplY3QgaW50byB0aGVpciB0aHVua3NcblxudGh1bmsud2l0aEV4dHJhQXJndW1lbnQgPSBjcmVhdGVUaHVua01pZGRsZXdhcmU7XG5leHBvcnQgZGVmYXVsdCB0aHVuazsiXSwibmFtZXMiOlsiY3JlYXRlVGh1bmtNaWRkbGV3YXJlIiwiZXh0cmFBcmd1bWVudCIsIm1pZGRsZXdhcmUiLCJfcmVmIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJhY3Rpb24iLCJ0aHVuayIsIndpdGhFeHRyYUFyZ3VtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/redux-thunk/es/index.js\n");

/***/ })

};
;