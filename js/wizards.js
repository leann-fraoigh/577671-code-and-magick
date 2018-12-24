'use strict';

(function () {
  var WIZARDS_NUMBER = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

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
      fragment.appendChild(renderWizard(window.data.wizardsArray[i]));
    }

    return fragment;
  };

  var showSimilar = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  // Запускает генерацию волшебников-объектов и вставляет их на страницу
  similarListElement.appendChild(renderWizards());

  showSimilar();
})();
