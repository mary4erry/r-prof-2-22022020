import React from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router-dom'

import { ListItem, ListItemAvatar, ListItemText, Avatar, 
         Badge, Box } from "@material-ui/core"
import { makeStyles, withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
   root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.common.white
   },
   item: {
      '&:hover, &:active': {
         backgroundColor: theme.palette.primary.main,
      },
   },
   selected: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
   },
   avatar: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main
   }
}))

let chat = (props) => {
   const classes = useStyles()

   const {  chats, title, message, chatId, link, isSelected } = props 
   
   return (
         <Link to={ link }>
            <ListItem divider={ true } button className={isSelected ? classes.selected : classes.item}>
               <ListItemAvatar>
                  <Avatar className={classes.avatar}> { title[0].toUpperCase()} </Avatar>
               </ListItemAvatar>
               <ListItemText primary={title} 
               secondary={ message } />
            </ListItem>
         </Link>
   )
}

export default chat
