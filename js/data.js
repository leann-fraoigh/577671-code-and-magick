'use strict';

(function () {
  // Создает массив волшебников
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_NUMBER = 4;

  var getWizardsArray = function (amountOfWizards) {

    var generatedWizards = [];

    for (var j = 0; j < amountOfWizards; j++) {
      var generatedWizard = {};
      generatedWizard.name = window.utils.getRandom(WIZARD_NAMES) + ' ' + window.utils.getRandom(WIZARD_SURNAMES);
      generatedWizard.coatColor = window.utils.getRandom(COAT_COLORS);
      generatedWizard.eyesColor = window.utils.getRandom(EYE_COLORS);
      generatedWizards.push(generatedWizard);
    }

    return generatedWizards;
  };

  // Запускает функцию генерации массива волшебников
  var wizardsArray = getWizardsArray(WIZARDS_NUMBER);

  window.data = {
    wizardsArray: wizardsArray,
  };
})();
