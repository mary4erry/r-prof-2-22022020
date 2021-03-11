import React from 'react'
import { ListItem, 
         ListItemAvatar, 
         ListItemText, 
         Avatar,
         makeStyles,
         Badge, Button,
         Menu,
         MenuItem } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
   root: {
      '& .MuiButton-text': {
         padding: '0px',
      },
      '& .MuiButton-root': {
         padding: '0px',
         minWidth: '15px',
      },
      '& .MuiButtonBase-root': {
         justifyContent: 'end'
      },
   },
   text: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
   },
   chatItem: {
      cursor: 'pointer'
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
   // moreIcon: {
   //    minWidth: '15px',
   //    padding: '0px',

   // }
}))
         
let Chat = ({ chatMessages, lastMsgIndex, chats, chatId, chatRoomId, isSelected, handleNavigate, deleteChat }) => {
   const classes = useStyles()
   const [ anchorEl, setAnchorEl ] = React.useState(null)

   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }
   return (
      <ListItem className={ classes.chatItem }
         onClick={ () => handleNavigate(`/chat/${chatRoomId}`) } 
         selected={ isSelected ? true : false }
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
            {isSelected && <div>
               <Button 
                  aria-controls="simple-menu"                aria-haspopup="true"
                  onClick={handleClick}>
                  <MoreVertIcon className={classes.moreIcon} fontSize='small'
                     />
               </Button>
               <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose} >
                  <MenuItem onClick={() => deleteChat(chatRoomId)}>Delete</MenuItem>
               </Menu>
            </div>
            }
         
      </ListItem>
   )
}
export default Chat