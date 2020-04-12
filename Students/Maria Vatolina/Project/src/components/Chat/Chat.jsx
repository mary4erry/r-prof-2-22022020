import React from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router-dom'

import { IconButton, Input, List, 
         ListItem, 
         ListItemAvatar, 
         ListItemText, 
         Avatar, 
         Badge, 
         Box } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';
// import AddIcon from '@material-ui/svg-icons/content/add'

//store
import {addChat} from '../../store/actions/chat_actions.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import { Chat } from '@material-ui/icons'

const useStyles = (theme => ({
   root: {
      width: '100%',
      // height: 'calc(100vh - 145px)',
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
   }
}))

class Chat extends React.Component {
  
   render() {
      const { classes, chats, title, message, chatId, link } = this.props 
      
      return (
         <Box className={classes.root}>
            <Link to={ link }>
               <ListItem divider={ true } button className={classes.item}>
                  <ListItemAvatar>
                     <Badge color="secondary" overlap="circle" variant="dot">
                        <Avatar className={classes.avatar}>  </Avatar>
                     </Badge>
                  </ListItemAvatar>
                  <ListItemText primary={title} 
                  secondary={ message } />
               </ListItem>
            </Link>
         </Box>
      )
   }
}
{/* <Divider variant="inset" component="li" /> */}


export default withStyles(useStyles)(Chat)