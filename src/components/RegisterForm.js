import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import './style/Forms.css'
const RegisterForm = ({ onSubmit, onChange, form }) => (

  <Container sx={{
    display: 'flex',
    minHeight: 'calc(100vh - 69px)',
    justifyContent: 'center',
  }}>
    
    <Stack
      component={'form'}
      onSubmit={onSubmit}
      spacing={2}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
        '& .MuiButton-root': { m: 1, width: '20ch', alignSelf: 'center' },
        backgroundColor: '#f5f5f5',
        alignSelf: 'center',
        p: '20px',
      }}
    >
      <TextField
        required
        id="username"
        name='username'
        label="Username"
        value={form.username}
        onChange={onChange}
        type="text"
        size="small"
      />

      <TextField
        required
        id="name"
        name='name'
        label="Name"
        value={form.name}
        onChange={onChange}
        type="text"
        size="small"
      />

      <TextField
        id="lastname"
        name='lastname'
        label="Last name"
        value={form.lastname}
        onChange={onChange}
        type="text"
        size="small"
      />

      <TextField
        required
        id="email"
        name='email'
        label="Email"
        value={form.email}
        onChange={onChange}
        type="email"
        size="small"
      />

      <TextField
        required
        id="password"
        name='password'
        label="Password"
        value={form.password}
        onChange={onChange}
        type="password"
        size="small"
      />

      <TextField
        required
        id="password2"
        name='password2'
        label="Confirm password"
        value={form.password2}
        onChange={onChange}
        type="password"
        size="small"
      />      

      <Button type="submit" variant="contained" color="primary">
        Registrarse
      </Button>
    </Stack>
  </Container>
)
export default RegisterForm