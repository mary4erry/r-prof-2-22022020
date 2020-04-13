import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import { push } from 'connected-react-router'


import { Box, AppBar, Toolbar, IconButton, 
         InputBase, Input, List  } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';
// import { ForumRounded, AccountCircleRounded, Settings } from '@material-ui/icons/'
import SearchIcon from '@material-ui/icons/Search'

import Chat from '../Chat/Chat.jsx'
import Footer from '../ChatFooter/ChatFooter.jsx'

//store
import {addChat} from '../../store/actions/chat_actions.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const useStyles = (theme => ({
   root: {
      borderRight: '4px solid rgba(0, 0, 0, .1)',
   },
   chatList: {
      height: 'calc(100vh - 211px)',
      padding: theme.spacing(1, 0),
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.common.white
   },
   grow: {
      // flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: 'none',
   },
   search: {
      position: 'relative',
      borderBottom: '1px solid rgba(255, 255, 255, .2)'
   },
   searchIcon: {
      width: theme.spacing(3),
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center'
   },
   inputRoot: {
      color: 'inherit'
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 5),
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
      padding: theme.spacing(1, 0, 1, 4),
   }
}))

class ChatList extends Component {
   constructor (props) {
      super(props)
   }
   static propTypes = {
      chatId: PropTypes.number.isRequired,
      chats: PropTypes.object.isRequired,
      messages: PropTypes.object,
      classes: PropTypes.object,
      addChat: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
   }
   // static deafultProps = {
   //    chatId: 1
   // }
   state = {
      input: ''
   }
   handleNavigate = (link) => {
      this.props.push(link)
   }
   handleChange = (evt) => {
      this.setState({ [evt.target.name]:evt.target.value })
   }
   handleKeyUp = (event) => {
      if (event.keyCode === 13 ) {
         this.handleAdd()           
      }
   }
   handleAdd = () => {
      if(this.state.input !==''){
         this.props.addChat(this.state.input)
         this.setState({ input: '' })
      }
   }

   render() {

      const { classes, chats, chatId, title } = this.props
      let ChatRoomsArray = []

      Object.keys(chats).forEach(chatRoomId => {
         ChatRoomsArray.push(
            <Chat
               handleNavigate={ this.handleNavigate }
               link={ `/chat/${chatRoomId}` }
               title={ chats[chatRoomId].title}
               message={ chats[chatRoomId].message }
               isSelected={ chatId === +chatRoomId }
               key={ chatRoomId } 
               />
         )
      })

      return (
         <Box className={classes.root}>
            {/* chat Search  */}
            <AppBar position="static" className={classes.grow}>
               <Toolbar className={classes.search}>
                  <SearchIcon className={classes.searchIcon}/>
                  <InputBase
                  placeholder="Search in all..."
                  classes={{
                     root: classes.inputRoot,
                     input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                  />
               </Toolbar>
            </AppBar>

            <List className={ classes.chatList }>
               { ChatRoomsArray }
               <Toolbar className={classes.addChatTab} >
                  <IconButton className={classes.addIcon}
                     onClick = { this.handleAdd }>
                     <AddIcon /> 
                  </IconButton >
                  
                  <Input className={classes.addInput} 
                     disableUnderline={true} 
                     name="input"
                     key={ chatId }
                     placeholder="Add new chat"
                     onChange = { this.handleChange }
                     value = { this.state.input }
                     onKeyUp = { this.handleKeyUp }
                  />
               </Toolbar>
            </List>
               
            <Footer />
         </Box>         
      )
   }
}
const mapStateToProps = ({ chatReducer }) => ({
   chats: chatReducer.chats
})
const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ChatList))
