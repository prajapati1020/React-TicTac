



const GameBoard =({onSelectSquare ,board })=>{


// const[gameBoard ,setGameBoard]  =useState(initalGameBoard)
// function handleSelectSquare(rowIndex,colIndex){
//     setGameBoard((prevGameBoard)=>{
//         const updatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])]

//          updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
//          return updatedBoard;
//     })
//     onSelectSquare();
// }


     

    return(
<>
<ol id ="game-board">
{
    board.map((row,rowIndex)=> <li key={rowIndex}>
         {/* row-> key rowindex->array pointer */}
           <ol>
            {row.map((playerSymbol,colIndex)=>
            <li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !==null}>{playerSymbol}</button></li>)}
           </ol>

    </li>)
}


</ol>


</>

    )
}  

export default GameBoard