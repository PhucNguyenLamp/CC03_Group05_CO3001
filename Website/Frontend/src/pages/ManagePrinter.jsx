import {
  Box,
  Container,
  IconButton,
  Paper,
  Switch,
  TextField,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, Delete } from "@mui/icons-material";
import React from "react";

const columns = (
  handlePrinterConfigure,
  handlePrinterDelete,
  handleEnableDisablePrinter
) => [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  { field: "branch", headerName: "Branch", flex: 1 },
  { field: "model", headerName: "Model", flex: 1 },
  {
    field: "campus",
    headerName: "Campus",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "building",
    headerName: "Building",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "room",
    headerName: "Room",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "action",
    headerName: "Action",
    width: 160,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Box>
        <IconButton
          color="primary"
          onClick={() => handlePrinterConfigure(params.row)}>
          <Edit />
        </IconButton>
        <IconButton
          color="error"
          onClick={() => handlePrinterDelete(params.row)}>
          <Delete />
        </IconButton>
      </Box>
    ),
  },
  {
    field: "enableDisable",
    headerName: "Enable/Disable",
    width: 140,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Switch
        checked={params.row.enableDisable} // Bind checked to enableDisable
        onChange={() => handleEnableDisablePrinter(params.row)} // Toggle onChange
      />
    ),
  },
];

const initialRows = [
  {
    id: "CA1",
    branch: "Canon",
    model: "Pixma IX6770",
    campus: "1",
    building: "A4",
    room: "402",
    action: "",
    enableDisable: true,
  },
  {
    id: "EP1",
    branch: "Epson",
    model: "L3250",
    campus: "2",
    building: "H6",
    room: "203",
    action: "",
    enableDisable: true,
  },
  {
    id: "CA2",
    branch: "Canon",
    model: "Pixma IX6770",
    campus: "1",
    building: "B4",
    room: "505",
    action: "",
    enableDisable: true,
  },
  {
    id: "HP1",
    branch: "HP",
    model: "M454NW W1Y43A",
    campus: "2",
    building: "H6",
    room: "306",
    action: "",
    enableDisable: true,
  },
];

export default function ManagePrinter() {
  const [rows, setRows] = React.useState(initialRows);
  const [searchText, setSearchText] = React.useState("");

  const handlePrinterConfigure = (row) => {
    // TODO: Implement logic to configure the printer
  };

  const handlePrinterDelete = (row) => {
    // TODO: Implement logic to delete the printer
    console.log("Deleting printer:", row);
  };

  const handleEnableDisablePrinter = (row) => {
    // TODO: Implement logic to enable/disable the printer
    const updatedRows = rows.map((r) =>
      r.id === row.id ? { ...r, enableDisable: !r.enableDisable } : r
    );

    setRows(updatedRows);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleAddPrinter = () => {
    // TODO: Implement logic for adding a printer
  };

  const filteredRows = rows.filter(
    (row) =>
      row.id.toLowerCase().includes(searchText.toLowerCase()) ||
      row.branch.toLowerCase().includes(searchText.toLowerCase()) ||
      row.model.toLowerCase().includes(searchText.toLowerCase()) ||
      row.campus.toLowerCase().includes(searchText.toLowerCase()) ||
      row.building.toLowerCase().includes(searchText.toLowerCase()) ||
      row.room.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {/* Main box  */}
      <Paper
        elevation={8}
        sx={{
          marginTop: "5vh",
          width: "100%",
          height: "80vh",
          borderRadius: "20px",
          px: "16px",
          py: "24px",
          display: "flex",
          flexDirection: "column",
        }}>
        {/* Search bar and Add printer button */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            marginBottom: 2,
          }}>
          {/* Search bar */}
          <TextField
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Tìm kiếm..."
            sx={{
              height: "80%",
              flex: 0.8,
              borderRadius: "12px",
              "& .MuiOutlinedInput-root": {
                height: "100%",
                borderRadius: "12px",
              },
            }}
          />
          {/* Add printer button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddPrinter}
            sx={{
              flex: 0.2,
              marginLeft: 2,
              height: "80%",
              borderRadius: "12px",
              textTransform: "none",
            }}>
            Thêm máy in
          </Button>
        </Box>

        {/* Data grid */}
        <Box sx={{ flexGrow: 1 }}>
          <DataGrid
            rows={filteredRows}
            columns={columns(
              handlePrinterConfigure,
              handlePrinterDelete,
              handleEnableDisablePrinter
            )}
            pageSize={10}
            rowsPerPageOptions={[10, 25, 50, 100]}
            sx={{ height: "100%", borderRadius: "12px" }}
          />
        </Box>
      </Paper>
    </Container>
  );
}
