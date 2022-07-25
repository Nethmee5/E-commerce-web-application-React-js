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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductPup(props) {
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
      pro_img:pro_img
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
     
      <div style={{ marginLeft: 5 ,paddingLeft: 100,paddingBottom: 20}}><Button onClick={handleClickOpen}  variant="contained">
        Add product
      <AddCircleIcon />
      </Button>
      </div>
      <Dialog open={open} onClose={handleClose} fullScreen={false}>
        <DialogTitle>{title ? title : "Add Product"}</DialogTitle>
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
          <DialogContentText> </DialogContentText>
         
          <TextField
            autoFocus
            margin="dense"
            id="pro_id"
            label="Product Id"
            name="pro_id"
            type="text"
            fullWidth
            variant="outlined"
            value={pro_id ? pro_id : modelData?.firstname}
            onChange={(e) => setPro_id(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="pro_name"
            label="Product name"
            type="text"
            fullWidth
            variant="outlined"
            value={pro_name ? pro_name : modelData?.pro_name}
            onChange={(e) => setPro_name(e.target.value)}
          />
       
          <TextField
            autoFocus
            margin="dense"
            id="pro_price"
            label="Product price"
            type="number"
            fullWidth
            variant="outlined"
            value={pro_price ? pro_price : modelData?.pro_price}
            onChange={(e) => setPro_price(e.target.value)}
          />
        
          <TextField
            autoFocus
            margin="dense"
            id="pro_quantity"
            label="Product Quantity"
            type="number"
            fullWidth
            variant="outlined"
            value={pro_quantity ? pro_quantity : modelData?.pro_quantity}
            onChange={(e) => setPro_quantity(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="pro_img"
            //type="file"
            type="text"
            fullWidth
            variant="outlined"
            value={pro_img ? pro_img: modelData?.pro_img}
            onChange={(e) => setPro_img(e.target.value)}
          />
          
        
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleChangeAdd}>
            {btnName ? btnName : "Add"}
          </Button>

          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
