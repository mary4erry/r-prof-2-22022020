import React, { Component } from 'react'
import { Box } from '@material-ui/core'
import ChatList from './Chat/Chat'

class ChatField extends Component {
   constructor(props) {
      super(props);
      this.state = { };
   }
   render() {
      return (
         <Box >
            <ChatList/>
         </Box>
      );
   }
}

export default ChatField