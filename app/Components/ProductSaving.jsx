"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Button,Link
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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
  const [expandedIndex, setExpandedIndex] = useState(null);

  const features = [
    {
      icon: "/sub-1.svg",
      title: "Unified Command Center",
      description:
        "Real-time, cross-cloud visibility from a single pane of glass.",
      readmore:
        "Gain complete situational awareness and take action from a single pane of glass. OpsZ unifies tools, teams, and telemetry—giving enterprise IT leaders centralized visibility across hybrid environments and enabling DevOps teams to act fast, without context-switching. Control more. Chase less.",
    },
    {
      icon: "/sub-2.svg",
      title: "Adaptive Automation",
      description:
        "Workflow engine that learns, orchestrates, and responds intelligently.",
      readmore:
        "Go beyond static playbooks. OpsZ uses intelligent agents and real-time signals to dynamically adjust workflows—ideal for DevOps teams looking to reduce manual toil, and enterprises automating across multi-cloud operations. Automate at scale, and evolve as your stack grows.",
    },
    {
      icon: "/sub-3.svg",
      title: "Scalable Ops Intelligence",
      description:
        "Agent-based architecture that functions from edge to cloud.",
      readmore:
        "Turn every action into insight. OpsZ correlates data from across your ecosystem—whether it’s public cloud, private cloud, or bare-metal infrastructure—delivering smarter recommendations and continuous learning. Perfect for hybrid environments where clarity, speed, and scale are critical.",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleReadMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Box sx={{ position: "relative", pt: "2rem", pb: { md: "4rem" } }}>
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

        <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
          <Box sx={{ pl: isMobile ? "32px" : "64px", pt: { md: "2rem" } }}>
            <motion.div
              variants={fadeInFromLeft}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              ref={ref}
            >
              <Typography
                variant="h1"
                sx={{
                  background: "linear-gradient(90deg, #FFF 0%, #9747FF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Montserrat",
                  fontSize: "50px",
                  fontWeight: 700,
                  lineHeight: "1.2",
                  textTransform: "capitalize",
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
              mx: isMobile ? "2.2rem" : "64px",
              mt: "32px",
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

                  <Typography
                    variant="body2"
                    onClick={() => toggleReadMore(index)}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#AAB4FF",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                      mb: 1,
                    }}
                  >
                    Read More
                    <KeyboardArrowRightIcon
                      sx={{ fontSize: "16px", ml: 0.5, mt: "1px" }}
                    />
                  </Typography>

                  {expandedIndex === index && (
                    <>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "13px",
                          color: "#CCCCCC",
                          mt: 1,
                          mb: 2,
                        }}
                      >
                        {feature.readmore}
                      </Typography>
                      <Link href="/chatbot">
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ color: "#AAB4FF", borderColor: "#AAB4FF" }}
                        >
                          Ask Question
                        </Button>
                      </Link>
                    </>
                  )}
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
