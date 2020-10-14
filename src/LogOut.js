import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, userSelector } from './features/postReducer';

export function LogOut() {
    const dispatch = useDispatch();
    const {nick, logged} = useSelector(userSelector)
    

    const exit = () => {
        dispatch(logout())
    }

    return (
        
        <div name="logout">
            {logged ?
            <>
            <label name="username">{nick}</label><br/>
            <button onClick={() => exit()}>Log Out</button>
            </> : ''
            }
        </div>
    )
}