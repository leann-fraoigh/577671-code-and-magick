'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
// не уверена, что это не лишний шаг, хотя с ним проще перемешивать
var wizardFeatures = [WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYE_COLORS];

var WIZARDS_NUMBER = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var shuffle = function (arr) {
  var j;
  var temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
};

var getWizardsArray = function (allFeaturesArray, amountOfWizards) {

  for (var i = 0; i < allFeaturesArray.length; i++) {
    var array = allFeaturesArray[i];
    shuffle(array);
  }

  var generatedWizards = [];

  for (var j = 0; j < amountOfWizards; j++) {
    var generatedWizard = {};
    // Не знаю, какой вариант тут лучше.
    generatedWizard.name = WIZARD_NAMES[j] + ' ' + WIZARD_SURNAMES[j];
    generatedWizard.coatColor = COAT_COLORS[j];
    generatedWizard.eyesColor = EYE_COLORS[j];
    // generatedWizard.name =  wizardFeatures[0][i] + ' ' +  wizardFeatures[1][i];
    // generatedWizard.coat = wizardFeatures[2][i];
    // generatedWizard.eyesColor = wizardFeatures[3][i];
    generatedWizards.push(generatedWizard);
  }
  return generatedWizards;
};

var wizardsArray = getWizardsArray(wizardFeatures, WIZARDS_NUMBER);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < WIZARDS_NUMBER; i++) {
  fragment.appendChild(renderWizard(wizardsArray[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
