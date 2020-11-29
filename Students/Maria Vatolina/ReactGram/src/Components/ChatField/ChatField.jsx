import React, { Component } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import ChatList from './Chat'

const useStyles = (theme => ({
   root: {
      borderRight: '3px solid rgba(0, 0, 0, .1)',
      height: 'calc(100vh - 130px)',
   },
}))

class ChatField extends Component {
   constructor(props) {
      super(props)
      this.state = { }
   }
   render() {
      const { classes } = this.props
      return (
         <Box className={ classes.root }>
            <ChatList/>
         </Box>
      )
   }
}

export default withStyles(useStyles)(ChatField)