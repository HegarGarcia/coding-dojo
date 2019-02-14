import { createGrid, IGrid } from '.';

let grid: IGrid;

test('Should create a grid (3 x 3)', () => {
  grid = createGrid();

  expect(grid).toBeTruthy();
  expect(grid).toHaveProperty('getDistance');
});

test('Distance from Point(0, 0) to Point(0, 0)', () => {
  const distance = grid.getDistance({ x: 0, y: 0 }, { x: 0, y: 0 });

  expect(distance).toBe(0);
});

test('Distance from Point(0, 0) to Point(3, 3)', () => {
  const distance = grid.getDistance({ x: 0, y: 0 }, { x: 3, y: 3 });

  expect(distance).toBe(6);
});

test('Distance from Point(0, 1) to Point(2, 3)', () => {
  const distance = grid.getDistance({ x: 0, y: 1 }, { x: 2, y: 3 });

  expect(distance).toBe(4);
});

test('Distance from Point(0, 3) to Point(3, 0)', () => {
  const distance = grid.getDistance({ x: 0, y: 3 }, { x: 3, y: 0 });

  expect(distance).toBe(6);
});
