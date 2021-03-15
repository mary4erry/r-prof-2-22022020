import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Box,
         IconButton,
         Input,
         List } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { AddCircle } from '@material-ui/icons'

import Chat from './Chat'
import { CircularProgress } from 'material-ui'

const useStyles = (theme => ({
   root: {
      overflow: 'auto',
      borderRight: '3px solid rgba(0, 0, 0, .1)',
      height: 'calc(100vh - 130px)',
   },
   newChat: {
      display: 'flex',
      flexDirection: 'row',
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
      chatId: PropTypes.string.isRequired,
      chats: PropTypes.object.isRequired,
      messages: PropTypes.object.isRequired,
      addChat: PropTypes.func.isRequired,
      classes: PropTypes.object,
      push: PropTypes.func.isRequired,
      isLoading: PropTypes.bool.isRequired,
   }

   handleNavigate = (link) => {
      this.props.push(link)
   }

   handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
   }

   handleKeyUp = (event) => {
      if (event.keyCode === 13){
         this.handleAdd()
      }
   }

   handleAdd = () => {
      if (this.state.input !== ' ') {
         this.props.addChat(this.state.input)
         this.setState({input: ''})
      }
   }
   render() {
      const { classes, chats, chatId, deleteChat } = this.props
      const ChatRoomsArr = []

      Object.keys(chats).forEach ( chatRoomId => {
         if (chats[chatRoomId] !== undefined) {
            let chatMessages = chats[chatRoomId].messageList
            let lastMsgIndex = chatMessages.length - 1

            ChatRoomsArr.push (
               <Chat
                  key={chatRoomId}
                  chatMessages={chatMessages} 
                  lastMsgIndex={lastMsgIndex}
                  chats={chats}
                  chatId={chatId}
                  chatRoomId={chatRoomId}
                  isSelected={ chatId === chatRoomId }
                  handleNavigate={this.handleNavigate}
                  deleteChat={deleteChat}
               />
            )
         }
      })
      if (this.props.isLoading) {
         return <CircularProgress />
      }
      return (
         <Box className={ classes.root }>
            <Box className={ classes.newChat }>
               <IconButton aria-label="create" 
                  onClick={ () => this.handleAdd() }>
                  <AddCircle />
               </IconButton>
               <Input name="input"
                  placeholder="Add new chat"
                  onChange={ this.handleChange }
                  onKeyUp={ this.handleKeyUp }
                  value={ this.state.input }
               />
            </Box>
            <List>
               {ChatRoomsArr}
            </List>
         </Box>  
      )
   }
}

export default withStyles(useStyles)(ChatField)