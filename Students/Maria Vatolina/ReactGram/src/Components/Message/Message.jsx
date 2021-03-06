import React from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = (theme => ({
   root: {
      display: 'flex',
      flexDirection: 'column',
      color: theme.palette.text.primary,
   },
   msgAnswer: {
      backgroundColor: 'skyblue',
      alignSelf: 'flex-start',
   },
   msgMy: {
      backgroundColor: 'lightblue',
      alignSelf: 'flex-end',
   },
   msgSender:{
      // fontSize: '12px',
      color: 'lightslategray',
   },
   msgText:{
      margin:'5px',
   }
}))

const Message = (props) => {
   let { sender, text, chatId, chats, classes } = props
   sender ? sender = sender : sender = chats[chatId].title

   let msgClass = (sender !== 'Me' ? classes.msgAnswer : classes.msgMy)
   
   return (
      <div className={classes.root}>
         <Box className={msgClass}  m={1} p={1} width="40%" borderRadius="10px" boxShadow={1}>
         <strong className={classes.msgSender}> { sender }: </strong>
         <p className={classes.msgText}>{ props.sender || (!props.sender && text) 
            ? text : 'go away...' }
         </p>
      </Box> 
      </div>
      
   )
}
export default withStyles(useStyles)(Message)