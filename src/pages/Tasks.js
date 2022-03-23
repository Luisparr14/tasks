// import React, { useEffect, useState, useRef, useCallback } from 'react'
import React from 'react'
import TaskList from '../components/TaskList'
import ButtonAdd from '../components/ButtonAdd'
import useFechGetTasks from '../Hooks/useFetch'
import Box from '@mui/material/Box'

const Tasks = () => {
  const token = window.localStorage.getItem('token')
  const { tasks } = useFechGetTasks(`${process.env.REACT_APP_API_URL}/tasks`, JSON.parse(token).token)
  return (
    <Box x={{ flexGrow: 1 }}>
      <TaskList
        tasks={tasks}
      />
      <ButtonAdd />
    </Box>
  )
}

export default Tasks
