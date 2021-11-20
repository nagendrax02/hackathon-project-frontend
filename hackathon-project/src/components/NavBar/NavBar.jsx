import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button";
import { useState } from "react";
import  MenuItem  from "@mui/material/MenuItem";
import  Avatar  from "@mui/material/Avatar";
import Devider from "@mui/material/Divider"
import  Link  from "@mui/material/Link";
import Modal from "@mui/material/Modal"
import { Login } from "../Login/Login";

export const NavBar = ()=>{
    const [anchorE1, setAnchorE1] = useState(null);
    const [anchorE2, setAnchorE2] = useState(null);
    const open = Boolean(anchorE1);
    const open1= Boolean(anchorE2);
    const handleClick = (event)=>{
        setAnchorE1(event.currentTarget)
    }
    const handleSignup=(event)=>{
        setAnchorE2(event.currentTarget);
    }
    const handleClose=()=>{
        setAnchorE1(null);
        setAnchorE2(null);
    }
    
    const [userLoginModal, setUserLoginModal] = useState(false);

    const handleUserLoginModal=()=>{
        setUserLoginModal(true)
    }
    const closeUserLoginModal=()=>{
        setUserLoginModal(false);
    }

    return (<>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', background:'blue', gap:'12%', padding:'10px'}}>
            <Box sx={{color:'white', fontSize:'x-large'}}><Link href='/home' underline='hover' color='inherit'> Find Loader</Link></Box>
            <Box sx={{display:'flex', alignItems:'center', textAlign:'center', justifyContent:'center', gap:'20px', background:'blue', color:'white'}}>
            <Link href='/transport' color='inherit' underline='hover' sx={{cursor:"pointer", fontSize:'large', fontWeight:'600'}}>Transport Directory</Link>
            <Link href='/services' color='inherit' underline='hover' sx={{cursor:"pointer", fontWeight:'600',fontSize:'large', marginRight:'500px'}}>Services</Link>

            <Button sx={{background:'rgb(8,18,59)'}} variant="contained" onClick={handleClick}>Login</Button>
            <Button sx={{background:'rgb(8,18,59)'}} variant="contained" onClick={handleSignup}>Signup</Button>
            </Box>
        </Box>
        <Menu 
            anchorEl={anchorE1}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation:0,
                sx:{
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt:1.5,
                    '& .MuiAvatar-root':{
                        width:32,
                        height:32,
                        ml:-0.5,
                        mr:1
                    },
                    '&:before':{
                        content:'""',
                        display:'block',
                        position: 'absolute',
                        top:0,
                        right:14,
                        width:10,
                        height:10,
                        bgcolor:'background.paper',
                        transform:'translateY(-50%) rotate(45deg)',
                        zIndex:0
                    }
                }
            }}
            transformOrigin={{horizontal:'right', vertical:'top'}}
            anchorOrigin={{horizontal:'right', vertical:'bottom'}}
        >

            <MenuItem>
                <Avatar></Avatar> <Button onClick={handleUserLoginModal} color='inherit'>User Login </Button>
            </MenuItem>
            <Devider/>
            <MenuItem>
                <Avatar></Avatar><Button  color='inherit' onClick={handleUserLoginModal}>Driver Login </Button>
            </MenuItem>
        </Menu>
        {/* menu 2 */}
        <Menu 
            anchorE2={anchorE2}
            open={open1}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation:0,
                sx:{
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt:1.5,
                    '& .MuiAvatar-root':{
                        width:32,
                        height:32,
                        ml:-0.5,
                        mr:1
                    },
                    '&:before':{
                        content:'""',
                        display:'block',
                        position: 'absolute',
                        top:0,
                        right:14,
                        width:10,
                        height:10,
                        bgcolor:'background.paper',
                        transform:'translateY(-50%) rotate(45deg)',
                        zIndex:0
                    }
                }
            }}
            transformOrigin={{horizontal:'right', vertical:'top'}}
            anchorOrigin={{horizontal:'right', vertical:'bottom'}}
        >

            <MenuItem>
                <Avatar></Avatar><Button color='inherit'> User Signup</Button>
            </MenuItem>
            <Devider/>
            <MenuItem>
                <Avatar></Avatar> <Button color='inherit'> Driver Signup</Button>
            </MenuItem>
        </Menu>
        
        {/* Login modal */}
        <Modal 
            open={userLoginModal}
            onClose={closeUserLoginModal}
        >
            <Login></Login>
        </Modal>
    </>)
}