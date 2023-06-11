import React from 'react'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import InsightsIcon from '@mui/icons-material/Insights';

const drawer = (
    <div>
        <Toolbar />
        <Divider />
        <List>
            {['Portfolios', 'Users/Clients', 'Statistics'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {text === 'Portfolios' ? <FolderCopyIcon /> : null}
                            {text === 'Users/Clients' ? <PeopleIcon /> : null}
                            {text === 'Statistics' ? <InsightsIcon /> : null}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        <Divider />
    </div>
)

export default drawer;