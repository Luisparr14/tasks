import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import LoginForm from '../components/LoginForm'

import Cookies from 'universal-cookie'
import url from './config'

const cookies = new Cookies()
cookies.remove('username')
const Login = (props) => {

  const [form, setForm] = useState([])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(form)
    // try {
    //   let config = {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(form)
    //   }

    //   e.preventDefault()
    //   let res = await fetch(`${url}user/${form.userName}`, config);
    //   let usr = await res.json();

    //   if (usr.passwordV) {
    //     cookies.set('uname', form.userName, { path: "/" })
    //     window.location.href = "/tasks"
    //   } else {
    //     alert('Contraseña incorrecta')
    //   }
    // } catch (error) {

    // }
  }

  return (
    <React.Fragment>
      <NavBar />
      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        form={form}
      />
    </React.Fragment>
  )
}
export default Login