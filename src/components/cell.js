import React from 'react';
import { EMPTY, RED, BLUE } from '../config/setting';

import './cell.css';

const Cell = ({ row, col, status, nextStepHandler}) => {
  // console.log
  const cellCN = status === EMPTY 
    ? 'cell-empty'
    : (status === RED ? 'cell-red' : 'cell-blue');

  const clickHanlder = () => {
    if (status !== EMPTY) return;

    nextStepHandler({ row, col, status });
  }
  return <div className={`cell ${cellCN}`}
    onClick={clickHanlder}
  ></div> 
}

export default Cell;