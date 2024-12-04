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
import { toast, ToastContainer } from "react-toastify";

export default function AddPrinter() {
  const [ID, setID] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [campus, setCampus] = useState("");
  const [building, setBuilding] = useState("");
  const [room, setRoom] = useState("");
  const [description, setDescription] = useState("");
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

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleConfirm = async () => {
    try {
      const newPrinter = {
        ID,
        brand,
        model,
        campus,
        building,
        room,
        description,
      };

      console.log("Sending printer data to server:", newPrinter);

      const response = await api.post("/api/v1/printer", newPrinter);

      // Handle success
      if (response.data.status === "success") {
        toast.success("Máy in được thêm thành công!", { autoClose: 1500 });
        setTimeout(() => navigate("/manageprinter"), 2500);
      } else {
        console.log(response.data.message);
        toast.error("Thêm máy in thất bại. Hãy vui lòng thử lại.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, { autoClose: 2500 });
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToastContainer />
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            width: "70%",
            height: "18vh",
          }}
        >
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
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          >
            <TextField
              label="Mã máy (ID)"
              variant="outlined"
              fullWidth
              value={ID}
              onChange={handleIDChange}
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
            }}
          >
            <TextField
              label="Thương hiệu"
              variant="outlined"
              select
              fullWidth
              required
              value={brand}
              onChange={handleBrandChange}
              slotProps={{
                input: { style: { borderRadius: "12px" } },
              }}
            >
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
            }}
          >
            <TextField
              label="Mẫu máy in"
              variant="outlined"
              fullWidth
              required
              value={model}
              onChange={handleModelChange}
              slotProps={{
                input: { style: { borderRadius: "12px" } },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          >
            <TextField
              label="Mô tả"
              variant="outlined"
              fullWidth
              value={description}
              onChange={handleDescriptionChange}
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
            }}
          >
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
              }}
            >
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
              }}
            >
              Xác nhận
            </Button>
          </Box>
        </Box>
      </Paper>
      {isAddPopupOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
              userSelect: "none",
              maxWidth: "400px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#333", fontWeight: "bold" }}
            >
              Bạn có chắc chắn xóa máy in không?
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <Button
                variant="outlined"
                sx={{ marginRight: 2 }}
                onClick={closeAddPopup}
              >
                Trở về
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddPrinter}
              >
                Xác nhận
              </Button>
            </Box>
          </Box>
        </Box>
      )}
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
}) => {
  const campusOptions = ["1", "2"];
  const buildingOptions = {
    1: ["A1", "A2", "A3", "A4", "B1", "B2", "B4", "C4", "C5", "C6"],
    2: ["BK.B1", "BK.B2", "BK.B3", "BK.B6"],
  };
  const roomOptions = {
    A4: ["110"],
    B4: ["102", "104"],
    B6: ["308"],
    H6: ["604", "602"],
    H4: ["204"],
  };

  const handleCampusChange = (event) => {
    setCampus(event.target.value);
    setBuilding("");
    setRoom("");
  };

  const handleBuildingChange = (event) => {
    setBuilding(event.target.value);
    setRoom("");
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
      }}
    >
      <TextField
        label="Cơ sở"
        variant="outlined"
        select
        fullWidth
        required
        value={campus}
        onChange={handleCampusChange}
        slotProps={{
          input: { style: { borderRadius: 12 } },
        }}
      >
        {campusOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Toà nhà"
        variant="outlined"
        select
        fullWidth
        required
        value={building}
        onChange={handleBuildingChange}
        disabled={!campus}
        slotProps={{
          input: { style: { borderRadius: 12 } },
        }}
      >
        {(buildingOptions[campus] || []).map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Phòng"
        variant="outlined"
        fullWidth
        required
        value={room}
        onChange={handleRoomChange}
        slotProps={{
          input: { style: { borderRadius: "12px" } },
        }}
      />
    </Box>
    
  );
};




