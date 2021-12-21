import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material/'
import { Link, Outlet } from 'react-router-dom'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function Lists(
     { 
         name = 'Not named yet',
    items = { value: '', icon: '', hidden: false, disabled: false, to: '', action: () => {}},
 slice = [] }) {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <List>
                <ListItem button onClick={() => setIsOpen(prev => !prev)}>
                    <ListItemText primary={name} />
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={isOpen}>
                    {items.slice(slice[0] || slice.legnth, slice[1] || slice.legnth)
                        .filter(({ hidden }) => !hidden)
                        .map((item, index) => (
                            <Link to>
                                <ListItem button key={item.value} disabled={item.disabled}>
                                    <ListItemIcon>
                                        <item.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.value} />
                                </ListItem>
                            </Link>
                        ))}
                </Collapse>
            </List>
            <Outlet />
        </>
    )
}


