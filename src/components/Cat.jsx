import React from 'react'

function Cat({ username, avatar, photo }) { 
  return (
    <div>
      <h1>{username}</h1>
      <img src={photo} alt={username} />
    </div>
  )
}

export default Cat