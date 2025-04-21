import {
  Box,
  Typography,
  Card,
  Avatar,
  Grid,
  Divider,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { carouselItems } from "@/app/Utils/constants";
import { motion } from "framer-motion";

function NextArrow(props) {
  const { onClick, isMobile } = props;
  if (isMobile) return null;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: { xs: -10, md: -30 },
        transform: "translateY(-50%)",
        zIndex: 3,
        color: "white",
        backgroundColor: "rgba(255,255,255,0.1)",
        "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
      }}
    >
      <ArrowForwardIos fontSize="small" />
    </IconButton>
  );
}

function PrevArrow(props) {
  const { onClick, isMobile } = props;
  if (isMobile) return null;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: { xs: -20, md: -50 },
        transform: "translateY(-50%)",
        zIndex: 3,
        color: "white",
        backgroundColor: "rgba(255,255,255,0.1)",
        "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
      }}
    >
      <ArrowBackIosNew fontSize="small" />
    </IconButton>
  );
}

export default function UseCaseSection() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isLargeScreen = useMediaQuery("(min-width:1300px)");
  const isTab = useMediaQuery("(max-width:900px) and (min-width:601px)");
  const [isAfterStates, setIsAfterStates] = useState(
    carouselItems.map(() => false)
  );
  const [directions, setDirections] = useState(
    carouselItems.map(() => "right")
  );

  const handleFlip = (index, toAfter) => {
    setDirections((prev) =>
      prev.map((_, i) => (i === index ? (toAfter ? "right" : "left") : _))
    );
    setIsAfterStates((prev) =>
      prev.map((state, i) => (i === index ? toAfter : state))
    );
  };

  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 10000,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // nextArrow: <NextArrow isMobile={isMobile} />,
    // prevArrow: <PrevArrow isMobile={isMobile} />,
  };

  const slideVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        background: "linear-gradient(to bottom, #4b0082 0%, #000000 100%)",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: "url('/useBack.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            opacity: 0.3,
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: 3, md: 10 },
            pt: 8,
            pb: 12,
            color: "white",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
          ref={ref}
        >
          <Typography variant="h4" fontWeight={700}>
            USE CASE
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Before and After Stories
          </Typography>
          <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.3)" }} />

          <Box sx={{ position: "relative" }}>
            <Slider {...settings}>
              {carouselItems.map((item, idx) => {
                const isAfter = isAfterStates[idx];
                const direction = directions[idx];

                return (
                  <Box
                    key={idx}
                    sx={{
                      mt: 6,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Grid
                      container
                      spacing={{ xs: 2, md: 4, lg: 7 }}
                      alignItems="stretch"
                    >
                      <Grid item xs={12} md={4}>
                        <Box
                          display="flex"
                          alignItems="center"
                          // gap={2}
                          mb={3}
                          justifyContent="space-between"
                        >
                          <Box display="flex" alignItems="center" gap={2}>
                            <Avatar
                              src={item.userInfo.img}
                              alt={item.userInfo.name}
                              sx={{ width: 64, height: 64 }}
                            />
                            <Box>
                              <Typography fontWeight={600} variant="body1">
                                {item.userInfo.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: "rgba(255, 255, 255, 0.5)" }}
                              >
                                {item.userInfo.role}
                              </Typography>
                            </Box>
                          </Box>
                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ borderColor: "rgba(255,255,255,0.2)", mx: 2 }}
                          />
                          <img
                            src="/SliderImage.png"
                            alt="Initech"
                            style={{ height: 36, objectFit: "contain" }}
                          />
                        </Box>

                        <Box mt={4}>
                          <Typography fontWeight={600} gutterBottom>
                            Goals:
                          </Typography>
                          <Typography>{item.userInfo.goals}</Typography>
                        </Box>

                        <Box mt={3}>
                          <Typography fontWeight={600} gutterBottom>
                            Frustrations:
                          </Typography>
                          <Typography color="primary.light">
                            {item.userInfo.frustrations}
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid
                        item
                        md={0.5}
                        sx={{
                          display: { xs: "none", md: "flex" },
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Divider
                          orientation="vertical"
                          sx={{
                            height: "100%",
                            borderColor: "rgba(255,255,255,0.2)",
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={7.5}>
                        <Box sx={{ minHeight: { xs: "600px", md: "400px" } }}>
                          <motion.div
                            key={isAfter ? "after" : "before"}
                            variants={slideVariants}
                            initial={
                              direction === "right"
                                ? "hiddenRight"
                                : "hiddenLeft"
                            }
                            animate="visible"
                            transition={{ duration: 0.5 }}
                          >
                            <Card
                              elevation={10}
                              sx={{
                                background: isAfter
                                  ? "linear-gradient(to bottom, #4b0082 0%, #000000 100%)"
                                  : "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: 4,
                                color: "white",
                                p: 3,
                                backdropFilter: "blur(12px)",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                gap: 2.5,
                                height: isMobile ? "550px" : "400px",
                              }}
                            >
                              <Box sx={{ flex: 1 }}>
                                <Typography variant="h6" fontWeight={700}>
                                  {isAfter
                                    ? item.after_OpsZ.title
                                    : item.before_OpsZ.title}
                                </Typography>
                                <Divider
                                  sx={{
                                    backgroundColor: "rgba(255,255,255,0.2)",
                                    mb: 1,
                                  }}
                                />
                                <Box component="ul" sx={{ pl: 2 }}>
                                  {(isAfter
                                    ? item.after_OpsZ.description
                                    : item.before_OpsZ.description
                                  ).map((line, i) => (
                                    <li key={i}>
                                      <Typography
                                        sx={{ fontSize: "0.8rem" }}
                                        variant="body2"
                                      >
                                        {line}
                                      </Typography>
                                    </li>
                                  ))}
                                </Box>
                                {isAfter && (
                                  <Box component="ul" sx={{ pl: 2, pt: 3 }}>
                                    <Typography variant="h6" fontWeight={600}>
                                      Impact Summary
                                    </Typography>
                                    {item.after_OpsZ.descriptionImpact.map(
                                      (line, i) => (
                                        <li key={i}>
                                          <Typography
                                            sx={{ fontSize: "0.8rem" }}
                                            variant="body2"
                                          >
                                            {line}
                                          </Typography>
                                        </li>
                                      )
                                    )}
                                  </Box>
                                )}
                                <button
                                  style={{
                                    background: "#7C3AED",
                                    color: "white",
                                    padding: "6px 16px",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                    fontWeight: "600",
                                    marginTop: "16px",
                                  }}
                                  onClick={() => handleFlip(idx, !isAfter)}
                                >
                                  {isAfter ? "Before OpsZ" : "After OpsZ"}
                                </button>
                              </Box>

                              {isTab ? (
                                <Box
                                  component="img"
                                  src={
                                    isAfter
                                      ? item.after_OpsZ.image
                                      : item.before_OpsZ.image
                                  }
                                  alt={
                                    isAfter
                                      ? item.after_OpsZ.title
                                      : item.before_OpsZ.title
                                  }
                                  sx={{
                                    width: 240,
                                    height: 210,
                                    objectFit: "cover",
                                    borderRadius: 2,
                                    border: "1px solid rgba(255,255,255,0.1)",
                                  }}
                                />
                              ) : (
                                isLargeScreen && (
                                  <Box
                                    component="img"
                                    src={
                                      isAfter
                                        ? item.after_OpsZ.image
                                        : item.before_OpsZ.image
                                    }
                                    alt={
                                      isAfter
                                        ? item.after_OpsZ.title
                                        : item.before_OpsZ.title
                                    }
                                    sx={{
                                      width: 240,
                                      height: 210,
                                      objectFit: "cover",
                                      borderRadius: 2,
                                      border: "1px solid rgba(255,255,255,0.1)",
                                    }}
                                  />
                                )
                              )}
                            </Card>
                          </motion.div>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
