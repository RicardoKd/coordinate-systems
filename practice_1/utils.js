export const generatePoints = ({ n, dimensions, min = 0, max = 1 }) => {
  let points = [];
  for (let i = 0; i < n; i++) {
    let point = [];
    for (let j = 0; j < dimensions; j++) {
      let coord = Math.round(Math.random() * (max - min) + min);
      point.push(coord);
    }
    points.push(point);
  }

  return points;
};

export const testFunctionSpeed = (func, data) => {
  const start = performance.now();
  func(data);
  const end = performance.now();

  return end - start;
};
