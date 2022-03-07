// import React, { useEffect, useState, useRef, useCallback } from 'react'
import React from 'react'
import NavBar from '../components/NavBar'
import TaskList from '../components/TaskList'
import ButtonAdd from '../components/ButtonAdd'
import Cookies from 'universal-cookie'
import useFechGetTasks from '../Hooks/useFechGetTasks'
import url from './config'
import Box from '@mui/material/Box';
const cookies = new Cookies()


const Tasks = () => {
  const { tasks } = useFechGetTasks(`${url}tasks/${cookies.get('uname')}`)

  const handleHideLogIn = () => {
    if (cookies.get('uname')) {
      return true
    }
  }
  const handleHideLogOu = () => {
    if (!cookies.get('uname')) {
      return true
    }
  }

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <NavBar
          hideLogIn={handleHideLogIn()}
          hideLogOut={handleHideLogOu()}
        />
        <TaskList
          tasks={tasks}
        />
        <ButtonAdd />
      </Box>
    </React.Fragment>

  )
}

export default Tasks