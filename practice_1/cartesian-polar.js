export const cartesianToPolar = (points) => {
  return points.map(([x, y]) => {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x);

    return [r, theta];
  });
};

export const polarToCartesian = (points) => {
  return points.map(([r, theta]) => {
    const x = Math.round(r * Math.cos(theta));
    const y = Math.round(r * Math.sin(theta));

    return [x, y];
  });
};
