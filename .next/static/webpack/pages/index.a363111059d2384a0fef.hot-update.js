self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Projects_NextJsExamples_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Projects\\NextJsExamples\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



var InputElement = function InputElement() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      inputText = _useState[0],
      setInputText = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      historyList = _useState2[0],
      setHistoryList = _useState2[1];

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();

  var onInputChange = function onInputChange(e) {
    setInputText(e.target.value);
    setHistoryList([].concat((0,C_Projects_NextJsExamples_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(historyList), [e.target.value]));
  };

  var focus = function focus() {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this), inputText, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 14
    }, _this), historyList.map(function (history) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: history
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 20
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: focus,
      children: "Focus Input box"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 12
  }, _this);
};

_s(InputElement, "XWgCAELpjK4IKk182yRdbpcX9lY=");

_c = InputElement;
/* harmony default export */ __webpack_exports__["default"] = (InputElement);

var _c;

$RefreshReg$(_c, "InputElement");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwidXNlU3RhdGUiLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJoaXN0b3J5TGlzdCIsInNldEhpc3RvcnlMaXN0IiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJvbklucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZm9jdXMiLCJjdXJyZW50IiwibWFwIiwiaGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBRVdDLCtDQUFRLENBQUMsRUFBRCxDQUZuQjtBQUFBLE1BRWhCQyxTQUZnQjtBQUFBLE1BRUxDLFlBRks7O0FBQUEsbUJBR2VGLCtDQUFRLENBQUMsRUFBRCxDQUh2QjtBQUFBLE1BR2hCRyxXQUhnQjtBQUFBLE1BR0hDLGNBSEc7O0FBS3ZCLE1BQU1DLFFBQVEsR0FBR0MsNkNBQU0sRUFBdkI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87QUFDekJOLGdCQUFZLENBQUNNLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFDQU4sa0JBQWMsdUlBQUtELFdBQUwsSUFBa0JLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUEzQixHQUFkO0FBQ0gsR0FIRDs7QUFLQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2hCTixZQUFRLENBQUNPLE9BQVQsQ0FBaUJELEtBQWpCO0FBQ0gsR0FGRDs7QUFJQSxzQkFBTztBQUFBLDRCQUNIO0FBQU8sU0FBRyxFQUFFTixRQUFaO0FBQXNCLGNBQVEsRUFBRUUsYUFBaEM7QUFBK0MsaUJBQVcsRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREcsZUFFSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkcsRUFFR04sU0FGSCxlQUdIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRyxlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixFQUlGRSxXQUFXLENBQUNVLEdBQVosQ0FBZ0IsVUFBQ0MsT0FBRCxFQUFhO0FBQzFCLDBCQUFPO0FBQUEsa0JBQU1BO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGQSxDQUpFLGVBT0g7QUFBUSxhQUFPLEVBQUVILEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFTSCxDQXpCRDs7R0FBTVosWTs7S0FBQUEsWTtBQTBCTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMzYzMTExMDU5ZDIzODRhMGZlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IElucHV0RWxlbWVudCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaGlzdG9yeUxpc3QsIHNldEhpc3RvcnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElucHV0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0SGlzdG9yeUxpc3QoWy4uLmhpc3RvcnlMaXN0LCBlLnRhcmdldC52YWx1ZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvY3VzID0gKCkgPT4ge1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZn0gb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRW50ZXIgdGV4dFwiIC8+XHJcbiAgICAgICAgPGJyLz57aW5wdXRUZXh0fVxyXG4gICAgICAgIDxoci8+PGJyLz5cclxuICAgICAgICB7aGlzdG9yeUxpc3QubWFwKChoaXN0b3J5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PntoaXN0b3J5fTwvZGl2PlxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Zm9jdXN9PkZvY3VzIElucHV0IGJveDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IElucHV0RWxlbWVudDsiXSwic291cmNlUm9vdCI6IiJ9