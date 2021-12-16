import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import ReportIcon from '@mui/icons-material/Report';

export default function Sidebar() {
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
    console.log(toggleDrawer)

    setState({ ...state, [anchor]: open });
  };

  const items1 = [
    { value: 'Inbox', icon: InboxIcon },
    { value: 'Starred', icon: StarRateIcon },
    { value: 'Send email', icon: SendIcon },
    { value: 'Drafts', icon: DraftsIcon },
  ]
  const items2 = [
    { value: 'All mail', icon: MailIcon },
    { value: 'Trash', icon: DeleteIcon },
    { value: 'Spam', icon: ReportIcon },
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
      <List>
        {items1.map((item, index) => (
          <ListItem button key={item.value}>
            <ListItemIcon>
               <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.value} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {items2.map((item, index) => (
          <ListItem button key={item.value}>
            <ListItemIcon>
               <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.value} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {position.map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}