"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./components/Product.jsx":
/*!********************************!*\
  !*** ./components/Product.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Product; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ItemStyles */ \"./components/styles/ItemStyles.js\");\n/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ \"./components/styles/Title.js\");\n/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ \"./components/styles/PriceTag.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n\n\n\n\n\n\nfunction Product(param) {\n    var product = param.product;\n    var ref, ref1;\n    // console.log(product.photo.image.publicUrlTransformed);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: product === null || product === void 0 ? void 0 : (ref = product.photo) === null || ref === void 0 ? void 0 : (ref1 = ref.image) === null || ref1 === void 0 ? void 0 : ref1.publicUrlTransformed\n            }, void 0, false, {\n                fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\Product.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/product/\".concat(product === null || product === void 0 ? void 0 : product.id),\n                    children: product === null || product === void 0 ? void 0 : product.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\Product.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\Product.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(product === null || product === void 0 ? void 0 : product.price)\n            }, void 0, false, {\n                fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\Product.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\Product.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n};\n_c = Product;\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDZ0I7QUFDVjtBQUNLO0FBQ0s7QUFFN0IsUUFBUSxDQUFDSyxPQUFPLENBQUMsS0FBVyxFQUFFLENBQUM7UUFBWkMsT0FBTyxHQUFULEtBQVcsQ0FBVEEsT0FBTztRQUl6QkEsR0FBYztJQUg1QixFQUF5RDtJQUN6RCxNQUFNLDZFQUNITCwwREFBVTs7d0ZBQ1JNLENBQUc7Z0JBQUNDLEdBQUcsRUFBRUYsT0FBTyxhQUFQQSxPQUFPLEtBQVBBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxJQUFJLENBQUpBLENBQWMsSUFBZEEsR0FBYyxHQUFkQSxPQUFPLENBQUVHLEtBQUssY0FBZEgsR0FBYyxLQUFkQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLFdBQWRBLEdBQWMsQ0FBRUksS0FBSyx1QkFBckJKLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxJQUFJLENBQUpBLENBQWMsUUFBU0ssb0JBQW9COzs7Ozs7d0ZBQ3BEVCxxREFBSztzR0FDSEYsa0RBQUk7b0JBQUNZLElBQUksRUFBRyxDQUFTLFdBQWMsT0FBWk4sT0FBTyxhQUFQQSxPQUFPLEtBQVBBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsT0FBTyxDQUFFTyxFQUFFOzhCQUFLUCxPQUFPLGFBQVBBLE9BQU8sS0FBUEEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxPQUFPLENBQUVRLElBQUk7Ozs7Ozs7Ozs7O3dGQUV0RFgsd0RBQU87MEJBQUVDLDREQUFXLENBQUNFLE9BQU8sYUFBUEEsT0FBTyxLQUFQQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLE9BQU8sQ0FBRVMsS0FBSzs7Ozs7Ozs7Ozs7O0FBRzFDLENBQUM7S0FYdUJWLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzeD9jMTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEl0ZW1TdHlsZXMgZnJvbSBcIi4vc3R5bGVzL0l0ZW1TdHlsZXNcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL3N0eWxlcy9UaXRsZVwiO1xyXG5pbXBvcnQgUHJpY1RhZyBmcm9tIFwiLi9zdHlsZXMvUHJpY2VUYWdcIjtcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gXCIuLi9saWIvZm9ybWF0TW9uZXlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoeyBwcm9kdWN0IH0pIHtcclxuICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0LnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEl0ZW1TdHlsZXM+XHJcbiAgICAgIDxpbWcgc3JjPXtwcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfSAvPlxyXG4gICAgICA8VGl0bGU+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdD8uaWR9YH0+e3Byb2R1Y3Q/Lm5hbWV9PC9MaW5rPlxyXG4gICAgICA8L1RpdGxlPlxyXG4gICAgICA8UHJpY1RhZz57Zm9ybWF0TW9uZXkocHJvZHVjdD8ucHJpY2UpfTwvUHJpY1RhZz5cclxuICAgIDwvSXRlbVN0eWxlcz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSXRlbVN0eWxlcyIsIlRpdGxlIiwiUHJpY1RhZyIsImZvcm1hdE1vbmV5IiwiUHJvZHVjdCIsInByb2R1Y3QiLCJpbWciLCJzcmMiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJocmVmIiwiaWQiLCJuYW1lIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Product.jsx\n");

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ formatMoney; }\n/* harmony export */ });\nfunction formatMoney() {\n    var amount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;\n    var options = {\n        style: \"currency\",\n        currency: \"USD\",\n        minimumFractionDigits: 2\n    };\n    var formatter = Intl.NumberFormat(\"en-US\", options);\n    return formatter.format(amount);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZm9ybWF0TW9uZXkuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFFBQVEsQ0FBQ0EsV0FBVyxHQUFhLENBQUM7UUFBYkMsTUFBTSxvRUFBRyxDQUFDO0lBQzVDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7UUFDZkMsS0FBSyxFQUFFLENBQVU7UUFDakJDLFFBQVEsRUFBRSxDQUFLO1FBQ2ZDLHFCQUFxQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELEdBQUssQ0FBQ0MsU0FBUyxHQUFHQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFPLFFBQUVOLE9BQU87SUFFcEQsTUFBTSxDQUFDSSxTQUFTLENBQUNHLE1BQU0sQ0FBQ1IsTUFBTTtBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9mb3JtYXRNb25leS5qcz8zZTkwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdE1vbmV5KGFtb3VudCA9IDApIHtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxyXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gIH07XHJcbiAgY29uc3QgZm9ybWF0dGVyID0gSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCBvcHRpb25zKTtcclxuXHJcbiAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoYW1vdW50KTtcclxufVxyXG4iXSwibmFtZXMiOlsiZm9ybWF0TW9uZXkiLCJhbW91bnQiLCJvcHRpb25zIiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/formatMoney.js\n");

/***/ })

});