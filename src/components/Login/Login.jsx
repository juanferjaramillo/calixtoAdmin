import React from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "10px",
  boxShadow: theme.shadows[3],
}));

export default function Login() {
  const navigate = useNavigate();
  return (<StyledPaper sx={{ display: "flex", flexDirection: "column" }}>
    <Typography sx={{ alignSelf: "center", marginTop: "15px", marginBottom:"10px", fontSize: "20px" }}>Sign In</Typography>
    <Box sx={{ width: "25vw", height: " 70%", paddingBottom: "20px" }}>
      <LoginForm />
      <Box sx={{ marginLeft: "20px" }}>
        <Typography>Don't have an account?</Typography>
        <Button onClick={() => { navigate('/register') }} variant={'contained'}>Register</Button>
      </Box>
    </Box></StyledPaper>
  )
}
