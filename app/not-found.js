// app/not-found.js

"use client";
import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        py: 6,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 600 }}
      >
        404 - Page Not Found
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 600,
          height: { xs: 300, sm: 400, md: 500 },
          mb: 4,
        }}
      >
        <Image
          src="/NotFound.png"
          alt="404 Illustration"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </Box>

      <Link href="/" passHref>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{ textTransform: "none" }}
        >
          Go Back to Home
        </Button>
      </Link>
    </Container>
  );
}
