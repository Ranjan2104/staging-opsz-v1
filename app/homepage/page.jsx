"use client";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeHero from "../Components/Home Components/HomeHero";
import UnifiedPage from "../Components/UnifiedPage";
import UseCaseSection from "../Components/Home Components/UseCases";
import Features from "../product/features";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: { fontFamily: "Montserrat, sans-serif" },
    h2: { fontFamily: "Montserrat, sans-serif" },
    h6: { fontFamily: "Montserrat, sans-serif" },
    body1: { fontFamily: "Montserrat, sans-serif" },
    button: { fontFamily: "Montserrat, sans-serif" },
  },
});

const page = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeHero />
      <Features />
      <UnifiedPage />
      <UseCaseSection />
    </ThemeProvider>
  );
};

export default page;
