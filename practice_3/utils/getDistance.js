function getDistance(point2, point1) {
  return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
}

module.exports = getDistance;
