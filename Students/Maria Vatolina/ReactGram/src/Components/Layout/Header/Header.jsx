import React from 'react'
import { makeStyles, 
         AppBar,
         Toolbar,
         Typography,
         IconButton,
         FormControlLabel,
         FormGroup,
         Menu,
         Switch,
         MenuItem } from '@material-ui/core'
import { Settings, 
         PostAdd,
         AccountCircle } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
}))

export default function Header (props) {
   const classes = useStyles()
   const [auth, setAuth] = React.useState(true)
   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)

   const handleChange = (event) => {
      setAuth(event.target.checked)
   }

   const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
   }

   const handleClose = () => {
      setAnchorEl(null);
   }

   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <IconButton 
                  edge="start" className={classes.menuButton}   color="inherit" aria-label="menu">
                  <MenuIcon />
               </IconButton>
               <IconButton>
                  <PostAdd />
               </IconButton>
               <IconButton>
                  <Settings />
               </IconButton>
               
               <Typography variant="h6" className={classes.title}>
                  ReactGram &copy;
               </Typography>
               <Typography> Chat with: { props.title } </Typography> 
               {auth && (
                  <div>
                     <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                     >
                        <AccountCircle />
                     </IconButton>
                     <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                           vertical: 'top',
                           horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                     >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                     </Menu>  
                  </div>
               )}
            </Toolbar>
         </AppBar>
         <FormGroup>
            <FormControlLabel
               control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
               label={auth ? 'Logout' : 'Login'}
            />
         </FormGroup>
      </div>
   )
}
