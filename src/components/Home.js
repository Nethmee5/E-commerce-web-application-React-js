import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import ProductPup from "./ProductAddPopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirm } from "react-confirm-box";
import ProductViewPopup from "./ProductViewPopup";

export default function Home(props) {
  const [array, setArray] = useState([
    {
        pro_id: 1,
        pro_name: "Milk powder",
        pro_price: "300",
        pro_quantity: "3",
        pro_img: "https://arpicosupercentre.com/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/5/1/51671_1.jpg",
    },
    {
        pro_id: 2,
        pro_name: "Bread",
        pro_price: "200",
        pro_quantity: "4",
        pro_img: "https://evrytyndey.com/wp-content/uploads/2021/09/sliced-bread.jpg",
      },
      {
        pro_id: 3,
        pro_name: "Flour",
        pro_price: "500",
        pro_quantity: "1",
        pro_img: "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/80515_XL1_20210210.jpg",
      },
      {
        pro_id: 4,
        pro_name: "Butter",
        pro_price: "600",
        pro_quantity: "2",
        pro_img: "https://www.anchordairy.com/content/dam/anchorglobal/my/en/product-image-2021/Anchor%20Unsalted%20Butter%20227g%20Halal_549x531.png",
      }, 
  ]);
  const [update, setUpdate] = useState(1);
  const [modelOpen, setModelOpen] = useState(false);
  const [modelData, setModelData] = useState(null);
  const [updateIndex, setUpdateIndex] = useState(null);


  //method to Add
  const handleChangeAddAccesFromProductPup= (
    data,
    getUpdateIndex,
    btnTypeAccess
  ) => {
    var arr = [];
    arr = array;

    if (btnTypeAccess == "update") {
      console.log("update id ", data?.id);

      var newarr = [];
      for (var i = 0; i < arr.length; i++) {
        if (data.id == arr[i].id) {
          arr[i] = data;
          newarr[i] = arr[i];
        } else {
          newarr[i] = arr[i];
        }
      }
      console.log("new array", newarr);
      setArray(newarr);
      console.log("update working", data, "\n", "updated Data list:", array);

      toast.success("Employee updated successfully!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      arr.push(data);
      setArray(arr);
      console.log("add working");
      // setUpdate(Math.random(5555555));

      toast.success("Employee added successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    // setArray(arr);
    setUpdate(Math.random(5555555));
  };
  //method to delete
  const deleteArray = (index, id) => {
    var removedArray = array.filter((item) => item.id != id);
    setArray(removedArray);
    setUpdate(Math.random(9999999));
    toast.success("Employee deleted successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  //method to edit
  const edit = (id, data, open) => {
    console.log("edited row id :", id, data, open);
    setModelOpen(open);
    setModelData(data);
    setUpdateIndex(id);
  };
  /*const handleChangeViewAccesFromProductPup = (
    data,
   
  
  ) */




  //method to open close ProductPup
  const ProductPupEdit = () =>
  (
    <ProductPup
      openClose={modelOpen}
      modelData={modelData}
      title="Edit employee"
      btnName="update"
      updateIndex={updateIndex}
      onHandleChangeAdd={(e, i, v) => handleChangeAddAccesFromProductPup(e, i, v)}
  
    />
  
  ); 
  

 
//mek damme update weddi compot ek refrsh wel aluthen add un/delet un data load krnn
  useEffect(() => {}, [update]);

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          height: 50,
          padding: 5,
          color: "white",
          backgroundColor: " #4169E1",
          marginTop: 0,
          fontWeight: "lighter",
        }}
      >
    Product Details
      </h2>
      <ProductPup
        onHandleChangeAdd={(e, i, v) =>
          handleChangeAddAccesFromProductPup(e, i, v)
        }
      />
      {modelOpen ? <ProductPupEdit /> : ""}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              NO
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>PRODUCT ID</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                NAME
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
            PRICE
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
              QTY
              </TableCell>
              <TableCell align="center"style={{ fontWeight: "bold" }}>
             IMAGE
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
              Action
              </TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {array.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                  <TableCell align="center" component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row?.pro_id}
                </TableCell>
                <TableCell align="center">{row?.pro_name}</TableCell>
                <TableCell align="center">{row?.pro_price}</TableCell>
                <TableCell align="center">{row?.pro_quantity}</TableCell>
                <TableCell align="center"><img 
                src={row?.pro_img||`https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772243_960_720.jpg`} 
                alt="1/" width="100" height="100"/></TableCell>
              
                <TableCell align="center">
                
                 <label>
                    {" "}
                    {<ProductViewPopup onClick={() => edit(row.id, row, true)} 
                      pro_id =  {row?.pro_id}
                      pro_name={row?.pro_name}
                      pro_price={row?.pro_price}
                      pro_quantity={row?.pro_quantity}
                      pro_img= {row?.pro_img||`https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772243_960_720.jpg`} 
                    />}{" "}
                  </label>
                  <br/>
                  <label>
                    {" "}
                    {<EditIcon onClick={() => edit(row.id, row, true)} />}{" "}
                    
                  </label>
                  <br/> <br/>
                  <label>
                    {" "}
                    {<DeleteIcon onClick={() => deleteArray(index, row?.id)} />}
                  </label>
              
                </TableCell>
              </TableRow>
              
            ))} 
          </TableBody>
        </Table>
      </TableContainer>
     

      <ToastContainer />
    </div>
  );
}
