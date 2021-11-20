import {Box, Input, Button} from "@mui/material"
import {ImCross} from 'react-icons/im';
export const OTP= ()=>{
    return <>
    <Box sx={{width:'50%', margin:'auto' , border:'1px solid black', padding:'20px', borderRadius:'5px'}}>
        <Box sx={{display:'flex', gap:'70%'}}>
            <Box sx={{fontSize:'x-large', padding:'10px'}}>Login / SignUp</Box>
            <ImCross></ImCross>
        </Box>
        <Box sx={{fontSize:'13px', padding:'10px', color:'gray', marginTop:'50px'}}>Enter Your Mobile Number *</Box>
        <Box sx={{padding:'10px'}}> <Input sx={{width:'100%', fontSize:'x-large'}} defaultValue="+91" /></Box>
        <Box sx={{fontSize:'13px', padding:'10px', color:'gray', marginTop:'30px'}}>Please enter the OTP sent to your  mobile number *</Box>
        <Box sx={{fontWeight:'600', padding:'10px'}}>+91 7534075564</Box>
        <Box sx={{padding:'10px'}}><input id="partitioned" type="text" maxlength="4" style={{paddingLeft: '15px',
  letterSpacing: '42px',
  backgroundImage: 'linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%)',
  backgroundPosition: 'bottom',
  backgroundSize: "50px 1px",
  backgroundRepeat: "repeat-x",
  backgroundPositionX: "35px",
  width: "220px",
  border:0,
  borderStyle:'none'}} /></Box>

<Box sx={{padding:'10px', display:'flex', justifyContent:'center', marginTop:'20px'}}> <a href='#'>Didn’t receive OTP? Resend</a> </Box>
       <Box sx={{display:'flex', justifyContent:'center', marginTop:'20px'}}> <Button variant='contained' sx={{width:'60%', padding:'10px'}}>Next</Button></Box>
      
    </Box>
    </>
}