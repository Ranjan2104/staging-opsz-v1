import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useInView } from "react-intersection-observer";
import "animate.css";

const UnifiedPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageKey, setImageKey] = useState(0);
  const [index, setIndex] = useState(0);

  const handleButtonClick = (index) => {
    setImageKey((prev) => prev + 1);
    setIndex(index);
  };

  return (
    <Box
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
            maxWidth: { xs: "100%", sm: "100%", md: "70%", lg: "100%" },
            gap: { xs: 2, sm: 0 },
          }}
          ref={ref}
        >
          <Box sx={{ width: { xs: "100%", sm: "50%" }, pr: { xs: 0, sm: 2 } }}>
            <Typography sx={{ fontSize: "15px", color: "white" }}>
              OpsZ unifies your entire IT ecosystem: on-prem, cloud, hybrid, or
              legacy, into one intelligent platform. By integrating seamlessly
              with existing tools, OpsZ eliminates silos, streamlines workflows,
              and delivers a single source of truth across even the most complex
              environments, enabling teams to operate faster, smarter, and with
              greater control.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "50%" }, pl: { xs: 0, sm: 2 } }}>
            <Typography sx={{ fontSize: "15px", color: "white" }}>
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
            backgroundImage: "url(/unified/Baseplate.svg)",
            backgroundSize: {
              xs: "250% 250%",
              sm: "220% 220%",
              md: "200% 200%",
            },
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            padding: "6px 10px",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: isMobile ? 3 : 5,
            mb: { xs: 3, sm: 2, md: 1 },
            maxWidth: "fit-content",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {/* Buttons with onClick */}
          {[
            {
              label: "UNIFY",
              icon: "/unified/Unify Icon.svg",
              color: "#80FF91",
            },
            { label: "AUTOMATE", icon: "/unified/Robot.svg", color: "#C57AFF" },
            { label: "SCALE", icon: "/unified/Scale.svg", color: "#9CCAFF" },
          ].map((btn, idx) => (
            <Button
              key={idx}
              onClick={() => handleButtonClick(idx)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: { xs: "10px 15px", md: "8px 12px" },
                width: "225px",
                borderRadius: "6px",
                color: btn.color,
                backgroundColor: isMobile ? "black" : "transparent",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: `0 0 10px 2px ${btn.color}50`,
                textTransform: "none",
                fontFamily: "Montserrat, sans-serif",
                "&:hover": {
                  backgroundColor: `${btn.color}0D`,
                  boxShadow: `0 0 15px 5px ${btn.color}80`,
                },
              }}
            >
              <Box
                component="img"
                src={btn.icon}
                alt={`${btn.label} Icon`}
                sx={{
                  width: { xs: 16, md: 20 },
                  height: { xs: 16, md: 20 },
                  marginRight: 3,
                  border: `1px solid ${btn.color}`,
                  borderRadius: "1px",
                  padding: "2px",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "medium",
                  marginRight: 3,
                  fontSize: { xs: "13px", md: "14px" },
                }}
              >
                {btn.label}
              </Typography>
              <ChevronRightIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
            </Button>
          ))}
        </Box>
        <Box>
          <h2
            style={{
              background: "linear-gradient(90deg, #FFFFFF, #805AD5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {index === 0
              ? "Connect Everything, Control Anything."
              : index === 1
              ? "Automate Anything, Orchestrate Everything."
              : "Amplify Growth, Simplify Control."}
          </h2>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: { xs: "100%", md: "100vw" },
            overflow: "hidden",
          }}
        >
          <Box
            key={imageKey}
            component="img"
            src={
              index === 0
                ? "/unified/DashboardImage.svg"
                : index === 1
                ? "/automate.svg"
                : "/unify.svg"
            }
            alt="Dashboard"
            className="animate__animated animate__fadeInUp"
            sx={{
              maxWidth: isMobile ? "100%" : "90%",
              height: "auto",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default UnifiedPage;
