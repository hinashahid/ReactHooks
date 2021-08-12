"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Projects\\NextJsExamples\\pages\\index.js";


const InputElement = () => {
  const {
    0: inputText,
    1: setInputText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: historyList,
    1: setHistoryList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  const onInputChange = e => {
    setInputText(e.target.value);
    setHistoryList([...historyList, e.target.value]);
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      ref: inputRef,
      onChange: onInputChange,
      placeholder: "Enter text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined), inputText, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 14
    }, undefined), historyList.map(history => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: history
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 20
      }, undefined);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: focus,
      children: "Focus Input box"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputElement);

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNRyxZQUFZLEdBQUcsTUFBTTtBQUV2QixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJKLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDSyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ04sK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBRUEsUUFBTU8sUUFBUSxHQUFHTiw2Q0FBTSxFQUF2Qjs7QUFFQSxRQUFNTyxhQUFhLEdBQUlDLENBQUQsSUFBTztBQUN6QkwsSUFBQUEsWUFBWSxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0FMLElBQUFBLGNBQWMsQ0FBQyxDQUFDLEdBQUdELFdBQUosRUFBaUJJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUExQixDQUFELENBQWQ7QUFDSCxHQUhEOztBQUtBLFFBQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2hCTCxJQUFBQSxRQUFRLENBQUNNLE9BQVQsQ0FBaUJELEtBQWpCO0FBQ0gsR0FGRDs7QUFJQSxzQkFBTztBQUFBLDRCQUNIO0FBQU8sU0FBRyxFQUFFTCxRQUFaO0FBQXNCLGNBQVEsRUFBRUMsYUFBaEM7QUFBK0MsaUJBQVcsRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHLGVBRUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRyxFQUVHTCxTQUZILGVBR0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRyxlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFJRkUsV0FBVyxDQUFDUyxHQUFaLENBQWlCQyxPQUFELElBQWE7QUFDMUIsMEJBQU87QUFBQSxrQkFBTUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0gsS0FGQSxDQUpFLGVBT0g7QUFBUSxhQUFPLEVBQUVILEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBU0gsQ0F6QkQ7O0FBMEJBLGlFQUFlVixZQUFmOzs7Ozs7Ozs7O0FDNUJBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SnNFeGFtcGxlcy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL05leHRKc0V4YW1wbGVzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9OZXh0SnNFeGFtcGxlcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbnB1dEVsZW1lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2hpc3RvcnlMaXN0LCBzZXRIaXN0b3J5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBvbklucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldEhpc3RvcnlMaXN0KFsuLi5oaXN0b3J5TGlzdCwgZS50YXJnZXQudmFsdWVdKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb2N1cyA9ICgpID0+IHtcclxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSBwbGFjZWhvbGRlcj1cIkVudGVyIHRleHRcIiAvPlxyXG4gICAgICAgIDxici8+e2lucHV0VGV4dH1cclxuICAgICAgICA8aHIvPjxici8+XHJcbiAgICAgICAge2hpc3RvcnlMaXN0Lm1hcCgoaGlzdG9yeSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdj57aGlzdG9yeX08L2Rpdj5cclxuICAgICAgICB9KX1cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZvY3VzfT5Gb2N1cyBJbnB1dCBib3g8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSW5wdXRFbGVtZW50IiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0IiwiaGlzdG9yeUxpc3QiLCJzZXRIaXN0b3J5TGlzdCIsImlucHV0UmVmIiwib25JbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvY3VzIiwiY3VycmVudCIsIm1hcCIsImhpc3RvcnkiXSwic291cmNlUm9vdCI6IiJ9