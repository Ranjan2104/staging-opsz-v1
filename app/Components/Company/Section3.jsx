"use client";
import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Sub3Card from "./Sub3Card";
import { ourTeamData } from "@/app/Utils/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const Section3 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#000",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/sec3.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
          zIndex: 0,
        }}
      />

      <MotionBox
        variants={fadeIn}
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: {
            xs: "56px 16px",
            sm: "80px 32px",
            md: "50px 64px",
          },
          gap: { xs: "1rem", md: "4rem" },
          boxSizing: "border-box",
        }}
      >
        <MotionBox
          variants={staggerContainer}
          sx={{
            width: { xs: "100%", md: "68%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: "border-box",
            paddingRight: { xs: 0, md: "1rem" },
          }}
        >
          <MotionTypography
            variant="h1"
            variants={fadeInFromLeft}
            sx={{
              background: "linear-gradient(90deg, #FFF 0%, #9747FF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Montserrat",
              fontSize: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
              fontStyle: "normal",
              fontWeight: 700,
              width: "100%",
            }}
          >
            Our Team
          </MotionTypography>
          <MotionTypography
            variants={fadeInFromLeft}
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: "12px", sm: "14px", md: "18px" },
              fontStyle: "normal",
              fontWeight: 400,
              color: "#9BA5B7",
            }}
          >
            Meet the talented individuals behind OpsZ.
          </MotionTypography>
        </MotionBox>
      </MotionBox>

      <MotionBox variants={fadeInFromRight}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: isMobile ? "2rem" : "3rem",
            padding: { xs: "0 16px", sm: "0 32px", md: "0 150px" },
            paddingBottom: { xs: "56px", sm: "80px", md: "50px" },
          }}
        >
          {ourTeamData.map((member, index) => (
            <Sub3Card
              key={index}
              name={member.name}
              designation={member.designation}
              description={member.description}
              image={member.image}
              linkedinUrl={member.linkedinUrl}
              twitterUrl={member.twitterUrl}
              dribbbleUrl={member.dribbbleUrl}
            />
          ))}
        </Box>
      </MotionBox>
    </MotionBox>
  );
};

export default Section3;
