import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import SingInForm from '../components/SingInForm'

const SingIn = (props) => {

    const [form, setForm] = useState([])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            let res = await fetch(`http://localhost:8000/api/user/${form.userName}`);
            let usr = await res.json();
            if(usr[0].password===form.password){
                console.log('entro');
                props.history.push('/tasks')
            }else{
                alert('Contraseña incorrecta')
            }
        } catch (error) {
            
        }
    }

    return (
        <React.Fragment>
            <NavBar />
            <SingInForm
                onChange={handleChange}
                onSubmit={handleSubmit}
                form={form}
            />
        </React.Fragment>
    )
}
export default SingIn