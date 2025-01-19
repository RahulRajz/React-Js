import React, { useContext } from 'react'
import ChildC from './ChildC'
import { UserContext } from '../App'
const ChildB = () => {
    const user = useContext(UserContext);
  return (
    <div>
        <h1>Child B</h1>
        Name: {user.name}

        {/* <ChildC/> */}
    </div>
  )
}

export default ChildB