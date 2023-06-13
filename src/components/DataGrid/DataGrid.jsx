import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const columns = [
  { field: "codigo", headerName: "codigo", width: 100 },
  { field: "nombre", headerName: "nombre", width: 300, align: "center" },
  { field: "precioBase", headerName: "Precio Base", width: 130, align: "center" },
  {
    field: "proveedor",
    headerName: "PROVEEDOR",
    width: 300,
    align: "center"
  },
  { field: "iva", headerName: "IVA", width: 50 },
];

//============================COMPONENT===================
function DataTable() {
  let myProds = useSelector((state) => state.filteredProducts);

  myProds = myProds.map((p, i) => {
    return {
      id: i,
      codigo: p.codigo,
      nombre: p.nombre,
      precioBase: p.precioBase,
      iva: `${p.tax.tax}%`,
      proveedor: p.provider.name,
    };
  });

  //--------------------Render----------------------
  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center", p: 10, width: "100vw" }}
      border={1}
    >
      <DataGrid
        rows={myProds}
        columns={columns}
        showColumnVerticalBorder={true}
        showCellVerticalBorder={true}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Grid>
  );
}
export default DataTable;
