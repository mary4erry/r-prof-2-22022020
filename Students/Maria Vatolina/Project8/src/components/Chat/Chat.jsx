import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'

import { IconButton, Input, List, 
         ListItem, 
         ListItemAvatar, 
         ListItemText, 
         Avatar, 
         Badge, 
         Box, Toolbar } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';
// import AddIcon from '@material-ui/svg-icons/content/add'

//store
import { addChat, loadChats } from '../../store/actions/chat_actions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'

import { push } from 'connected-react-router'

const useStyles = (theme => ({
   root: {
      width: '100%',
      height: 'calc(100vh - 145px)',
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
   },
   avatar: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main
   },
   addChatTab: {
      position: 'relative',
      borderBottom: '1px solid rgba(255, 255, 255, .2)'

   },
   addIcon: {
      color: theme.palette.common.white,
      position: 'absolute',
      padding: theme.spacing(0),
   },
   addInput: {
      color: theme.palette.common.white,
      padding: theme.spacing(1, 1, 1, 5),
   }

}))

let chat = () => {
   const classes = useStyles()
   const { handleNavigate, handleChange, handleKeyUp, chats, chatId } = props 
   
   return (
      <Box className={classes.root}>
         <ListItem divider={ true } button className={classes.item}
            // selected={ isSelected ? true : false } 
            onClick = { () => handleNavigate(`/chat/${chatId}`)}>
            <ListItemAvatar>
               <Avatar className={ classes.avatar }>{ chats[chatId].title[0].toUpperCase() }</Avatar>
                  {/* <Badge color="secondary" overlap="circle" variant="dot"></Badge> */}
            </ListItemAvatar>
            <ListItemText 
               primary={chats[chatId].title} 
               key={ index }/>
         </ListItem>

         {/* Add chat */}
         <Toolbar className={classes.addChatTab} >
            <IconButton className={classes.addIcon}
               onClick = { this.handleAdd }>
               <AddIcon /> 
            </IconButton >
            <Input className={classes.addInput} disableUnderline={true}
               key={ chatId }
               name="input"
               placeholder="Add new chat"
               onChange = { handleChange }
               value = { this.state.input }
               onKeyUp = { handleKeyUp }
            />
         </Toolbar>
      </Box>
   )
}

export default chat
