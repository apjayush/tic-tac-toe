
import './App.css';
import { useState } from 'react';


function Square({value, onSquareClick}){

  return <button className={`square ${value === 'X' ? 'x' : value === 'O' ? 'o' : ''}`} onClick={onSquareClick}>{value}</button>

}


// the below is the board component
export default function Board(){

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {

    if(squares[i] || checkWinner(squares) ){  //here checkWinner will stop the match because when the winner is selected it will make it 1 and thus return nothing
      return;
    }
  
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

  function checkWinner(squares){
    const possibleWinArrays = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < possibleWinArrays.length; i++) {
      const [a,b,c] = possibleWinArrays[i];
      if(squares[a]&& squares[a]===squares[b] && squares[b]===squares[c]){
          return squares[a];
      }
    }
    return null;
}


// the below code is used to change the text on winner
let winnerName;
let value = checkWinner(squares);
if(value){
  winnerName = "Congrats " + value + " is the winner !!"
}
else{
  winnerName = "Welcome to the game";
}

  
  return (
  <>
    <div className="container">
    <div className= {`${winnerName === 'winnerName' ? 'x' : 'text'}`}>{winnerName}</div>
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
    </div>
   
 
  </>
  );
}



// checkWinner can be accessed even it is defined outside the handleClick because it is defined inside the Board component