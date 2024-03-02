export const cartesianToSpherical = (points) =>
  points.map(({ x, y, z }) => {
    const r = Math.sqrt(x * x + y * y + z * z);
    const theta = Math.acos(z / r);
    const phi = Math.atan2(y, x);

    return { r, theta, phi };
  });

export const sphericalToCartesian = (points) =>
  points.map(({ r, theta, phi }) => {
    const x = Math.round(r * Math.sin(theta) * Math.cos(phi));
    const y = Math.round(r * Math.sin(theta) * Math.sin(phi));
    const z = Math.round(r * Math.cos(theta));

    return { x, y, z };
  });
