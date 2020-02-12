import React from 'react';
import axios from 'axios';



const Card = ({follower}) => {
    

// console.log(props)
const {login, avatar_url} = follower
  return (
    <div className="App">

        <p>User Name: {login}</p>
        <img src={avatar_url}/>
        
    </div>
  );
  
}

export default Card;