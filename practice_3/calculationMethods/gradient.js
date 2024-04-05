const euclideanDistance = require("../utils/euclideanDistance");

function gradient(x, y, anchors, distances) {
  let gradX = 0;
  let gradY = 0;

  for (let i = 0; i < anchors.length; i += 1) {
    const dx = x - anchors[i][0];
    const dy = y - anchors[i][1];

    const measuredDistance = distances[i];

    const calculatedDistance = euclideanDistance(
      x,
      y,
      anchors[i][0],
      anchors[i][1],
    );

    gradX +=
      (calculatedDistance - measuredDistance) * (dx / calculatedDistance);
    gradY +=
      (calculatedDistance - measuredDistance) * (dy / calculatedDistance);
  }

  return [gradX, gradY];
}

module.exports = gradient;
