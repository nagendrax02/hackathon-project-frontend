import { Box, Input, Button } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";
export const UserProfile = () => {
  function run() {
    axios
      .post("http://localhost:2222/user/register", {
        phone: localStorage.getItem("phone"),
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <Box
        sx={{
          border: "1px solid black",
          width: "50%",
          margin: "auto",
          padding: "20px",
          marginTop: "100px",
        }}
      >
        <Box>
          <Box sx={{ padding: "10px" }}>
            <FaUserAlt size="50"></FaUserAlt> &nbsp; &nbsp;Add photo
          </Box>
          <Box sx={{ fontSize: "12px", padding: "10px" }}>
            Enter Company Name *
          </Box>
          <Box sx={{ padding: "10px" }}>
            {" "}
            <Input defaultValue="Prajal"></Input>{" "}
          </Box>
        </Box>
        <Box sx={{ padding: "10px" }}>Registered Mobile no: +91-{localStorage.getItem("phone")}</Box>
        <Box sx={{ display: "flex", gap: "80px" }}>
          <Box sx={{ padding: "10px", fontSize: "12px" }}>
            Select Service Type
          </Box>
          <Box sx={{ padding: "10px", fontSize: "12px" }}>Address</Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "10px", fontSize: "12px" }}>
            <select
              style={{
                border: "none",
                borderBottom: "1px solid black",
                padding: "7px",
              }}
            >
              <option>I am a Shipper/ Load Owner</option>
              <option>I am Lorry Owner / Driver</option>
            </select>
          </Box>
          <Box sx={{ padding: "10px", fontSize: "12px" }}>
            <Input
              sx={{ textAlign: "center" }}
              defaultValue="Delhi/ Delhi"
            ></Input>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            padding: "10px",
            gap: "20px",
          }}
        >
          <Button onClick={()=>{
              window.location.href="/"
          }}  variant="outlined">Cancel</Button>
          <Button variant="contained">Save</Button>
        </Box>
      </Box>
    </>
  );
};
