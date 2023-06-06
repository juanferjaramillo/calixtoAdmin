import * as React from 'react';
import { AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import drawer from './Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Content from './Content';
import { Modal } from '../../components/Modals/EditModal/Modal';
import EditForm from './EditForm';

const drawerWidth = 200;

function Panel(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <CssBaseline />
            <AppBar sx={{ width: "100vw", height: "64px", backgroundColor: "orange", position: "fixed", display: "flex", justifyContent: "center", flexGrow: 1 }}>
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ display: { xs: 'flex', sm: 'none' }, height: "50px", width: "50px", justifyContent: "center", marginLeft: "12px" }}
                >
                    <MenuIcon />
                </IconButton>
            </AppBar>
            <Box sx={{ display: "flex" }}>
                <Box
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Content />
                </Box>
            </Box>
            <Modal>
                <EditForm />
            </Modal>
        </Box>
    );
}

export default Panel;