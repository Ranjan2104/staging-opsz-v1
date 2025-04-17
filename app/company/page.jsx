"use client";
import React from "react";
import { Container } from "@mui/material";
import Section1 from "../Components/Company/Section1";
import Section2 from "../Components/Company/Section2";
import Section3 from "../Components/Company/Section3";
import Section4 from "../Components/Company/Section4";

const CompanyPage = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ overflowX: "hidden" }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Container>
  );
};

export default CompanyPage;
