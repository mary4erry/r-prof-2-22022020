import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import SearchIcon from '@material-ui/icons/Search'
import MoreIcon from '@material-ui/icons/MoreVert'

const useStyles = (theme => ({
   appBar: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, .2)'
   },
   toolbar: {
      justifyContent: 'space-between',
   }
}))

class Header extends React.Component {
   static propTypes = {
      chatId: PropTypes.number,
  }

  static defaultProps = {
      chatId: 1,
  }
  render() {
   const { classes } = this.props

   return (
      <AppBar position="static" className={classes.appBar}>
         <Toolbar className={classes.toolbar}>
            <Typography variant="subtitle1"> ReactGram &copy; </Typography>
            <Typography variant="subtitle1"> ChatRoom { this.props.chatId } </Typography>
            <div>
               <IconButton aria-label="search" color="inherit">
                  <SearchIcon />
               </IconButton>
               <IconButton aria-label="display more actions" edge="end" color="inherit">
                  <MoreIcon />
               </IconButton>
            </div>
         </Toolbar>
      </AppBar>
   )
}
}
export default withStyles(useStyles)(Header)
// export default Header