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

import { useState, useEffect } from "react";
import { CustomerCard } from "../components/customer-card/CustomerCard";
export const Homepage = () => {
  // const [color, setColor] = useState();

  // const handleClick= ()=>{
  //     setColor('gray');
  // }
  const [data, setData] = useState([]);
  const [data2, setData2] = useState();
  async function getData(e) {
    try {
      const ref = await fetch(`http://localhost:2222/user/city?page=${e}`);
      const data = await ref.json();
      console.log(e);
      setData(data);
    } catch (err) {
      console.log(err.massage);
    }
  }
  useEffect(() => {
    getData();
  }, []);
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
    console.log(event.target.value);
    setQuantity(event.target.value);
  };

  const [anchorE2, setAnchorE2] = useState(null);

  //////////////////////////////////////////////

  const handleClose2 = (e) => {
    setAnchorE2(null);
  };

  const open2 = Boolean(anchorE2);
  const id2 = open2 ? "simple-popover" : undefined;

  //////////////////////////////
  const [anchorE1, setAnchorE1] = useState(null);

  // const handleClick2 = ;

  const handleClose1 = (e) => {
    setAnchorE1(null);
  };

  const open1 = Boolean(anchorE1);
  const id1 = open1 ? "simple-popover" : undefined;

  return (
    <>
      <NavBar></NavBar>

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
            id="p"
            aria-describedby={id2}
            onChangeCapture={(event) => {
              getData(event.target.value);
              // console.log(event.target.value);

              setAnchorE2(event.currentTarget);
            }}
            sx={{ marginBottom: "10px" }}
            label="SOURCE LOCATION"
            color="primary"
            placeholder="Search Loading City"
          ></TextField>
          <Popover
            sx={{
              maxHeight: "200px",
            }}
            id={id2}
            open={open2}
            anchorEl={anchorE2}
            onClose={handleClose2}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            {" "}
            <div
              style={{
                width: "200px",
                textAlign: "Left",
                padding: "10px",
              }}
            >
              Dehli
            </div>
            {data.map((e) => (
              <>
                <div
                  onClick={(ev) => {
                    document.getElementById("p").value = ev.target.innerHTML;
                    //
                  }}
                  style={{
                    width: "200px",
                    textAlign: "Left",
                    padding: "10px",
                  }}
                >
                  {e.city}
                </div>
              </>
            ))}
          </Popover>
          <Box>
            {" "}
            <TextField
              aria-describedby={id1}
              onChangeCapture={(event) => {
                getData(event.target.value);
                // console.log(event.target.value);
                setAnchorE1(event.currentTarget);
              }}
              id="input1"
              sx={{ width: 215, marginBottom: "10px" }}
              label="DESTINATION LOCATION"
              placeholder="Search Unloading City"
              color="primary"
            ></TextField>
            <Popover
              sx={{
                maxHeight: "200px",
              }}
              id={id1}
              open={open1}
              anchorEl={anchorE1}
              onClose={handleClose1}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              {" "}
              <div
                style={{
                  width: "200px",
                  textAlign: "Left",
                  padding: "10px",
                }}
              >
                Dehli
              </div>
              {data.map((e) => (
                <>
                  <div
                    onClick={(ev) => {
                      document.getElementById("input1").value =
                        ev.target.innerHTML;
                      //
                    }}
                    style={{
                      width: "200px",
                      textAlign: "Left",
                      padding: "10px",
                    }}
                  >
                    {e.city}
                  </div>
                </>
              ))}
            </Popover>
          </Box>

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
        <Button
          onClick={async () => {
            const route1 = document.getElementById("p").value;
            const route2 = document.getElementById("input1").value;
            const vehi = quantity

            try {
              const ref = await fetch(
                `http://localhost:2222/user/business_customer?route1=${route1}&route2=${route2}&vehi=${vehi}`
              );
              var data1 = await ref.json();
              console.log(data1);
              setData2(data1)
            } catch (err) {
              console.log(err.massage);
            }
          }}
          sx={{ margin: "20px 20px 20px 50px" }}
          variant="contained"
        >
          Apply Filters
        </Button>
      </Popover>
      <CustomerCard value={data2} ></CustomerCard>
    </>
  );
};
