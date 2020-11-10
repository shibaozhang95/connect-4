import React, { useState, useEffect } from 'react';

import Cell from './cell';
import { doesWin } from '../utils/judge';

import { COLS, ROWS, EMPTY, RED, BLUE } from '../config/setting';

import './board.css';

const Board = () => {
  const [matrix, setMatrix] = useState(null);
  const [turn, setTurn] = useState(RED);

  useEffect(() => {
    // initiate the matrix;
    initiateGame();
  }, []);

  const initiateGame = () => {
    const m = new Array(ROWS).fill(null).map(() => new Array(COLS).fill(EMPTY));
    
    setMatrix(m);
    setTurn(RED);
  }

  const nextStepHandler = ({row, col, status}) => {
    console.log('nextStep', row, col, status);
    // if (status !== turn) return;

    const newRow = [...matrix[row]];
    newRow[col] = turn;
    const newMatrix = [...matrix];
    newMatrix[row] = newRow;
    const win = doesWin(newMatrix, row, col, turn);

    if (win) {
      alert(turn === RED ? 'Red wins' : 'blue wins');
      initiateGame();
      return;
    }
      // console.log();

    setMatrix(newMatrix);
    setTurn(turn === RED ? BLUE : RED);
  }

  let cheeseBoard = matrix ? matrix.map((row, rowIdx) => {
    return (
      <div className="row" key={rowIdx}>
        {
          row.map((cell, colIdx) => {
            return (
              <div className="cell" key={colIdx}>
                <Cell row={rowIdx} col={colIdx} status={cell} nextStepHandler={nextStepHandler} />
              </div>
            )
          })
        }
      </div>
    )
    
    }) : null;

  return <div>
      { cheeseBoard }
  </div>
}

export default Board;