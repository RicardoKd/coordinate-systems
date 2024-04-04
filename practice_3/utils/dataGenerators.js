const trilateration = require("../trilateration.js");
const triangulation = require("../triangulation.js");
const gradientDescent = require("../gradientDescent.js");
const calculateAngle = require("./calculateAngle.js");
const {
  BASE_STATION_1,
  BASE_STATION_2,
  BASE_STATION_3,
} = require("../const.js");

function generateTrilaterationData(
  baseStation1,
  baseStation2,
  baseStation3,
  objectCoordinates,
  noiseVariance,
) {
  const trilaterationData = [];

  for (let i = 0; i < 1000; i += 1) {
    const noise1 = Math.random() * noiseVariance;
    const noise2 = Math.random() * noiseVariance;
    const noise3 = Math.random() * noiseVariance;

    const noisyDistanceToBase1 = Math.sqrt(
      (objectCoordinates.x + noise1 - baseStation1.x) ** 2 +
        (objectCoordinates.y + noise1 - baseStation1.y) ** 2,
    );
    const noisyDistanceToBase2 = Math.sqrt(
      (objectCoordinates.x + noise2 - baseStation2.x) ** 2 +
        (objectCoordinates.y + noise2 - baseStation2.y) ** 2,
    );
    const noisyDistanceToBase3 = Math.sqrt(
      (objectCoordinates.x + noise3 - baseStation3.x) ** 2 +
        (objectCoordinates.y + noise3 - baseStation3.y) ** 2,
    );

    const result = trilateration(
      BASE_STATION_1.x,
      BASE_STATION_1.y,
      noisyDistanceToBase1,
      BASE_STATION_2.x,
      BASE_STATION_2.y,
      noisyDistanceToBase2,
      BASE_STATION_3.x,
      BASE_STATION_3.y,
      noisyDistanceToBase3,
    );

    trilaterationData.push({ x: result.x, y: result.y });
  }

  return trilaterationData;
}

function generateTriangulationData(
  baseStation1,
  baseStation2,
  objectCoordinates,
  noiseVariance,
) {
  const triangulationData = [];

  for (let i = 0; i < 1000; i += 1) {
    const noise1 = Math.random() * noiseVariance;
    const noise2 = Math.random() * noiseVariance;

    const theta1WithNoise = calculateAngle(
      baseStation1.x,
      baseStation1.y,
      objectCoordinates.x + noise1,
      objectCoordinates.y + noise1,
    );
    const theta2WithNoise = calculateAngle(
      baseStation2.x,
      baseStation2.y,
      objectCoordinates.x + noise2,
      objectCoordinates.y + noise2,
    );

    const result = triangulation(
      baseStation1.x,
      baseStation1.y,
      theta1WithNoise,
      baseStation2.x,
      baseStation2.y,
      theta2WithNoise,
    );

    triangulationData.push({ x: result.x, y: result.y });
  }

  return triangulationData;
}

function generateGradientDescentData(
  anchors,
  distances,
  initialGuess,
  learningRate,
  iterations,
  noiseVariance,
) {
  const noisyGradientDescentData = [];

  for (let i = 0; i < 1000; i += 1) {
    const noisyDistances = distances.map(
      (distance) => distance + Math.random() * noiseVariance,
    );

    const [x, y] = gradientDescent(
      anchors,
      noisyDistances,
      initialGuess,
      learningRate,
      iterations,
    );
    noisyGradientDescentData.push({ x, y });
  }

  return noisyGradientDescentData;
}

module.exports = {
  generateTrilaterationData,
  generateTriangulationData,
  generateGradientDescentData,
};
