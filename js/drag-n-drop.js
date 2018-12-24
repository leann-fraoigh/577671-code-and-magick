'use strict';

(function () {
  // var setup = document.querySelector('.setup');

  var dialogHandler = window.elements.setup.querySelector('.upload');

  var dragged = false;

  var setupPositionInit = {
    x: undefined,
    y: undefined,
  };

  var startCoords = {
    x: undefined,
    y: undefined,
  };

  var onMouseDown = function (evt) {
    setupPositionInit.x = window.elements.setup.offsetTop;
    setupPositionInit.y = window.elements.setup.offsetLeft;

    startCoords.x = evt.clientX;
    startCoords.y = evt.clientY;
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    window.elements.setup.style.top = (window.elements.setup.offsetTop - shift.y) + 'px';
    window.elements.setup.style.left = (window.elements.setup.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (evt) {
        evt.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventDefault);
        dragged = false;
      };
      dialogHandler.addEventListener('click', onClickPreventDefault);
    }
  };

  var resetSetupPosition = function () {
    window.elements.setup.style.top = setupPositionInit.x + 'px';
    window.elements.setup.style.left = setupPositionInit.y + 'px';
  };

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    onMouseDown(evt);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.elements.setupOpen.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterEvent(evt)) {
      resetSetupPosition();
    }
  });

  window.elements.setupOpen.addEventListener('click', function () {
    resetSetupPosition();
  });
})();
