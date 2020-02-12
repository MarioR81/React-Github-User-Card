import React from 'react';

const Card = ({follower}) => {
    

// console.log(props)
const {login, avatar_url} = follower
  return (
        <div className='cardFlex'>            
            <div className='followers'>
                <h2>User Name: {login}</h2>
                <img src={avatar_url} width={'400px'} />
            </div>
        </div>
  );
  
}

export default Card;