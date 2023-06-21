import React from "react";
import Papa from "papaparse";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useRef } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { Typography } from "@mui/material";
import PanelBase from "../Dashboard/PanelBase";
import { validateCSV } from "./validateCSV";

//====================COMPONENT=======================
const ImportPoducts = () => {
  const [loader, setLoader] = useState(false);
  const loadRef = useRef();
  const updateRef = useRef();

  const handleLoadFile = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: async (result) => {
        const validacion = validateCSV(result.data);
        console.log("validacion", validacion);

        if (validacion) {
          setLoader(true);
          try {
            const r = await axios.post("/bulkcreate", result.data);
            alert("Importación finalizada");
          } catch (error) {
            alert("Error en la importacion - los productos ya existen?");
          }
          setLoader(false);
        } else { alert("error en los datos!");}
        event.target.value = null; //resets the file input
      },
    });
  };

  const handleUpdateFile = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: async (result) => {
        const validacion = validateCSV(result.data);

        if (validacion) {
          console.log("datos ok");
          setLoader(true);

          try {
            const r = await axios.patch("/updateProducts", result.data);
            alert("Actualización finalizada");
          } catch (error) {
            alert("Error actualizando la información");
          }
          setLoader(false);
        } else { alert("error en los datos!");}
        event.target.value = null;
      },
    });
  };

  //---------------Render------------------------
  return (
    <PanelBase>
      <Box marginBottom={2} justifyContent={"center"}>
        <input
          type="file"
          accept=".csv"
          ref={loadRef}
          onChange={handleLoadFile}
          style={{ display: "none" }} //hides the input element
          id="csv-load"
        />

        <input
          type="file"
          accept=".csv"
          ref={updateRef}
          onChange={handleUpdateFile}
          style={{ display: "none" }}
          id="csv-update"
        />

        <Button
          sx={{ margin: "1vw" }}
          variant="contained"
          onClick={
            () => loadRef.current.click()
            //triggers a click on the element (the input) opening the file selector por uploading
          }
          color="primary"
        >
          Importar Productos
        </Button>

        <Button
          sx={{ margin: "1vw" }}
          variant="contained"
          onClick={
            () => updateRef.current.click()
            //triggers a click on the element (the input) opening the file selector por uploading
          }
          color="primary"
        >
          Actualizar Productos
        </Button>

        {loader ? <Typography>Loading Data...</Typography> : null}
      </Box>
    </PanelBase>
  );
};
export default ImportPoducts;
