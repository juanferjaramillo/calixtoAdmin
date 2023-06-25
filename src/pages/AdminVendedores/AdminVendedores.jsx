import PanelBase from "../Dashboard/PanelBase";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DataGridVends from "./DataGridVends";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function AdminVendedores() {
  return (
    <PanelBase>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        width={"80vw"}
        padding={2}
        // border={1}
      >
        <Typography variant="h4" paddingBottom={2}>
          Mis Vendedores
        </Typography>
        <DataGridVends />
        <Box
        display={"flex"}
        flexDirection={"row"}
        >
            <Button
            variant="contained"
            sx={{mt:3}}
            >Crear Vendedor</Button>
        </Box>
      </Box>
    </PanelBase>
  );
}
