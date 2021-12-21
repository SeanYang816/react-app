import React, { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItems from './ListItems'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import ReportIcon from '@mui/icons-material/Report';
import Grid from '@mui/material/Grid'

export default function Navigation() {
    const [state, setState] = React.useState({
        // top: false,
        // right: false,
        // bottom: false,
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const items = [
        { value: 'Inbox', icon: InboxIcon, to: '/' },
        { value: 'Starred', icon: StarRateIcon, hidden: true, to: '/' },
        { value: 'Send email', icon: SendIcon, to: '/' },
        { value: 'Drafts', icon: DraftsIcon, disabled: true, to: '/' },
        { value: 'All mail', icon: MailIcon, to: '/' },
        { value: 'Trash', icon: DeleteIcon, to: '/' },
        { value: 'Spam', icon: ReportIcon, to: '/' },
    ]

    // drawer position ['top', 'right', 'bottom', 'left]
    const position = ['left']

    // Display list of items on the sidebar
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <ListItems name='Group 1' items={items} slice={[0, 4]} />
            <Divider />
            <ListItems name='Group 2' items={items} slice={[4]} />
        </Box>
    );

    const Container = (props) => <Grid container {...props} />
    const Item = (props) => <Grid item xs={12} sm={12} md={12} {...props} />

    return (
        <>
            {position.map((anchor) => (
                <React.Fragment key={anchor}>
                    {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        variant="permanent"
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </>
    );
}