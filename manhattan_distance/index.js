function createGrid(rows = 3, cols = 3) {
  const getPoint = () => ({ x: 0, y: 0 });

  const isPointInGrid = point =>
    point.x >= 0 && point.x <= rows && point.y >= 0 && point.y <= cols;

  const validatePoint = point => {
    if (Number.isNaN(point.x) || Number.isNaN(point.y)) {
      throw new Error('Valores deben ser números');
    }

    if (!isPointInGrid(point)) {
      throw new Error('El punto no está en el grid');
    }

    return {
      x: Math.abs(point.x),
      y: Math.abs(point.y)
    };
  };

  return {
    getDistance(pointA = getPoint(), pointB = getPoint()) {
      const pA = validatePoint(pointA);
      const pB = validatePoint(pointB);

      const diffX = Math.abs(pA.x - pB.x);
      const diffY = Math.abs(pA.y - pB.y);

      return diffX + diffY;
    }
  };
}

module.exports = createGrid;
