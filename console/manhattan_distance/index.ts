export function createGrid(rows = 3, cols = 3): IGrid {
  const getPoint = () => ({ x: 0, y: 0 });

  const isPointInGrid = (point: IPoint) =>
    point.x >= 0 && point.x <= rows && point.y >= 0 && point.y <= cols;

  const validatePoint = ({ x, y }: IPoint) =>
    !Number.isNaN(x) && !Number.isNaN(y) && isPointInGrid({ x, y });

  return {
    getDistance(pointA = getPoint(), pointB = getPoint()) {
      const validPoints = [pointA, pointB].every(validatePoint);

      if (!validPoints) {
        throw new Error('Puntos no válidos');
      }

      const diffX = Math.abs(pointA.x - pointB.x);
      const diffY = Math.abs(pointA.y - pointB.y);

      return diffX + diffY;
    },
  };
}

export interface IGrid {
  getDistance(pointA: IPoint, pointB: IPoint): number;
}

export interface IPoint {
  x: number;
  y: number;
}
