import { cartesianToPolar } from "./cartesianPolar.js";
import { cartesianToSpherical } from "./cartesianSpherical.js";

export const generate2DPoints = ({ n, min = 0, max = 1 }) => {
  const points = [];
  for (let i = 0; i < n; i += 1) {
    points.push({
      x: Math.round(Math.random() * (max - min) + min),
      y: Math.round(Math.random() * (max - min) + min),
    });
  }

  return points;
};

export const generate3DPoints = ({ n, min = 0, max = 1 }) => {
  const points = [];
  for (let i = 0; i < n; i += 1) {
    points.push({
      x: Math.round(Math.random() * (max - min) + min),
      y: Math.round(Math.random() * (max - min) + min),
      z: Math.round(Math.random() * (max - min) + min),
    });
  }

  return points;
};

export const generateCartesianPointPairs = ({ n, min = 0, max = 1 }) => {
  const a = generate2DPoints({ n, min, max });
  const b = generate2DPoints({ n, min, max });

  return a.map((el, i) => ({ p1: el, p2: b[i] }));
};

export const generatePolarPointPairs = ({ n, min = 0, max = 1 }) => {
  const a = cartesianToPolar(generate2DPoints({ n, min, max }));
  const b = cartesianToPolar(generate2DPoints({ n, min, max }));

  return a.map((el, i) => ({ p1: el, p2: b[i] }));
};

export const generateSphericalPointPairs = ({ n, min = 0, max = 1 }) => {
  const a = cartesianToSpherical(generate2DPoints({ n, min, max }));
  const b = cartesianToSpherical(generate2DPoints({ n, min, max }));

  return a.map((el, i) => ({ p1: el, p2: b[i] }));
};

export const generate3DPairs = ({ n, min = 0, max = 1 }) => {
  const a = generate2DPoints({ n, min, max });
  const b = generate2DPoints({ n, min, max });

  return a.map((el, i) => ({ p1: el, p2: b[i] }));
};

export const testFunctionSpeed = (func, data) => {
  const start = performance.now();
  func(data);
  const end = performance.now();

  return end - start;
};
