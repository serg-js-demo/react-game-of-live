import { useEffect, useState } from "react";

const createArr = (size: number) => Array.from({length: size * size}).map(
  (i, n) => (Math.floor(Math.random() * 100) % 2)
);

type UseLifeCellsArgs = {
  size: number;
  started: boolean;
}

const useLifeCells = ({size, started}: UseLifeCellsArgs) => {
  const [cells, setCells] = useState(createArr(size));
  useEffect(() => {
    if (!started) {
        return;
    }

    const interval = setInterval(() => {
        setCells(runLife(cells, size));
    }, 100)

    return () => clearTimeout(interval)
  }, [size, started, cells, setCells]);

  useEffect(() => {
    if (started) {
        setCells(createArr(size));
    }
  }, [started, setCells, size]);

  useEffect(() => {
    setCells(createArr(size));
  }, [size]);

  return cells;
}

const checkCells = (grid: number[], i: number, j: number, xMax: number, yMax: number) => {
  const isAlive = (grid[i + j * xMax]) > 0 ? 1: 0;

  let neighborCount = 0;

  if (i - 1 >= 0){
    const v = (grid[(i - 1) + j * xMax] > 0 ? 1 : 0);
    neighborCount += v;
  }

  if (i + 1 <= xMax){
    const v = (grid[(i + 1) + j * xMax] > 0 ? 1 : 0);
    neighborCount += v;
  }

  if (j - 1 >= 0){
    const v = (grid[i + (j - 1) * xMax] > 0 ? 1 : 0);
    neighborCount += v;
  }

  if (j + 1 <= yMax){
    const v = (grid[i + (j + 1) * xMax] > 0 ? 1 : 0);
    neighborCount += v;
  }

  if ( (i - 1 >= 0) && (j - 1 >= 0) ){
    const v = (grid[(i - 1) + (j - 1) * xMax] > 0 ? 1 : 0);
    neighborCount += v;
  }

  if ( (i + 1 <= xMax) && (j - 1 >= 0) ){
    const v = (grid[(i+1) + (j - 1) * xMax] > 0 ? 1 : 0);
    neighborCount += v;
  }

  if ( (i - 1 >= 0) && (j + 1 <= yMax) ){
    const v = (grid[(i - 1) + (j + 1) * xMax] > 0 ? 1 : 0);
    neighborCount += v;
  }

  if ( (i + 1 <= xMax) && (j + 1 <= yMax) ){
    const v = (grid[(i + 1) + (j + 1) * xMax] > 0 ? 1 : 0);
    neighborCount += v;
  }

  if ( neighborCount < 2 && isAlive === 1){
    return 0;
  }

  if ( neighborCount === 2 && isAlive === 1){
    return 1;
  }

  if ( neighborCount === 3 && isAlive === 1){
    return 1;
  }

  if ( neighborCount > 3 && isAlive === 1){
    return 0;
  }

  if ((neighborCount === 3) && (isAlive === 0)){
    return 1;
  }

  return 0;
}

const runLife = (grid: number[], size: number) => {
  const gridCopy = [];

  for (let y = 0; y < size; y++){
    for (let x = 0; x < size; x++){
        gridCopy[x + y * size] = checkCells(grid, x, y, size, size);
    }
  }

  return gridCopy.slice(0);
}

export default useLifeCells;
