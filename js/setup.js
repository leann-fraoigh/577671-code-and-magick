'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardEyes = window.elements.setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardCoat = window.elements.setup.querySelector('.setup-wizard .wizard-coat');
  var fireball = window.elements.setup.querySelector('.setup-fireball-wrap');
  var setupInputEyes = window.elements.setup.querySelector('input[name="eyes-color"]');
  var setupInputCoat = window.elements.setup.querySelector('input[name="coat-color"]');
  var setupInputFireball = window.elements.setup.querySelector('input[name="fireball-color"]');


  // Настройка персонажа

  var changeElementFillColor = function (targetElement, colorSourse) {
    var i = colorSourse.indexOf(targetElement.style.fill);
    if (i === colorSourse.length - 1 || i === -1) {
      i = 0;
    } else {
      i++;
    }

    targetElement.style.fill = colorSourse[i];
  };

  var changeElementBackgroundColor = function (targetElement, colorSourse) {
    var i = colorSourse.indexOf(targetElement.style.backgroundColor);
    if (i === colorSourse.length - 1 || i === -1) {
      i = 0;
    } else {
      i++;
    }

    targetElement.style.backgroundColor = colorSourse[i];
  };

  var getInputValue = function (targetInput, sourceElement) {
    targetInput.value = sourceElement.style.fill;
  };

  var getInputValue2 = function (targetInput, sourceElement) {
    var color = sourceElement.style.backgroundColor;
    color = window.utils.rgbToHex(color);
    targetInput.value = color;
  };

  wizardCoat.addEventListener('click', function () {
    changeElementFillColor(wizardCoat, COAT_COLORS);
    getInputValue(setupInputCoat, wizardCoat);
  });

  wizardEyes.addEventListener('click', function () {
    changeElementFillColor(wizardEyes, EYE_COLORS);
    getInputValue(setupInputEyes, wizardEyes);
  });

  var fireballColorsRgb = window.utils.arrayHexToRGB(FIREBALL_COLORS);

  fireball.addEventListener('click', function () {
    changeElementBackgroundColor(fireball, fireballColorsRgb);
    getInputValue2(setupInputFireball, fireball);
  });
})();
