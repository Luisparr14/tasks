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
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }

            e.preventDefault()
            let res = await fetch(`http://localhost:8000/api/user/${form.userName}`, config);
            let usr = await res.json();
            console.log(usr)
            if (usr.passwordV) {
                props.history.push('/tasks')
            } else {
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