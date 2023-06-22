import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import DrawerContent from "./Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Content from "./Content";
import { Modal } from "../../components/Modals/EditModal/Modal";
import EditForm from "./EditForm";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid"

const drawerWidth = 200;

//===================component=============
function PanelBase(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const nameOwner = useSelector((state) => state.authUser.name);
  const sloganOwner = useSelector((state) => state.authUser.sloganOwner);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        sx={{
          // ml: "30vw",
          width: "82vw",
          height: "64px",
          backgroundColor: "purple",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          zIndex: 2,
          paddingLeft: 3
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "flex", sm: "none" },
            height: "50px",
            width: "50px",
            justifyContent: "center",
            marginLeft: "12px",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Grid item>
          <Typography
            variant="h6"
            // noWrap
            component="div"
            sx={{ fontSize: { xs: "100%", md: "130%", md: "160%" } }}
          >
            {nameOwner}: {sloganOwner}
          </Typography>
        </Grid>
      </AppBar>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            position: "relative",
            zIndex: 2,
          }}
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "&.MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <DrawerContent />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "&.MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <DrawerContent />
            {/* <Button onClick={() => navigate("/datagrid")}>TABLA</Button> */}
          </Drawer>
        </Box>

        <Box sx={{ position: "relative", zIndex: 1, marginTop: "64px" }}>
          {/* <Content /> */}
          {props.children}
        </Box>
      </Box>
      {/* <Modal>
        <EditForm />
      </Modal> */}
    </Box>
  );
}

export default PanelBase;
