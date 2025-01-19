import React, { useContext } from 'react'
import { UserContext } from '../App'

const ChildC = () => {
    const user = useContext(UserContext);
  return (
    <div>
        <h1>Child C</h1>
        Name: {user.name}
    </div>
  )
}

export default ChildC