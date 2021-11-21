import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Login from './Login';
// import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0,);
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(248, 248, 248, 0.94);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 500,
  textAline:"center",
  bgcolor: 'white',
  border: '4px solid rgb(240, 240, 240)',
  p: 2,
  px: 4,
  pb: 3,
};

export default function ModalUnstyledDemo({value}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
     
      <div style={{backgroundColor:"rgb(25,118,210)",padding:"5px 20px",color:"white",borderRadius:"2px"}} onClick={handleOpen}>

      {value}
      </div>
     
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
         
        <Box  sx={style}>
        <p style={{fontSize:"25px",float:"right",cursor:"pointer"}} onClick={()=>{
           setOpen(false)
        }}>x</p>
      
          <div style={{height:"80vh",textAlign:"center",marginTop:"24vh",fontFamily:`sans-serifgt-super, Georgia, Cambria, "Times New Roman", Times, serif`}}> <p style={{fontSize:"40px"}} id="unstyled-modal-title">Join Medium.</p>
          <p  style={{borderRadius:"80px",marginTop:"100px"}}  id="unstyled-modal-description"><Login  /></p></div>
        <div style={{marginTop:"-80px",fontSize:"11px",textAlign:"center"}}>Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</div>
        </Box>
      </StyledModal>
    </div>
  );
}