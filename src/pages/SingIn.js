import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import SingInForm from '../components/SingInForm'

import Cookies from 'universal-cookie'
import url from './config'

const cookies = new Cookies()
cookies.remove('username')
const SingIn = (props) => {

    const [form, setForm] = useState([])

    const handleHideLogIn=()=>{
        if (cookies.get('uname')) {
            return true
        }
    }
    const handleHideLogOu=()=>{
        if (!cookies.get('uname')) {
            return true
        }
    }

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
            let res = await fetch(`${url}user/${form.userName}`, config);
            let usr = await res.json();
            
            if (usr.passwordV) {
                cookies.set('uname', form.userName, { path: "/" })
                window.location.href="/tasks"
            } else {
                alert('Contraseña incorrecta')
            }
        } catch (error) {

        }
    }

    return (
        <React.Fragment>
            <NavBar
            hideLogIn={handleHideLogIn()}
            hideLogOut={handleHideLogOu()}
            />
            <SingInForm
                onChange={handleChange}
                onSubmit={handleSubmit}
                form={form}
            />
        </React.Fragment>
    )
}
export default SingIn