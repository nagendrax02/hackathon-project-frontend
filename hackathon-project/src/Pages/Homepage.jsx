import { NavBar } from "../components/NavBar/NavBar";
import {
  MenuItem,
  Select,
  Card,
  Box,
  TextField,
  Button,
  Popover,
} from "@mui/material/";
import { useState } from "react";
import { CustomerCard } from "../components/customer-card/CustomerCard";
export const Homepage = () => {
  // const [color, setColor] = useState();

  // const handleClick= ()=>{
  //     setColor('gray');
  // }
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [quantity, setQuantity] = useState("");

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <>
      <NavBar></NavBar>
      {/* <Box sx={{textAlign:'center', display:'flex'}}>
            <Card sx={{width:350, borderBottom:'none', marginTop:'150px', marginLeft:'100px'}}>
                <Box sx={{display:"flex", justifyContent:'center'}}>
                   {/* <button onClick={handleClick} style={{border:'none', background: color !== 'gray' ? 'gray' : '  ,  white', cursor:'pointer'}}> <CardContent>Live Load Market</CardContent></button>
                   <button style={{border:'none', background:'none', cursor:'pointer'}}> <CardContent>Live Lorry Market</CardContent></button> */}
      {/* </Box> */}
      {/* </Card> */}

      {/* </Box> */}

      <Card
        sx={{
          marginLeft: "50px",
          width: "80%",
          margin: "auto",
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ padding: "20px", display: "flex", gap: "20px" }}>
          <TextField
            sx={{ marginBottom: "10px" }}
            label="SOURCE LOCATION"
            color="primary"
            placeholder="Search Loading City"
          ></TextField>
          <Box>
            {" "}
            <TextField
              sx={{ width: 215, marginBottom: "10px" }}
              label="DESTINATION LOCATION"
              placeholder="Search Unloading City"
              color="primary"
            ></TextField>
          </Box>

          {/* <Box> <Button sx={{width:'140px', background:'white', color:'blue', border:'1px solid blue',marginBottom:'10px'}} variant="outlined"><AiOutlineHistory size='25'/> &nbsp;  History</Button>
                </Box> */}
          <Box>
            <Button
              onClick={handleClick}
              sx={{
                width: "200px",
                background: "white",
                padding: "13px",
                color: "blue",
                border: "1px solid blue",
              }}
              variant="outlined"
            >
              {" "}
              filters &nbsp;Add Filters
            </Button>
          </Box>
        </Box>
      </Card>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ marginTop: "10px", padding: "10px", fontSize: "13px" }}>
          {" "}
          Select Quantity: &nbsp;
          <Select value={quantity} label="Quantity" onChange={handleChange}>
            {" "}
            Quantity
            <MenuItem value={5}>0-5 Ton</MenuItem>
            <MenuItem value={15}>10-15 Ton</MenuItem>
            <MenuItem value={20}>15-20 Ton</MenuItem>
            <MenuItem value={25}>20-25 Ton</MenuItem>
          </Select>
        </Box>
        <Button sx={{ margin: "20px 20px 20px 50px" }} variant="contained">
          Apply Filters
        </Button>
      </Popover>
      <CustomerCard></CustomerCard>
    </>
  );
};
