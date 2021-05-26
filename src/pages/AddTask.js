import React, {useState } from 'react'
import FormAddTask from '../components/FormAddTask'
import NavBar from '../components/NavBar'
import Task from '../components/Task'
const AddTask=()=>{

    const [form, setForm]=useState([])
    
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handeSubmit=async e=>{
        e.preventDefault()
        try {
            let config={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(form)
            }



        } catch (error) {
            
        }
    }

    return(
        <React.Fragment>
            <NavBar/>
            <Task
            title={form.name}
            description={form.description}
            leftColor={form.leftColor}
            rightColor={form.rightColor}
            />
            <FormAddTask
            onChange={handleChange}
            form={form}
            />
            
        </React.Fragment>
        
    )

}

export default AddTask