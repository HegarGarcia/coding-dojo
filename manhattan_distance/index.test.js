const createGrid = require('./index');

let grid;

test('Should create a grid', () => {
  grid = createGrid();

  expect(grid).toBeTruthy();
});

test('Distance from (0, 0) to (0, 0)', () => {
  const distance = grid.getDistance({ x: 0, y: 0 }, { x: 0, y: 0 });
  expect(distance).toBe(0);
});

test('Distance from (0, 0) to (3, 3)', () => {
  const distance = grid.getDistance({ x: 0, y: 0 }, { x: 3, y: 3 });
  expect(distance).toBe(6);
});

test('Distance from (0, 1) to (2, 3)', () => {
  const distance = grid.getDistance({ x: 0, y: 1 }, { x: 2, y: 3 });
  expect(distance).toBe(4);
});

test('Distance from (0, 3) to (3, 0)', () => {
  const distance = grid.getDistance({ x: 0, y: 3 }, { x: 3, y: 0 });
  expect(distance).toBe(6);
});
