'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

// Показывает окно настроек
var showSetup = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
};

// Выдает рандомный элемент массива
var getRandom = function (array) {
  return array[Math.floor(Math.random() * (array.length - 1))];
};

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

showSetup();
