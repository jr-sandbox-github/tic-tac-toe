import { useState} from 'react';

export function Square() {
  return <button className="square"></button>;
}

export default function Board() {
  
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>);
}