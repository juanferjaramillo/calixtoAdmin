import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const columns = [
  { field: "id", headerName: "CÓDIGO", width: 100 },
  { field: "nombre", headerName: "PRODUCTO", width: 300 },
  { field: "precioBase", headerName: "PRECIO", width: 130},
  { field: "existencia", headerName: "EXISTENCIA", width: 130 },
  { field: "rotacion", headerName: "ROTACION", width: 130 },
  { field: "agotado", headerName: "AGOTADO", width: 130 },
  { field: "limitado", headerName: "LIMITADO", width: 130 },

];

//=====================COMPONENT=========================

export default function DataGridProds() {
  const rows = useSelector((state) => state.filteredProducts);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
