import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './Styles/login.css';
import Alert from "@mui/material/Alert";
import { Hidden } from "@mui/material";
import Home from "./Home";

//flow
function Loginpage() {
  
  //console.log() console.woring() console.error()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword,setConfirmpassword] = useState("");
  const [alt, setAlt] = useState({ serverity: "", text: "" });
  const [openRegister,setOpenRegister] = useState(false);
  //1.user login btn ek click krnw
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("btnNameClicked",e);
    //if(e=='loginevent'){
   
      // 2.enter krpu data tik validate krnw
      //1 username eki password eki harid  , hari nm mn mokkd krnne : if{} eke, wardinm mn mokkd krnne :  else{} eke
      //if(true){if(true){if(true){}}}
      if (username == "Nethmee@gmail.com" && password == "Nethmee123" && Validate(username)) {
        setAlt({ serverity: "success", text: "Login Succesfull" });
        setTimeout(() => { window.location.href = "/Home" }, 1000);
    
      } //ue
      else {
        setAlt({ serverity: "error", text: "Login unSuccesfull" });
  
      }
    }/*else{ if(password==confirmpassword){
      setAlt({serverity:"success" ,text:"Registration successfull"});
    }
    else{
      setAlt({ serverity: "error", text: "Registration  unSuccesfull" });
    }
   }*/
    
  
  //function for usrname validate
  function Validate(val) {
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
          <Alert style={{marginLeft:60}}severity={alt.serverity}>{alt.text}</Alert>
        ) : (
          ""
        )}
      </>
    );
  };

  return (

    <div className="background">
      <div  className="Login-container">
          {/**Alert show */}
          {showValidateMsg()}
        
        <div className="title">
          <h >{openRegister?"Register":"Login"}</h>
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
            style={{width: "100%"}}
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
            style={{width: "100%"}}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            //type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
          <br />
        {openRegister==true? ( < TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            style={{width: "100%"}}
             //type="password"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmpassword(e.target.value);
              console.log(confirmpassword);
            }}
          />
          ):""}
         {openRegister==true} <Button
          style={{width: "100%"}}
            id="btn-login"
            type="submit"
            onClick={(e) => {
               handleLogin(e);
            
              // handleLogin(openRegister==true?"regevent":"loginevent");
            }}
            variant="contained"
          >
           {openRegister==true?"Register":"Login"}
          </Button>
        
          
        <br/>
      
        {openRegister==true?"":(<p style={{width: "100%", textAlign: "center",fontWeight:"bold"}}>Please register for a new customer!</p>)}
        
        
        {openRegister==false?(<Button
            id="btn-reg"
            type="submit"
            onClick={(e) => {
             setOpenRegister(true);
            }}
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: "#21b6ae",
              padding: "18px 36px",
              width: "100%",
              fontSize: "18px"}}
          >
          Register
          </Button>):""}
          </Box>
       
    </div>
      
      </div>
    
  );
}

export default Loginpage;
