import React from "react";
import axios from "axios";

function JoinBlock({onLogin}){

    const [roomId, setRoomId] = React.useState('')
    const [userName, setUserName] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    const onEnter = async () => {
        if(!roomId || !userName){
            return alert('Неверные данные')
        }
        setIsLoading(true)
        await axios.post('http://localhost:5000/rooms', {
            roomId,
            userName
        })
        onLogin()

        console.log(roomId,userName);
    }
    return(
        <div>
        <input type="text" placeholder="ROOM ID" value={roomId} onChange={e => setRoomId(e.target.value)}/>
        <input type="text" placeholder="Ваше имя" value={userName} onChange={e => setUserName(e.target.value)}/>
        <button disabled={isLoading} onClick={onEnter}>
            {isLoading? 'ВХОД...':'ВОЙТИ'}
        </button>
      </div>
    )
}

export default JoinBlock;