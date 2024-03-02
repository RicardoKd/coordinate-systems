export const cartesianDistance = (pointsArray) =>
  pointsArray.map(({ p1, p2 }) =>
    Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2),
  );

export const polarDistance = (pointsArray) => {
  pointsArray.map(({ p1, p2 }) =>
    Math.sqrt(
      p1.r ** 2 + p2.r ** 2 - 2 * p1.r * p2.r * Math.cos(p2.theta - p1.theta),
    ),
  );
};

export const sphericalDistance = (pointsArray) => {
  pointsArray.map(({ p1, p2 }) =>
    Math.sqrt(
      p1.r ** 2 +
        p2.r ** 2 -
        2 *
          p1.r *
          p2.r *
          (Math.sin(p1.theta) * Math.sin(p2.theta) * Math.cos(p1.phi - p2.phi) +
            Math.cos(p1.theta) * Math.cos(p2.theta)),
    ),
  );
};
