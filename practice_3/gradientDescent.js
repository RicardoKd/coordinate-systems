const gradient = require("./gradient");

function gradientDescent(
  anchors,
  distances,
  initialGuess,
  learningRate,
  iterations,
) {
  let [x, y] = initialGuess;

  for (let i = 0; i < iterations; i += 1) {
    const [gradX, gradY] = gradient(x, y, anchors, distances);
    x -= learningRate * gradX;
    y -= learningRate * gradY;
  }

  return [x, y];
}

module.exports = gradientDescent;
