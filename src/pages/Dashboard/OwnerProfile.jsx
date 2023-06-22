import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";

export default function OwnerProfile() {
  const logoOwner = useSelector((state) => state.authUser.logoOwner);
  const ownerName = useSelector((state) => state.authUser.name);
  const ownerSlogan = useSelector((state) => state.authUser.sloganOwner);

  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"80vw"}
      height={"70vh"}
    >
      <Grid
        item
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"40vw"}
        height={"30vh"}
        borderRadius={"5%"}
        boxShadow={10}
        sx={{mb:"10vh"}}
        // sx={{}}
        // border={1}
        // borderColor={"gray"}
      >
        <Grid
          item
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-around"}
          width={"40vw"}
          //   border={1}
          //   borderColor={"blue"}
        >
          <Grid
            item
            // border={1}
            // borderColor={"orange"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Badge badgeContent={"Editar"} color="primary">
              <img
                src={logoOwner}
                width={200}
                style={{ objectFit: "contain" }}
              />
            </Badge>
          </Grid>
          <Grid item display={"flex"} flexDirection={"column"}>
            <Grid
              item
              // border={1} borderColor={"red"}
            >
              <Typography>COMPAÑÍA: {ownerName}</Typography>
            </Grid>
            <Grid
              item
              // border={1} borderColor={"red"}
            >
              <Typography>{ownerSlogan}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          //   border={1}
          //   borderColor={"green"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          width={"40vw"}
        >
          <Grid item>
            <Grid item display={"flex"} flexDirection={"column"}>
              <Grid item>
                <Typography>Cant. Vendedores: 10</Typography>
              </Grid>
              <Grid item>
                <Typography>Cant. Portafolios: 5</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid item display={"flex"} flexDirection={"column"}>
              <Grid item>
                <Typography>Cant. Productos: 101</Typography>
              </Grid>
              <Grid item>
                <Typography>Plan: 50</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
        variant="outlined"
        >Editar mis datos</Button>
      </Grid>
    </Grid>
  );
}
