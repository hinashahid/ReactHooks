(function() {
var exports = {};
exports.id = "pages/ImageChangeOnMouseOver";
exports.ids = ["pages/ImageChangeOnMouseOver"];
exports.modules = {

/***/ "./pages/ImageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/ImageChangeOnMouseOver.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ "./src/ImageToggleOnMouseOver.js");

var _jsxFileName = "C:\\Projects\\NextJsExamples\\pages\\ImageChangeOnMouseOver.js";



const ImageChangeOnMouseOver = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__.default, {
      primaryImg: "/images/ImageBW.png",
      secondaryImg: "/images/ImageColor.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseOver);

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Projects\\NextJsExamples\\src\\ImageToggleOnMouseOver.js";


const ImageToggleOnMouseOver = ({
  primaryImg,
  secondaryImg
}) => {
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    onMouseOver: () => {
      imageRef.current.src = secondaryImg;
    },
    onMouseOut: () => {
      imageRef.current.src = primaryImg;
    },
    src: primaryImg,
    ref: imageRef
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnMouseOver);

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
var __webpack_exports__ = (__webpack_exec__("./pages/ImageChangeOnMouseOver.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SnNFeGFtcGxlcy8uL3BhZ2VzL0ltYWdlQ2hhbmdlT25Nb3VzZU92ZXIuanMiLCJ3ZWJwYWNrOi8vTmV4dEpzRXhhbXBsZXMvLi9zcmMvSW1hZ2VUb2dnbGVPbk1vdXNlT3Zlci5qcyIsIndlYnBhY2s6Ly9OZXh0SnNFeGFtcGxlcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vTmV4dEpzRXhhbXBsZXMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJJbWFnZUNoYW5nZU9uTW91c2VPdmVyIiwiSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlciIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsImN1cnJlbnQiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsc0JBQXNCLEdBQUcsTUFBTTtBQUVqQyxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLGdFQUFEO0FBQXdCLGdCQUFVLEVBQUUscUJBQXBDO0FBQTBELGtCQUFZLEVBQUM7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBUEQ7O0FBU0EsK0RBQWVBLHNCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBOztBQUVBLE1BQU1DLHNCQUFzQixHQUFHLENBQUM7QUFBQ0MsWUFBRDtBQUFjQztBQUFkLENBQUQsS0FBaUM7QUFFNUQsUUFBTUMsUUFBUSxHQUFJQyw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7QUFFQSxzQkFDSTtBQUFLLGVBQVcsRUFBRSxNQUNkO0FBQ0lELGNBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsR0FBakIsR0FBdUJKLFlBQXZCO0FBQ0gsS0FITDtBQUtJLGNBQVUsRUFBRSxNQUFJO0FBQ1pDLGNBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsR0FBakIsR0FBdUJMLFVBQXZCO0FBQ0gsS0FQTDtBQVNBLE9BQUcsRUFBSUEsVUFUUDtBQVNtQixPQUFHLEVBQUdFO0FBVHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVlILENBaEJEOztBQWtCQSwrREFBZUgsc0JBQWYsRTs7Ozs7Ozs7Ozs7QUNwQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvSW1hZ2VDaGFuZ2VPbk1vdXNlT3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlVG9nZ2xlT25Nb3VzZU92ZXIgZnJvbSBcIi4uL3NyYy9JbWFnZVRvZ2dsZU9uTW91c2VPdmVyXCJcclxuXHJcbmNvbnN0IEltYWdlQ2hhbmdlT25Nb3VzZU92ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPbk1vdXNlT3ZlciBwcmltYXJ5SW1nID1cIi9pbWFnZXMvSW1hZ2VCVy5wbmdcIiBzZWNvbmRhcnlJbWc9XCIvaW1hZ2VzL0ltYWdlQ29sb3IucG5nXCIvPiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDaGFuZ2VPbk1vdXNlT3ZlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlciA9ICh7cHJpbWFyeUltZyAsIHNlY29uZGFyeUltZ30pID0+IHtcclxuXHJcbiAgICBjb25zdCBpbWFnZVJlZiAgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aW1nIG9uTW91c2VPdmVyPXsoKT0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlUmVmLmN1cnJlbnQuc3JjID0gc2Vjb25kYXJ5SW1nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICAgICAgb25Nb3VzZU91dD17KCk9PntcclxuICAgICAgICAgICAgICAgIGltYWdlUmVmLmN1cnJlbnQuc3JjID0gcHJpbWFyeUltZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcmMgPSB7cHJpbWFyeUltZ30gcmVmPSB7aW1hZ2VSZWZ9IC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uTW91c2VPdmVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=