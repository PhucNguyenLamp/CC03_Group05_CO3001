import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import api from "../../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddPrinter() {
  const [ID, setID] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [campus, setCampus] = useState("");
  const [building, setBuilding] = useState("");
  const [room, setRoom] = useState("");

  const [errors, setErrors] = useState({
    ID: false,
    brand: false,
    model: false,
    campus: false,
    building: false,
    room: false,
  });

  const navigate = useNavigate();

  const handleIDChange = (event) => {
    setID(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleConfirm = async () => {
    // Validate required fields
    const newErrors = {
      brand: !brand,
      model: !model,
      campus: !campus,
      building: !building,
      room: !room,
    };

    setErrors(newErrors);

    // If any required field is empty, stop further execution
    if (Object.values(newErrors).includes(true)) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    try {
      const newPrinter = {
        ID,
        brand,
        model,
        campus,
        building,
        room,
      };

      console.log("Sending printer data to server:", newPrinter);

      const response = await api.post("/api/v1/printer", newPrinter);

      // Handle success
      if (response.data.status === "success") {
        console.log("Printer added successfully:", response.data.data);
        alert("Máy in được thêm thành công!");
      } else {
        console.error("Error adding printer:", response.data.message);
        alert("Thêm máy in thất bại. Hãy vui lòng thử lại.");
      }
    } catch (error) {
      console.error(
        "Failed to add printer:",
        error.response?.data?.message || error.message
      );
      alert("Xảy ra lỗi trong quá trình thêm máy in");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Paper
        elevation={8}
        sx={{
          marginTop: "5vh",
          width: {
            xs: "90vw",
            md: "50vw",
          },
          height: "80vh",
          borderRadius: "20px",
          px: "2vw",
          py: "3vh",
          display: "flex",
          flexDirection: "column",
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            width: "70%",
            height: "18vh",
          }}>
          <Typography fontWeight="bold" fontSize="6vh" color="primary.dark">
            Thêm máy in
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexFlow: "column wrap",
            my: "2vh",
            gap: "2vh",
          }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}>
            <TextField
              label="Mã máy (ID)"
              variant="outlined"
              fullWidth
              value={ID}
              onChange={handleIDChange}
              error={errors.ID}
              helperText={errors.ID ? "Mã máy là bắt buộc!" : ""}
              slotProps={{
                input: { style: { borderRadius: "12px" } },
              }}
            />
          </Box>

          {/* Brand Selector */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}>
            <TextField
              label="Thương hiệu"
              variant="outlined"
              select
              fullWidth
              required
              value={brand}
              onChange={handleBrandChange}
              error={errors.brand}
              helperText={errors.brand ? "Thương hiệu là bắt buộc!" : ""}
              slotProps={{
                input: { style: { borderRadius: "12px" } },
              }}>
              {["Toshiba", "Canon", "Epsilon", "HP", "Brother", "Samsung"].map(
                (option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                )
              )}
            </TextField>
          </Box>

          {/* Model TextField */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}>
            <TextField
              label="Mẫu máy in"
              variant="outlined"
              fullWidth
              required
              value={model}
              onChange={handleModelChange}
              error={errors.model}
              helperText={errors.model ? "Mẫu máy là bắt buộc!" : ""}
              slotProps={{
                input: { style: { borderRadius: "12px" } },
              }}
            />
          </Box>

          {/* Location Selector */}
          <CampusBuildingRoomSelector
            campus={campus}
            setCampus={setCampus}
            building={building}
            setBuilding={setBuilding}
            room={room}
            setRoom={setRoom}
            errors={errors}
          />

          {/* Confirm/Cancel Buttons */}
          <Box
            sx={{
              width: "70%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexFlow: "row wrap",
              flexGrow: 4,
            }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "primary.main",
                color: "white",
                width: "48%",
                height: "100%",
                fontSize: "14px",
                fontWeight: "bold",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
              onClick={() => {
                navigate("/manageprinter");
              }}>
              Trở về
            </Button>
            <Button
              onClick={handleConfirm}
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "primary.main",
                color: "white",
                width: "48%",
                height: "100%",
                fontSize: "14px",
                fontWeight: "bold",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}>
              Xác nhận
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
const CampusBuildingRoomSelector = ({
  campus,
  setCampus,
  building,
  setBuilding,
  room,
  setRoom,
  errors,
}) => {
  const campusOptions = ["1", "2"];
  const buildingOptions = {
    1: ["A4", "B4", "B6"],
    2: ["H6", "H4"],
  };

  const handleCampusChange = (event) => {
    setCampus(event.target.value);
    setBuilding(""); // Clear building selection
    setRoom(""); // Clear room input
  };

  const handleBuildingChange = (event) => {
    setBuilding(event.target.value);
    setRoom(""); // Clear room input when building changes
  };

  const handleRoomChange = (event) => {
    setRoom(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mx: "auto",
        width: "70%",
        justifyContent: "space-between",
      }}>
      {/* Campus Selector */}
      <TextField
        label="Cơ sở"
        variant="outlined"
        select
        fullWidth
        required
        value={campus}
        onChange={handleCampusChange}
        error={errors.campus}
        helperText={errors.campus ? "Cơ sở là bắt buộc!" : ""}
        slotProps={{
          input: { style: { borderRadius: 12 } },
        }}>
        {campusOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      {/* Building Selector */}
      <TextField
        label="Tòa nhà"
        variant="outlined"
        select
        fullWidth
        required
        value={building}
        onChange={handleBuildingChange}
        error={errors.building}
        helperText={errors.building ? "Tòa nhà là bắt buộc!" : ""}
        slotProps={{
          input: { style: { borderRadius: 12 } },
        }}
        disabled={!campus}>
        {buildingOptions[campus]?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      {/* Room Input */}
      <TextField
        label="Phòng"
        variant="outlined"
        fullWidth
        required
        value={room}
        onChange={handleRoomChange}
        error={errors.room}
        helperText={errors.room ? "Phòng là bắt buộc!" : ""}
        slotProps={{
          input: { style: { borderRadius: 12 } },
        }}
        disabled={!building}
      />
    </Box>
  );
};
