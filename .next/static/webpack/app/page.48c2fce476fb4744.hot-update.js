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

/***/ "(app-pages-browser)/./src/app/layouts/UserLayout.js":
/*!***************************************!*\
  !*** ./src/app/layouts/UserLayout.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_layouts_VerticalLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@core/layouts/VerticalLayout */ \"(app-pages-browser)/./src/app/@core/layouts/VerticalLayout.js\");\n/* harmony import */ var _navigation_vertical_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/vertical/page */ \"(app-pages-browser)/./src/app/navigation/vertical/page.js\");\n/* harmony import */ var _components_vertical_AppBarContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/vertical/AppBarContent */ \"(app-pages-browser)/./src/app/layouts/components/vertical/AppBarContent.js\");\n/* harmony import */ var _core_hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@core/hooks/useSettings */ \"(app-pages-browser)/./src/app/@core/hooks/useSettings.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"(app-pages-browser)/./src/app/styles/globals.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst UserLayout = (param)=>{\n    let { children } = param;\n    _s();\n    // ** Hooks\n    const { settings, saveSettings } = (0,_core_hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__.useSettings)();\n    /**\r\n   *  The below variable will hide the current layout menu at given screen size.\r\n   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).\r\n   *  You can change the screen size from which you want to hide the current layout menu.\r\n   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,\r\n   *  to know more about what values can be passed to this hook.\r\n   *  ! Do not change this value unless you know what you are doing. It can break the template.\r\n   */ //  const getBreakpoints = () => ({\n    //     values: {\n    //       xs: 0,\n    //       sm: 600,\n    //       md: 900,\n    //       lg: 1200,\n    //       xl: 1536,\n    //     },\n    //   });\n    //   const breakpoints = getBreakpoints(); // Get the breakpoints object\n    //   const hidden = useMediaQuery(`(max-width: ${breakpoints.values.lg}px)`);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_core_layouts_VerticalLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        hidden: hidden,\n        settings: settings,\n        saveSettings: saveSettings,\n        verticalNavItems: (0,_navigation_vertical_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n        verticalAppBarContent: (props // AppBar Content\n        )=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_vertical_AppBarContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                hidden: hidden,\n                settings: settings,\n                saveSettings: saveSettings,\n                toggleNavVisibility: props.toggleNavVisibility\n            }, void 0, false, void 0, void 0),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Dashboard-Pet-App\\\\tail-ease\\\\frontend\\\\src\\\\app\\\\layouts\\\\UserLayout.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserLayout, \"+rs++GUCvdbKo1wl7Bq4lIpLflc=\", false, function() {\n    return [\n        _core_hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__.useSettings\n    ];\n});\n_c = UserLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserLayout);\nvar _c;\n$RefreshReg$(_c, \"UserLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0cy9Vc2VyTGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ1U7QUFDb0I7QUFDSztBQUNGO0FBQ2E7QUFDZjtBQUMxQjtBQUUvQixNQUFNTyxhQUFhO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUM5QixXQUFXO0lBQ1gsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRSxHQUFHSixvRUFBV0E7SUFFOUM7Ozs7Ozs7R0FPQyxHQUNILG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUVSLHdFQUF3RTtJQUN4RSw2RUFBNkU7SUFJM0UscUJBQ0UsOERBQUNILG9FQUFjQTtRQUNiUSxRQUFRQTtRQUNSRixVQUFVQTtRQUNWQyxjQUFjQTtRQUNkRSxrQkFBa0JSLHFFQUFnQkE7UUFFbENTLHVCQUF1QixDQUNyQkMsTUFBTSxpQkFBaUI7eUJBRXZCLDhEQUFDVCwwRUFBcUJBO2dCQUNwQk0sUUFBVUE7Z0JBQ1ZGLFVBQVlBO2dCQUNaQyxjQUFnQkE7Z0JBQ2hCSyxxQkFBdUJELE1BQU1DLG1CQUFtQjs7a0JBSW5EUDs7Ozs7O0FBSVA7R0FqRE1EOztRQUUrQkQsZ0VBQVdBOzs7S0FGMUNDO0FBbUROLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGF5b3V0cy9Vc2VyTGF5b3V0LmpzPzJkNWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBWZXJ0aWNhbExheW91dCBmcm9tICcuLi9AY29yZS9sYXlvdXRzL1ZlcnRpY2FsTGF5b3V0JztcclxuaW1wb3J0IFZlcnRpY2FsTmF2SXRlbXMgZnJvbSAnLi4vbmF2aWdhdGlvbi92ZXJ0aWNhbC9wYWdlJztcclxuaW1wb3J0IFZlcnRpY2FsQXBwQmFyQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvdmVydGljYWwvQXBwQmFyQ29udGVudCc7XHJcbmltcG9ydCB7IHVzZVNldHRpbmdzIH0gZnJvbSAnLi4vQGNvcmUvaG9va3MvdXNlU2V0dGluZ3MnO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuXHJcbmNvbnN0IFVzZXJMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgLy8gKiogSG9va3NcclxuICBjb25zdCB7IHNldHRpbmdzLCBzYXZlU2V0dGluZ3MgfSA9IHVzZVNldHRpbmdzKClcclxuXHJcbiAgLyoqXHJcbiAgICogIFRoZSBiZWxvdyB2YXJpYWJsZSB3aWxsIGhpZGUgdGhlIGN1cnJlbnQgbGF5b3V0IG1lbnUgYXQgZ2l2ZW4gc2NyZWVuIHNpemUuXHJcbiAgICogIFRoZSBtZW51IHdpbGwgYmUgYWNjZXNzaWJsZSBmcm9tIHRoZSBIYW1idXJnZXIgaWNvbiBvbmx5IChWZXJ0aWNhbCBPdmVybGF5IE1lbnUpLlxyXG4gICAqICBZb3UgY2FuIGNoYW5nZSB0aGUgc2NyZWVuIHNpemUgZnJvbSB3aGljaCB5b3Ugd2FudCB0byBoaWRlIHRoZSBjdXJyZW50IGxheW91dCBtZW51LlxyXG4gICAqICBQbGVhc2UgcmVmZXIgdXNlTWVkaWFRdWVyeSgpIGhvb2s6IGh0dHBzOi8vbXVpLmNvbS9jb21wb25lbnRzL3VzZS1tZWRpYS1xdWVyeS8sXHJcbiAgICogIHRvIGtub3cgbW9yZSBhYm91dCB3aGF0IHZhbHVlcyBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgaG9vay5cclxuICAgKiAgISBEbyBub3QgY2hhbmdlIHRoaXMgdmFsdWUgdW5sZXNzIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy4gSXQgY2FuIGJyZWFrIHRoZSB0ZW1wbGF0ZS5cclxuICAgKi9cclxuLy8gIGNvbnN0IGdldEJyZWFrcG9pbnRzID0gKCkgPT4gKHtcclxuLy8gICAgIHZhbHVlczoge1xyXG4vLyAgICAgICB4czogMCxcclxuLy8gICAgICAgc206IDYwMCxcclxuLy8gICAgICAgbWQ6IDkwMCxcclxuLy8gICAgICAgbGc6IDEyMDAsXHJcbi8vICAgICAgIHhsOiAxNTM2LFxyXG4vLyAgICAgfSxcclxuLy8gICB9KTtcclxuXHJcbi8vICAgY29uc3QgYnJlYWtwb2ludHMgPSBnZXRCcmVha3BvaW50cygpOyAvLyBHZXQgdGhlIGJyZWFrcG9pbnRzIG9iamVjdFxyXG4vLyAgIGNvbnN0IGhpZGRlbiA9IHVzZU1lZGlhUXVlcnkoYChtYXgtd2lkdGg6ICR7YnJlYWtwb2ludHMudmFsdWVzLmxnfXB4KWApO1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxWZXJ0aWNhbExheW91dFxyXG4gICAgICBoaWRkZW49e2hpZGRlbn1cclxuICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxyXG4gICAgICBzYXZlU2V0dGluZ3M9e3NhdmVTZXR0aW5nc31cclxuICAgICAgdmVydGljYWxOYXZJdGVtcz17VmVydGljYWxOYXZJdGVtcygpfSAvLyBOYXZpZ2F0aW9uIEl0ZW1zXHJcbiAgICBcclxuICAgICAgdmVydGljYWxBcHBCYXJDb250ZW50PXsoXHJcbiAgICAgICAgcHJvcHMgLy8gQXBwQmFyIENvbnRlbnRcclxuICAgICAgKSA9PiAoXHJcbiAgICAgICAgPFZlcnRpY2FsQXBwQmFyQ29udGVudFxyXG4gICAgICAgICAgaGlkZGVuID0ge2hpZGRlbn1cclxuICAgICAgICAgIHNldHRpbmdzID0ge3NldHRpbmdzfVxyXG4gICAgICAgICAgc2F2ZVNldHRpbmdzID0ge3NhdmVTZXR0aW5nc31cclxuICAgICAgICAgIHRvZ2dsZU5hdlZpc2liaWxpdHkgPSB7cHJvcHMudG9nZ2xlTmF2VmlzaWJpbGl0eX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIHsvKiA8VXBncmFkZVRvUHJvQnV0dG9uIC8+ICovfVxyXG4gICAgPC9WZXJ0aWNhbExheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJMYXlvdXRcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwidXNlTWVkaWFRdWVyeSIsIlZlcnRpY2FsTGF5b3V0IiwiVmVydGljYWxOYXZJdGVtcyIsIlZlcnRpY2FsQXBwQmFyQ29udGVudCIsInVzZVNldHRpbmdzIiwiVXNlckxheW91dCIsImNoaWxkcmVuIiwic2V0dGluZ3MiLCJzYXZlU2V0dGluZ3MiLCJoaWRkZW4iLCJ2ZXJ0aWNhbE5hdkl0ZW1zIiwidmVydGljYWxBcHBCYXJDb250ZW50IiwicHJvcHMiLCJ0b2dnbGVOYXZWaXNpYmlsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layouts/UserLayout.js\n"));

/***/ })

});