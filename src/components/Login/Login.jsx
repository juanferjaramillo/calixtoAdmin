import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  return (<Box sx={{ display: "flex", flexDirection: "column" }}>
    <Typography sx={{ alignSelf: "center", marginBottom: "10px", fontSize: "20px" }}>Sign In</Typography>
    <Box sx={{ width: "25vw", border: "1px solid", height: " 70%", borderRadius: "10px", paddingBottom: "20px" }}>
      <LoginForm />
      <Box sx={{ marginLeft: "20px" }}>
        <Typography>Don't have an account?</Typography>
        <Button onClick={() => { navigate('/register') }} variant={'contained'}>Register</Button>
      </Box>
    </Box></Box>
  )
}
