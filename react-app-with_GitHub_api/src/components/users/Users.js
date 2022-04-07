import React, { Component } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

function Users({users, loading}) {
  if(loading){
    return <Spinner/>
  }
  else{
    return (
      <div style={userStl}>
          {users.map(user => ( <UserItem key={user.id} user={user}/>))}
      </div>
    )

  }
    
}

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

const userStl = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
}

export default Users