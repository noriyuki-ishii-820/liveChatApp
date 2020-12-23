import React from 'react';
import io from "socket.io-client";

export const CTX = React.createContext();

const initState = {
    general: [
        {from: 'testbot', msg:"hello!"},
        {from: 'testbot', msg:"hello!"},
        {from: 'testbot', msg:"hello!"},
    ],
    topic2: [
        {from: 'testbot2', msg:"hello again!"},
        {from: 'testbot2', msg:"hello again!"},
        {from: 'testbot2', msg:"hello again!"},
    ]
}

function reducer(state, action){
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {from, msg}
                ]
            }
        default: 
            return state    
    }
}

let socket;

function sendChatAction(value){
    socket.emit('chat message', value);
}   



export default function Store(props){

    if (!socket){
        socket = io(':3001')
    }

    const [allChats, dispatch] = React.useReducer(reducer, initState);

    return (
        <CTX.Provider value={{allChats, sendChatAction}}>
            {props.children}
        </CTX.Provider>
    )
}