import { useState} from 'react';

export function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={ onSquareClick }>
      { value }
    </button>);
}

export function Board({xIsNext, squares, onPlay}) {
  
  function handleClick (i) {
    const nextSquares = squares.slice();
    
    if (nextSquares[i] != "") {
      return;
    }
    
    if (xIsNext) 
      nextSquares[i] = "X";
    else 
      nextSquares[i] = "O";
    onPlay(nextSquares);
  }
  
  return (
    <>
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

export function History({history, onClickHistory}) {

  let list = history.map(handleHistoryListItem);
  
  function handleHistoryListItem(historyItem, index)
  {
    if (historyItem.includes('X')) return <li><button onClick={() => onClickHistory(historyItem, index)}> { historyItem } </button></li>
    return ''
  }
  
  return (
    <ol>
      { list }
    </ol>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill("")]);
  const [xIsNext, setxIsNext] = useState(true);
  const [msgPlayNo, setmsgPlayNo] = useState("");
  const [msgHistory, setmsgHistory] = useState("");

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]); // java spread operator
    setxIsNext(!xIsNext);
  }
  
  function handleHistoryClick(history, index) {
    setmsgPlayNo("Changed back to go " + index);
    setmsgHistory(history);
    handlePlay(history);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={history[history.length- 1]} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <History history={history} onClickHistory={handleHistoryClick}/>
      </div>
      <div>{msgPlayNo}: {msgHistory}</div>
    </div>
  );
}