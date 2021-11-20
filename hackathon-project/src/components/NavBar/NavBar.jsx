import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button";
import { useState } from "react";
import  MenuItem  from "@mui/material/MenuItem";
import  Avatar  from "@mui/material/Avatar";
import Divider from "@mui/material/Divider"
import  Link  from "@mui/material/Link";
import Modal from "@mui/material/Modal"
import { Login } from "../Login/Login";
import Tooltip from "@mui/material/Tooltip"
import { IconButton } from "@mui/material/";
import { ListItemIcon } from "@mui/material/";
import {FaUserCircle} from "react-icons/fa"
import {AiFillSetting} from "react-icons/ai"
import {FiLogOut} from "react-icons/fi"
import {GrHistory} from "react-icons/gr"

export const NavBar = ()=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <>
        <Box sx={{display:"flex", justifyContent:"center",gap:"50%"}}>
        <Link href='/' underline='none'>     <Box sx={{fontSize:'x-large', padding:"10px", marginRight:'50px'}}>Find Loader</Box></Link>
   <Box sx={{ display: 'flex', gap:"20px", alignItems: 'center', textAlign: 'center' }}>
          <Link underline='none' color="inherit" href='/loadmarket'><Typography sx={{ minWidth: 100, fontWeight:'600', color:'gray' }}>Live Load Market</Typography></Link>
         <Link underline='none' color="inherit" href='/lorrymarket'> <Typography sx={{ minWidth: 100 , fontWeight:'600', color:'gray'}}>Live Lorry Market</Typography></Link>
          <Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar sx={{ width: 32, height: 32 }}><FaUserCircle /></Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem>
                <Box sx={{fontWeight:600}}>Nagendra</Box>
            </MenuItem>
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
          <Avatar sx={{ width: 32, height: 32 }}><GrHistory color="white"/></Avatar>
         
            View History
          </MenuItem>
          <Divider />
          
       
          <MenuItem>
            <ListItemIcon>
          <Avatar sx={{ width: 30, height: 30 }}><FiLogOut /></Avatar>
              
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
  </>)
}