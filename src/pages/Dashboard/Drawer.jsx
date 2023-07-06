import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Button,
  Box,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import FactoryIcon from "@mui/icons-material/Factory";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

//======================Component===========================
function DrawerContent() {
  const navigate = useNavigate();
  const logoOwner = useSelector((state) => state.authUser.logoOwner);
  const ownerId = useSelector((state) => state.authUser.id);

  //------------------render---------------------------
  return (
    <Box>
      <Grid item>
        <img
          height="55vh"
          width="180vh"
          alt="Logo Cliente"
          src={logoOwner}
          onClick={() => navigate("/dashboard")}
          style={{ objectFit: "contain", cursor: "pointer" }}
        ></img>
      </Grid>
      <Divider />

      {ownerId !== 0 ? ( //disable for Sthemma
        <List>
          <ListItem key={"Productos"} disablePadding>
            <ListItemButton onClick={() => navigate("/adminProductos")}>
              <LocalGroceryStoreIcon />
              <ListItemText sx={{ marginLeft: 1 }} primary="Productos" />
            </ListItemButton>
          </ListItem>
        </List>
      ) : null}

      {/* <Divider />
      <List>
      <ListItem key={"Portfolios"} disablePadding>
        <ListItemButton
        onClick={()=>navigate('/adminPortafolios')}
        >
          <FolderCopyIcon />
          <ListItemText sx={{ marginLeft: 1 }} primary="Portfolios" />
        </ListItemButton>
      </ListItem>
    </List> */}

      {/* <Divider />
      <List>
      <ListItem key={"Vendedores"} disablePadding>
        <ListItemButton
        onClick={()=>navigate('/adminVendedores')}
        >
          <PeopleIcon />
          <ListItemText sx={{ marginLeft: 1 }} primary="Vendedores" />
        </ListItemButton>
      </ListItem>
    </List> */}

      {ownerId !== 0 ? ( //disable for Sthemma
        <>
          <Divider />
          <List>
            <ListItem key={"Configuración"} disablePadding>
              <ListItemButton onClick={() => navigate("/adminConfiguracion")}>
                <SettingsIcon />
                <ListItemText sx={{ marginLeft: 1 }} primary="Configuración" />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      ) : null}

      {/* <Divider />
      <List>
      <ListItem key={"Estadísticas"} disablePadding>
        <ListItemButton
        onClick={()=>navigate('/adminEstadisticas')}
        >
          <BarChartIcon />

          <ListItemText sx={{ marginLeft: 1 }} primary="Estadísticas" />
        </ListItemButton>
      </ListItem>

    </List> */}

      {ownerId === 0 ? (
        <>
        <Divider />
        <List>
          <ListItem key={"Empresas"} disablePadding>
            <ListItemButton onClick={() => navigate("/adminEmpresas")}>
              <FactoryIcon />

              <ListItemText sx={{ marginLeft: 1 }} primary="Empresas" />
            </ListItemButton>
          </ListItem>
        </List>
        </>
      ) : null}
    </Box>
  );
}

export default DrawerContent;
