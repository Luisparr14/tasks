import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import SingUpForm from '../components/SingUpForm'
import Cookies from 'universal-cookie'
import url from './config'

const cookies = new Cookies()

const SingUp = (props) => {

    const [form, setForm]=useState({userName:'', name:'', lastName:'', password:''})

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

    const handleChange=e=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit= async e => {
        e.preventDefault();
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }

            let res=await fetch(`${url}user`,config)
            let user=await res.json()
            console.log(user);
            
            window.location.href="/"
        } catch (error) {
            console.log('err', error);
        }
    }

    return (
        <React.Fragment>
            <NavBar
            hideLogIn={handleHideLogIn()}
            hideLogOut={handleHideLogOu()}
            />
            <SingUpForm 
            onSubmit={handleSubmit}
            onChange={handleChange}
            form={form}
            />
        </React.Fragment>
    )
}

export default SingUp