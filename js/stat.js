'use strict';

var CLOUD_X_GAP = 150;
var CLOUD_Y_GAP = 25;
var BAR_WIDTH = 40;
var barHeigth = 150;
var BAR_GAP = 50;
var LINE_HEIGTH = 15;
var mainPlayer = 'Вы';


var renderCloud = function (ctx, translateX, translateY, color) {
  ctx.translate(translateX, translateY);
  ctx.beginPath();
  ctx.moveTo(110, 270);
  ctx.bezierCurveTo(98, 240, 98, 175, 110, 145);
  ctx.bezierCurveTo(98, 115, 98, 40, 110, 20);
  ctx.bezierCurveTo(140, 8, 270, 8, 310, 20);
  ctx.bezierCurveTo(340, 8, 490, 8, 510, 20);
  ctx.bezierCurveTo(522, 40, 522, 115, 510, 145);
  ctx.bezierCurveTo(522, 175, 522, 240, 510, 270);
  ctx.bezierCurveTo(490, 282, 340, 282, 310, 270);
  ctx.bezierCurveTo(270, 282, 140, 282, 110, 270);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 10, 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, -10, -10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X_GAP, CLOUD_Y_GAP + LINE_HEIGTH * 0);
  ctx.fillText('Список результатов:', CLOUD_X_GAP, CLOUD_Y_GAP + LINE_HEIGTH * 1);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === mainPlayer) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = Math.floor(Math.random() * 90) + 10;
      var hsl = 'hsl(' + '240, ' + saturation + '%,  ' + '44%)';
      ctx.fillStyle = hsl;
    }

    ctx.fillRect(CLOUD_X_GAP + (BAR_WIDTH + BAR_GAP) * i, 230, BAR_WIDTH, -(barHeigth * times[i] / maxTime));

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X_GAP + (BAR_WIDTH + BAR_GAP) * i, 240);
    ctx.fillText(Math.round(times[i]), CLOUD_X_GAP + (BAR_WIDTH + BAR_GAP) * i, 210 - barHeigth * times[i] / maxTime);
  }
};

