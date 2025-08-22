/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/location_on_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg */ "./src/assets/location_on_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100..900&family=DM+Serif+Text:ital@0;1&family=Eagle+Lake&family=Oxygen:wght@300;400;700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main-blue: #0A174E;
  --main-yellow: #F5D042;
  
  --neutral-offwhite: #F4F4F4;
  --neutral-lightgray: #D9D9D9;
  --neutral-darkgray: #333333;
  
  --tertiary-light-yellow: #FBE596;
  --tertiary-light-blue: #2B3A7A;

  --main-font: "Oxygen", sans-serif;
}

body{
  box-sizing: border-box;
  display: flex;
  gap: 2vw;
  font-family: var(--main-font);
  background: var(--main-blue);
  overflow-x: hidden;
  margin: 0px;
  padding: 0px;
  user-select: none;
}

aside.current-conditions {
  background-color: var(--tertiary-light-blue);
  color: var(--neutral-lightgray);
  border-radius: 0px 5% 5% 0px;
  padding: 0px 1rem 0px 1rem;
  flex: 1 0 18vw;
  height: 100vh;
  position: relative;
  bottom: 0px;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

aside.current-conditions > img {
  width: 20vw;
  height: 30vh;
  scale: 1.2;
  align-self: flex-end;
}

aside.current-conditions > h1{
  font-size: 2.5rem;
  margin-left: 1rem;
}

aside.current-conditions > h2 {
  font-size: 2rem;
}

aside.current-conditions > h2{
  color: var(--main-yellow);
}

main{
  flex: 2 0 80vw;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
}

section.navBar {
  background: var(--main-yellow);
  padding: 2rem;
  border-radius: 40px;
  width: 85%;
  border: none;
  box-shadow: inset 0px 0px 5px var(--main-blue);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

section.navBar:has(form input[type='search']:focus){
  box-shadow: 0px 20px 10px rgba(32, 32, 32, 0.44);
}

section.navBar form{
  display: flex;
  gap: 1vw;
  flex: 2 0 80%;
}

section.navBar form input[type='search'] {
  background: var(--main-blue);
  color: var(--main-yellow);
  border: none;
  padding: 0.5rem;
  border-radius: 40px;
  width: 40%;
}

section.navBar form input[type='search']:focus{
  outline: solid 1px var(--neutral-lightgray);
}
section.navBar form input[type='search']::-webkit-search-cancel-button{
  -webkit-appearance: none;
  appearance: none;
}
section.navBar form input[type='search']::placeholder{
  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  position: absolute;
  top: 10%;
  opacity: 0.5;
  font-size: 16px;
  }

section.navBar form img{
  cursor: pointer;
  transition: transform .3s ease , scale .2s ease;
}

section.navBar form img:hover{
  transform: rotate(45deg);
}

section.navBar form img:active{
  scale: 1.3;
}

.unit-switch {
  display: flex;
  align-items: center;
  position: relative;
  width: 80px;
  height: auto;
}

.unit-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.unit-switch label {
  position: relative;
  display: block;
  width: 100%;
  height: 40px;
  background-color: var(--tertiary-light-blue);
  border-radius: 50px;
  cursor: pointer;
  user-select: none;
  box-shadow: inset 0 0 5px var(--main-blue);
  transition: background-color 0.3s ease;
}

.unit-switch label .unit-C,
.unit-switch label .unit-F {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  z-index: 2;
  width: 50%;
  text-align: center;
  pointer-events: none;
  color: var(--main-blue);
}
.unit-switch label .unit-F{
  color: var(--neutral-offwhite);
}

.unit-switch label .unit-C {
  left: 0;
}

.unit-switch label .unit-F {
  right: 0;
}

.unit-switch label .slider {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 34px;
  height: 34px;
  background-color: var(--tertiary-light-yellow);
  border-radius: 50px;
  transition: 0.3s;
}

/* Toggle when checked */
.unit-switch input:checked + label .slider {
  transform: translateX(32px);
  background-color: var(--tertiary-light-yellow);
}

.unit-switch input:checked + label .unit-C {
  color: var(--neutral-offwhite);
}

.unit-switch input:checked + label .unit-F {
  color: var(--main-blue);
}


.next-seven-days,
.extra-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.next-seven-days > h2,
.extra-info > h2{
  color: var(--main-yellow);
}

.forecasts{
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
}

.day-mini-forecast{
  width: calc(60vw/7);
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
  align-items: center;
  background: var(--tertiary-light-blue);
  border-radius: 50px;
  padding: 0.3rem;
  cursor: pointer;
  transition: transform .2s ease-in;
}
.day-mini-forecast:hover{
  transform: translateY(-10%);
}
.day-mini-forecast h3,
.day-mini-forecast span{
  color: var(--main-yellow);
}
.day-mini-forecast img{
  object-fit: cover;
  width: 40%;
  height: 30%;
}

.info-box-container{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1vw;
}

.info-box{
  background-color: var(--main-yellow);
  border-radius: 50px;
  padding: 0px 1.5rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20vw;
}

.info-box h3 span{
  align-self: flex-start;
  font-size: 2rem;
  color: var(--neutral-darkgray);
}

.info-box > span{
  margin-right: 1rem;
  font-size: 1.4rem;
}

.info-box h3 img {
  scale: 1.4;
  margin-left: 0.5vw;
}

.info-box span{
  align-self: flex-end;
  font-size: 1.5rem;
  color: var(--tertiary-light-blue);
}

.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  position: fixed;
  left: 50%;
  bottom: 45%;
  background: 
    radial-gradient(farthest-side,#ffa516 94%,#0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%,#ffa516);
  
  mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;

  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);

  animation: l13 1s infinite linear;
}

@keyframes l13 { 
  100% { transform: rotate(1turn); }
}


/* Small tablets / large phones */
@media (max-width: 1024px) {

  .loader{
    left: 45%;
  }
  body {
    flex-direction: column;
    gap: 1rem;
  }

  aside.current-conditions {
    width: 100%;
    flex: none;
    border-radius: 0 0 20px 20px;
    height: auto;
    padding: 1rem;
  }

  aside.current-conditions > img {
    width: 40vw;
    height: auto;
    align-self: center;
    scale: 1;
  }

  main {
    width: 100%;
    margin-top: 1rem;
  }

  section.navBar {
    flex-direction: row;
    gap: 1rem;
    width: 80%;
    padding: 1rem;
    margin: auto;
    margin-bottom: 2rem;
  }

  section.navBar form input[type='search'] {
    width: 60%;
  }

  .next-seven-days h2,
  .extra-info h2{
    margin-bottom: 5vh;
    font-size: 3rem;
    margin-left: 1rem;
  }

  .forecasts {
    gap: 1.5rem;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-left: 1rem;
  }

  .day-mini-forecast {
    width: 25%;
    height: 20vh;
  }
  
  .extra-info{
    width: 100%;
    margin-left: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .info-box-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .info-box {
    width: 40%;
    padding: 1rem
  }
}

/* For Phones */
@media (max-width: 600px) {
  body {
    gap: 0.5rem;
  }

  aside.current-conditions {
    padding: 0.5rem;
    text-align: center;
  }

  aside.current-conditions > h1 {
    font-size: 2rem;
  }

  aside.current-conditions > h2 {
    font-size: 1.5rem;
  }

  aside.current-conditions > img {
    width: 60vw;
    height: auto;
  }

  section.navBar {
    width: 80%;
    padding: 1rem;
  }

  section.navBar form {
    flex-direction: row;
    gap: 0.5rem;
    width: 100%;
  }

  section.navBar form input[type='search'] {
    width: 60%;
    font-size: 1rem;
  }

  .unit-switch {
    display: flex;
    align-items: center;
    position: relative;
    width: 90px;
    height: auto;
  }

  .unit-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .unit-switch label {
    position: relative;
    right: 40%;
    display: block;
    width: 20vw;
    height: 40px;
    background-color: var(--tertiary-light-blue);
    border-radius: 50px;
    cursor: pointer;
    user-select: none;
    box-shadow: inset 0 0 5px var(--main-blue);
    transition: background-color 0.3s ease;
  }

  .unit-switch label .unit-C,
  .unit-switch label .unit-F {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
    z-index: 2;
    width: 50%;
    text-align: center;
    pointer-events: none;
    color: var(--main-blue);
  }
  .unit-switch label .unit-F{
    color: var(--neutral-offwhite);
  }

  .unit-switch label .unit-C {
    left: 0;
  }

  .unit-switch label .unit-F {
    right: 0;
  }

  .unit-switch label .slider {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 34px;
    height: 34px;
    background-color: var(--tertiary-light-yellow);
    border-radius: 50px;
    transition: 0.3s;
  }

  /* Toggle when checked */
  .unit-switch input:checked + label .slider {
    transform: translateX(32px);
    background-color: var(--tertiary-light-yellow);
  }

  .unit-switch input:checked + label .unit-C {
    color: var(--neutral-offwhite);
  }

  .unit-switch input:checked + label .unit-F {
    color: var(--main-blue);
  }

  .next-seven-days{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .day-mini-forecast {
    width: 70%;
    height: 15vh;
    margin: auto;
    padding-bottom: 10%;
  }
  .day-mini-forecast:hover{
    transform: translateY(-5%);
  }
  .day-mini-forecast img{
    width: 30%;
    height: 30%;
  }

  .forecasts {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .info-box-container {
    gap: 0.5rem;
    margin-left: -1rem;
    margin-bottom: 2rem;
  }

  .info-box h3 {
    font-size: 1.5rem;
  }

  .info-box span {
    font-size: 1rem;
  }
}

@media (min-width: 361px) and (max-width: 500px) {
  .unit-switch input:checked + label .slider{
    transform: translateX(40px);
  }

  .info-box-container {
    gap: 0.5rem;
    margin-right: 1.2rem;
    margin-left: -0.5rem;
  }

  .info-box h3 span{
    scale: 1;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100..900&family=DM+Serif+Text:ital@0;1&family=Eagle+Lake&family=Oxygen:wght@300;400;700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');\r\n\r\n:root {\r\n  --main-blue: #0A174E;\r\n  --main-yellow: #F5D042;\r\n  \r\n  --neutral-offwhite: #F4F4F4;\r\n  --neutral-lightgray: #D9D9D9;\r\n  --neutral-darkgray: #333333;\r\n  \r\n  --tertiary-light-yellow: #FBE596;\r\n  --tertiary-light-blue: #2B3A7A;\r\n\r\n  --main-font: \"Oxygen\", sans-serif;\r\n}\r\n\r\nbody{\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  gap: 2vw;\r\n  font-family: var(--main-font);\r\n  background: var(--main-blue);\r\n  overflow-x: hidden;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  user-select: none;\r\n}\r\n\r\naside.current-conditions {\r\n  background-color: var(--tertiary-light-blue);\r\n  color: var(--neutral-lightgray);\r\n  border-radius: 0px 5% 5% 0px;\r\n  padding: 0px 1rem 0px 1rem;\r\n  flex: 1 0 18vw;\r\n  height: 100vh;\r\n  position: relative;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  top: 0px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\naside.current-conditions > img {\r\n  width: 20vw;\r\n  height: 30vh;\r\n  scale: 1.2;\r\n  align-self: flex-end;\r\n}\r\n\r\naside.current-conditions > h1{\r\n  font-size: 2.5rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\naside.current-conditions > h2 {\r\n  font-size: 2rem;\r\n}\r\n\r\naside.current-conditions > h2{\r\n  color: var(--main-yellow);\r\n}\r\n\r\nmain{\r\n  flex: 2 0 80vw;\r\n  margin-top: 3vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nsection.navBar {\r\n  background: var(--main-yellow);\r\n  padding: 2rem;\r\n  border-radius: 40px;\r\n  width: 85%;\r\n  border: none;\r\n  box-shadow: inset 0px 0px 5px var(--main-blue);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nsection.navBar:has(form input[type='search']:focus){\r\n  box-shadow: 0px 20px 10px rgba(32, 32, 32, 0.44);\r\n}\r\n\r\nsection.navBar form{\r\n  display: flex;\r\n  gap: 1vw;\r\n  flex: 2 0 80%;\r\n}\r\n\r\nsection.navBar form input[type='search'] {\r\n  background: var(--main-blue);\r\n  color: var(--main-yellow);\r\n  border: none;\r\n  padding: 0.5rem;\r\n  border-radius: 40px;\r\n  width: 40%;\r\n}\r\n\r\nsection.navBar form input[type='search']:focus{\r\n  outline: solid 1px var(--neutral-lightgray);\r\n}\r\nsection.navBar form input[type='search']::-webkit-search-cancel-button{\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n}\r\nsection.navBar form input[type='search']::placeholder{\r\n  content: url(./assets/location_on_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg);\r\n  position: absolute;\r\n  top: 10%;\r\n  opacity: 0.5;\r\n  font-size: 16px;\r\n  }\r\n\r\nsection.navBar form img{\r\n  cursor: pointer;\r\n  transition: transform .3s ease , scale .2s ease;\r\n}\r\n\r\nsection.navBar form img:hover{\r\n  transform: rotate(45deg);\r\n}\r\n\r\nsection.navBar form img:active{\r\n  scale: 1.3;\r\n}\r\n\r\n.unit-switch {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 80px;\r\n  height: auto;\r\n}\r\n\r\n.unit-switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.unit-switch label {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: var(--tertiary-light-blue);\r\n  border-radius: 50px;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  box-shadow: inset 0 0 5px var(--main-blue);\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.unit-switch label .unit-C,\r\n.unit-switch label .unit-F {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  font-weight: bold;\r\n  z-index: 2;\r\n  width: 50%;\r\n  text-align: center;\r\n  pointer-events: none;\r\n  color: var(--main-blue);\r\n}\r\n.unit-switch label .unit-F{\r\n  color: var(--neutral-offwhite);\r\n}\r\n\r\n.unit-switch label .unit-C {\r\n  left: 0;\r\n}\r\n\r\n.unit-switch label .unit-F {\r\n  right: 0;\r\n}\r\n\r\n.unit-switch label .slider {\r\n  position: absolute;\r\n  top: 3px;\r\n  left: 3px;\r\n  width: 34px;\r\n  height: 34px;\r\n  background-color: var(--tertiary-light-yellow);\r\n  border-radius: 50px;\r\n  transition: 0.3s;\r\n}\r\n\r\n/* Toggle when checked */\r\n.unit-switch input:checked + label .slider {\r\n  transform: translateX(32px);\r\n  background-color: var(--tertiary-light-yellow);\r\n}\r\n\r\n.unit-switch input:checked + label .unit-C {\r\n  color: var(--neutral-offwhite);\r\n}\r\n\r\n.unit-switch input:checked + label .unit-F {\r\n  color: var(--main-blue);\r\n}\r\n\r\n\r\n.next-seven-days,\r\n.extra-info{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.next-seven-days > h2,\r\n.extra-info > h2{\r\n  color: var(--main-yellow);\r\n}\r\n\r\n.forecasts{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1vw;\r\n}\r\n\r\n.day-mini-forecast{\r\n  width: calc(60vw/7);\r\n  height: 25vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 5%;\r\n  align-items: center;\r\n  background: var(--tertiary-light-blue);\r\n  border-radius: 50px;\r\n  padding: 0.3rem;\r\n  cursor: pointer;\r\n  transition: transform .2s ease-in;\r\n}\r\n.day-mini-forecast:hover{\r\n  transform: translateY(-10%);\r\n}\r\n.day-mini-forecast h3,\r\n.day-mini-forecast span{\r\n  color: var(--main-yellow);\r\n}\r\n.day-mini-forecast img{\r\n  object-fit: cover;\r\n  width: 40%;\r\n  height: 30%;\r\n}\r\n\r\n.info-box-container{\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 1vw;\r\n}\r\n\r\n.info-box{\r\n  background-color: var(--main-yellow);\r\n  border-radius: 50px;\r\n  padding: 0px 1.5rem 1rem 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 20vw;\r\n}\r\n\r\n.info-box h3 span{\r\n  align-self: flex-start;\r\n  font-size: 2rem;\r\n  color: var(--neutral-darkgray);\r\n}\r\n\r\n.info-box > span{\r\n  margin-right: 1rem;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.info-box h3 img {\r\n  scale: 1.4;\r\n  margin-left: 0.5vw;\r\n}\r\n\r\n.info-box span{\r\n  align-self: flex-end;\r\n  font-size: 1.5rem;\r\n  color: var(--tertiary-light-blue);\r\n}\r\n\r\n.loader {\r\n  width: 50px;\r\n  aspect-ratio: 1;\r\n  border-radius: 50%;\r\n  position: fixed;\r\n  left: 50%;\r\n  bottom: 45%;\r\n  background: \r\n    radial-gradient(farthest-side,#ffa516 94%,#0000) top/8px 8px no-repeat,\r\n    conic-gradient(#0000 30%,#ffa516);\r\n  \r\n  mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);\r\n  mask-repeat: no-repeat;\r\n  mask-position: center;\r\n  mask-size: cover;\r\n\r\n  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);\r\n\r\n  animation: l13 1s infinite linear;\r\n}\r\n\r\n@keyframes l13 { \r\n  100% { transform: rotate(1turn); }\r\n}\r\n\r\n\r\n/* Small tablets / large phones */\r\n@media (max-width: 1024px) {\r\n\r\n  .loader{\r\n    left: 45%;\r\n  }\r\n  body {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n\r\n  aside.current-conditions {\r\n    width: 100%;\r\n    flex: none;\r\n    border-radius: 0 0 20px 20px;\r\n    height: auto;\r\n    padding: 1rem;\r\n  }\r\n\r\n  aside.current-conditions > img {\r\n    width: 40vw;\r\n    height: auto;\r\n    align-self: center;\r\n    scale: 1;\r\n  }\r\n\r\n  main {\r\n    width: 100%;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  section.navBar {\r\n    flex-direction: row;\r\n    gap: 1rem;\r\n    width: 80%;\r\n    padding: 1rem;\r\n    margin: auto;\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  section.navBar form input[type='search'] {\r\n    width: 60%;\r\n  }\r\n\r\n  .next-seven-days h2,\r\n  .extra-info h2{\r\n    margin-bottom: 5vh;\r\n    font-size: 3rem;\r\n    margin-left: 1rem;\r\n  }\r\n\r\n  .forecasts {\r\n    gap: 1.5rem;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    margin-left: 1rem;\r\n  }\r\n\r\n  .day-mini-forecast {\r\n    width: 25%;\r\n    height: 20vh;\r\n  }\r\n  \r\n  .extra-info{\r\n    width: 100%;\r\n    margin-left: 1rem;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .info-box-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .info-box {\r\n    width: 40%;\r\n    padding: 1rem\r\n  }\r\n}\r\n\r\n/* For Phones */\r\n@media (max-width: 600px) {\r\n  body {\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  aside.current-conditions {\r\n    padding: 0.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n  aside.current-conditions > h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  aside.current-conditions > h2 {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  aside.current-conditions > img {\r\n    width: 60vw;\r\n    height: auto;\r\n  }\r\n\r\n  section.navBar {\r\n    width: 80%;\r\n    padding: 1rem;\r\n  }\r\n\r\n  section.navBar form {\r\n    flex-direction: row;\r\n    gap: 0.5rem;\r\n    width: 100%;\r\n  }\r\n\r\n  section.navBar form input[type='search'] {\r\n    width: 60%;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .unit-switch {\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    width: 90px;\r\n    height: auto;\r\n  }\r\n\r\n  .unit-switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n  .unit-switch label {\r\n    position: relative;\r\n    right: 40%;\r\n    display: block;\r\n    width: 20vw;\r\n    height: 40px;\r\n    background-color: var(--tertiary-light-blue);\r\n    border-radius: 50px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    box-shadow: inset 0 0 5px var(--main-blue);\r\n    transition: background-color 0.3s ease;\r\n  }\r\n\r\n  .unit-switch label .unit-C,\r\n  .unit-switch label .unit-F {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    font-weight: bold;\r\n    z-index: 2;\r\n    width: 50%;\r\n    text-align: center;\r\n    pointer-events: none;\r\n    color: var(--main-blue);\r\n  }\r\n  .unit-switch label .unit-F{\r\n    color: var(--neutral-offwhite);\r\n  }\r\n\r\n  .unit-switch label .unit-C {\r\n    left: 0;\r\n  }\r\n\r\n  .unit-switch label .unit-F {\r\n    right: 0;\r\n  }\r\n\r\n  .unit-switch label .slider {\r\n    position: absolute;\r\n    top: 3px;\r\n    left: 3px;\r\n    width: 34px;\r\n    height: 34px;\r\n    background-color: var(--tertiary-light-yellow);\r\n    border-radius: 50px;\r\n    transition: 0.3s;\r\n  }\r\n\r\n  /* Toggle when checked */\r\n  .unit-switch input:checked + label .slider {\r\n    transform: translateX(32px);\r\n    background-color: var(--tertiary-light-yellow);\r\n  }\r\n\r\n  .unit-switch input:checked + label .unit-C {\r\n    color: var(--neutral-offwhite);\r\n  }\r\n\r\n  .unit-switch input:checked + label .unit-F {\r\n    color: var(--main-blue);\r\n  }\r\n\r\n  .next-seven-days{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: auto;\r\n  }\r\n\r\n  .day-mini-forecast {\r\n    width: 70%;\r\n    height: 15vh;\r\n    margin: auto;\r\n    padding-bottom: 10%;\r\n  }\r\n  .day-mini-forecast:hover{\r\n    transform: translateY(-5%);\r\n  }\r\n  .day-mini-forecast img{\r\n    width: 30%;\r\n    height: 30%;\r\n  }\r\n\r\n  .forecasts {\r\n    gap: 0.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: auto;\r\n  }\r\n\r\n  .info-box-container {\r\n    gap: 0.5rem;\r\n    margin-left: -1rem;\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  .info-box h3 {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .info-box span {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media (min-width: 361px) and (max-width: 500px) {\r\n  .unit-switch input:checked + label .slider{\r\n    transform: translateX(40px);\r\n  }\r\n\r\n  .info-box-container {\r\n    gap: 0.5rem;\r\n    margin-right: 1.2rem;\r\n    margin-left: -0.5rem;\r\n  }\r\n\r\n  .info-box h3 span{\r\n    scale: 1;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/air.svg":
/*!****************************!*\
  !*** ./src/assets/air.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6a273b7a60bd26a7069.svg";

/***/ }),

/***/ "./src/assets/clear-day.svg":
/*!**********************************!*\
  !*** ./src/assets/clear-day.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d00ca4a3c5d5e365abd.svg";

/***/ }),

/***/ "./src/assets/clear-night.svg":
/*!************************************!*\
  !*** ./src/assets/clear-night.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a43aa39d060832dd72f.svg";

/***/ }),

/***/ "./src/assets/cloudy-day.svg":
/*!***********************************!*\
  !*** ./src/assets/cloudy-day.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d51ab3f7ac00b31ab377.svg";

/***/ }),

/***/ "./src/assets/cloudy-night.svg":
/*!*************************************!*\
  !*** ./src/assets/cloudy-night.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c96307198c26d289467.svg";

/***/ }),

/***/ "./src/assets/flake.svg":
/*!******************************!*\
  !*** ./src/assets/flake.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62148dd96987202eb389.svg";

/***/ }),

/***/ "./src/assets/fog.svg":
/*!****************************!*\
  !*** ./src/assets/fog.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f201d2d4fdd09adcbda.svg";

/***/ }),

/***/ "./src/assets/humid.svg":
/*!******************************!*\
  !*** ./src/assets/humid.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71eae744c0b787994ca7.svg";

/***/ }),

/***/ "./src/assets/location_on_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg":
/*!***************************************************************************!*\
  !*** ./src/assets/location_on_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c7ff96f07f6a1ada893.svg";

/***/ }),

/***/ "./src/assets/rain.svg":
/*!*****************************!*\
  !*** ./src/assets/rain.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a11140dcc5a027e22a3.svg";

/***/ }),

/***/ "./src/assets/snow.svg":
/*!*****************************!*\
  !*** ./src/assets/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05babef558149c0c8f0c.svg";

/***/ }),

/***/ "./src/assets/thunder.svg":
/*!********************************!*\
  !*** ./src/assets/thunder.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb13d83fefc58adfd51a.svg";

/***/ }),

/***/ "./src/assets/wind.svg":
/*!*****************************!*\
  !*** ./src/assets/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d115ed25352b8b8ab8a.svg";

/***/ }),

/***/ "./src/js/addEvents.js":
/*!*****************************!*\
  !*** ./src/js/addEvents.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventListeners: () => (/* binding */ eventListeners)
/* harmony export */ });
/* harmony import */ var _userInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInput.js */ "./src/js/userInput.js");
/* harmony import */ var _dynamic_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic_UI.js */ "./src/js/dynamic_UI.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/js/localStorage.js");




const eventListeners = (function () {
  let userData = {
    loc: 'beirut',
    unit: 'c'
  };

  const saved = _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.storage.loadUserData();
  if (saved) {
    userData.loc = saved.loc;
    userData.unit = saved.unit;
  }else{
    userData.loc = 'beirut';
    userData.unit = 'c';
  }
  

  const searchEvent = () => {
    (0,_dynamic_UI_js__WEBPACK_IMPORTED_MODULE_1__.generateUI)(userData.loc, userData.unit);
    const searchBtn = document.querySelector('.search-btn');
    let lastLocation = userData.loc;

    searchBtn.addEventListener('click', () => {
      const newLoc = (0,_userInput_js__WEBPACK_IMPORTED_MODULE_0__.pickLocation)() || userData.loc;
      if (newLoc === lastLocation) return;

      userData.loc = newLoc;
      lastLocation = newLoc;
      _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.storage.saveUserData(userData);
      (0,_dynamic_UI_js__WEBPACK_IMPORTED_MODULE_1__.generateUI)(userData.loc, userData.unit);
    });
  };

  const unitSwitchEvent = () => {
    const checkbox = document.querySelector('#unitToggle');
    checkbox.addEventListener('change', () => {
      userData.unit = (0,_userInput_js__WEBPACK_IMPORTED_MODULE_0__.checkUnit)();
      _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.storage.saveUserData(userData);
      (0,_dynamic_UI_js__WEBPACK_IMPORTED_MODULE_1__.generateUI)(userData.loc, userData.unit);
    });
  };

  return { searchEvent, unitSwitchEvent };
})();


/***/ }),

/***/ "./src/js/dynamic_UI.js":
/*!******************************!*\
  !*** ./src/js/dynamic_UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateUI: () => (/* binding */ generateUI)
/* harmony export */ });
/* harmony import */ var _weatherService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherService.js */ "./src/js/weatherService.js");
/* harmony import */ var _getIcons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getIcons.js */ "./src/js/getIcons.js");



async function generateUI(location, unit) {
  const loader = document.querySelector('.loader');
  const body = document.querySelector('body');

  loader.style.display = 'block';
  body.style.pointerEvents = 'none';

  try {
    const data = await (0,_weatherService_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(location, unit);
    renderUI(data, unit);
  } 
  catch (err) {
    console.error('Failed to fetch weather:', err);
  } 
  finally {
    loader.style.display = 'none';
    body.style.pointerEvents = 'auto';
  }
}

function renderUI(data, unit){
  let speedUnit;
  let snowDepth;
  let tempType;
  if(unit === 'c'){
    tempType = "°C"; //Celsius, km/h, mm
    speedUnit = "km/h";
    snowDepth = "mm";
  } else if (unit === 'f'){
    tempType = "°F";  //Fahrenheit, mph, inches
    speedUnit = "mph"
    snowDepth = "inches";
  }

  //slider ui
  const slider = document.querySelector('#unitToggle');
  if(unit == 'c'){
    slider.checked = false;
  }else{
    slider.checked = true;
  }

  renderNavBar(data, tempType);
  renderForecast(data, tempType);
  renderExtraInfo(data, snowDepth, speedUnit);
}


function renderNavBar(data, tempType){
  //sidebar UI
  const containerCurrent = document.querySelector('aside.current-conditions');
  containerCurrent.innerHTML = '';

  const headerToday = document.createElement('h1');
  headerToday.textContent = 'Today';

  const currentWeatherImg = document.createElement('img');
  currentWeatherImg.src = determineImg(data, -1);
  currentWeatherImg.loading = 'lazy';
  currentWeatherImg.alt = 'No Image';

  const locationInfo = document.createElement('h3');
  locationInfo.textContent = (data.resolvedAddress).split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(' ');

  const tempToday = document.createElement('h2');
  tempToday.textContent = `${data.currentConditions.temp} ${tempType}`;

  const currentDate = document.createElement('p');
  currentDate.textContent = formatDate(data.days[0].datetime).fullDate;

  const detailsDiv = document.createElement('div');

  const minTemp = document.createElement('p');
  const maxTemp = document.createElement('p');
  minTemp.textContent = `Minimum Temperature Today : ${data.days[0].tempmin} ${tempType} `;
  maxTemp.textContent = `Maximum Temperature Today : ${data.days[0].tempmax} ${tempType} `;

  detailsDiv.append(minTemp,maxTemp)

  //appending sidebar
  containerCurrent.append(headerToday,currentWeatherImg, locationInfo, tempToday, currentDate, detailsDiv);
}

function renderForecast(data, tempType){
  const forecastCont = document.querySelector('.forecasts');
  forecastCont.innerHTML = '';

  for(let i = 0; i < 7; i++){
    // Create the container div
    const div = document.createElement("div");
    div.className = "day-mini-forecast";

    // Create the day label
    const h3 = document.createElement("h3");
    h3.textContent = formatDate(data.days[i].datetime).dayName;

    // Create the icon
    const img = document.createElement("img");
    img.src = determineImg(data, i);
    img.loading = "lazy";

    // Create the temperature span
    const span = document.createElement("span");
    span.textContent = `${data.days[i].temp} ${tempType}`;

    div.append(h3, img, span);
    forecastCont.append(div);
  }

}

function renderExtraInfo(data, Depth, speedUnit){
  const infoObj = [
    {
      title: 'Wind Speed',
      value: data.currentConditions.windspeed,
      icon: _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].air,
      unit: speedUnit
    },
    {
      title: 'Snow Depth',
      value: data.currentConditions.snowdepth,
      icon: _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].flake,
      unit: Depth
    },
    {
      title: 'Humidity',
      value: data.currentConditions.humidity,
      icon: _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].humid,
      unit: '%'
    }
  ]


  const extraCont = document.querySelector('.info-box-container');
  extraCont.innerHTML = '';

  infoObj.forEach(obj =>{
    const infoBox = document.createElement('div');
    infoBox.className = 'info-box';

    const h3 = document.createElement('h3');

    const title = document.createElement('span');
    const icon = document.createElement('img');
    title.textContent = obj.title;
    icon.src = obj.icon;
    icon.loading = 'lazy';
    icon.alt = 'image not found';
    
    h3.append(title, icon);

    const value = document.createElement('span');
    if(!obj.unit){
      value.textContent = obj.value;
    }else{
      value.textContent = `${obj.value} ${obj.unit}`;
    }
    

    infoBox.append(h3, value);
    extraCont.append(infoBox);
  })

}

function determineImg(data, idx){
  //determine time of day
  let imgSrc;
  let timeStat;
  let weatherState;
  const now = new Date();
  const hours = now.getHours();

  if(idx === -1){ //when we are getting current time
    if(hours > 6 && hours < 19){
      timeStat = 'day';
    }else{
      timeStat = 'night';
    }
    weatherState = data.currentConditions.icon;
  }else{
    timeStat = 'day' //default for the rest of the days
    weatherState = data.days[idx].icon;
  }

  if(weatherState.includes('clear')){
    if(timeStat === 'day'){
      imgSrc = _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearDay;
    }else{
      imgSrc = _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearNight;
    }
  } else if(weatherState.includes('cloudy')){
    if(timeStat === 'day'){
      imgSrc = _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].cloudyDay;
    }else{
      imgSrc = _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].cloudyNight;
    }
  } else if(weatherState.includes('fog')){
    imgSrc = _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].fog
  } else if (weatherState.includes('rain') || weatherState.includes('showers')) {
    imgSrc = _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].rain;
  } else if (weatherState.includes('snow')) {
    imgSrc = _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].snow;
  } else if (weatherState.includes('thunder')) {
    imgSrc = _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].thunder;
  } else if (weatherState.includes('wind')) {
    imgSrc = _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].wind;
  } else {
    // fallback icon if something unexpected appears
    imgSrc = _getIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearDay;
  }

  return imgSrc;
}

function formatDate(dateString) {
  const date = new Date(dateString);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const fullDate = `${dayName} ${monthName} ${day} ${year}`

  return {dayName, fullDate};
}

/***/ }),

/***/ "./src/js/getIcons.js":
/*!****************************!*\
  !*** ./src/js/getIcons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_clear_day_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/clear-day.svg */ "./src/assets/clear-day.svg");
/* harmony import */ var _assets_clear_night_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/clear-night.svg */ "./src/assets/clear-night.svg");
/* harmony import */ var _assets_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/cloudy-day.svg */ "./src/assets/cloudy-day.svg");
/* harmony import */ var _assets_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/cloudy-night.svg */ "./src/assets/cloudy-night.svg");
/* harmony import */ var _assets_fog_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fog.svg */ "./src/assets/fog.svg");
/* harmony import */ var _assets_rain_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/rain.svg */ "./src/assets/rain.svg");
/* harmony import */ var _assets_snow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/snow.svg */ "./src/assets/snow.svg");
/* harmony import */ var _assets_thunder_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/thunder.svg */ "./src/assets/thunder.svg");
/* harmony import */ var _assets_wind_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/wind.svg */ "./src/assets/wind.svg");
/* harmony import */ var _assets_flake_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/flake.svg */ "./src/assets/flake.svg");
/* harmony import */ var _assets_humid_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/humid.svg */ "./src/assets/humid.svg");
/* harmony import */ var _assets_air_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/air.svg */ "./src/assets/air.svg");













/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  clearDay: _assets_clear_day_svg__WEBPACK_IMPORTED_MODULE_0__,
  clearNight: _assets_clear_night_svg__WEBPACK_IMPORTED_MODULE_1__,
  cloudyDay: _assets_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_2__,
  cloudyNight: _assets_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_3__,
  fog: _assets_fog_svg__WEBPACK_IMPORTED_MODULE_4__,
  rain: _assets_rain_svg__WEBPACK_IMPORTED_MODULE_5__,
  snow: _assets_snow_svg__WEBPACK_IMPORTED_MODULE_6__,
  thunder: _assets_thunder_svg__WEBPACK_IMPORTED_MODULE_7__,
  wind: _assets_wind_svg__WEBPACK_IMPORTED_MODULE_8__,
  air: _assets_air_svg__WEBPACK_IMPORTED_MODULE_11__,
  flake: _assets_flake_svg__WEBPACK_IMPORTED_MODULE_9__,
  humid: _assets_humid_svg__WEBPACK_IMPORTED_MODULE_10__
});

/***/ }),

/***/ "./src/js/localStorage.js":
/*!********************************!*\
  !*** ./src/js/localStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
const storage = (function(){
  const loadUserData = ()=>{
    let savedData = localStorage.getItem("userData");
    if(savedData){
      savedData = JSON.parse(savedData);
      return savedData;  
    }else{
      return;
    }
  }

  const saveUserData = (userData)=>{
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  return{loadUserData,saveUserData};

})();

/***/ }),

/***/ "./src/js/userInput.js":
/*!*****************************!*\
  !*** ./src/js/userInput.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkUnit: () => (/* binding */ checkUnit),
/* harmony export */   pickLocation: () => (/* binding */ pickLocation)
/* harmony export */ });
function checkUnit(){
  const checkbox = document.querySelector('#unitToggle');
  let unit;
  if(checkbox.checked){
    unit = 'f';
  }else{
    unit = 'c';
  }
  return unit;
}

function pickLocation(){
  const searchBar = document.querySelector('.navBar form input');
  if(searchBar.value === ''){
    return;
  }
  
  const location = searchBar.value.trim().toLowerCase().replace(/\s+/g, '');

  searchBar.value = '';

  return location;
}

/***/ }),

/***/ "./src/js/weatherService.js":
/*!**********************************!*\
  !*** ./src/js/weatherService.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
async function getWeather(location, unit) {
  let unitType;
  if(unit === 'c'){
    unitType = "metric"; //Celsius, km/h, mm
  } else if (unit === 'f'){
    unitType = "us";  //Fahrenheit, mph, inches
  }

  try{
    const rawData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitType}&include=days%2Ccurrent&key=6ZPQS349JE8ZLYL5NYQSSM4A7&contentType=json&lang=id`);
    
    const jsonData = await rawData.json();

    if (!jsonData.address || !jsonData.currentConditions || !jsonData.days) {
      alert('Location not available!');
      return null;
    }

    const reqData = {
      address: jsonData.address,
      currentConditions: jsonData.currentConditions,
      days: jsonData.days,
      resolvedAddress: jsonData.resolvedAddress
    }   

    return reqData;
  }
  catch (e){
    alert('Location not available!');
    return null;
  }
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _addEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addEvents.js */ "./src/js/addEvents.js");




document.addEventListener('DOMContentLoaded', ()=>{

  const form = document.querySelector('.navBar form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Just to stop form submission
  });

  _addEvents_js__WEBPACK_IMPORTED_MODULE_1__.eventListeners.searchEvent();
  _addEvents_js__WEBPACK_IMPORTED_MODULE_1__.eventListeners.unitSwitchEvent();
  
})
})();

/******/ })()
;
//# sourceMappingURL=main.js.map