/* eslint-disable no-console */
import { cartesianToPolar, polarToCartesian } from "./src/cartesianPolar.js";
import {
  generate2DPoints,
  generate3DPoints,
  testFunctionSpeed,
  generatePolarPointPairs,
  generateCartesianPointPairs,
  generateSphericalPointPairs,
} from "./src/utils.js";
import {
  cartesianToSpherical,
  sphericalToCartesian,
} from "./src/cartesianSpherical.js";
import {
  cartesianDistance,
  polarDistance,
  sphericalDistance,
} from "./src/distanceCalculation.js";

const n = 1000000;
const loggingSeparator = "\n--------------------------\n";

const cartesianVSPolarSpeed = () => {
  const points2D = generate2DPoints({ n });

  const cartesianToPolarTime = testFunctionSpeed(cartesianToPolar, points2D);
  const polarToCartesianTime = testFunctionSpeed(polarToCartesian, points2D);

  console.log(
    loggingSeparator,
    `Conversion of cartesian coordinates to polar took ${Math.round(
      cartesianToPolarTime,
    )} milliseconds.`,
    "\n",
    `Conversion of polar coordinates to cartesian took ${Math.round(
      polarToCartesianTime,
    )} milliseconds.`,
    loggingSeparator,
  );
};

const cartesianVSSphericalSpeed = () => {
  const points3D = generate3DPoints({ n });

  const cartesianToSphericalTime = testFunctionSpeed(
    cartesianToSpherical,
    points3D,
  );
  const sphericalToCartesianTime = testFunctionSpeed(
    sphericalToCartesian,
    points3D,
  );

  console.log(
    loggingSeparator,
    `Conversion of cartesian coordinates to spherical took ${Math.round(
      cartesianToSphericalTime,
    )} milliseconds.`,
    "\n",
    `Conversion of spherical coordinates to cartesian took ${Math.round(
      sphericalToCartesianTime,
    )} milliseconds.`,
    loggingSeparator,
  );
};

const cartesianDistanceSpeed = () => {
  const cartesianPointPairs = generateCartesianPointPairs({ n });
  const cartesianDistanceTime = testFunctionSpeed(
    cartesianDistance,
    cartesianPointPairs,
  );

  console.log(
    loggingSeparator,
    `Calculation of distance between points in cartesian system took ${Math.round(
      cartesianDistanceTime,
    )} milliseconds.`,
    loggingSeparator,
  );
};

const polarDistanceSpeed = () => {
  const polarPointPairs = generatePolarPointPairs({ n });
  const polarDistanceTime = testFunctionSpeed(polarDistance, polarPointPairs);

  console.log(
    loggingSeparator,
    `Calculation of distance between points in polar system took ${Math.round(
      polarDistanceTime,
    )} milliseconds.`,
    loggingSeparator,
  );
};

const sphericalDistanceSpeed = () => {
  const sphericalPointPairs = generateSphericalPointPairs({ n });
  const sphericalDistanceTime = testFunctionSpeed(
    sphericalDistance,
    sphericalPointPairs,
  );

  console.log(
    loggingSeparator,
    `Calculation of distance between points in spherical system took ${Math.round(
      sphericalDistanceTime,
    )} milliseconds.`,
    loggingSeparator,
  );
};

cartesianVSPolarSpeed();
cartesianVSSphericalSpeed();
cartesianDistanceSpeed();
polarDistanceSpeed();
sphericalDistanceSpeed();
