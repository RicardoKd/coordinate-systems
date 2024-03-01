import { generatePoints, testFunctionSpeed } from "./utils.js";
import {
  cartesianToSpherical,
  sphericalToCartesian,
} from "./cartesian-spherical.js";
import { cartesianToPolar, polarToCartesian } from "./cartesian-polar.js";

const cartesianVSPolar = () => {
  const points2D = generatePoints({
    n: 10000000,
    dimensions: 3,
  });

  const cartesianToPolarTime = testFunctionSpeed(cartesianToPolar, points2D);
  const polarToCartesianTime = testFunctionSpeed(polarToCartesian, points2D);

  console.log(
    `Conversion of cartesian coordinates to polar took ${Math.round(
      cartesianToPolarTime,
    )} milliseconds.`,
  );

  console.log(
    `Conversion of polar coordinates to cartesian took ${Math.round(
      polarToCartesianTime,
    )} milliseconds.`,
  );
};

const cartesianVSSpherical = () => {
  const points3D = generatePoints({
    n: 10000000,
    dimensions: 3,
  });

  const cartesianToSphericalTime = testFunctionSpeed(
    cartesianToSpherical,
    points3D,
  );
  const sphericalToCartesianTime = testFunctionSpeed(
    sphericalToCartesian,
    points3D,
  );

  console.log(
    `Conversion of cartesian coordinates to spherical took ${Math.round(
      cartesianToSphericalTime,
    )} milliseconds.`,
  );

  console.log(
    `Conversion of spherical coordinates to cartesian took ${Math.round(
      sphericalToCartesianTime,
    )} milliseconds.`,
  );
};

cartesianVSPolar();
cartesianVSSpherical();
