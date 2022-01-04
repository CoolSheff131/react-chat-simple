import React from 'react'

function Chat() {
    const [messageValue, setMessageValue] = React.useState('')
    return (
        <div>
            <div>
                <b>Users (1):</b>
                <ul>
                    <li>TEST USER</li>
                </ul>
            </div>
            <div className='chat-messages'>
                <div className='messages'>
                    <div className='message'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est mollitia eos, consectetur a animi excepturi fugiat facere, quis dolorem neque esse id magni, perspiciatis ipsam quas et nobis tempora!</p>
                        <div>
                            <span>TEST USER</span>
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <textarea value={messageValue} onChange={(e) => {
                    setMessageValue(e.target.value)
                }} className='form-control' rows="3"></textarea>
                <button type='button' className='btn btn-primary'>SEND</button>
            </form>
        </div>
    )
}

export default Chat
