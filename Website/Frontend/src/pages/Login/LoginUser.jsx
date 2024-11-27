import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import bg from "../../assets/bg.png";
import hcmut_logo from "../../assets/HCMUT.png";
import { useAuth } from "../../contexts/AuthContext";
import api from '../../api/axios';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

export default function LoginUser() {
  const navigate = useNavigate();
  const {login} = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const comeTo = location.state?.from?.pathname || '/';
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle login logic here
    try {
      const result = await login(username, password);

      console.log("Inside handleSubmit, result: ", result);
      if (result.success) {
        console.log('Token after login:', localStorage.getItem('token'));
        console.log('Auth header:', api.defaults.headers.common['Authorization']);
        navigate(comeTo, { replace: true });
      }
    } catch (error) {
      // setErrMsg(error.response?.data?.message || "Login failed");
      // errRef.current?.focus();
    }
  };

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
          Đăng nhập tài khoản HCMUT
        </Typography>
        <Divider sx={{ width: "100%", marginBottom: "5%" }} />
        <TextField
          label="Tài khoản"
          variant="outlined"
          fullWidth
          value={username}
          sx={{
            marginBottom: "2%",
            borderRadius: "20px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Mật khẩu"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          sx={{
            marginBottom: "2%",
            borderRadius: "20px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
          onChange={handlePasswordChange}
        />
        <Box
          sx={{
            width: "80%",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            padding: "5%",
          }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "primary.main",
              color: "white",
              width: "80%",
              fontSize: "14px",
              fontWeight: "bold",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              padding: "3%",
              marginX: "5%",
            }}
            onClick={() => {
              navigate("/login");
            }}>
            Trở về
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary.main"
            sx={{
              textTransform: "none",
              backgroundColor: "primary.main",
              color: "white",
              width: "80%",
              fontSize: "14px",
              fontWeight: "bold",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              padding: "3%",
              marginX: "5%",
            }}>
            Đăng nhập
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
