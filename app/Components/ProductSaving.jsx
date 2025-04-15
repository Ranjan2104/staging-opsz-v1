"use client";
import React from "react";
import { Box, Typography, Container, useMediaQuery, Link } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Text comes in from the left
const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Cards scale in
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProductSaving = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const features = [
    {
      icon: "/sub-1.svg",
      title: "Unified Command Center",
      description: "Real-time, cross-cloud visibility from a single pane of glass.",
    },
    {
      icon: "/sub-2.svg",
      title: "Adaptive Automation",
      description: "Workflow engine that learns, orchestrates, and responds intelligently.",
    },
    {
      icon: "/sub-3.svg",
      title: "Scalable Ops Intelligence",
      description: "Agent-based architecture that functions from edge to cloud.",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          position: "relative",
          paddingTop: { xs: "2rem", sm: "2rem", md: "2rem" },
          paddingBottom: { xs: "2rem", sm: "2rem", md: "4rem" },
        }}
      >
        <Box
          component="img"
          src="/ring.png"
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
            filter: isMobile ? "brightness(0.4)" : "brightness(0.9)",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "flex-start",
            paddingTop: { xs: "1rem", sm: "1rem", md: "2rem" },
          }}
        >
          <Box sx={{ paddingLeft: isMobile ? "32px" : "64px" }}>
            <motion.div
              variants={fadeInFromLeft}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              ref={ref}
            >
              <Typography
                variant="h1"
                sx={{
                  alignSelf: "stretch",
                  background: "linear-gradient(90deg, #FFF 0%, #9747FF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Montserrat",
                  fontSize: "50px",
                  fontWeight: 700,
                  lineHeight: "1.2",
                  textTransform: "capitalize",
                  overflowWrap: "break-word",
                }}
              >
                OpsZ Automates
              </Typography>
            </motion.div>

            <motion.div
              variants={fadeInFromLeft}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Box
                sx={{
                  color: "#90D3FF",
                  fontFamily: "Montserrat",
                  fontSize: "30px",
                  fontWeight: 700,
                  lineHeight: "1.2",
                  textTransform: "capitalize",
                }}
              >
                Up to 80% of Inefficiencies
              </Box>
            </motion.div>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 4,
              flexWrap: "wrap",
              p: 4,
              borderRadius: "14px",
              border: "1px solid rgba(255, 255, 255, 0.44)",
              background:
                "linear-gradient(180deg, rgba(91, 76, 111, 0.44) 0%, rgba(104, 115, 168, 0.44) 129.61%)",
              backdropFilter: "blur(12.55px)",
              marginLeft: isMobile ? "2.2rem" : "64px",
              marginRight: isMobile ? "2.2rem" : "64px",
              marginTop: "32px",
              maxWidth: isMobile ? "unset" : "90%",
              overflowX: isMobile ? "unset" : "auto",
              width: isMobile ? "unset" : "calc(100% - 11.5rem)",
              textAlign: "center",
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <Box
                  sx={{
                    flex: "1 1 30%",
                    minWidth: "250px",
                    maxWidth: "360px",
                    color: "#EFEFEF",
                    fontFamily: "Montserrat",
                    textAlign: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={feature.icon}
                    alt={feature.title}
                    sx={{ width: 48, height: 48, mb: 2 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      textTransform: "capitalize",
                      mb: 1,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#D0D0D0",
                      mb: 2,
                    }}
                  >
                    {feature.description}
                  </Typography>
                  <Link href="/chatbot">
                    <Typography
                      variant="body2"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#AAB4FF",
                        cursor: "pointer",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Learn More
                      <KeyboardArrowRightIcon
                        sx={{ fontSize: "16px", ml: 0.5, mt: "1px" }}
                      />
                    </Typography>
                  </Link>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "50px",
            backgroundColor: "white",
            filter: "blur(40px)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      </Box>
    </Container>
  );
};

export default ProductSaving;
