import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './Styles/login.css';
import Alert from "@mui/material/Alert";

//flow
function Registerpage() {
  
  //console.log() console.woring() console.error()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [alt, setAlt] = useState({ serverity: "", text: "" });
  //1.user login btn ek click krnw
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 2.enter krpu data tik validate krnw
    //1 username eki password eki harid  , hari nm mn mokkd krnne : if{} eke, wardinm mn mokkd krnne :  else{} eke
    //if(true){if(true){if(true){}}}
    if (username == "Nethmee@gmail.com" && password == confirmpassword  && Validate(username)) {
        setAlt({ serverity: "success", text: "Succesfully registered" }) 
     
          
      } //ue
      else {
        setAlt({ serverity: "error", text: "Your password is not match or username is not valid" });
      }
  };

  //function for usrname validate
  function Validate(val) {
    //var username = "Nethmee@gmail.com";
    //1 Nethmee     ,    @gmail.com
    const myArray = val.split("@"); // ['abc','gmail.com']
    function onlyLettersAndNumbers(str) {
      return /^[A-Za-z0-9]*$/.test(str);
    }
    if (myArray[1] === "gmail.com" && onlyLettersAndNumbers(myArray[0])) {
      return true;
    } else {
      return false;
    }
    //2 Nethmee : athulat wenn bh simbol : only a-z0-9 vitri
    //3 @gmail.com common e if(true && faalse)
  }

  /**
 * 1.user login btn ek click krnw

 * 3.validate ek anuwa alert ek show krnw
 */
  const showValidateMsg = () => {
    return (
      <>
        {alt.serverity != "" ? (
          <Alert severity={alt.serverity}>{alt.text}</Alert>
        ) : (
          ""
        )}
      </>
    );
  };

  return (
    <div className="background">
      <div className="Login-container">
        <div className="title">
          <h>Register</h>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              console.error(username);
              console.warn(username);
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmpassword(e.target.value);
              console.log(confirmpassword);
            }}
          />
          <br />
        
        
          <Button
            id="btn-login"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
            variant="contained"
          >
           submit
          </Button>
          {/**Alert show */}
          {showValidateMsg()}
        </Box>

       
      </div>
    
    </div>
    
  );
}

export default Registerpage;
// uninstall
// npm uninstall @mui/material
