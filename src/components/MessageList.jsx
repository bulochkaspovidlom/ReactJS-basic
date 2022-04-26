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

export default function MessageList({messages}) {

  return (
    <div className="messageList">
    <List
      className='list'
      aria-labelledby="my-chat-dialog"
      subheader={
        <ListSubheader className="list-subheader"  component="div" id="my-chat-dialog">
          My chat dialog
        </ListSubheader>
      }
    >
      {messages.map((el, i) => 
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
      {messages.length == 0 &&
          <ListItem>
            <ListItemText inset primary="No data" />
          </ListItem>
        }
    </List>
    </div>
  )
}
