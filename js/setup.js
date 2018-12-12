'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUMBER = 4;
// Клавиши
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
// Элементы
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var fireball = setup.querySelector('.setup-fireball-wrap');
var setupInputEyes = setup.querySelector('input[name="eyes-color"]');
var setupInputCoat = setup.querySelector('input[name="coat-color"]');
var setupInputFireball = setup.querySelector('input[name="fireball-color"]');

// Вспомогательные функции
// Выдает рандомный элемент массива
var getRandom = function (array) {
  return array[Math.floor(Math.random() * (array.length - 1))];
};

// Конвертор hex в rgb
var hexToRGB = function (hex) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

// Конвертер rgb в hex

var rgbToHex = function (rgb) {
  var parts = rgb.substring(rgb.indexOf('(')).split(',');
  var r = parseInt(parts[0].substring(1), 10);
  var g = parseInt(parts[1], 10);
  var b = parseInt(parts[2], 10);

  return ('#' + r.toString(16) + g.toString(16) + b.toString(16));
};

// Перебор массива с конвертацией hex в rgb
var arrayHexToRGB = function (array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    ret[i] = hexToRGB(array[i]);
  }
  return ret;
};

var showSimilar = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var PopupEscPressHandler = function (evt) {
  var target = evt.target;
  if (target.tagName.toLowerCase() === 'input') {
    return;
  } else if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', PopupEscPressHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', PopupEscPressHandler);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

// Отправка формы же и так работает?!
// var setupForm = setup.querySelector('.setup-wizard-form');
// var setupSubmit = setup.querySelector('.setup-submit');

// setupSubmit.addEventListener('click', function () {
//   setupForm.submit();
//   closePopup();
// });

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
  color = rgbToHex(color);
  targetInput.value = color;
};

wizardCoat.addEventListener('click', function () {
  // Или это тоже внутриенность функции, хоть и анонимной, и здесь уже нельзя переменные использовать?
  changeElementFillColor(wizardCoat, COAT_COLORS);
  getInputValue(setupInputCoat, wizardCoat);
  // Так очень некрасиво? -->
  // changeInputValue(wizardCoat, changeElementFillColor(wizardCoat, COAT_COLORS));
});

wizardEyes.addEventListener('click', function () {
  changeElementFillColor(wizardEyes, EYE_COLORS);
  getInputValue(setupInputEyes, wizardEyes);
});

var fireballColorsRgb = arrayHexToRGB(FIREBALL_COLORS);

fireball.addEventListener('click', function () {
  changeElementBackgroundColor(fireball, fireballColorsRgb);
  getInputValue2(setupInputFireball, fireball);
});

// Создает массив волшебников
var getWizardsArray = function (amountOfWizards) {

  var generatedWizards = [];

  for (var j = 0; j < amountOfWizards; j++) {
    var generatedWizard = {};
    generatedWizard.name = getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES);
    generatedWizard.coatColor = getRandom(COAT_COLORS);
    generatedWizard.eyesColor = getRandom(EYE_COLORS);
    generatedWizards.push(generatedWizard);
  }

  return generatedWizards;
};

// Создает элемент со всеми волшебниками
var renderWizards = function () {
  // Создает фрагмент
  var fragment = document.createDocumentFragment();

  // Отрисовывает одного волшебника
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // Записывает во фрагмент всех волшебников
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    fragment.appendChild(renderWizard(wizardsArray[i]));
  }

  return fragment;
};

// Запускает функцию генерации массива волшебников
var wizardsArray = getWizardsArray(WIZARDS_NUMBER);

// Запускает генерацию волшебников-объектов и вставляет их на страницу
similarListElement.appendChild(renderWizards());

showSimilar();
