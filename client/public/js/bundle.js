/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Snake = __webpack_require__(/*! ./models/snake.js */ \"./client/src/models/snake.js\");\nconst Pellet = __webpack_require__(/*! ./models/pellet.js */ \"./client/src/models/pellet.js\");\nconst Wall = __webpack_require__(/*! ./models/wall.js */ \"./client/src/models/wall.js\");\n\ndocument.addEventListener('DOMContentLoaded',()=>{\n  console.log('Hiya');\n\n  const start = function() {\n    gameCanvas = document.querySelector(\"#game-container\");\n    context = gameCanvas.getContext(\"2d\");\n    pellet = new Pellet(15,15,\"blue\",40,40,context);\n\n    snake = new Snake(20,20,\"green\",70,50,context);\n    snake.speedX+=1;\n\n    leftWall = new Wall(2,300,\"red\",0,0,context);\n    rightWall = new Wall(2,300,\"red\",296,0,context);\n    topWall = new Wall(300,2,\"red\",0,296,context);\n    bottomWall = new Wall(300,2,\"red\",0,0,context);\n\n    this.interval = setInterval(updateGameArea, 100);\n\n    window.addEventListener('keydown', function (evt) {\n      this.pressedKey = evt.keyCode;\n    });\n    window.addEventListener('keyup', function (evt) {\n      this.pressedKey = false;\n    });\n  }\n\n  function clear(context, gameCanvas) {\n    context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);\n  }\n\n  function updateGameArea() {\n    if (hasHitWall()) {\n      stop();\n      console.log('game over');\n    } else {\n      clear(context,gameCanvas);\n\n      leftWall.update();\n      rightWall.update();\n      topWall.update();\n      bottomWall.update();\n      pellet.update();\n\n      // left arrow is pressed\n      if (this.pressedKey == 37 && snake.speedX >0)\n        {\n          snake.speedX = -snake.speedX;\n          console.log('left if going right');\n        }else if (this.pressedKey == 37 && snake.speedY >0)\n        {\n          snake.speedX = -snake.speedY;\n          snake.speedY = 0;\n          console.log('left if going down');\n        } else if(this.pressedKey == 37 && snake.speedY <0)\n        {\n          snake.speedX = snake.speedY;\n          snake.speedY = 0;\n          console.log('left if going up');\n      }\n\n      //right arrow is pressed\n      if (this.pressedKey == 39 && snake.speedX <0)\n        {\n          snake.speedX = -snake.speedX;\n          console.log('right if going left');\n        }else if (this.pressedKey == 39 && snake.speedY <0)\n        {\n          snake.speedX = -snake.speedY;\n          snake.speedY = 0;\n          console.log('right if going up');\n        } else if (this.pressedKey == 39 && snake.speedY >0)\n        {\n          snake.speedX = snake.speedY;\n          snake.speedY = 0;\n          console.log('right if going down');\n      }\n\n      //up arrow is pressed\n      if (this.pressedKey == 38 && snake.speedY>0)\n        {\n          snake.speedY = -snake.speedY;\n          snake.speedX = 0;\n          console.log('up if going down');\n        } else if (this.pressedKey == 38 && snake.speedX>0)\n        {\n          snake.speedY = -snake.speedX;\n          snake.speedX = 0;\n          console.log('up if going right');\n        } else if (this.pressedKey == 38 && snake.speedX<0)\n        {\n          snake.speedY = snake.speedX;\n          snake.speedX = 0;\n          console.log('up if going left');\n      }\n\n      //down arrorw is pressed\n      if (this.pressedKey == 40 && snake.speedX>0)\n      {\n        snake.speedY = snake.speedX;\n        snake.speedX = 0;\n        console.log('down if going right');\n      } else if (this.pressedKey == 40 && snake.speedX<0)\n      {\n        snake.speedY = -snake.speedX;\n        snake.speedX = 0;\n        console.log('down if going left');\n      }else if (this.pressedKey == 40 && snake.speedY<0)\n      {\n        snake.speedY = - snake.speedY;\n        console.log('down if going up');\n      }\n      // pellet.x+=10;\n      snake.newPosition();\n      snake.update();\n    }\n  }\n\n  function stop (){\n    clearInterval(this.interval);\n  }\n\n  function hasHitWall() {\n    if((snake.x >= 296) || (snake.x <= 2)|| (snake.y <= 2)||(snake.y >= 296))\n    return true;\n  }\n\n  start();\n\n\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/models/pellet.js":
/*!*************************************!*\
  !*** ./client/src/models/pellet.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Pellet = function(width,height,colour,x,y,context){\n  this.width = width;\n  this.height = height;\n  this.colour = colour;\n  this.x = x;\n  this.y = y;\n  this.context = context;\n};\n\nPellet.prototype.update = function () {\n  const ctx = this.context;\n  ctx.fillStyle = this.colour;\n  ctx.fillRect(this.x, this.y, this.width, this.height);\n\n};\n\nmodule.exports = Pellet;\n\n\n//# sourceURL=webpack:///./client/src/models/pellet.js?");

/***/ }),

/***/ "./client/src/models/snake.js":
/*!************************************!*\
  !*** ./client/src/models/snake.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Snake = function(width,height,colour,x,y,context){\n  this.width = width;\n  this.height = height;\n  this.colour = colour;\n  this.x = x;\n  this.y = y;\n  this.speedX = 0;\n  this.speedY = 0;\n  this.context = context;\n};\n\nSnake.prototype.update = function () {\n  const ctx = this.context;\n  ctx.fillStyle = this.colour;\n  ctx.fillRect(this.x, this.y, this.width, this.height);\n};\n\nSnake.prototype.newPosition = function(){\n  this.x += this.speedX;\n  this.y += this.speedY;\n};\n\nmodule.exports = Snake;\n\n\n//# sourceURL=webpack:///./client/src/models/snake.js?");

/***/ }),

/***/ "./client/src/models/wall.js":
/*!***********************************!*\
  !*** ./client/src/models/wall.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Wall = function(width,height,colour,x,y,context){\n  this.width = width;\n  this.height = height;\n  this.colour = colour;\n  this.x = x;\n  this.y = y;\n  this.context = context;\n};\n\nWall.prototype.update = function () {\n  const ctx = this.context;\n  ctx.fillStyle = this.colour;\n  ctx.fillRect(this.x, this.y, this.width, this.height);\n};\n\nmodule.exports = Wall;\n\n\n//# sourceURL=webpack:///./client/src/models/wall.js?");

/***/ })

/******/ });