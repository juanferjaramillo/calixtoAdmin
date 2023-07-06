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
import DataGridProds from "./DataGridProds";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import { Toaster, toast } from "sonner";
import { useEffect } from "react";
import { RotatingSquare } from "react-loader-spinner";

//====================COMPONENT=======================
const ImportPoducts = () => {
  const [loader, setLoader] = useState(false);
  const [render, setRender] = useState(false);
  const loadRef = useRef();
  const updateRef = useRef();
  const dispatch = useDispatch();
  const owner = useSelector((state) => state.authUser.id);

  useEffect(() => {
    dispatch(getAllProducts(owner));
  }, []);

  const handleLoadFile = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: async (result) => {
        const resultData = result.data;
        const validacion = validateCSV(resultData);
        // console.log("validacion", validacion);

        if (validacion) {
          setLoader(true);
          try {
            const r = await axios.post("/bulkcreate", { resultData, owner });
            dispatch(getAllProducts(owner));
            toast.success("Importación finalizada");
            setRender((render) => !render);
          } catch (error) {
            toast.error(`Error en la importacion - los productos ya existen? ${error}`);
          }
          setLoader(false);
        } else {
          toast.error("error en los datos!");
        }
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
            toast.success("Actualización finalizada");
          } catch (error) {
            toast.error("Error actualizando la información");
          }
          setLoader(false);
        } else {
          toast.error("error en los datos!");
        }
        event.target.value = null;
      },
    });
  };

  //---------------Render------------------------
  return (
    <PanelBase>
      <Toaster />
      <Box
        width={"80vw"}
        // border={1}
        display={"flex"}
        flexDirection={"column"}
        sx={{ mb: 3 }}
        alignItems={"center"}
      >
        <Typography variant="h4" padding={3}>
          Mis Productos
        </Typography>
        <DataGridProds />
        {loader ? (
          <RotatingSquare
            height="100"
            width="100"
            color="purple"
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : null}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        marginBottom={2}
        width={"80vw"}
        // border={1}
      >
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
      </Box>
      {/* {loader ? <Typography>Loading Data...</Typography> : null} */}
    </PanelBase>
  );
};
export default ImportPoducts;
