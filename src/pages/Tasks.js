// import React, { useEffect, useState, useRef, useCallback } from 'react'
import React from 'react'
import NavBar from '../components/NavBar'
import TaskList from '../components/TaskList'
import ButtonAdd from '../components/ButtonAdd'
import Cookies from 'universal-cookie'
import useFechGetTasks from '../Hooks/useFechGetTasks'

const cookies = new Cookies()


const Tasks = () => {
    const {tasks} = useFechGetTasks(`http://localhost:8000/api/tasks/${cookies.get('uname')}`)

    const handleHideLogIn=()=>{
        if (cookies) {
            return true
        }
    }
    const handleHideLogOu=()=>{
        if (!cookies) {
            return true
        }
    }

    return (
        <React.Fragment>
            <NavBar
            hideLogIn={handleHideLogIn()}
            hideLogOut={handleHideLogOu()}
            />
            <TaskList
                tasks={tasks}
            />
            <ButtonAdd/>
        </React.Fragment>

    )
}

export default Tasks