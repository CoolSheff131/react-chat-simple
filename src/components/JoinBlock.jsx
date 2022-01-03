import React from "react";
import axios from "axios";

function JoinBlock({onLogin}){

    const [roomId, setRoomId] = React.useState('')
    const [userName, setUserName] = React.useState('')

    const onEnter = () => {
        if(!roomId || !userName){
            return alert('Неверные данные')
        }

        axios.post('http://localhost:5000/rooms', {
            roomId,
            userName
        }).then(onLogin)

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