import Papa from "papaparse";
import Box from "@mui/material/Box";

const ImportPoducts = () => {

     return(
        <Box>

        <input
              type="file"
              accept=".csv"
              ref={fileInput}
              onChange={handleFileUpload}
              style={{ display: "none" }}
              id="csv-input"
              />

              </Box>
     )
}
export default ImportPoducts;