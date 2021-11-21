import {Input,Button,Box, Avatar, Card, CardContent, Typography } from "@mui/material";
import {IoCallOutline} from "react-icons/io5"
export const BidDetails = () => {
  return (
    <>
      <Box sx={{display:'flex', justifyContent:'center', border:'1px solid black', borderRadius:'10px',width:'70%', margin:'auto', marginTop:'30px'}}>
        <Box sx={{background:'rgb(247,247,247)',width:'50%', padding:'10px'}}>
            <Typography variant='h5' sx={{fontSize:'large', padding:'10px'}}>Bid Details</Typography>
            <Box sx={{fontSize:'12px', color:'gray', padding:'10px'}}>Please fill out the following details</Box>

            <Box sx={{display:'flex',gap:'10px', padding:'10px'}}>
                <Box>
                     <Avatar sx={{ width: 25, height: 25, fontSize:'15px' }}>1</Avatar>
                </Box>
                <Box>PRICE</Box>
            </Box>
            <Box sx={{}}>
            <Box
                  sx={{
                    borderLeft: "2px solid black",
                    height: "30px",
                    marginLeft: "20px",
                    marginBottom: "2px",
                    marginTop: "2px",
                  }}
                ></Box>
                </Box>
                <Box sx={{display:'flex',gap:'10px', padding:'10px'}}>
                <Box>
                     <Avatar sx={{ width: 25, height: 25, fontSize:'15px' }}>2</Avatar>
                </Box>
                <Box>ADD LORRY</Box>
            </Box>
            <Card sx={{maxWidth:'350px', margin:'auto', marginTop:'20px',marginBottom:'10px'}}>
                <CardContent>
                    <Typography sx={{fontSize:'12px', padding:'10px'}} component="div">Help Desk</Typography>
                    <Typography sx={{fontSize:'12px', padding:'10px'}}>
                    Having trouble booking loads?Reach out to us and our executives will be happy to help.
                    </Typography>
                    <Box sx={{display:'flex', gap:'10px'}}>
                        <Typography sx={{padding:'10px', fontSize:'12px'}}>Call &nbsp;-</Typography>
                     <Button>   <Typography sx={{padding:'0px'}}><IoCallOutline/></Typography> </Button>
                    </Box>
                </CardContent>

            </Card>
        </Box>
        <Box sx={{width:'50%', padding:'10px'}}>
        
            <Typography variant='h6' sx={{padding:'10px', marginBottom:'30px'}}>PRICE</Typography>
            <Typography sx={{fontSize:'15px', color:'gray',padding:'10px'}}>Enter your rate*</Typography>
           <Box sx={{display:'flex',gap:'10px', padding:'10px'}}> <Input type='number' placeholder='₹ 0 ' /> 
                <Button sx={{borderRadius:'20px'}} variant='outlined'>Fixed price</Button>
                <Button sx={{borderRadius:'20px'}} variant='outlined'>Fixed price</Button>
           </Box>
           <Box sx={{padding:'10px'}}><Input sx={{textAlign:'center', width:'300px'}} type='number' placeholder='Enter Remarks (Optional) ' /> </Box>
           <Box sx={{padding:'10px'}}>
                <Button variant='contained' sx={{width:'400px', marginTop:'100px', marginLeft:'20px'}}>Next</Button>
            </Box>
        </Box>
      </Box>
    </>
  );
};
