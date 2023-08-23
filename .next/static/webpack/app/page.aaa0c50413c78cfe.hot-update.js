"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/@core/layouts/components/vertical/navigation/VerticalNavHeader.js":
/*!***********************************************************************************!*\
  !*** ./src/app/@core/layouts/components/vertical/navigation/VerticalNavHeader.js ***!
  \***********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../configs/themeConfig */ \"(app-pages-browser)/./src/app/configs/themeConfig.js\");\n// ** Next Import\n\nvar _s = $RefreshSig$();\n\n// ** MUI Imports\n\n\n\n// ** Configs\n\n// ** Styled Components\nconst MenuHeaderWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((param)=>{\n    let { theme } = param;\n    return {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"space-between\",\n        paddingRight: theme.spacing(4.5),\n        transition: \"padding .25s ease-in-out\",\n        minHeight: theme.mixins.toolbar.minHeight\n    };\n});\n_c = MenuHeaderWrapper;\nconst HeaderTitle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((param)=>{\n    let { theme } = param;\n    return {\n        fontWeight: 600,\n        lineHeight: \"normal\",\n        textTransform: \"uppercase\",\n        color: theme.palette.text.secondary,\n        transition: \"opacity .25s ease-in-out, margin .25s ease-in-out\"\n    };\n});\n_c1 = HeaderTitle;\nconst StyledLink = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"a\")({\n    display: \"flex\",\n    alignItems: \"center\",\n    textDecoration: \"none\"\n});\n_c2 = StyledLink;\nconst VerticalNavHeader = (props)=>{\n    _s();\n    // ** Props\n    const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props;\n    // ** Hooks\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuHeaderWrapper, {\n        className: \"nav-header\",\n        sx: {\n            pl: 6\n        },\n        children: userVerticalNavMenuBranding ? userVerticalNavMenuBranding(props) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/\",\n            passHref: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledLink, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        width: 30,\n                        height: 25,\n                        version: \"1.1\",\n                        viewBox: \"0 0 30 23\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                            stroke: \"none\",\n                            strokeWidth: \"1\",\n                            fill: \"none\",\n                            fillRule: \"evenodd\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                id: \"Artboard\",\n                                transform: \"translate(-95.000000, -51.000000)\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                    id: \"logo\",\n                                    transform: \"translate(95.000000, 50.000000)\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            id: \"Combined-Shape\",\n                                            fill: theme.palette.secondary.main,\n                                            d: \"M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                                            id: \"Rectangle\",\n                                            opacity: \"0.077704\",\n                                            fill: theme.palette.common.black,\n                                            points: \"0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                                            id: \"Rectangle\",\n                                            opacity: \"0.077704\",\n                                            fill: theme.palette.common.black,\n                                            points: \"0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                                            id: \"Rectangle\",\n                                            opacity: \"0.077704\",\n                                            fill: theme.palette.common.black,\n                                            points: \"22.7419355 8.58870968 30 12.7417372 30 16.9537453\",\n                                            transform: \"translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) \"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                                            id: \"Rectangle\",\n                                            opacity: \"0.077704\",\n                                            fill: theme.palette.common.black,\n                                            points: \"22.7419355 8.58870968 30 12.6409734 30 15.2601969\",\n                                            transform: \"translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) \"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            id: \"Rectangle\",\n                                            fillOpacity: \"0.15\",\n                                            fill: theme.palette.common.white,\n                                            d: \"M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            id: \"Rectangle\",\n                                            fillOpacity: \"0.35\",\n                                            fill: theme.palette.common.white,\n                                            transform: \"translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) \",\n                                            d: \"M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderTitle, {\n                        variant: \"h6\",\n                        sx: {\n                            ml: 3\n                        },\n                        children: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].templateName\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n                lineNumber: 49,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\@core\\\\layouts\\\\components\\\\vertical\\\\navigation\\\\VerticalNavHeader.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VerticalNavHeader, \"VrMvFCCB9Haniz3VCRPNUiCauHs=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c3 = VerticalNavHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerticalNavHeader);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"MenuHeaderWrapper\");\n$RefreshReg$(_c1, \"HeaderTitle\");\n$RefreshReg$(_c2, \"StyledLink\");\n$RefreshReg$(_c3, \"VerticalNavHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQGNvcmUvbGF5b3V0cy9jb21wb25lbnRzL3ZlcnRpY2FsL25hdmlnYXRpb24vVmVydGljYWxOYXZIZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCOzs7QUFDVztBQUU1QixpQkFBaUI7QUFDa0I7QUFDb0I7QUFDTjtBQUVqRCxhQUFhO0FBQytDO0FBRTVELHVCQUF1QjtBQUN2QixNQUFNTSxvQkFBb0JKLGdFQUFNQSxDQUFDRCx5REFBR0EsRUFBRTtRQUFDLEVBQUVNLEtBQUssRUFBRTtXQUFNO1FBQ3BEQyxTQUFTO1FBQ1RDLFlBQVk7UUFDWkMsZ0JBQWdCO1FBQ2hCQyxjQUFjSixNQUFNSyxPQUFPLENBQUM7UUFDNUJDLFlBQVk7UUFDWkMsV0FBV1AsTUFBTVEsTUFBTSxDQUFDQyxPQUFPLENBQUNGLFNBQVM7SUFDM0M7QUFBQTtLQVBNUjtBQVNOLE1BQU1XLGNBQWNmLGdFQUFNQSxDQUFDRSxnRUFBVUEsRUFBRTtRQUFDLEVBQUVHLEtBQUssRUFBRTtXQUFNO1FBQ3JEVyxZQUFZO1FBQ1pDLFlBQVk7UUFDWkMsZUFBZTtRQUNmQyxPQUFPZCxNQUFNZSxPQUFPLENBQUNDLElBQUksQ0FBQ0MsU0FBUztRQUNuQ1gsWUFBWTtJQUNkO0FBQUE7TUFOTUk7QUFRTixNQUFNUSxhQUFhdkIsZ0VBQU1BLENBQUMsS0FBSztJQUM3Qk0sU0FBUztJQUNUQyxZQUFZO0lBQ1ppQixnQkFBZ0I7QUFDbEI7TUFKTUQ7QUFNTixNQUFNRSxvQkFBb0JDLENBQUFBOztJQUN4QixXQUFXO0lBQ1gsTUFBTSxFQUFFQyx5QkFBeUJDLDJCQUEyQixFQUFFLEdBQUdGO0lBRWpFLFdBQVc7SUFDWCxNQUFNckIsUUFBUUosZ0VBQVFBO0lBRXRCLHFCQUNFLDhEQUFDRztRQUFrQnlCLFdBQVU7UUFBYUMsSUFBSTtZQUFFQyxJQUFJO1FBQUU7a0JBQ25ESCw4QkFDQ0EsNEJBQTRCRix1QkFFNUIsOERBQUM1QixrREFBSUE7WUFBQ2tDLE1BQUs7WUFBSUMsUUFBUTtzQkFDckIsNEVBQUNWOztrQ0FDQyw4REFBQ1c7d0JBQ0NDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLFNBQVE7d0JBQ1JDLFNBQVE7d0JBQ1JDLE9BQU07d0JBQ05DLFlBQVc7a0NBRVgsNEVBQUNDOzRCQUFFQyxRQUFPOzRCQUFPQyxhQUFZOzRCQUFJQyxNQUFLOzRCQUFPQyxVQUFTO3NDQUNwRCw0RUFBQ0o7Z0NBQUVLLElBQUc7Z0NBQVdDLFdBQVU7MENBQ3pCLDRFQUFDTjtvQ0FBRUssSUFBRztvQ0FBT0MsV0FBVTs7c0RBQ3JCLDhEQUFDQzs0Q0FDQ0YsSUFBRzs0Q0FDSEYsTUFBTXZDLE1BQU1lLE9BQU8sQ0FBQ0UsU0FBUyxDQUFDMkIsSUFBSTs0Q0FDbENDLEdBQUU7Ozs7OztzREFFSiw4REFBQ0M7NENBQ0NMLElBQUc7NENBQ0hNLFNBQVE7NENBQ1JSLE1BQU12QyxNQUFNZSxPQUFPLENBQUNpQyxNQUFNLENBQUNDLEtBQUs7NENBQ2hDQyxRQUFPOzs7Ozs7c0RBRVQsOERBQUNKOzRDQUNDTCxJQUFHOzRDQUNITSxTQUFROzRDQUNSUixNQUFNdkMsTUFBTWUsT0FBTyxDQUFDaUMsTUFBTSxDQUFDQyxLQUFLOzRDQUNoQ0MsUUFBTzs7Ozs7O3NEQUVULDhEQUFDSjs0Q0FDQ0wsSUFBRzs0Q0FDSE0sU0FBUTs0Q0FDUlIsTUFBTXZDLE1BQU1lLE9BQU8sQ0FBQ2lDLE1BQU0sQ0FBQ0MsS0FBSzs0Q0FDaENDLFFBQU87NENBQ1BSLFdBQVU7Ozs7OztzREFFWiw4REFBQ0k7NENBQ0NMLElBQUc7NENBQ0hNLFNBQVE7NENBQ1JSLE1BQU12QyxNQUFNZSxPQUFPLENBQUNpQyxNQUFNLENBQUNDLEtBQUs7NENBQ2hDQyxRQUFPOzRDQUNQUixXQUFVOzs7Ozs7c0RBRVosOERBQUNDOzRDQUNDRixJQUFHOzRDQUNIVSxhQUFZOzRDQUNaWixNQUFNdkMsTUFBTWUsT0FBTyxDQUFDaUMsTUFBTSxDQUFDSSxLQUFLOzRDQUNoQ1AsR0FBRTs7Ozs7O3NEQUVKLDhEQUFDRjs0Q0FDQ0YsSUFBRzs0Q0FDSFUsYUFBWTs0Q0FDWlosTUFBTXZDLE1BQU1lLE9BQU8sQ0FBQ2lDLE1BQU0sQ0FBQ0ksS0FBSzs0Q0FDaENWLFdBQVU7NENBQ1ZHLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNWiw4REFBQ25DO3dCQUFZMkMsU0FBUTt3QkFBSzVCLElBQUk7NEJBQUU2QixJQUFJO3dCQUFFO2tDQUNuQ3hELDREQUFXQSxDQUFDeUQsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92QztHQWpGTW5DOztRQUtVeEIsNERBQVFBOzs7TUFMbEJ3QjtBQW1GTiwrREFBZUEsaUJBQWlCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQGNvcmUvbGF5b3V0cy9jb21wb25lbnRzL3ZlcnRpY2FsL25hdmlnYXRpb24vVmVydGljYWxOYXZIZWFkZXIuanM/NjMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKiBOZXh0IEltcG9ydFxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG4vLyAqKiBNVUkgSW1wb3J0c1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94J1xyXG5pbXBvcnQgeyBzdHlsZWQsIHVzZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSdcclxuXHJcbi8vICoqIENvbmZpZ3NcclxuaW1wb3J0IHRoZW1lQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbmZpZ3MvdGhlbWVDb25maWcnXHJcblxyXG4vLyAqKiBTdHlsZWQgQ29tcG9uZW50c1xyXG5jb25zdCBNZW51SGVhZGVyV3JhcHBlciA9IHN0eWxlZChCb3gpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDQuNSksXHJcbiAgdHJhbnNpdGlvbjogJ3BhZGRpbmcgLjI1cyBlYXNlLWluLW91dCcsXHJcbiAgbWluSGVpZ2h0OiB0aGVtZS5taXhpbnMudG9vbGJhci5taW5IZWlnaHRcclxufSkpXHJcblxyXG5jb25zdCBIZWFkZXJUaXRsZSA9IHN0eWxlZChUeXBvZ3JhcGh5KSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGZvbnRXZWlnaHQ6IDYwMCxcclxuICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcclxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAuMjVzIGVhc2UtaW4tb3V0LCBtYXJnaW4gLjI1cyBlYXNlLWluLW91dCdcclxufSkpXHJcblxyXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKCdhJykoe1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXHJcbn0pXHJcblxyXG5jb25zdCBWZXJ0aWNhbE5hdkhlYWRlciA9IHByb3BzID0+IHtcclxuICAvLyAqKiBQcm9wc1xyXG4gIGNvbnN0IHsgdmVydGljYWxOYXZNZW51QnJhbmRpbmc6IHVzZXJWZXJ0aWNhbE5hdk1lbnVCcmFuZGluZyB9ID0gcHJvcHNcclxuXHJcbiAgLy8gKiogSG9va3NcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51SGVhZGVyV3JhcHBlciBjbGFzc05hbWU9J25hdi1oZWFkZXInIHN4PXt7IHBsOiA2IH19PlxyXG4gICAgICB7dXNlclZlcnRpY2FsTmF2TWVudUJyYW5kaW5nID8gKFxyXG4gICAgICAgIHVzZXJWZXJ0aWNhbE5hdk1lbnVCcmFuZGluZyhwcm9wcylcclxuICAgICAgKSA6IChcclxuICAgICAgICA8TGluayBocmVmPScvJyBwYXNzSHJlZj5cclxuICAgICAgICAgIDxTdHlsZWRMaW5rPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjV9XHJcbiAgICAgICAgICAgICAgdmVyc2lvbj0nMS4xJ1xyXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAzMCAyMydcclxuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgICAgeG1sbnNYbGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxnIHN0cm9rZT0nbm9uZScgc3Ryb2tlV2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGxSdWxlPSdldmVub2RkJz5cclxuICAgICAgICAgICAgICAgIDxnIGlkPSdBcnRib2FyZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTk1LjAwMDAwMCwgLTUxLjAwMDAwMCknPlxyXG4gICAgICAgICAgICAgICAgICA8ZyBpZD0nbG9nbycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoOTUuMDAwMDAwLCA1MC4wMDAwMDApJz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J0NvbWJpbmVkLVNoYXBlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD17dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGQ9J00zMCwyMS4zOTE4MzYyIEMzMCwyMS43NTM1MjE5IDI5LjkwMTkxOTYsMjIuMTA4NDM4MSAyOS43MTYyMDA0LDIyLjQxODgwMDcgQzI5LjE0OTAyMzYsMjMuMzY2NjMyIDI3LjkyMDg2NjgsMjMuNjc1MjEzNSAyNi45NzMwMzU1LDIzLjEwODAzNjYgTDI2Ljk3MzAzNTUsMjMuMTA4MDM2NiBMMjMuNzE0OTcxLDIxLjE1ODQyOTUgQzIzLjExMTQxMDYsMjAuNzk3MjYyNCAyMi43NDE5MzU1LDIwLjE0NTU5NzIgMjIuNzQxOTM1NSwxOS40NDIyMjkxIEwyMi43NDE5MzU1LDE5LjQ0MjIyOTEgTDIyLjc0MSwxMi43NDI1Njg5IEwxNSwxNy4xNzc0MTk0IEw3LjI1OCwxMi43NDI1Njg5IEw3LjI1ODA2NDUyLDE5LjQ0MjIyOTEgQzcuMjU4MDY0NTIsMjAuMTQ1NTk3MiA2Ljg4ODU4OTM1LDIwLjc5NzI2MjQgNi4yODUwMjkwMiwyMS4xNTg0Mjk1IEwzLjAyNjk2NDUsMjMuMTA4MDM2NiBDMi4wNzkxMzMxOCwyMy42NzUyMTM1IDAuODUwOTc2NDA0LDIzLjM2NjYzMiAwLjI4Mzc5OTU3MSwyMi40MTg4MDA3IEMwLjA5ODA4MDM4OTMsMjIuMTA4NDM4MSAyLjAxOTA0NDJlLTE1LDIxLjc1MzUyMTkgMCwyMS4zOTE4MzYyIEwwLDMuNTg0Njk0NDQgTDAuMDA1NDg1NzM2NDMsMy40MzU0MzIwOSBMMC4wMDU0ODU3MzY0MywzLjQzNTQzMjA5IEwwLDMuNTcxNTY4OSBDMy4wODgxODQ2ZS0xNiwyLjQ2Njk5OTQgMC44OTU0MzA1LDEuNTcxNTY4OSAyLDEuNTcxNTY4OSBDMi4zNjg4OTUyOSwxLjU3MTU2ODkgMi43MzA2MDM1MywxLjY3MzU5NTcxIDMuMDQ1MTI0MTIsMS44NjYzNjYzOSBMMTUsOS4xOTM1NDgzOSBMMjYuOTU0ODc1OSwxLjg2NjM2NjM5IEMyNy4yNjkzOTY1LDEuNjczNTk1NzEgMjcuNjMxMTA0NywxLjU3MTU2ODkgMjgsMS41NzE1Njg5IEMyOS4xMDQ1Njk1LDEuNTcxNTY4OSAzMCwyLjQ2Njk5OTQgMzAsMy41NzE1Njg5IEwzMCwzLjU3MTU2ODkgWidcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nUmVjdGFuZ2xlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT0nMC4wNzc3MDQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPXt0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFja31cclxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50cz0nMCA4LjU4ODcwOTY4IDcuMjU4MDY0NTIgMTIuNzUwNTE4MyA3LjI1ODA2NDUyIDE2LjgzMDU2NDYnXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J1JlY3RhbmdsZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9JzAuMDc3NzA0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD17dGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludHM9JzAgOC41ODg3MDk2OCA3LjI1ODA2NDUyIDEyLjY0NDU1NjcgNy4yNTgwNjQ1MiAxNS4xMzcwMTYyJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdSZWN0YW5nbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PScwLjA3NzcwNCdcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3RoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnRzPScyMi43NDE5MzU1IDguNTg4NzA5NjggMzAgMTIuNzQxNzM3MiAzMCAxNi45NTM3NDUzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjYuMzcwOTY4LCAxMi43NzEyMjcpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTI2LjM3MDk2OCwgLTEyLjc3MTIyNykgJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdSZWN0YW5nbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PScwLjA3NzcwNCdcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3RoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnRzPScyMi43NDE5MzU1IDguNTg4NzA5NjggMzAgMTIuNjQwOTczNCAzMCAxNS4yNjAxOTY5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjYuMzcwOTY4LCAxMS45MjQ0NTMpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTI2LjM3MDk2OCwgLTExLjkyNDQ1MykgJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdSZWN0YW5nbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eT0nMC4xNSdcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3RoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZD0nTTMuMDQ1MTI0MTIsMS44NjYzNjYzOSBMMTUsOS4xOTM1NDgzOSBMMTUsOS4xOTM1NDgzOSBMMTUsMTcuMTc3NDE5NCBMMCw4LjU4NjQ5Njc5IEwwLDMuNTcxNTY4OSBDMy4wODgxODQ2ZS0xNiwyLjQ2Njk5OTQgMC44OTU0MzA1LDEuNTcxNTY4OSAyLDEuNTcxNTY4OSBDMi4zNjg4OTUyOSwxLjU3MTU2ODkgMi43MzA2MDM1MywxLjY3MzU5NTcxIDMuMDQ1MTI0MTIsMS44NjYzNjYzOSBaJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdSZWN0YW5nbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eT0nMC4zNSdcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3RoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjIuNTAwMDAwLCA4LjU4ODcxMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMjIuNTAwMDAwLCAtOC41ODg3MTApICdcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9J00xOC4wNDUxMjQxLDEuODY2MzY2MzkgTDMwLDkuMTkzNTQ4MzkgTDMwLDkuMTkzNTQ4MzkgTDMwLDE3LjE3NzQxOTQgTDE1LDguNTg2NDk2NzkgTDE1LDMuNTcxNTY4OSBDMTUsMi40NjY5OTk0IDE1Ljg5NTQzMDUsMS41NzE1Njg5IDE3LDEuNTcxNTY4OSBDMTcuMzY4ODk1MywxLjU3MTU2ODkgMTcuNzMwNjAzNSwxLjY3MzU5NTcxIDE4LjA0NTEyNDEsMS44NjYzNjYzOSBaJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8SGVhZGVyVGl0bGUgdmFyaWFudD0naDYnIHN4PXt7IG1sOiAzIH19PlxyXG4gICAgICAgICAgICAgIHt0aGVtZUNvbmZpZy50ZW1wbGF0ZU5hbWV9XHJcbiAgICAgICAgICAgIDwvSGVhZGVyVGl0bGU+XHJcbiAgICAgICAgICA8L1N0eWxlZExpbms+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApfVxyXG4gICAgPC9NZW51SGVhZGVyV3JhcHBlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlcnRpY2FsTmF2SGVhZGVyXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiQm94Iiwic3R5bGVkIiwidXNlVGhlbWUiLCJUeXBvZ3JhcGh5IiwidGhlbWVDb25maWciLCJNZW51SGVhZGVyV3JhcHBlciIsInRoZW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdSaWdodCIsInNwYWNpbmciLCJ0cmFuc2l0aW9uIiwibWluSGVpZ2h0IiwibWl4aW5zIiwidG9vbGJhciIsIkhlYWRlclRpdGxlIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIlN0eWxlZExpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsIlZlcnRpY2FsTmF2SGVhZGVyIiwicHJvcHMiLCJ2ZXJ0aWNhbE5hdk1lbnVCcmFuZGluZyIsInVzZXJWZXJ0aWNhbE5hdk1lbnVCcmFuZGluZyIsImNsYXNzTmFtZSIsInN4IiwicGwiLCJocmVmIiwicGFzc0hyZWYiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZlcnNpb24iLCJ2aWV3Qm94IiwieG1sbnMiLCJ4bWxuc1hsaW5rIiwiZyIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZmlsbCIsImZpbGxSdWxlIiwiaWQiLCJ0cmFuc2Zvcm0iLCJwYXRoIiwibWFpbiIsImQiLCJwb2x5Z29uIiwib3BhY2l0eSIsImNvbW1vbiIsImJsYWNrIiwicG9pbnRzIiwiZmlsbE9wYWNpdHkiLCJ3aGl0ZSIsInZhcmlhbnQiLCJtbCIsInRlbXBsYXRlTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/@core/layouts/components/vertical/navigation/VerticalNavHeader.js\n"));

/***/ })

});