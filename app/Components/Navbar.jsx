"use client";
import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "../Utils/constants";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const handleOpenNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseNavMenu = (url) => {
    handleRedirect(url);
    setIsMenuOpen(false);
  };

  const handleRedirect = (url) => {
    router.push(url);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(to right, #2D0052, #7A1FA2, #1A0033)",
        color: "#EFEFEF",
        boxShadow: "none",
        border: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            width: "auto",
            height: "auto",
            img: {
              width: "90px",
              "@media (max-width: 1200px)": {
                width: "80px",
              },
              "@media (max-width: 900px)": {
                width: "70px",
              },
              "@media (max-width: 600px)": {
                width: "60px",
              },
            },
          }}
          onClick={() => handleRedirect("/")}
        >
          <img src="/NavLogo.svg" alt="nav-logo" fetchPriority="high" />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "1.5rem",
            fontSize: "15px",
          }}
        >
          {NavLink.map((item) => (
            <Typography
              key={item.name}
              sx={{
                color: "#EFEFEF",
                cursor: "pointer",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#3b82f6",
                },
              }}
              onClick={() => handleRedirect(item.url)}
            >
              {item.name}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #a855f7, #003F68)",
              color: "white",
              fontWeight: 550,
              borderRadius: "7px",
              padding: "0.5rem 1rem",
              textTransform: "none",
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/chatbot")}
          >
            Schedule a Demo
          </Button>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            position: "relative",
            zIndex: 200,
          }}
        >
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            sx={{ color: "#EFEFEF" }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "linear-gradient(to right, #2D0052, #7A1FA2, #1A0033)",
            padding: "1rem",
            transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
            opacity: isMenuOpen ? 1 : 0,
            transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
            zIndex: 100,
            paddingTop: "1.5rem",
            pointerEvents: isMenuOpen ? "auto" : "none",
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            {NavLink.map((item) => (
              <Typography
                key={item.name}
                sx={{ color: "#EFEFEF", cursor: "pointer", fontSize: "18px" }}
                onClick={() => handleCloseNavMenu(item.url)}
              >
                {item.name}
              </Typography>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #a855f7, #003F68)",
              color: "#D3D3D3",
              fontWeight: 550,
              borderRadius: "7px",
              padding: "0.5rem 1rem",
              textTransform: "none",
              marginTop: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => handleCloseNavMenu("/chatbot")}
          >
            Schedule a Demo
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
