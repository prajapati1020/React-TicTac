
import './App.css';
import Player from './components/Player'
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Log from './components/Log';
import GameOver  from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

const initalGameBoard =[
  [null,null,null],
  [null,null,null],
  [null,null,null]
                         ];

function App() {
  const [gameTurns ,setGameTurns] = useState([])
  const [activePlayer ,setActivePlayer] =useState('X');
 
 

  let gameBoard = [...initalGameBoard.map(array=>[...array])];
  for(const turn of gameTurns){
    const {square ,player}  =turn;
    const {row ,col} =square;

    gameBoard[row][col] =player;

    
    
  }
  console.log("gameboard" ,gameBoard)
console.log(WINNING_COMBINATIONS)

function handleRestart(){
  setGameTurns([])
}


  let winner;


for( const combination of WINNING_COMBINATIONS){
  const firstSqaureSymbol = gameBoard[combination[0].row][combination[0].column]
  console.log(gameBoard[combination[0].row][combination[0].col])//row ,col is a object
  const secondSqaureSymbol = gameBoard[combination[1].row][combination[1].column]
  const thirdSqaureSymbol = gameBoard[combination[2].row][combination[2].column]
  console.log(firstSqaureSymbol)
   
  if(firstSqaureSymbol && firstSqaureSymbol===secondSqaureSymbol && firstSqaureSymbol===thirdSqaureSymbol){
 winner =firstSqaureSymbol;
 console.log(winner)
  }

}

const hasDraw = gameTurns.length ===9 && !winner;

function handleSelectSquare(rowIndex ,colIndex){
  setActivePlayer((curActivePlayer)=>(curActivePlayer==='X' ?'0':'X'));

 setGameTurns((prevTurns)=>{
  let currentPlayer ='X';

  if(prevTurns.length > 0 && prevTurns[0].player ==='X'){
    currentPlayer ='0';
  }
  console.log(currentPlayer);
  const updatedTurns = [
    {square:{
    row :rowIndex,col:colIndex
  } ,
   player:currentPlayer}
  ,...prevTurns,];
  return updatedTurns;

 })
}


  return (

     <>
     <h2>Tic-Tac-Toe</h2>
     <main >
       <div id="game-container" >
         <ol id="players" className='highlight-player'>
<Player initalname="Player 1" symbol="X" isActive={activePlayer==='X'} />
<Player initalname="Player 2" symbol="0" isActive={activePlayer==='0'}/>

         </ol>
         {(winner|| hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
<GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}  />

       </div>
<Log turns={gameTurns}/>
     </main>
     
     </>
     
  
  );
}

export default App;
