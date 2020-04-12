import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

import { Box, AppBar, Toolbar, IconButton, InputBase  } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

import Chat from '../Chat/Chat.jsx'
import Footer from '../ChatFooter/ChatFooter.jsx'

const useStyles = (theme => ({
   root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      borderRight: '4px solid rgba(0, 0, 0, .1)',
   },
    grow: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: 'none',
   },
   search: {
      position: 'relative',
      borderBottom: '1px solid rgba(255, 255, 255, .2)'
   },
   searchIcon: {
      position: 'absolute',
   },
   inputRoot: {
      color: 'inherit'
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 5),
   }
}))

class ChatList extends Component {
   constructor (props) {
      super(props)
   }
   static propTypes = {
      chatId: PropTypes.string,
      chats: PropTypes.object,
      classes: PropTypes.object
   }
   // static deafultProps = {
   //    chatId: 1
   // }

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

      const { classes, chatId, chats } = this.props

      let ChatRooms = []

      Object.keys(chats).forEach((chatId, index) => {
         ChatRooms.push(
            <Chat 
               handleNavigate={ this.handleNavigate }
               title={ ChatRooms[chatId].title }
               key={ chatId }
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

            <Box>
               { ChatRooms }
            </Box>
            
            {/* chatFooter */}
            <Footer />
         </Box>         
      )
   }
}

export default withStyles(useStyles)(ChatList)