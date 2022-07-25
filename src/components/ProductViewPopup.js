import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PageviewIcon from "@mui/icons-material/Pageview";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductViewPopup(props) {
  const {
    onHandleChangeAdd,
    openClose,
    modelData,
    title,
    btnName,
    updateIndex,
  } = props;
  const [pro_id, setPro_id] = useState(modelData?.pro_id);
  const [pro_name, setPro_name] = useState(modelData?.pro_name);
  const [pro_price, setPro_price] = useState(modelData?.pro_price);
  const [pro_quantity, setPro_quantity] = useState(modelData?.pro_quantity);
  const [pro_img, setPro_img] = useState(modelData?.pro_img);
  const [role, setRole] = React.useState(modelData?.role);
  const [open, setOpen] = React.useState(openClose ? openClose : false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //for drop down

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  //add method data access
  const handleChangeAdd = () => {
    var obj = {
      id: updateIndex ? updateIndex : Math.random(999999) * 10000,
      pro_id: pro_id,
      pro_name: pro_name,
      pro_price: pro_price,
      pro_quantity: pro_quantity,
    };
    onHandleChangeAdd(obj, 1, btnName);
    setOpen(false);
  };
  useEffect(() => {
    setOpen(openClose);
    console.log("openClose from useEFFECT", openClose);
  }, [openClose]);

  return (
    <div>
       <VisibilityIcon style={{padding: 0,margin: 0}} onClick={handleClickOpen} />
     
      
      <Dialog open={open} onClose={handleClose} fullScreen={false}>
        <DialogTitle> {`ID : ${props?.pro_id}`}</DialogTitle>
        <DialogContent
          style={{
            border: 1,
            borderStyle: "outset",
            borderRadius: 5,
            margin: 10,
            width: 450,
            marginLeft: 25,
            marginRight: 25,
            paddingTop: 25,
            paddingBottom: 25,
          }}
        >
          <DialogContentText> {`PRODUCT  = ${props?.pro_name} `} </DialogContentText>
          <DialogContentText> {`QUANTITY = ${props?.pro_quantity}`}</DialogContentText>
        
          <img src={props?.pro_img}
          alt="1" width="100%" height="100%"/>
          
        </DialogContent>
        <DialogActions>
        
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
