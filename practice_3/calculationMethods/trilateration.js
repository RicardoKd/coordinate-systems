function trilateration(x1, y1, r1, x2, y2, r2, x3, y3, r3) {
  const A = 2 * x2 - 2 * x1;
  const B = 2 * y2 - 2 * y1;
  const C = r1 ** 2 - r2 ** 2 - x1 ** 2 - y1 ** 2 + x2 ** 2 + y2 ** 2;
  const D = 2 * x3 - 2 * x2;
  const E = 2 * y3 - 2 * y2;
  const F = r2 ** 2 - r3 ** 2 - x2 ** 2 - y2 ** 2 + x3 ** 2 + y3 ** 2;
  const x = (C * E - F * B) / (E * A - B * D);
  const y = (C * D - A * F) / (B * D - A * E);
  if (!Number.isNaN(x) && !Number.isNaN(y)) {
    return { x, y };
  }

  return null;
}

module.exports = trilateration;
