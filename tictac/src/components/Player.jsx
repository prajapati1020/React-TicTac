import { useState } from "react";



const Player =({initalname ,symbol,isActive})=>{
  const[namePlayer ,setnamePlayer] = useState(initalname)
  const[isEditing ,setIsEditing] =useState(false);

function edting(){
   if(isEditing===true){
    setIsEditing(false)
   }else{
    setIsEditing(true)
   
   }
   
  
}

function editPlayerName(event){
    setnamePlayer(event.target.value)
}


    return(
<>
<li className={isActive ?'active':undefined}>
  <span className='player'>
 {!isEditing ? (<span className='player-name' >{namePlayer ? namePlayer : "PLAYER"}</span>) : (<input type="text"  required value={namePlayer} onChange={editPlayerName} />)}
<span className='player-symbol'>{symbol}</span>
  </span>

<button onClick={edting}>{!isEditing?'edit':'save'}</button>

</li>

</>
    )
}

export default Player;