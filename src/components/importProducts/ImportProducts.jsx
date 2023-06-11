import React from "react";
import Papa from "papaparse";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useRef } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { Typography } from "@mui/material";

//====================COMPONENT=======================
const ImportPoducts = () => {
  const [loader, setLoader] = useState(false);
  const fileRef = useRef();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: async (result) => {
        setLoader(true);
        try {
          await axios.post("/bulkcreate", result.data);
          alert("import finished");
        } catch (error) {
          alert("error importing data");
        }
        setLoader(false);
        event.target.value = null; //resets the file input
      },
    });
  };

  //---------------Render------------------------
  return (
    <Box marginBottom={2} justifyContent={"center"}>
      <input
        type="file"
        accept=".csv"
        ref={fileRef}
        onChange={handleFileUpload}
        style={{ display: "none" }} //hides the input element
        id="csv-input"
      />

      <Button
        sx={{ margin: "1vw" }}
        variant="contained"
        onClick={
          () => fileRef.current.click()
          //triggers a click on the element (the input) opening the file selector por uploading
        }
        color="primary"
      >
        Importar Productos
      </Button>
      {loader ? <Typography>Loading Data...</Typography> : null}
    </Box>
  );
};
export default ImportPoducts;
