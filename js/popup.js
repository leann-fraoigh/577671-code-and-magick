'use strict';

(function () {
  // Открытие-закрытие попапа

  var PopupEscPressHandler = function (evt) {
    var target = evt.target;
    if (target.tagName.toLowerCase() === 'input') {
      return;
    } else if (window.utils.isEscEvent(evt)) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.elements.setup.classList.remove('hidden');
    document.addEventListener('keydown', PopupEscPressHandler);
  };

  var closePopup = function () {
    window.elements.setup.classList.add('hidden');

    document.removeEventListener('keydown', PopupEscPressHandler);
  };

  window.elements.setupOpen.addEventListener('click', function () {
    openPopup();
  });

  window.elements.setupOpen.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterEvent(evt)) {
      openPopup();
    }
  });

  window.elements.setupClose.addEventListener('click', function () {
    closePopup();
  });
})();
