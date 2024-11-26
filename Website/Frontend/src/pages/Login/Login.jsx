import React from "react";
import { useNavigate } from "react-router";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import { Button, Divider, Typography } from "@mui/material";
import bg from "../../assets/bg.png";
import hcmut_logo from "../../assets/HCMUT.png";
export default function Login() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <Box
        sx={{
          position: "relative",
          width: "30vw",
          height: "auto",
          maxHeight: "70vh",
          backgroundColor: "#fff",
          padding: "30px",
          boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          borderRadius: "22px",
        }}>
        <img
          src={hcmut_logo}
          alt="HCMUT LOGO"
          style={{ width: "45%", marginBottom: "10%", marginTop: "5%" }}
        />
        <Typography
          color="primary.dark"
          fontSize="18px"
          fontWeight="bold"
          sx={{ marginBottom: "20px" }}>
          Lựa chọn phương thức đăng nhập
        </Typography>
        <Divider sx={{ width: "100%", marginBottom: "5%" }} />
        <Button
          variant="contained"
          color="white"
          sx={{
            textTransform: "none",
            width: "100%",
            color: "primary.dark",
            fontSize: "14px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            padding: "3%",
            marginBottom: "3%",
          }}
          onClick={() => navigate("/login-user")}>
          {" "}
          Tài khoản HCMUT (@hcmut.edu.vn)
        </Button>
        <Button
          variant="contained"
          color="white"
          sx={{
            textTransform: "none",
            width: "100%",
            color: "primary.dark",
            fontSize: "14px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            padding: "3%",
            marginBottom: "5%",
          }}
          onClick={() => navigate("/login-admin")}>
          Admin
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}