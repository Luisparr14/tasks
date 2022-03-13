import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import './style/Forms.css'
const RegisterForm = ({ onSubmit, onChange, form }) => (    
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
        id="passwordV"
        name='passwordV'
        label="Confirm password"
        value={form.passwordV}
        onChange={onChange}
        type="password"
        size="small"
      />      

      <Button type="submit" variant="contained" color="primary">
        Registrarse
      </Button>
    </Stack>
)
export default RegisterForm