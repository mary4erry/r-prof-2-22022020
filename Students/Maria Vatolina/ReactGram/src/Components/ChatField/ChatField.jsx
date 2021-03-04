import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'
import { Box, 
         Divider,
         makeStyles, 
         IconButton,
         Input,
         List, 
         ListItem, 
         ListItemAvatar, 
         ListItemText, 
         Avatar,
         Badge } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { AddBox } from '@material-ui/icons'

// import ChatList from './Chat'

const useStyles = (theme => ({
   root: {
      overflow: 'hidden',
      borderRight: '3px solid rgba(0, 0, 0, .1)',
      height: 'calc(100vh - 130px)',
   },
   chatItem: {
      cursor: 'pointer'
   },
   newChat: {
      display: 'flex',
      flexDirection: 'row',
   },
   text: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
   },
   selected: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
   },
}))

class ChatField extends Component {
   constructor(props) {
      super(props)
      this.state = { 
         input: ''
      }
   }
   static propTypes = {
      // chatId: PropTypes.string.isRequired,
      chats: PropTypes.object.isRequired,
      messages: PropTypes.object.isRequired,
      addChat: PropTypes.func.isRequired,
      classes: PropTypes.object,
      push: PropTypes.func.isRequired,
   }

   handleNavigate = (link) => {
      this.props.push(link)
   }

   handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
      // this.setState({input: event.target.value})
   }

   handleKeyUp = (event) => {
      if (event.keyCode === 13){
         this.handleAdd()
      }
   }

   handleAdd = () => {
      const newChatId = Object.keys(this.props.chats).length + 1

      if (this.state.input !== ' ') {
         this.props.addChat(newChatId, this.state.input)
         this.props.addChatToStore(newChatId)
         this.setState({input: ''})
      }
   }
   render() {
      const { classes, chats, chatId, messages } = this.props
      const ChatRoomsArr = []

      Object.keys(chats).forEach ( chatRoomId => {
         if (chats[chatRoomId] !== undefined) {
            let chatMessages = chats[chatRoomId].messageList
            let lastMsgIndex = chatMessages.length - 1

            ChatRoomsArr.push (
               <ListItem className={ classes.chatItem }
                  onClick={ () => this.handleNavigate(`/chat/${chatRoomId}`) } 
                  selected={ chatId === +chatRoomId ? true : false }
                  key={chatRoomId} >
                  <ListItemAvatar>
                     <Badge color="secondary" overlap="circle">
                        <Avatar className={classes.avatar}>
                           {chats[chatRoomId].title[0].toUpperCase()}
                        </Avatar>
                     </Badge>
                  </ListItemAvatar>
                  <ListItemText 
                     className={classes.text} 
                     primary={chats[chatRoomId].title} 
                     secondary={chatMessages.length ? chatMessages[lastMsgIndex].text : 'no messages'}
                     />
                  {/* <Divider/> */}
               </ListItem>
            )
         }
      })

      return (
         <Box className={ classes.root }>
            <List>
               {ChatRoomsArr}
            </List>
            <Box className={ classes.newChat }>
               <IconButton aria-label="create" 
                  onClick={ () => this.handleAdd() }>
                  <AddBox />
               </IconButton>
               <Input name="input"
                  placeholder="Add new chat"
                  onChange={ this.handleChange }
                  onKeyUp={ this.handleKeyUp }
                  value={ this.state.input }
               />
            </Box>
         </Box>  
      )
   }
}

export default withStyles(useStyles)(ChatField)