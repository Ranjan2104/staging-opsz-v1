import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
const SplineAnimation = dynamic(() => import("../SplineAnimation"));
import { useRouter } from "next/navigation";

const HomeHero = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTab = useMediaQuery("(max-width:900px)");
  const handleRedirect = (url) => {
    router.push(url);
  };
  return (
    <main
      style={{
        background: "linear-gradient(to bottom, #4e086d 0%, #000000 30%)",
        color: "#EFEFEF",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "2rem",
          position: "relative",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.3) 10%, rgba(64,0,128,1) 70%, black 100%)",
            height: "500px",
            width: "60%",
            position: "absolute",
            top: isMobile ? "-10%" : "9%",
            left: isMobile ? "14%" : "13%",
            zIndex: 0,
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        ></div>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "auto",
            height: "auto",
            img: {
              width: "100%",
              maxWidth: "700px",
              marginTop: isMobile ? "unset" : "50px",
              "@media (max-width: 1200px)": { maxWidth: "600px" },
              "@media (max-width: 900px)": { maxWidth: "500px" },
              "@media (max-width: 600px)": { maxWidth: "400px" },
            },
          }}
        >
          <img
            src="/HeroLogo.svg"
            alt="Hero Logo"
            style={{
              width: "100%",
              display: "block",
              borderRadius: "12px",
            }}
          />
        </Box>
        <Box
          sx={{
            marginTop: "2rem",
            textAlign: "left",
            maxWidth: "700px",
            padding: isMobile ? "unset" : "1.5rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#EFEFEF",
              fontSize: { xs: "2.5rem", sm: "3.5rem" },
            }}
          >
            A FORCE{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FFFFFF, #805AD5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MULTIPLIER
            </span>
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#EFEFEF",
              fontSize: { xs: "4rem", sm: "5rem" },
            }}
          >
            FOR <span style={{ color: "#3B82F6" }}>IT</span>{" "}
            <span style={{ color: "#9B4DFF" }}>TEAMS</span>
          </Typography>

          <Typography
            sx={{
              color: "#D3D3D3",
              mt: 2,
              fontSize: "18px",
              maxWidth: "571px",
            }}
          >
            OpsZ revolutionizes IT Management with intelligent agents that
            streamline operations and enhance efficiency. Experience a solution
            designed for today's dynamic environments.
          </Typography>

          <Button
            variant="contained"
            sx={{
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
              color: "white",
              fontWeight: 550,
              borderRadius: "12px",
              padding: "0.9rem 2.5rem",
              textTransform: "none",
              mt: 3,
              background: "transparent",
              fontSize: "1rem",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-2px",
                left: "-2px",
                right: "-2px",
                bottom: "-2px",
                background:
                  "linear-gradient(-45deg, #6D28D9, #3B0A45, #9333EA, #5B21B6)",
                backgroundSize: "400% 400%",
                animation: "gradientBorder 3s ease infinite",
                zIndex: -1,
                borderRadius: "14px",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: "2px",
                left: "2px",
                right: "2px",
                bottom: "2px",
                backgroundColor: "#1E1E2F",
                borderRadius: "10px",
                zIndex: -1,
              },
              "@keyframes gradientBorder": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
              },
            }}
            onClick={() => handleRedirect("/chatbot")}
          >
            SCHEDULE A DEMO
          </Button>
        </Box>
      </Box>
      {!isMobile && !isTab && (
        <Box>
          <SplineAnimation />
        </Box>
      )}
    </main>
  );
};

export default HomeHero;
