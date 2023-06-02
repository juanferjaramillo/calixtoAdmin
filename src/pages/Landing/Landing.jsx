import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import Login from '../../components/Login/Login.jsx'

const styles = {
  principal: {
    display: "flex",
    justifyContent: "center",
    aligntItems: "center",
    fontWeight: "bold",
    border: "1px solid",
    width: "100vw",
    height: "100vh",
  },
  secondary: {
    display: "flex",
    justifyContent: "center",
    aligntItems: "center",
    fontWeight: "bold",
    border: "1px solid",
    width: "100vw",
    height: "100vh",
  }
}

export default function Landing() {
  return (
    <Box>
      <Grid container sx={styles.principal}>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "20px" }}>Aquí va lo decorativo/visual de la landing</Typography>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{ border: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Login />
        </Grid>
      </Grid>
      <Box sx={styles.secondary}>
        <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "20px" }}>Resto de lo decorativo/informacional</Typography>
      </Box>
    </Box>
  )
}
