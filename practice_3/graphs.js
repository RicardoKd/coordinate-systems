const plt = require("nodeplotlib");

const getDistance = require("./utils/getDistance.js");
const {
  generateTrilaterationData,
  generateTriangulationData,
  generateGradientDescentData,
} = require("./utils/dataGenerators.js");
const {
  BASE_STATION_1,
  BASE_STATION_2,
  BASE_STATION_3,
  OBJECT_COORDINATES,
} = require("./const/const.js");

const distanceToBase1 = getDistance(OBJECT_COORDINATES, BASE_STATION_1);
const distanceToBase2 = getDistance(OBJECT_COORDINATES, BASE_STATION_2);
const distanceToBase3 = getDistance(OBJECT_COORDINATES, BASE_STATION_3);

const noiseVariance = 1;

const trilaterationData = generateTrilaterationData(
  BASE_STATION_1,
  BASE_STATION_2,
  BASE_STATION_3,
  OBJECT_COORDINATES,
  noiseVariance,
);
const triangulationData = generateTriangulationData(
  BASE_STATION_1,
  BASE_STATION_2,
  OBJECT_COORDINATES,
  noiseVariance,
);
const gradientDescentData = generateGradientDescentData(
  [
    [BASE_STATION_1.x, BASE_STATION_1.y],
    [BASE_STATION_2.x, BASE_STATION_2.y],
    [BASE_STATION_3.x, BASE_STATION_3.y],
  ],
  [distanceToBase1, distanceToBase2, distanceToBase3],
  [1, 1],
  0.1 ** 1,
  10 ** 3,
  noiseVariance,
);
const gradientDescentDataHR = generateGradientDescentData(
  [
    [BASE_STATION_1.x, BASE_STATION_1.y],
    [BASE_STATION_2.x, BASE_STATION_2.y],
    [BASE_STATION_3.x, BASE_STATION_3.y],
  ],
  [distanceToBase1, distanceToBase2, distanceToBase3],
  [1, 1],
  0.1 ** 3,
  10 ** 3,
  noiseVariance,
);
const gradientDescentDataMI = generateGradientDescentData(
  [
    [BASE_STATION_1.x, BASE_STATION_1.y],
    [BASE_STATION_2.x, BASE_STATION_2.y],
    [BASE_STATION_3.x, BASE_STATION_3.y],
  ],
  [distanceToBase1, distanceToBase2, distanceToBase3],
  [1, 1],
  0.1 ** 1,
  10 ** 4,
  noiseVariance,
);
const gradientDescentDataHRMI = generateGradientDescentData(
  [
    [BASE_STATION_1.x, BASE_STATION_1.y],
    [BASE_STATION_2.x, BASE_STATION_2.y],
    [BASE_STATION_3.x, BASE_STATION_3.y],
  ],
  [distanceToBase1, distanceToBase2, distanceToBase3],
  [1, 1],
  0.1 ** 3,
  10 ** 4,
  noiseVariance,
);

plt.plot(
  [
    {
      x: trilaterationData.map((point) => point.x),
      y: trilaterationData.map((point) => point.y),
      type: "scatter",
      mode: "markers",
      name: "Trilateration",
    },
    {
      x: triangulationData.map((point) => point.x),
      y: triangulationData.map((point) => point.y),
      type: "scatter",
      mode: "markers",
      name: "Triangulation",
    },
    {
      x: gradientDescentData.map((point) => point.x),
      y: gradientDescentData.map((point) => point.y),
      type: "scatter",
      mode: "markers",
      name: "Gradient Descent",
    },
    {
      x: gradientDescentDataHR.map((point) => point.x),
      y: gradientDescentDataHR.map((point) => point.y),
      type: "scatter",
      mode: "markers",
      name: "Gradient Descent(High Rate)",
    },
    {
      x: gradientDescentDataMI.map((point) => point.x),
      y: gradientDescentDataMI.map((point) => point.y),
      type: "scatter",
      mode: "markers",
      name: "Gradient Descent(More Iterations)",
    },
    {
      x: gradientDescentDataHRMI.map((point) => point.x),
      y: gradientDescentDataHRMI.map((point) => point.y),
      type: "scatter",
      mode: "markers",
      name: "Gradient Descent(Hight Rate and More Iterations)",
    },
  ],
  {
    title: "Comparison of methods",
    xaxis: { title: "X axis" },
    yaxis: { title: "Y axis" },
  },
);
