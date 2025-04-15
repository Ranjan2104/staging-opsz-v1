import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import "animate.css";

const UnifiedPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [componentRef, componentInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const contentItems = [
    {
      title: "Connect Everything, Control Anything.",
      image: "/unified/DashboardImage.svg",
    },
    {
      title: "Automate Anything, Orchestrate Everything.",
      image: "/automate.svg",
    },
    {
      title: "Amplify Growth, Simplify Control.",
      image: "/unify.svg",
    },
  ];

  // Animation variants
  const imageAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const titleAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  // Start auto-rotation only when component is in view
  useEffect(() => {
    if (componentInView && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 3000);
    } else if (!componentInView && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [componentInView]);

  const handleButtonClick = (idx) => {
    if (idx === index) return; // Avoid unnecessary updates

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setIndex(idx);

    // Restart auto-rotation
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
  };

  // Button definitions for consistency with active states
  const buttons = [
    { label: "UNIFY", icon: "/unified/Unify Icon.svg", color: "#80FF91" },
    { label: "AUTOMATE", icon: "/unified/Robot.svg", color: "#C57AFF" },
    { label: "SCALE", icon: "/unified/Scale.svg", color: "#9CCAFF" },
  ];

  return (
    <Box
      ref={componentRef}
      sx={{
        position: "relative",
        padding: { xs: "20px", sm: "25px", md: "30px" },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* Backgrounds */}
      <Box
        component="img"
        src="/unified/Unified Bg Img.png"
        alt="Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: isMobile ? "fill" : "cover",
          zIndex: 0,
        }}
      />

      <Box
        component="img"
        src="/unified/Section Shadow.svg"
        alt="Section Shadow"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
          objectFit: "contain",
          objectPosition: "top",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Box
        component="img"
        src="/unified/Mask group.svg"
        alt="Mask Overlay"
        sx={{
          position: "absolute",
          top: "-60px",
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0.5,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, margin: 0 }}
      >
        {/* Heading */}
        <Box
          ref={ref}
          sx={{
            width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" },
            mb: { xs: 1, sm: 2 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "white",
              lineHeight: 1.2,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            UNIFY{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4a0c7c 0%, #7715c0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              ANY PLATFORM
            </span>{" "}
            SEAMLESSLY
          </Typography>
        </Box>

        {/* Subheading */}
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: {
              xs: "14px",
              sm: isMobile ? "unset" : "16px",
              md: "18px",
            },
            color: "white",
            mb: 1,
            maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Sub-Heading
        </Typography>

        {/* Text */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            mb: isMobile ? 2 : 4,
            maxWidth: { xs: "100%", sm: "100%", md: "80%" },
            gap: { xs: 2, sm: 0 },
            color: "#B4B4B4",
            fontSize: "12px",
          }}
          ref={ref}
        >
          <Box sx={{ width: { xs: "100%", sm: "50%" }, pr: { xs: 0, sm: 2 } }}>
            <Typography>
              OpsZ unifies your entire IT ecosystem: on-prem, cloud, hybrid, or
              legacy, into one intelligent platform. By integrating seamlessly
              with existing tools, OpsZ eliminates silos, streamlines workflows,
              and delivers a single source of truth across even the most complex
              environments, enabling teams to operate faster, smarter, and with
              greater control.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "50%" }, pl: { xs: 0, sm: 2 } }}>
            <Typography>
              OpsZ enables effortless scale by abstracting complexity and
              standardizing operations across teams, tools, and environments.
              Whether you're managing hundreds or millions of events, OpsZ
              adapts to your infrastructure and workflows: no rewrites, no
              bottlenecks. As your footprint grows, OpsZ ensures visibility,
              control, and performance scale with you.
            </Typography>
          </Box>
        </Box>

        {/* Feature Buttons */}
        <Box
          sx={{
            backgroundImage: {
              xs: "none", // Remove baseplate on mobile
              sm: "url(/unified/Baseplate.svg)"
            },
            backgroundColor: { 
              xs: "rgba(15, 15, 22, 0.7)", // Dark background on mobile instead
              sm: "transparent" 
            },
            backgroundSize: {
              sm: "220% 220%",
              md: "200% 200%",
            },
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            padding: { xs: "12px 10px", sm: "8px 15px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 3, md: 5 },
            mb: { xs: 3, sm: 2, md: 1 },
            width: { xs: "100%", sm: "auto" },
            maxWidth: { xs: "100%", sm: "fit-content" },
            justifyContent: "center",
            alignItems: "center",
            boxShadow: { 
              xs: "0 4px 15px rgba(0,0,0,0.3)", // Stronger shadow for mobile
              sm: "0 4px 20px rgba(0,0,0,0.2)" 
            },
            border: { 
              xs: "1px solid rgba(120, 120, 150, 0.2)", // Subtle border for mobile
              sm: "none" 
            }
          }}
        >
          {/* Buttons with onClick and active status */}
          {buttons.map((btn, idx) => {
            const isActive = idx === index;

            return (
              <Button
                key={idx}
                onClick={() => handleButtonClick(idx)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: { xs: "12px 15px", md: "8px 12px" },
                  width: { xs: "100%", sm: "auto", md: "225px" },
                  maxWidth: { xs: "100%", sm: "225px" },
                  borderRadius: { xs: "8px", sm: "6px" },
                  color: isActive ? btn.color : "#545F71",
                  backgroundColor: { 
                    xs: isActive ? "rgba(30, 30, 40, 0.9)" : "rgba(15, 15, 22, 0.85)",
                    sm: "transparent" 
                  },
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: isActive 
                    ? `0 0 10px 2px ${btn.color}50` 
                    : "none",
                  textTransform: "none",
                  fontFamily: "Montserrat, sans-serif",
                  opacity: isActive ? 1 : 0.7,
                  border: { 
                    xs: `1px solid ${isActive ? btn.color : "rgba(84,95,113,0.3)"}`, 
                    sm: "none" 
                  },
                  "&:hover": {
                    backgroundColor: {
                      xs: isActive ? "rgba(30, 30, 40, 0.9)" : "rgba(25, 25, 35, 0.85)",
                      sm: `${btn.color}0D`
                    },
                    boxShadow: `0 0 15px 5px ${btn.color}80`,
                    opacity: 0.9,
                    border: { 
                      xs: `1px solid ${btn.color}`, 
                      sm: "none" 
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={btn.icon}
                  alt={`${btn.label} Icon`}
                  sx={{
                    width: { xs: 20, md: 20 },
                    height: { xs: 20, md: 20 },
                    marginRight: { xs: 2, md: 3 },
                    border: `1px solid ${isActive ? btn.color : "#545F71"}`,
                    borderRadius: "1px",
                    padding: "2px",
                    opacity: isActive ? 1 : 0.4,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: isActive ? "600" : "400",
                    fontSize: { xs: "14px", md: "14px" },
                    flexGrow: 1,
                    textAlign: "left",
                    marginLeft: { xs: 1, md: 0 },
                  }}
                >
                  {btn.label}
                </Typography>
                <ChevronRightIcon 
                  sx={{ 
                    fontSize: { xs: 20, md: 24 },
                    marginLeft: { xs: 1, md: 0 },
                  }} 
                />
              </Button>
            );
          })}
        </Box>

        {/* Title & Image with Framer Motion animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-${index}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={titleAnimation}
          >
            <h2
              style={{
                background: "linear-gradient(90deg, #FFFFFF, #805AD5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: "0 0 16px 0",
              }}
            >
              {contentItems[index].title}
            </h2>
          </motion.div>
        </AnimatePresence>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: { xs: "100%", md: "100vw" },
            overflow: "hidden",
            position: "relative",
            minHeight: { xs: "200px", md: "300px" },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${index}`}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={imageAnimation}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Box
                component="img"
                src={contentItems[index].image}
                alt="Dashboard"
                sx={{
                  maxWidth: isMobile ? "100%" : "90%",
                  height: "auto",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
};

export default UnifiedPage;
