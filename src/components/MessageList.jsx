import React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';

import Divider from '@mui/material/Divider';

export default function MessageList(props) {
  const messageLength = props.messages.length;
  console.log(messageLength);
  return (
    <div className="messageList">
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: '1px solid #bdbdbd', borderRadius: '5px' }}
      aria-labelledby="my-chat-dialog"
      subheader={
        <ListSubheader sx={{ borderRadius: '5px' }} component="div" id="my-chat-dialog">
          My chat dialog
        </ListSubheader>
      }
    >
      {props.messages.map((el, i) => 
        <div key={i}>
          <ListItem 
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={el.text} secondary={el.author} />
          </ListItem>
          <Divider key={i} variant="inset" component="li" />
        </div>
      )}
      {messageLength == 0 &&
          <ListItem>
            <ListItemText inset primary="No data" />
          </ListItem>
        }
    </List>
    </div>
  )
}
