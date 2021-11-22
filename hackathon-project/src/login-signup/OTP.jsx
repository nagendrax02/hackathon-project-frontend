import { useState } from "react";
import axios from "axios";
import { Box, Input, Button } from "@mui/material";
import { ImCross } from "react-icons/im";
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import firebaseConfig from "../Firebase";
export const OTP = () => {
  const [token, setToken] = useState(false);
  const [show, setShow] = useState(false);

  initializeApp(firebaseConfig);
  const [number, setNumber] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setNumber(e.target.value);
  };
  function run() {
   
  }
  run();

  const configureCaptcha = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
        },
        defaultCountry: "IN",
      },
      auth
    );
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "+91" + number;
    configureCaptcha();
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
       
        setShow(true);
      })
      .catch((error) => {
        console.log("err: ", error);
        setShow(true);
      });
  };
  // const onSubmitOtp = (e) => {
  //   e.preventDefault();
  //   const code = number;
  //   window.confirmationResult
  //     .confirm(code)
  //     .then((result) => {
  //       // User signed in successfully.
  //       const user = result.user;
  //       console.log(JSON.stringify(user));
  //       setToken(true);
  //       axios
  //       .post("http://localhost:2222/user/register", {
  //         phone: user.phone,
  //       })
  //       .then(function (response) {
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //       localStorage.setItem("phone", number)
  //       // ...
  //     })
  //     .catch((error) => {
  //       console.log("otpError: ", error);
  //     });
  // };
  return (
    <>
      <Box
        sx={{
          width: "50%",
          margin: "auto",
          border: "1px solid black",
          padding: "20px",
          borderRadius: "5px",
          marginTop:"120px"
         
        }}
      >
        <Box sx={{ display: "flex", gap: "70%" }}>
          <Box sx={{ fontSize: "x-large", padding: "10px" ,display:"flex"}}>
            Login  / SignUp
          </Box>
          <ImCross></ImCross>
        </Box>
        <Box
          sx={{
            fontSize: "13px",
            padding: "10px",
            color: "gray",
            
          }}
          onChange={handleChange}
          name="mobile"
          maxlength="10"
          required
        >
          Enter Your Mobile Number *
        </Box>

        <Box sx={{ padding: "10px" }}>
          {" "}
          <Input
            sx={{ width: "100%", fontSize: "x-large" }}
            placeholder="+91"
            onChange={handleChange}
            name="mobile"
            maxlength="10"
            type="Number"
            required
          />
        </Box>
        <Box
          sx={{
            fontSize: "13px",
            padding: "10px",
            color: "gray",
            marginTop: "30px",
          }}
        >
          Please enter the OTP sent to your mobile number *
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          {" "}
          <Button
            style={show ? { display: "none" } : { display: "flex" }}
            variant="contained"
            sx={{ width: "60%", padding: "10px" }}
            onClick={onSignInSubmit}
          >
            Send Otp
          </Button>
        </Box>
        {show ? (
          < >
            <Box sx={{ fontWeight: "600", padding: "10px" }}>+91{number}</Box>
            <Box sx={{ padding: "10px", border: "0px" }}>
              <input
                id="partitioned"
                type="text"
                maxlength="6"
                style={{
                  paddingLeft: "15px",
                  letterSpacing: "42px",
                  backgroundImage:
                    "linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%)",
                  backgroundPosition: "bottom",
                  backgroundSize: "50px 1px",
                  backgroundRepeat: "repeat-x",
                  backgroundPositionX: "35px",
                  width: "280px",
                  outline: "none",
                  border: "0px",
                  borderStyle: "none",
                }}
               
                name="otp"
              />
            </Box>

            <Box
              sx={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              {" "}
              <a href="#lll">Didn’t receive OTP? Resend</a>{" "}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              {" "}
              <Button  onClick={()=>{
                localStorage.setItem("phone", number)
              window.location.href ="/"
              }}
                variant="contained"
                sx={{ width: "60%", padding: "10px" }}
                type="submit"
              >
                Next
              </Button>
            </Box>
          </>
        ) : (
          <div></div>
        )}
      </Box>

      <form style={{ display: "none" }} >
        <div id="sign-in-button"></div>
        <div className="login-details-div">
          <span className="mobile-number">Enter your OTP</span>
          <span className="india-code">OTP : </span>
          <input
            type="number"
            onChange={handleChange}
            name="otp"
            className="input-box-for-login"
            maxlength="10"
            required
          />
        </div>
        <div>
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </form>
    </>
  );
};
