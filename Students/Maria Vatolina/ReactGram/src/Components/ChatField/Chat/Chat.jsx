import React, { Component } from 'react'
import { List, 
         ListItem, 
         ListItemAvatar, 
         ListItemText, 
         Avatar,
         makeStyles,
         Badge, 
         Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
      backgroundColor: theme.palette.success.light,
   },
}))
         
let Chat = () => {
   const classes = useStyles();
   return (
      <List className={classes.root} >
         <ListItem>
            <ListItemAvatar>
               <Badge color="secondary" overlap="circle">
                     <Avatar className={classes.avatar}>A</Avatar>
               </Badge>
            </ListItemAvatar>
            <ListItemText primary="Anna" secondary="See you later" />
         </ListItem>
         <ListItem>
            <ListItemAvatar>
               <Badge color="secondary" overlap="circle" variant="dot">
                     <Avatar className={classes.avatar}>H</Avatar>
               </Badge>
            </ListItemAvatar>
            <ListItemText primary="Help" secondary="You are welcome!" />
         </ListItem>
         <ListItem>
            <ListItemAvatar>
               <Badge color="secondary" overlap="circle">
                     <Avatar className={classes.avatar}>DV</Avatar>
               </Badge>
            </ListItemAvatar>
            <ListItemText primary="Darth Vader" secondary="Join the dark side..." />
         </ListItem>
      </List>
   )
}
export default Chat