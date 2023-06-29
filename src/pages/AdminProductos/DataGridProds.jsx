import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";

const columns = [
  { field: "id", headerName: "CÓDIGO", width: 100 },
  { field: "nombre", headerName: "PRODUCTO", width: 300, editable: true },
  { field: "precioBase", headerName: "PRECIO", width: 130, editable: true },
  { field: "existencia", headerName: "EXISTENCIA", width: 130, editable: true },
  { field: "rotacion", headerName: "ROTACIÓN", width: 130, editable: true },
  { field: "agotado", headerName: "AGOTADO", width: 130, editable: true },
  { field: "limitado", headerName: "LIMITADO", width: 130, editable: true },
];

//=====================COMPONENT=========================

export default function DataGridProds() {
  const dispatch = useDispatch()

  const rows = useSelector((state) => state.filteredProducts);
  const rowsTable = rows.map((r) => {
    return {
      ...r,
      precioBase: `$ ${r.precioBase.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
      agotado: `${r.agotado}%`,
      limitado: `${r.limitado}%`,
    };
  });

const handleCellChange = (prod, newData) => {
  console.log("prod", prod.row);
  console.log("prod.field", prod.field);
  console.log("new", newData.target.value);
  let newProd = {...prod.row};
  newProd[prod.field] = newData.target.value;
  console.log("newProd", newProd);
  //Hacer la action para actualizar el producto con newProd y actualizar redux
  // dispatch(updateProd)
}

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{ ml: "3vw" }}
        showColumnVerticalBorder={true}
        showCellVerticalBorder={true}
        rows={rowsTable}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        // onCellEditStop={(element,newData) => {console.log(element), console.log(newData.target.value)} }
        pageSizeOptions={[5, 10]}
        // onCellEditStop={(element,newData) => {console.log(element), console.log(newData.target.value)} }
        onCellEditStop={(prod, newData)=>handleCellChange(prod, newData)}
        // checkboxSelection
      />
    </div>
  );
}
