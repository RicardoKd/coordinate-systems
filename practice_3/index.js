/* eslint-disable no-console */

const trilateration = require("./trilateration.js");
const triangulation = require("./triangulation.js");
const getDistance = require("./utils/getDistance.js");
const gradientDescent = require("./gradientDescent.js");
const calculateAngle = require("./utils/calculateAngle.js");
const {
  BASE_STATION_1,
  BASE_STATION_2,
  BASE_STATION_3,
  OBJECT_COORDINATES,
} = require("./const.js");

const noiseVariance = 10;
const noise1 = Math.random() * noiseVariance;
const noise2 = Math.random() * noiseVariance;
const noise3 = Math.random() * noiseVariance;

console.log(
  "\tNoise: ",
  noise1.toFixed(2),
  noise2.toFixed(2),
  noise3.toFixed(2),
);

console.log("Trilateration");

const distanceToBaseStation1 = getDistance(OBJECT_COORDINATES, BASE_STATION_1);
const distanceToBaseStation2 = getDistance(OBJECT_COORDINATES, BASE_STATION_2);
const distanceToBaseStation3 = getDistance(OBJECT_COORDINATES, BASE_STATION_3);

let result = trilateration(
  BASE_STATION_1.x,
  BASE_STATION_1.y,
  distanceToBaseStation1,
  BASE_STATION_2.x,
  BASE_STATION_2.y,
  distanceToBaseStation2,
  BASE_STATION_3.x,
  BASE_STATION_3.y,
  distanceToBaseStation3,
);

console.log(
  "\t1) Object's Coordinates without noise:",
  result.x.toFixed(2),
  "y:",
  result.y.toFixed(2),
);

const distanceWithNoiseToBase1 = Math.sqrt(
  (OBJECT_COORDINATES.x + noise1 - BASE_STATION_1.x) ** 2 +
    (OBJECT_COORDINATES.y + noise1 - BASE_STATION_1.y) ** 2,
);
const distanceWithNoiseToBase2 = Math.sqrt(
  (OBJECT_COORDINATES.x + noise2 - BASE_STATION_2.x) ** 2 +
    (OBJECT_COORDINATES.y + noise2 - BASE_STATION_2.y) ** 2,
);
const distanceWithNoiseToBase3 = Math.sqrt(
  (OBJECT_COORDINATES.x + noise3 - BASE_STATION_3.x) ** 2 +
    (OBJECT_COORDINATES.y + noise3 - BASE_STATION_3.y) ** 2,
);

result = trilateration(
  BASE_STATION_1.x,
  BASE_STATION_1.y,
  distanceWithNoiseToBase1,
  BASE_STATION_2.x,
  BASE_STATION_2.y,
  distanceWithNoiseToBase2,
  BASE_STATION_3.x,
  BASE_STATION_3.y,
  distanceWithNoiseToBase3,
);

console.log(
  "\t2) Object's Coordinates with Noise:",
  "x:",
  result.x.toFixed(2),
  "y:",
  result.y.toFixed(2),
);

console.log("\nTriangulation");

const x1 = -2;
const y1 = 2;
const x2 = 2;
const y2 = 2;

const theta1 = calculateAngle(
  x1,
  y1,
  OBJECT_COORDINATES.x,
  OBJECT_COORDINATES.y,
);
const theta2 = calculateAngle(
  x2,
  y2,
  OBJECT_COORDINATES.x,
  OBJECT_COORDINATES.y,
);
const position = triangulation(x1, y1, theta1, x2, y2, theta2);

const theta1WithNoise = calculateAngle(
  x1,
  y1,
  OBJECT_COORDINATES.x + noise1,
  OBJECT_COORDINATES.y + noise1,
);

const theta2WithNoise = calculateAngle(
  x2,
  y2,
  OBJECT_COORDINATES.x + noise2,
  OBJECT_COORDINATES.y + noise2,
);

const positionWithNoise = triangulation(
  x1,
  y1,
  theta1WithNoise,
  x2,
  y2,
  theta2WithNoise,
);

console.log(
  `\t1) Coordinates of the object without noise: x = ${position.x.toFixed(2)}, y = ${position.y.toFixed(2)}`,
);
console.log(
  `\t2) Coordinates of the object with noise: x = ${positionWithNoise.x.toFixed(2)}, y = ${positionWithNoise.y.toFixed(2)}`,
);

console.log("\nGradient Descent");

const anchors = [
  [BASE_STATION_1.x, BASE_STATION_1.y],
  [BASE_STATION_2.x, BASE_STATION_2.y],
  [BASE_STATION_3.x, BASE_STATION_3.y],
];
const distances = [
  distanceToBaseStation1,
  distanceToBaseStation2,
  distanceToBaseStation3,
];

const initialGuess = [1, 1];
const learningRate = 0.1 ** 1;
const iterations = 10 ** 3;

const [x, y] = gradientDescent(
  anchors,
  distances,
  initialGuess,
  learningRate,
  iterations,
);

const learningRateIncreased = 0.1 ** 3;
const iterationsIncreased = 10 ** 5;

const noisyDistances = [
  distanceWithNoiseToBase1,
  distanceWithNoiseToBase2,
  distanceWithNoiseToBase3,
];

const [xNoise1, yNoise1] = gradientDescent(
  anchors,
  noisyDistances,
  initialGuess,
  learningRate,
  iterations,
);

const [xNoise2, yNoise2] = gradientDescent(
  anchors,
  noisyDistances,
  initialGuess,
  learningRateIncreased,
  iterations,
);

const [xNoise3, yNoise3] = gradientDescent(
  anchors,
  noisyDistances,
  initialGuess,
  learningRate,
  iterationsIncreased,
);

const [xNoise4, yNoise4] = gradientDescent(
  anchors,
  noisyDistances,
  initialGuess,
  learningRateIncreased,
  iterationsIncreased,
);

console.log(
  `\t1) Coordinates without noise: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`,
);
console.log(
  `\t2) Coordinates with noise: x = ${xNoise1.toFixed(2)}, y = ${yNoise1.toFixed(2)}`,
);
console.log(
  `\t3) Coordinates with noise (increased rate): x = ${xNoise2.toFixed(2)}, y = ${yNoise2.toFixed(2)}`,
);
console.log(
  `\t4) Coordinates with noise (increased n of iterations): x = ${xNoise3.toFixed(2)}, y = ${yNoise3.toFixed(2)}`,
);
console.log(
  `\t5) Coordinates with noise (increased both): x = ${xNoise4.toFixed(2)}, y = ${yNoise4.toFixed(2)}`,
);
