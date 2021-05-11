/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOM)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\nclass DOM {\n    static loadPage() {\n        this.addEventListeners();\n        this.displayTempToday();      \n    }\n\n    static addEventListeners() {\n        const searchButton = document.getElementById('search-button');\n        const inputBox = document.getElementById('search-input');\n\n        searchButton.addEventListener('click', e => this.displayTempToday());\n        inputBox.onkeydown = e => { if (e.key === 'Enter') this.displayTempToday()};\n\n    }\n\n    static getLocation() {\n        let input = document.getElementById('search-input').value;\n        if (input === '') input = 'Milan'; \n\n        return input; \n    }\n\n    static displayTempToday() {\n        const city = document.getElementById('city'); \n        const climate = document.getElementById('climate'); \n        const temp = document.getElementById('temp'); \n        const high = document.getElementById('high'); \n        const low = document.getElementById('low'); \n        const feelsLike = document.getElementById('feels-like'); \n        const humidity = document.getElementById('humidity');\n        const location = DOM.getLocation();\n\n        (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(location)\n            .then(weatherData => { \n                console.log(weatherData);\n                city.textContent = weatherData.name;\n                climate.textContent = weatherData.weather[0].description;\n                temp.textContent = `Temp: ${Math.round(weatherData.main.temp)}`;\n                high.textContent = `High: ${Math.round(weatherData.main.temp_max)}`;\n                low.textContent = `Low: ${Math.round(weatherData.main.temp_min)}`;\n                feelsLike.textContent = `Feels like ${Math.round(weatherData.main.feels_like)}`;\n                humidity.textContent = weatherData.main.humidity + \"%\";\n            });\n    }\n\n    static displayTempHours() {\n        \n    }\n\n}\n\n//# sourceURL=webpack://weather/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\ndocument.onload = _DOM__WEBPACK_IMPORTED_MODULE_0__.default.loadPage();\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(location, units='metric') {\n    const weatherResponse = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4f38c591e88bdeeb84cf6cf7d72803f9&units=${units}`, {mode:'cors'})\n    const weatherData = await weatherResponse.json();\n    \n    return weatherData; \n}\n\n\n\n\n\n//# sourceURL=webpack://weather/./src/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;