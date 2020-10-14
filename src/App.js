import React from 'react';
import Feed from './Feed';
import { LogIn } from './LogIn';
import { LogOut } from './LogOut';
import PostForm from './PostForm';
import './App.css'

function App() {
  return (
    <>
    <h1>Hello!</h1>
    <LogOut /><LogIn />
    <br/><br/>
    <PostForm />
    <Feed />
    </>
    );
}

export default App;
