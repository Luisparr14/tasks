import { TextField, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './style/Forms.css'

export default function LoginForm ({ onSubmit, onChange, form }) {

  return (
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
        // error={form.email === ''}
        // helperText={form.email === '' ? 'Campo requerido' : ''}
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
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
      <Typography align="center">
        ¿No tienes una cuenta?
      </Typography>
      <Typography variant="caption" align="center">
        <Link style={{
          textDecoration: 'none',
          color: '#000'
        }} to="/register">Registrate</Link>
      </Typography>
    </Stack>
  )
}