import React, { Component } from 'react'
import { List, 
         ListItem, 
         ListItemAvatar, 
         ListItemText, 
         Avatar,
         makeStyles,
         Badge,
         Divider, } from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
   text: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
   },
}))
         
let Chat = () => {
   const classes = useStyles();
   return (
      <List className={classes.root} >
         <Link to='/chat/1/'>
            <ListItem primaryText='Chat 1'>
               <ListItemAvatar>
                  <Badge color="secondary" overlap="circle">
                        <Avatar className={classes.avatar}>A</Avatar>
                  </Badge>
               </ListItemAvatar>
               <ListItemText 
                  className={classes.text} primary="Anna" secondary="See you later" />
            </ListItem>
         </Link>
         <Divider />
         <Link to='/chat/2/'>
            <ListItem primaryText='Chat 2'>
               <ListItemAvatar>
                  <Badge color="secondary" overlap="circle" variant="dot">
                        <Avatar className={classes.avatar}>H</Avatar>
                  </Badge>
               </ListItemAvatar>
               <ListItemText 
                  className={classes.text} primary="Help" secondary="You are welcome!" />
            </ListItem>
         </Link>
         <Divider />
         <Link to='/chat/3/'>
            <ListItem primaryText='Chat 3'>
               <ListItemAvatar>
                  <Badge color="secondary" overlap="circle">
                        <Avatar className={classes.avatar}>DV</Avatar>
                  </Badge>
               </ListItemAvatar>
               <ListItemText
                  className={classes.text} primary="Darth Vader" secondary="Join the dark side..." />
            </ListItem>
         </Link>
         <Divider />
      </List>
   )
}
export default Chat