import {Box, Input, Button} from "@mui/material"
import {ImCross} from 'react-icons/im';
export const LoginSignup=()=>{
    return <>
    <Box sx={{width:'50%', margin:'auto' ,borderRadius:'5px', border:'1px solid black', padding:'20px'}}>
        <Box sx={{display:'flex', gap:'70%'}}>
            <Box sx={{fontSize:'x-large', padding:'10px'}}>Login / SignUp</Box>
            <ImCross></ImCross>
        </Box>
        <Box sx={{fontSize:'13px', padding:'10px', color:'gray', marginTop:'50px'}}>Enter Your Mobile Number *</Box>
        <Box sx={{padding:'10px'}}> <Input sx={{width:'100%', fontSize:'x-large'}} defaultValue="+91" /></Box>
        <Box sx={{padding:'10px', fontSize:'12px'}}>By signing up, you accept our <a href='#'> Terms of use </a>and <a href='#'> Privacy Policy </a></Box>
       <Box sx={{display:'flex', justifyContent:'center', marginTop:'20px'}}> <Button variant='contained' sx={{width:'60%', padding:'10px'}}>Next</Button></Box>
    </Box>
    </>
}