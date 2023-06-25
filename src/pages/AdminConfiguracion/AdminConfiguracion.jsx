import PanelBase from "../Dashboard/PanelBase";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import Input from "@mui/material/Input";

export default function AdminConfiguracion() {
  return (
    <PanelBase>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"80vw"}
        height={"80vh"}
        padding={2}
        // border={1}
      >
        <Grid
          item
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          width={"90%"}
          height={"50%"}
          //   border={1}
        >
          <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            width={"35%"}
            padding={1}
            border={1}
          >
            <Typography textAlign={"center"} variant="h6">
              Paleta de Colores
            </Typography>
            <Divider />
          </Grid>

          <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            width={"35%"}
            padding={1}
            border={1}
          >
            <Typography textAlign={"center"} variant="h6">
              Indicador de Disponibilidad del Producto
            </Typography>
            <Divider />


            <Grid
              item
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"nowrap"}
              alignItems={"center"}
              marginBottom={1}
              marginLeft={10}
              width={"60%"}
              marginTop={3}
            //   border={1}
            >
              <Typography
              paddingRight={5}
            //   paddingLeft={2}
              >Llegado:</Typography>
              <Input
              ></Input>
              <Typography paddingRight={2}>%</Typography>
            </Grid>

            <Grid
              item
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"nowrap"}
              alignItems={"center"}
              marginLeft={10}
              width={"60%"}
              marginBottom={1}
            //   border={1}
            >
              <Typography
              paddingRight={5}
              >Limitado:</Typography>
              <Input></Input>
              <Typography paddingRight={2}>%</Typography>
            </Grid>

            <Grid
              item
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"nowrap"}
              alignItems={"center"}
              marginLeft={10}
              width={"60%"}
              marginBottom={1}
            //   border={1}
            >
              <Typography
              paddingRight={5}
              >Agotado:</Typography>
              <Input></Input>
              <Typography paddingRight={2}>%</Typography>
            </Grid>

          </Grid>
        </Grid>

        <Grid
          item
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          width={"90%"}
          height={"50%"}
          marginTop={3}
          boxShadow={3}
        ></Grid>
      </Box>
    </PanelBase>
  );
}
