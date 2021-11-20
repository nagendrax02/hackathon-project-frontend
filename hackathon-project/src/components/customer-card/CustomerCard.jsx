import {Card,Box,Button} from "@mui/material"
import {BsCircleFill} from "react-icons/bs"
import {BsFillSquareFill} from "react-icons/bs"
import {VscCircleLargeFilled} from "react-icons/vsc"
import {FaUserAlt} from "react-icons/fa"
export const CustomerCard = ()=>{
    return <> 
    <Box sx={{padding:'50px', display:'flex', flex:'50%', flexWrap:'wrap'}}>


        <Card sx={{ width:'35%', margin:'auto', marginBottom:'30px',}}>
            <Box sx={{ background:'rgb(238,245,254)', padding:'20px'}}>

            <Box sx={{fontWeight:'600', marginBottom:'10px'}}>Name</Box>
            <Box sx={{fontSize:'12px'}}><BsCircleFill size='8'></BsCircleFill>&nbsp; Source Location</Box>
            <Box sx={{borderLeft:'2px solid black', height:'20px', marginLeft:'3px', marginBottom:'2px',marginTop:'2px'}}>     <Box sx={{display:'flex', justifyContent:'center', marginLeft:'100px',fontSize:'20px' }}>₹ &nbsp;22000 <Box sx={{fontSize:'10px', padding:'10px'}}> &nbsp;Per Tonne</Box></Box> </Box>
            <Box sx={{display:'flex', fontSize:'12px'}}><BsFillSquareFill style={{marginTop:'4px'}} size="8"/>&nbsp; Destination Location 
             



            </Box>
         <Box sx={{display:'flex', gap:'10px', padding:'15px'}}>
        <Box sx={{fontSize:'12px', padding:'5px'}}>4 Tonne(s) Truck</Box>
       <Box> <VscCircleLargeFilled size='8' color='gray'/> </Box>
        <Box sx={{fontSize:'12px',padding:'5px'}}>To be Billed</Box>
        </Box>
        </Box>

        <Box sx={{padding:'20px', display:'flex', gap:'100px'}}>
           <Box sx={{display:'flex', gap:'20px', padding:'10px'}}> <FaUserAlt></FaUserAlt> 
            <Box>Sanman Traders</Box>
            </Box>
           <Button variant='contained' sx={{width:'100px'}}>Bid</Button>
        </Box>
       
        </Card>


        <Card sx={{padding:'20px', width:'35%', margin:'auto', marginBottom:'30px', background:'rgb(238,245,254)'}}>Customer Card</Card>
    

        </Box>
    </>
}