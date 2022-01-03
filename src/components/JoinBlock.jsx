import React from "react";
function JoinBlock(){

    const [roomId, setRoomId] = React.useState('')
    const [userName, setUserName] = React.useState('')

    const onEnter = () => {
        console.log(roomId,userName);
    }

    return(
        <div>
        <input type="text" placeholder="ROOM ID" value={roomId} onChange={e => setRoomId(e.target.value)}/>
        <input type="text" placeholder="Ваше имя" value={userName} onChange={e => setUserName(e.target.value)}/>
        <button onClick={onEnter}>ВОЙТИ</button>
      </div>
    )
}

export default JoinBlock;