import React, { useState } from 'react'
import FormAddTask from '../components/FormAddTask'
import NavBar from '../components/NavBar'
import Task from '../components/Task'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const AddTask = (props) => {

    const [form, setForm] = useState({ username: cookies.get('uname') })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handeSubmit = async e => {
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }

            console.log(JSON.stringify(form));

            await fetch(`http://localhost:8000/api/tasks/`, config)


            props.history.push('/tasks')

        } catch (error) {
            console.log('Error: ', error);
        }
    }

    return (
        <React.Fragment>
            <NavBar />
            <Task
                title={form.name}
                description={form.description}
                leftColor={form.leftColor}
                rightColor={form.rightColor}
            />
            <FormAddTask
                onSubmit={handeSubmit}
                onChange={handleChange}
                form={form}
            />

        </React.Fragment>

    )

}

export default AddTask