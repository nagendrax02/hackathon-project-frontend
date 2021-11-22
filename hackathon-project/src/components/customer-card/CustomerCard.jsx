import { Card, Box, Button } from "@mui/material";
import { BsCircleFill } from "react-icons/bs";
import { BsFillSquareFill } from "react-icons/bs";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";

export const CustomerCard = ({ value }) => {
  const [data, setData] = useState();
  async function getData() {
    try {
      if (value) {
        setData(value);
      } else {
        const ref = await fetch("http://localhost:2222/user/business_customer");
        const data = await ref.json();
        console.log(data);
        setData(data);
      }
    } catch (err) {
      console.log(err.massage);
    }
  }
  useEffect(() => {
    getData();
  }, [value]);
  if (!data) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            marginTop: "100px",
          }}
        >
          <CircularProgress />
        </Box>
      </>
    );
  }
  return (
    <>
      <Box
        sx={{ padding: "50px", display: "flex", flex: "50%", flexWrap: "wrap" }}
      >
        {data.map((e) => {
          return (
            <Card sx={{ width: "43%", margin: "auto", marginBottom: "30px" }}>
              <Box sx={{ padding: "20px" }}>
                <Box sx={{ fontWeight: "600", marginBottom: "10px" }}>
                  {e.material}
                </Box>
                <Box sx={{ fontSize: "12px" }}>
                  <BsCircleFill size="8"></BsCircleFill>&nbsp; {e.route1}
                </Box>
                <Box
                  sx={{
                    borderLeft: "2px solid black",
                    height: "20px",
                    marginLeft: "3px",
                    marginBottom: "2px",
                    marginTop: "2px",
                  }}
                >
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginLeft: "100px",
                      fontSize: "20px",
                    }}
                  >
                    ₹ &nbsp;{e.price}
                    <Box sx={{ fontSize: "10px", padding: "10px" }}>
                      {" "}
                      &nbsp;Per Tonne
                    </Box>
                  </Box>{" "}
                </Box>
                <Box sx={{ display: "flex", fontSize: "12px" }}>
                  <BsFillSquareFill style={{ marginTop: "4px" }} size="8" />
                  &nbsp; {e.route2}
                </Box>
                <Box sx={{ display: "flex", gap: "10px", padding: "15px" }}>
                  <Box sx={{ fontSize: "12px", padding: "5px" }}>
                    4 Tonne(s) Truck
                  </Box>
                  <Box>
                    {" "}
                    <VscCircleLargeFilled size="8" color="gray" />{" "}
                  </Box>
                  <Box sx={{ fontSize: "12px", padding: "5px" }}>
                    To be Billed
                  </Box>
                </Box>
              </Box>

              <Box sx={{ padding: "20px", display: "flex", gap: "100px" }}>
                <Box sx={{ display: "flex", gap: "20px", padding: "10px" }}>
                  {" "}
                  {e.book ? (
                    <img src="file:///C:/Users/prajal/Desktop/project/hackathon_backend/src/uploads/1637422923444-129494120-WhatsApp%20Image%202021-11-13%20at%2020.55.21.jpeg" alt="pp" />
                  ) : (
                    <FaUserAlt></FaUserAlt>
                  )}
                  <Box>{e.book ? e.book.name : "Sanman Traders"}</Box>
                </Box>
                <Button variant="contained" sx={{ width: "100px" }}>
                  Bid
                </Button>
              </Box>
            </Card>
          );
        })}
      </Box>
    </>
  );
};
