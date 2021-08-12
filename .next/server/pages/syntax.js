"use strict";
(() => {
var exports = {};
exports.id = "pages/syntax";
exports.ids = ["pages/syntax"];
exports.modules = {

/***/ "./pages/syntax.js":
/*!*************************!*\
  !*** ./pages/syntax.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Projects\\NextJsExamples\\pages\\syntax.js";


const Syntax = () => {
  const {
    0: checkboxValue,
    1: setCheckboxValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log('in useEffect');
    return () => {
      console.log('in useEffect Cleanup');
    };
  }, [checkboxValue]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "checkbox",
      checked: checkboxValue,
      onChange: () => {
        setCheckboxValue(!checkboxValue);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 14
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Syntax);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/syntax.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc3ludGF4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsTUFBTUcsTUFBTSxHQUFHLE1BQU07QUFFakIsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NILCtDQUFRLENBQUMsS0FBRCxDQUFsRDtBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQUk7QUFDVkssSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUVBLFdBQU8sTUFBTTtBQUNURCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNILEtBRkQ7QUFJSCxHQVBRLEVBT1AsQ0FBQ0gsYUFBRCxDQVBPLENBQVQ7QUFTQSxzQkFDSTtBQUFBLDJCQUFLO0FBQU8sVUFBSSxFQUFDLFVBQVo7QUFBdUIsYUFBTyxFQUFFQSxhQUFoQztBQUErQyxjQUFRLEVBQUUsTUFBSTtBQUFDQyxRQUFBQSxnQkFBZ0IsQ0FBQyxDQUFDRCxhQUFGLENBQWhCO0FBQWtDO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFJSCxDQWpCRDs7QUFtQkEsaUVBQWVELE1BQWY7Ozs7Ozs7Ozs7QUN0QkE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL05leHRKc0V4YW1wbGVzLy4vcGFnZXMvc3ludGF4LmpzIiwid2VicGFjazovL05leHRKc0V4YW1wbGVzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9OZXh0SnNFeGFtcGxlcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuY29uc3QgU3ludGF4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjaGVja2JveFZhbHVlLCBzZXRDaGVja2JveFZhbHVlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZygnaW4gdXNlRWZmZWN0Jyk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbiB1c2VFZmZlY3QgQ2xlYW51cCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFtjaGVja2JveFZhbHVlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2NoZWNrYm94VmFsdWV9IG9uQ2hhbmdlPXsoKT0+e3NldENoZWNrYm94VmFsdWUoIWNoZWNrYm94VmFsdWUpO319PjwvaW5wdXQ+PC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ludGF4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN5bnRheCIsImNoZWNrYm94VmFsdWUiLCJzZXRDaGVja2JveFZhbHVlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=