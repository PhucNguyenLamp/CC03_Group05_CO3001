import React, { useState } from "react";
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Box,
  Button,
  Menu,
  Tooltip,
  Avatar,
  MenuItem,
} from "@mui/material";
import { PrintTwoTone } from "@mui/icons-material";
import { useNavigate } from "react-router";
import Dashboard from './../pages/Dashboard';
import { useAuth } from "../contexts/AuthContext";
import Printer from './../../../Server/model/Printer.model';

const pages = [
  { name: "In tài liệu", path: "/print" },
  { name: "Lịch sử", path: "/history" },
  { name: "Mua trang", path: "/buy" },
];

const settings = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Logout", path: "/logout" },
];

export default function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const { logout, userInfo } = useAuth();
  const [isCustomer] = useState(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    logout();
    navigate('/login');
  }
  return (
    <AppBar position="sticky" >
      <Toolbar className="flex justify-between items-center px-6">
        {/* Logo and Title */}
        <Box
          className="flex items-center space-x-3"
          onClick={() => navigate("/")}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <PrintTwoTone />
          </IconButton>
          <Typography variant="h6" component="div">
            Bách Khoa Printing
          </Typography>
        </Box>

        <Box className="md:flex space-x-4">
          {pages.map((page, index) => (
            <Button
              key={index}
              className="text-white py-2 px-4"
              onClick={() => navigate(page.path)}>
              {page.name}
            </Button>
          ))}
          {
            userInfo && userInfo.role == 'SPSO' ? (
              <Button
                className="text-white py-2 px-4"
                onClick={() => navigate('/manageprinter')}>
                Máy in
              </Button>
            ) : (
              <></>
            )
          }
        </Box>

        {/* User Menu */}
        {userInfo ? (
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
            <Typography>{userInfo.fname ?? userInfo.name}</Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} className="p-0">
                <Avatar alt="User" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <MenuItem
                key={"dashboard"}
                onClick={() => {
                  handleCloseUserMenu();
                  navigate('/dashboard');
                }}>
                <Typography sx={{ textAlign: "center" }}>
                  Dashboard
                </Typography>
              </MenuItem>
              <MenuItem
                key={"logout"}
                onClick={handleLogOut}>
                <Typography sx={{ textAlign: "center" }}>
                  Log out
                </Typography>
              </MenuItem>
            </Menu>
          </Box>) : (<Box><Button sx={{ color: 'white' }} onClick={() => navigate('/login')}>Log in</Button></Box>)}
      </Toolbar>
    </AppBar>
  );
}
