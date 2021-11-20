import { NavBar } from "../components/NavBar/NavBar"
import {Card, Box,CardContent, TextField, Button, Modal} from "@mui/material/"
import {TiArrowRight} from "react-icons/ti"
import {AiOutlineHistory} from "react-icons/ai"
import { useState } from "react"
export const Homepage = ()=>{
    // const [color, setColor] = useState();

    // const handleClick= ()=>{
    //     setColor('gray');
    // }
    const [open, setOpen] = useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }


    return <>
        <NavBar></NavBar>
        {/* <Box sx={{textAlign:'center', display:'flex'}}>
            <Card sx={{width:350, borderBottom:'none', marginTop:'150px', marginLeft:'100px'}}>
                <Box sx={{display:"flex", justifyContent:'center'}}>
                   {/* <button onClick={handleClick} style={{border:'none', background: color !== 'gray' ? 'gray' : '  ,  white', cursor:'pointer'}}> <CardContent>Live Load Market</CardContent></button>
                   <button style={{border:'none', background:'none', cursor:'pointer'}}> <CardContent>Live Lorry Market</CardContent></button> */}
                {/* </Box> */}
             {/* </Card> */}
            
        {/* </Box> */} 
        
        <Card sx={{marginTop:'50px',marginLeft:'100px', width:'400px', display:'flex', justifyContent:'center'}}>
            <Box sx={{ padding:'20px'}}>
                <TextField sx={{marginBottom:'10px'}} label='SOURCE LOCATION' color='primary' placeholder='Search Loading City'></TextField>
               <Box>  <TextField sx={{width:215, marginBottom:'10px'}} label='DESTINATION LOCATION' placeholder="Search Unloading City" color='primary'></TextField></Box>
               
               <Box> <Button sx={{width:'140px', background:'white', color:'blue', border:'1px solid blue',marginBottom:'10px'}} variant="outlined"><AiOutlineHistory size='25'/> &nbsp;  History</Button>
                </Box>
                   <Box>
                <Button  onClick={handleOpen} sx={{width:'140px', background:'white', color:'blue', border:'1px solid blue'}} variant="outlined"> filters&nbsp; &nbsp;&nbsp;  Add Filters</Button></Box>

            
            </Box>

        </Card>
        <Modal 
            open={open}
            onClose={handleClose}
        >
            <Box>Guru</Box>
        </Modal>
        
    </>
}