import React, { useEffect, useState } from 'react'
import { userService } from './services/api';

const App = () => {

  const [users , setUsers] = useState([])
  const [Loading , setLoading] = useState(false)
  const [error , setError] = useState(null);

  useEffect(()=>{
    const controller = new AbortController()
    const {signal} = controller

    const fetchUsers = async ()=>{
      setLoading(true)
      setError(null)
      
      try {
        const data = await userService.getUsers({_limit:5} , {signal})
        setUsers(data)
      }
      catch (error) {
        if(isCancel(error)) return;
        setError(error)
      }
      finally{
        if(!signal.aborted){
          setLoading(false)
        }
      }


    };
    fetchUsers()

    return ()=>{
      controller.abort();
    };
  },[]);

  const handleCreate = async ()=>{
    const newUser = {
      name : "meherrem",
      username : "ezizli",
      email : "meherrem@exaple.com"
    }

    try {
      
    } 
    catch (error) {
      
    }
  }
  return 
    <div>
      
    </div>
  
};

export default App
