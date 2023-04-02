
import './App.css';
import { useState } from 'react';


function Square({value, onSquareClick}){

  return <button className='square' onClick={onSquareClick}>{value}</button>

}


export default function Board(){

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true)



  function handleClick(i) {
    const nextSquares = squares.slice();
    // nextSquares is the copy of the square array

     // alternate O and X code is below if the first value is X then the second square will be O
     if(!xIsNext){
      nextSquares[i] = "O";
      setXIsNext(true)
    }
    else{
      nextSquares[i] = "X";
      setXIsNext(false)
    }
    
    setSquares(nextSquares);
  }

  return (
  <>
  <div className="board">
    <div className="boardRow">
      <Square value={squares[0]} onSquareClick={()=> handleClick(0)} />
      <Square value={squares[1]} onSquareClick={()=> handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={()=> handleClick(2)}/>
    </div>
    <div className="boardRow">
      <Square value={squares[3]} onSquareClick={()=> handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=> handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={()=> handleClick(5)}/>
    </div>
    <div className="boardRow">
      <Square value={squares[6]} onSquareClick={()=> handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={()=> handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={()=> handleClick(8)}/>
    </div>
    
  </div>
 
  </>
  );
}

