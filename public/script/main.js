/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../\u0000#WorkFolder/Yimacargo/source/assets/script/main.js":
/*!*****************************************************************!*\
  !*** ../../ #WorkFolder/Yimacargo/source/assets/script/main.js ***!
  \*****************************************************************/
/***/ (() => {

eval("\r\n\r\n    /*nav menu burger*/\r\n\r\n    const burger = document.querySelector(\".burger\")\r\n    burger.addEventListener(\"click\", clickBurger)\r\n    const navBody = document.querySelector(\".header__nav\") \r\n    const body = document.querySelector('body')\r\n    \r\n    function clickBurger(e) {\r\n    let event = e.target\r\n    \r\n    navBody.classList.toggle('nav_active');\r\n    burger.classList.toggle('burger_active');\r\n    body.classList.toggle(\"body-fixed\")\r\n}\r\n    /* END ///nav menu burger*/\r\n\r\n\n\n//# sourceURL=webpack://new-project/../../%00#WorkFolder/Yimacargo/source/assets/script/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../../\u0000#WorkFolder/Yimacargo/source/assets/script/main.js"]();
/******/ 	
/******/ })()
;