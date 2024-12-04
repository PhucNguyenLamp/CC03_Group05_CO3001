import {
  Box,
  Container,
  IconButton,
  Paper,
  Switch,
  TextField,
  Button,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Visibility } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router";
import api from "../../api/axios";

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
  { field: "brand", headerName: "Thương hiệu", flex: 1, headerAlign: "center" },

  { field: "model", headerName: "Mã máy", flex: 1, headerAlign: "center" },
  {
    field: "campus",
    headerName: "Cơ sở",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "building",
    headerName: "Toà nhà",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "room",
    headerName: "Phòng",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "action",
    headerName: "Hành động",
    width: 160,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Box>
        <Tooltip title="Xem thông tin máy in" arrow>
          <IconButton
            color="primary"
            tooltop
            onClick={() => handlePrinterConfigure(params.row)}>
            <Visibility />
          </IconButton>
        </Tooltip>
        <Tooltip title="Xoá máy in" arrow>
          <IconButton
            color="error"
            onClick={() => handlePrinterDelete(params.row)}>
            <Delete />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  },
  {
    field: "enableDisable",
    headerName: "Bật/Tắt",
    width: 140,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Switch
        checked={params.row.enableDisable}
        onChange={() => handleEnableDisablePrinter(params.row)}
      />
    ),
  },
];

export default function ManagePrinter() {
  const [rows, setRows] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchPrinters();
  }, []);

  const fetchPrinters = async () => {
    setLoading(true);
    try {
      const response = await api.get("api/v1/printer");
      setRows(
        response.data.data.map((printer) => ({
          id: printer._id,
          brand: printer.brand,
          model: printer.model,
          campus: printer.location?.campus || "",
          building: printer.location?.building || "",
          room: printer.location?.room || "",
          enableDisable: printer.status,
        }))
      );
    } catch (error) {
      console.error(
        "Error fetching printers:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const handleConfigurePrinter = (row) => {
    // Implement configuration logic
    console.log("Configuring printer:", row);
  };

  const handleAddPrinter = () => {
    navigate("/addprinter");
  };

  const handleDeletePrinter = async (row) => {
    setLoading(true);
    try {
      await api.delete(`api/v1/printer/${row.id}`);
      console.log("Printer deleted:", row);
      setRows(rows.filter((r) => r.id !== row.id));
    } catch (error) {
      console.error(
        "Error deleting printer:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEnableDisablePrinter = async (row) => {
    try {
      const response = await api.patch(`api/v1/printer/toggle/${row.id}`);
      const updatedPrinter = response.data.printer;

      setRows(
        rows.map((r) =>
          r.id === row.id ? { ...r, enableDisable: updatedPrinter.status } : r
        )
      );
    } catch (error) {
      console.error(
        "Error toggling printer status:",
        error.response?.data || error.message
      );
    }
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
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

        {/* Data grid or loading spinner */}
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
            }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <DataGrid
              rows={filteredRows}
              columns={columns(
                handleConfigurePrinter,
                handleDeletePrinter,
                handleEnableDisablePrinter
              )}
              pageSize={10}
              rowsPerPageOptions={[10, 25, 50, 100]}
              sx={{ height: "100%", borderRadius: "12px" }}
            />
          </Box>
        )}
      </Paper>
    </Container>
  );
}
