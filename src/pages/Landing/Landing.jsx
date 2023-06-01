import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

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
        <Grid item xs={12} md={6}>
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "20px" }}>Aquí va lo decorativo/visual de la landing</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "20px" }}>Aquí va lo decorativo/visual de la landing</Typography>
        </Grid>
      </Grid>
      <Box sx={styles.secondary}>
        <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "20px" }}>Resto de lo decorativo/informacional</Typography>
      </Box>
    </Box>
  )
}
