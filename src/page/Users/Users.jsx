import { useEffect, useState } from 'react';
import UserCard from '../../components/UserCard/UserCard';
import './Users.css'
import PropTypes from "prop-types";
import {getAllUsers} from '../../services/userService'

const Users = () => {

    const [users, setUsers] =useState([])

    useEffect(()=>{
        const userList = async ()=>{
            try {
                const result = await getAllUsers()
                console.log(result)
                setUsers(result)

            } catch (error) {
                console.error("Error fetching USERS ", error);
            }
        }
        userList()
    })

  return (
    <div>
        {users.map((data)=>{
            return <UserCard key={data.id} users={data} setUsers={setUsers}/>
        })}
        
    </div>
  )
}

export default Users