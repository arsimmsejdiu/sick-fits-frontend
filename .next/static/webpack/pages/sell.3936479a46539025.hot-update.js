"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sell",{

/***/ "./components/CreateProduct.jsx":
/*!**************************************!*\
  !*** ./components/CreateProduct.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction CreateProduct() {\n    _s();\n    var ref = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        image: \"\",\n        name: \"Nice Shoes\",\n        price: 1234,\n        description: \"These are the best shoes you will ever own\"\n    }), inputs = ref.inputs, handleChange = ref.handleChange, resetForms = ref.resetForms, clearForm = ref.clearForm;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        onSubmit: function(e) {\n            e.preventDefault();\n            console.log(inputs);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"image\",\n                    children: [\n                        \"Image\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            required: true,\n                            type: \"file\",\n                            id: \"image\",\n                            name: \"image\",\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\CreateProduct.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\CreateProduct.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"name\",\n                    children: [\n                        \"Name\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"name\",\n                            placeholder: \"Name ... \",\n                            value: inputs.name,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\CreateProduct.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\CreateProduct.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"price\",\n                    children: [\n                        \"Price\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            id: \"price\",\n                            name: \"price\",\n                            placeholder: \"price ... \",\n                            value: inputs.price,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\CreateProduct.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\CreateProduct.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"description\",\n                    children: [\n                        \"Description\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"description\",\n                            name: \"description\",\n                            placeholder: \"Description ... \",\n                            value: inputs.description,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\CreateProduct.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\CreateProduct.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"+ Add Product\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\CreateProduct.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\CreateProduct.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Arsimis stuff\\\\Cimas Stuff\\\\React projects\\\\sick-fits\\\\frontend\\\\components\\\\CreateProduct.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n};\n_s(CreateProduct, \"qC6NiXfSwQmeplemaNjcW3Jm1Pc=\", false, function() {\n    return [\n        _lib_useForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = CreateProduct;\nvar _c;\n$RefreshReg$(_c, \"CreateProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvQztBQUNKOztBQUVqQixRQUFRLENBQUNFLGFBQWEsR0FBRyxDQUFDOztJQUN2QyxHQUFLLENBQW1ERixHQUt0RCxHQUxzREEsd0RBQU8sQ0FBQyxDQUFDO1FBQy9ERyxLQUFLLEVBQUUsQ0FBRTtRQUNUQyxJQUFJLEVBQUUsQ0FBWTtRQUNsQkMsS0FBSyxFQUFFLElBQUk7UUFDWEMsV0FBVyxFQUFFLENBQTRDO0lBQzNELENBQUMsR0FMT0MsTUFBTSxHQUEwQ1AsR0FLdEQsQ0FMTU8sTUFBTSxFQUFFQyxZQUFZLEdBQTRCUixHQUt0RCxDQUxjUSxZQUFZLEVBQUVDLFVBQVUsR0FBZ0JULEdBS3RELENBTDRCUyxVQUFVLEVBQUVDLFNBQVMsR0FBS1YsR0FLdEQsQ0FMd0NVLFNBQVM7SUFPbkQsTUFBTSw2RUFDSFQsb0RBQUk7UUFBQ1UsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7WUFDdEJBLENBQUMsQ0FBQ0MsY0FBYztZQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLE1BQU07UUFDcEIsQ0FBQzs4RkFDRVMsQ0FBUTs7NEZBQ05DLENBQUs7b0JBQUNDLE9BQU8sRUFBQyxDQUFPOzt3QkFBQyxDQUVyQjtvR0FBQ0MsQ0FBSzs0QkFBQ0MsUUFBUTs0QkFBQ0MsSUFBSSxFQUFDLENBQU07NEJBQUNDLEVBQUUsRUFBQyxDQUFPOzRCQUFDbEIsSUFBSSxFQUFDLENBQU87NEJBQUNtQixRQUFRLEVBQUVmLFlBQVk7Ozs7Ozs7Ozs7Ozs0RkFFM0VTLENBQUs7b0JBQUNDLE9BQU8sRUFBQyxDQUFNOzt3QkFBQyxDQUVwQjtvR0FBQ0MsQ0FBSzs0QkFDSkUsSUFBSSxFQUFDLENBQU07NEJBQ1hDLEVBQUUsRUFBQyxDQUFNOzRCQUNUbEIsSUFBSSxFQUFDLENBQU07NEJBQ1hvQixXQUFXLEVBQUMsQ0FBVzs0QkFDdkJDLEtBQUssRUFBRWxCLE1BQU0sQ0FBQ0gsSUFBSTs0QkFDbEJtQixRQUFRLEVBQUVmLFlBQVk7Ozs7Ozs7Ozs7Ozs0RkFHekJTLENBQUs7b0JBQUNDLE9BQU8sRUFBQyxDQUFPOzt3QkFBQyxDQUVyQjtvR0FBQ0MsQ0FBSzs0QkFDSkUsSUFBSSxFQUFDLENBQVE7NEJBQ2JDLEVBQUUsRUFBQyxDQUFPOzRCQUNWbEIsSUFBSSxFQUFDLENBQU87NEJBQ1pvQixXQUFXLEVBQUMsQ0FBWTs0QkFDeEJDLEtBQUssRUFBRWxCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDbkJrQixRQUFRLEVBQUVmLFlBQVk7Ozs7Ozs7Ozs7Ozs0RkFHekJTLENBQUs7b0JBQUNDLE9BQU8sRUFBQyxDQUFhOzt3QkFBQyxDQUUzQjtvR0FBQ1EsQ0FBUTs0QkFDUEosRUFBRSxFQUFDLENBQWE7NEJBQ2hCbEIsSUFBSSxFQUFDLENBQWE7NEJBQ2xCb0IsV0FBVyxFQUFDLENBQWtCOzRCQUM5QkMsS0FBSyxFQUFFbEIsTUFBTSxDQUFDRCxXQUFXOzRCQUN6QmlCLFFBQVEsRUFBRWYsWUFBWTs7Ozs7Ozs7Ozs7OzRGQUd6Qm1CLENBQU07b0JBQUNOLElBQUksRUFBQyxDQUFROzhCQUFDLENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNDLENBQUM7R0F0RHVCbkIsYUFBYTs7UUFDcUJGLG9EQUFPOzs7S0FEekNFLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzeD8zMjMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9zdHlsZXMvRm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvZHVjdCgpIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm1zLCBjbGVhckZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgaW1hZ2U6IFwiXCIsXHJcbiAgICBuYW1lOiBcIk5pY2UgU2hvZXNcIixcclxuICAgIHByaWNlOiAxMjM0LFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhlc2UgYXJlIHRoZSBiZXN0IHNob2VzIHlvdSB3aWxsIGV2ZXIgb3duXCIsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG4gICAgfX0+XHJcbiAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+XHJcbiAgICAgICAgICBJbWFnZVxyXG4gICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJmaWxlXCIgaWQ9XCJpbWFnZVwiIG5hbWU9XCJpbWFnZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgIE5hbWVcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIC4uLiBcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlxyXG4gICAgICAgICAgUHJpY2VcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicHJpY2UgLi4uIFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiAuLi4gXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4rIEFkZCBQcm9kdWN0PC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRm9ybSIsIkZvcm0iLCJDcmVhdGVQcm9kdWN0IiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybXMiLCJjbGVhckZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmaWVsZHNldCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwicmVxdWlyZWQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CreateProduct.jsx\n");

/***/ })

});