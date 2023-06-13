import { useState} from 'react';

export function Square({ value, onSquareClick }) {
  return <button className="square" onClick={ onSquareClick }>{ value }</button>;
}

export function Board( squares ) {
  
  const [winMsg, setWinMsg] = useState("");
  
  function handleClick (i) {

    if (winMsg != "") {
      return;
    }
    
    // slice creates a copy of the array
    const nextSquares = squares.slice();
    
    if (nextSquares[i] != "") {
      return;
    }
    
    if (nextIsX) {
      nextSquares[i] = "X";
    }
    else {
      nextSquares[i] = "O";
    }

    const winningLetter = CheckIfWinner(nextSquares);
    
    if (winningLetter != "") {
      setWinMsg("the winner is " + winningLetter);
    }
    
    //onPlay(nextSquares);
  }
  
  function CheckIfWinner(nextSquares) {
    
    const winners = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    
    for(let idx = 0; idx < winners.length; idx++){
      let winner = winners[idx];
      
      let cellA = nextSquares[winner[0]];
      if (cellA == "") continue;
      
      let cellB = nextSquares[winner[1]];
      if (cellB == "") continue;
      
      let cellC = nextSquares[winner[2]];
      if (cellC == "") continue;
      
      if (cellA != cellB) continue;
      if (cellB != cellC) continue;
      
      return cellA;
    }
    
    return "";
  }
  
  return (
    <>
      <div>{winMsg}</div>
      <div className="board-row">
        <Square value={ squares[0] } onSquareClick={() => handleClick(0)} />
        <Square value={ squares[1] } onSquareClick={() => handleClick(1)} />
        <Square value={ squares[2] } onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={ squares[3] } onSquareClick={() => handleClick(3)} />
        <Square value={ squares[4] } onSquareClick={() => handleClick(4)} />
        <Square value={ squares[5] } onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={ squares[6] } onSquareClick={() => handleClick(6)} />
        <Square value={ squares[7] } onSquareClick={() => handleClick(7)} />
        <Square value={ squares[8] } onSquareClick={() => handleClick(8)} />
      </div>
    </>);
}

export default function Game() {
  
  const [nextIsX, setNextIsX] = useState(true);
  const [currentSquares, setCurrentSquares] = useState(Array(9).fill(""));
  
  function handleOnPlay(nextSquares) {
    setCurrentSquares(nextSquares);
    setNextIsX(!nextIsX);
  }
  
  return (
    <>
      <div className="game">
        <div className="game-board">
            <Board squares={currentSquares}/>
        </div>
        <div className="game-info" >
            hello world
        </div>
      </div>
    </>);
}