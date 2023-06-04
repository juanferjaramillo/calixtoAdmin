import React from "react"
import Papa from "papaparse";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useRef } from "react";
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"


//====================COMPONENT=======================
const ImportPoducts = () => {
  const [csvErrors, setCsvErrors] = useState({});
  const [csvProds, setCsvProds] = useState({});
  const fileRef = useRef();

  const validateStoreProduct = (prod) => {
     //validates the product
     setCsvProds([...csvProds, prod])
     console.log(prod);
     //stores the product in db
     
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
     header: true,
     step: (row) => {
          //what to do with each row (info in row.data)
          validateStoreProduct(row.data);
     },
     complete: (result) => {
          //informs what products had problems during import
          console.log(result)
          alert("import finished")
          event.target.value = null  //resets the file input
     } }
    )};

    //---------------Render------------------------
  return (
     <Box marginBottom={2} justifyContent={"center"}>
     <input
       type="file"
       accept=".csv"
       ref={fileRef}
       onChange={handleFileUpload}
       style={{ display: "none" }}  //hides the input element
       id="csv-input"
     />

       <Button
         sx={{ margin: "1vw" }}
         variant="contained"
         onClick={
          () =>fileRef.current.click()
           //triggers a click on the element (the input) opening the file selector por uploading
         }
         color="primary"
       >
         Importar Productos
       </Button>

   </Box>
  );
}
export default ImportPoducts;
