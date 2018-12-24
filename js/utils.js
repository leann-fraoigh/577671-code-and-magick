'use strict';

(function () {
  var KeyCode = {
    ESC: 27,
    ENTER: 13,
  };

  // Вспомогательные функции
  // 1. Выдает рандомный элемент массива
  var getRandom = function (array) {
    return array[Math.floor(Math.random() * (array.length - 1))];
  };

  // 2. Конвертор hex в rgb
  var hexToRGB = function (hex) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };

  // 3. Конвертер rgb в hex

  var rgbToHex = function (rgb) {
    var parts = rgb.substring(rgb.indexOf('(')).split(',');
    var r = parseInt(parts[0].substring(1), 10);
    var g = parseInt(parts[1], 10);
    var b = parseInt(parts[2], 10);

    return ('#' + r.toString(16) + g.toString(16) + b.toString(16));
  };

  // 4. Перебор массива с конвертацией hex в rgb
  var arrayHexToRGB = function (array) {
    var ret = [];
    for (var i = 0; i < array.length; i++) {
      ret[i] = hexToRGB(array[i]);
    }
    return ret;
  };

  // 5. Проверка нажатия Esc
  var isEscEvent = function (evt) {
    return evt.keyCode === KeyCode.ESC;
  };

  // 6. проверка нажатия Enter
  var isEnterEvent = function (evt) {
    return evt.keyCode === KeyCode.ENTER;
  };

  window.utils = {
    getRandom: getRandom,
    hexToRGB: hexToRGB,
    rgbToHex: rgbToHex,
    arrayHexToRGB: arrayHexToRGB,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
  };

})();
