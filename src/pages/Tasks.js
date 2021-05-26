import React, { useEffect, useState, useRef, useCallback } from 'react'
import NavBar from '../components/NavBar'
import TaskList from '../components/TaskList'
import ButtonAdd from '../components/ButtonAdd'
import Cookies from 'universal-cookie'

const cookies = new Cookies()


const Tasks = () => {
    const [task, setTask] = useState([])
    // const [error, setError]=useState(false)


    const mountedRef = useRef(true);

    const Fetchtask = useCallback(async () => {
        try {
            let res = await fetch(`http://localhost:8000/api/tasks/${cookies.get('uname')}`)
            let tasks = await res.json()
            setTask(tasks)

            if (!mountedRef.current) return null;
        } catch (error) {
            console.log(error);
        }
    }, [mountedRef]);

    useEffect(() => {
        Fetchtask();
        return () => {
            mountedRef.current = false;
        };
    }, [Fetchtask]);


    // let Fetchtask = async () => {
    //     try {

    //         let res = await fetch(`http://localhost:8000/api/tasks/${cookies.get('uname')}`)
    //         let tasks = await res.json()

    //         setTask(tasks)
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // useEffect(() => {
    //     Fetchtask()
    // })

    return (
        <React.Fragment>
            <NavBar />
            <TaskList
                tasks={task}
            />
            <ButtonAdd/>
        </React.Fragment>

    )
}

export default Tasks