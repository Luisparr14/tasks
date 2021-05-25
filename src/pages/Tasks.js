import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import TaskList from '../components/TaskList'
import Cookies from 'universal-cookie'

const cookies = new Cookies()


const Tasks = ({user}) => {    
    const [task,setTask]=useState([])

    useEffect(()=>{
        
        let Fetchtask= async()=>{
            try {
                
                let res=await fetch(`http://localhost:8000/api/tasks/${cookies.get('uname')}`)
                let tasks=await res.json()                
                
                setTask(tasks)
            } catch (error) {
                
            }
        }

        Fetchtask()
    })

    return (
        <React.Fragment>
            <NavBar />
            <TaskList
            tasks={task}
            />
        </React.Fragment>

    )
}

export default Tasks