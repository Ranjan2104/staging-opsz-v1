'use client';
import React from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";

const ProductSecurity = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          position: "relative",
          paddingTop: { xs: "2rem", sm: "2rem", md: "2rem" },
          paddingBottom: { xs: "2rem", sm: "2rem", md: "2rem" },
        }}
      >
        <Box
          component="img"
          src="/leverage.png"
          alt="Product Hero Background"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
            transform: "scaleX(-1)",
            filter: "brightness(0.6)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: { xs: "1rem", sm: "1rem", md: "2rem" },
          }}
        >
          <Box
            sx={{
              width: isMobile ? "unset" : "100%",
              maxWidth: "1400px",
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center", md: "center" },
              padding: { xs: "1rem", sm: "2rem", md: "3rem" },
              gap: "2rem",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "calc(55% - 1rem)" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: "2rem", md: 0 },
                mt: { xs: 0, md: 0 },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  borderRadius: "8px",
                  width: "auto",
                  height: "auto",
                  maxWidth: "95%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <Box
                  component="video"
                  src="/LeaverageVideo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  sx={{
                    maxWidth: "100%",
                    maxHeight: {
                      xs: "250px",
                      sm: "350px",
                      md: "450px",
                      lg: "550px",
                    },
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: "calc(45% - 1rem)" },
                display: "flex",
                flexDirection: "column",
                justifyContent: isMobile ? "start" : "center",
                alignItems: { xs: "start", md: "flex-start" },
                textAlign: { xs: "start", md: "left" },
                height: { xs: "auto", md: "100%" },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  alignSelf: "stretch",
                  color: "#FFFFFF80",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: 500,
                  textTransform: "capitalize",
                  overflowWrap: "break-word",
                }}
              >
                Security First
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  alignSelf: "stretch",
                  background: "linear-gradient(90deg, #FFF 0%, #9747FF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Montserrat",
                  fontSize: { xs: "50px", sm: "66px", md: "78px", lg: "94px" },
                  fontWeight: 700,
                  lineHeight: "1.2",
                  marginBottom: { xs: "0.3rem", md: "0.5rem" },
                  paddingRight: "1rem",
                  textTransform: "capitalize",
                  overflowWrap: "break-word",
                }}
              >
                Leverage
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  alignSelf: "stretch",
                  color: "#9BA5B7",
                  fontFamily: "Montserrat",
                  fontSize: { xs: "20px", sm: "26px", md: "32px", lg: "36px" },
                  fontWeight: 700,
                  lineHeight: "1.1",
                  marginBottom: "0.5rem",
                  display: "block",
                  overflowWrap: "break-word",
                }}
              >
                Existing Security Protocols
              </Typography>

              <Box
                component="ul"
                sx={{
                  listStyleType: "disc",
                  pl: { xs: 4, md: 4 },
                  color: "#EAEAEA",
                  fontFamily: "Montserrat",
                  fontSize: { xs: "16px", sm: "16px", md: "18px" },
                  fontWeight: 500,
                  "& li": {
                    marginBottom: { xs: "0.75rem", md: "0.4rem" },
                    paddingLeft: "0.25rem",
                    paddingRight: { xs: "0.5rem", md: 0 },
                  },
                  "& li::marker": {
                    color: "#A865FF",
                    fontSize: { xs: "1.3em", md: "1.2em" },
                    fontWeight: "bold",
                  },
                }}
              >
                <li>TLS Encryption | IAM-RBAC | Region-based Brokers</li>
                <li>Redundant streams with fault tolerance and replay</li>
                <li>Compliant with enterprise-grade audit & alert standards</li>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductSecurity;
