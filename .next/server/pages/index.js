(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (InputElement);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SnNFeGFtcGxlcy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL05leHRKc0V4YW1wbGVzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9OZXh0SnNFeGFtcGxlcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsInVzZVN0YXRlIiwiaGlzdG9yeUxpc3QiLCJzZXRIaXN0b3J5TGlzdCIsImlucHV0UmVmIiwidXNlUmVmIiwib25JbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvY3VzIiwiY3VycmVudCIsIm1hcCIsImhpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLE1BQU07QUFFdkIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NGLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUVBLFFBQU1HLFFBQVEsR0FBR0MsNkNBQU0sRUFBdkI7O0FBRUEsUUFBTUMsYUFBYSxHQUFJQyxDQUFELElBQU87QUFDekJQLGdCQUFZLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFDQU4sa0JBQWMsQ0FBQyxDQUFDLEdBQUdELFdBQUosRUFBaUJLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUExQixDQUFELENBQWQ7QUFDSCxHQUhEOztBQUtBLFFBQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2hCTixZQUFRLENBQUNPLE9BQVQsQ0FBaUJELEtBQWpCO0FBQ0gsR0FGRDs7QUFJQSxzQkFBTztBQUFBLDRCQUNIO0FBQU8sU0FBRyxFQUFFTixRQUFaO0FBQXNCLGNBQVEsRUFBRUUsYUFBaEM7QUFBK0MsaUJBQVcsRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHLGVBRUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRyxFQUVHUCxTQUZILGVBR0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRyxlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFJRkcsV0FBVyxDQUFDVSxHQUFaLENBQWlCQyxPQUFELElBQWE7QUFDMUIsMEJBQU87QUFBQSxrQkFBTUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0gsS0FGQSxDQUpFLGVBT0g7QUFBUSxhQUFPLEVBQUVILEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBU0gsQ0F6QkQ7O0FBMEJBLCtEQUFlWixZQUFmLEU7Ozs7Ozs7Ozs7O0FDNUJBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IElucHV0RWxlbWVudCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaGlzdG9yeUxpc3QsIHNldEhpc3RvcnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElucHV0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0SGlzdG9yeUxpc3QoWy4uLmhpc3RvcnlMaXN0LCBlLnRhcmdldC52YWx1ZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvY3VzID0gKCkgPT4ge1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZn0gb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRW50ZXIgdGV4dFwiIC8+XHJcbiAgICAgICAgPGJyLz57aW5wdXRUZXh0fVxyXG4gICAgICAgIDxoci8+PGJyLz5cclxuICAgICAgICB7aGlzdG9yeUxpc3QubWFwKChoaXN0b3J5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PntoaXN0b3J5fTwvZGl2PlxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Zm9jdXN9PkZvY3VzIElucHV0IGJveDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IElucHV0RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9