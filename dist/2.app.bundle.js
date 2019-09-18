(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/container/QueryPhotoCard.js":
/*!*****************************************!*\
  !*** ./src/container/QueryPhotoCard.js ***!
  \*****************************************/
/*! exports provided: QueryPhotoCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QueryPhotoCard\", function() { return QueryPhotoCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PhotoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PhotoCard */ \"./src/components/PhotoCard/index.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _Styles_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Styles/Loader */ \"./src/Styles/Loader.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\nquery getSinglePhoto($id:ID!) {\\n    photo(id:$id) {\\n      id\\n      categoryId\\n      src\\n      likes\\n      userId\\n      liked\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\nvar GET_SINGLE_PHOTO = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_2__[\"gql\"])(_templateObject());\n\nvar renderProp = function renderProp(_ref) {\n  var loading = _ref.loading,\n      error = _ref.error,\n      data = _ref.data;\n  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles_Loader__WEBPACK_IMPORTED_MODULE_4__[\"Loader\"], null);\n  if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"error al cargar los datos!!!\");\n  var _data$photo = data.photo,\n      photo = _data$photo === void 0 ? {} : _data$photo;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhotoCard__WEBPACK_IMPORTED_MODULE_1__[\"PhotoCard\"], photo);\n};\n\nvar QueryPhotoCard = function QueryPhotoCard(_ref2) {\n  var id = _ref2.id;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__[\"Query\"], {\n    query: GET_SINGLE_PHOTO,\n    variables: {\n      id: id\n    }\n  }, renderProp);\n};\n\n//# sourceURL=webpack:///./src/container/QueryPhotoCard.js?");

/***/ }),

/***/ "./src/pages/Detail.js":
/*!*****************************!*\
  !*** ./src/pages/Detail.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _container_QueryPhotoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/QueryPhotoCard */ \"./src/container/QueryPhotoCard.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var detailId = _ref.detailId;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    title: \"Fotograf\\xEDa \".concat(detailId)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_QueryPhotoCard__WEBPACK_IMPORTED_MODULE_1__[\"QueryPhotoCard\"], {\n    id: detailId\n  }));\n});\n\n//# sourceURL=webpack:///./src/pages/Detail.js?");

/***/ })

}]);