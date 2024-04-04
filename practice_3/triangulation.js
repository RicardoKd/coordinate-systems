function triangulation(x1, y1, theta1, x2, y2, theta2) {
  const tanTheta1 = Math.tan(theta1);
  const tanTheta2 = Math.tan(theta2);

  const x3 =
    (y1 - y2 + tanTheta2 * x2 - tanTheta1 * x1) / (tanTheta2 - tanTheta1);
  const y3 =
    (y1 * tanTheta2 - y2 * tanTheta1 - (x1 - x2) * tanTheta2 * tanTheta1) /
    (tanTheta2 - tanTheta1);

  return { x: x3, y: y3 };
}

module.exports = triangulation;
