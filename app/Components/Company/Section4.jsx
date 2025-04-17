import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <Box
      sx={{
        minHeight: 300,
        background: `
          radial-gradient(9.28% 47.36% at 47.92% 0%, rgba(0, 0, 0, 0.44) 0%, rgba(0, 0, 0, 0.00) 100%),
          radial-gradient(344.75% 107.05% at 0% 59.75%, rgba(151, 71, 255, 0.85) 0%, rgba(132, 45, 98, 0.85) 50.48%, rgba(0, 0, 0, 0.85) 100%),
          url('/company-page/sec2.jpeg') lightgray -972.311px -17.366px / 168.025% 429.338% no-repeat
        `,
        backgroundBlendMode: "normal",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: { xs: "center", md: "space-between" },
        padding: { xs: 3, md: 8 },
        color: "#fff",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        sx={{
          textAlign: { xs: "center", md: "left" },
          zIndex: 1,
          mb: { xs: 3, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "36px", md: "64px" },
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "120%",
          }}
        >
          Join Our Growing Team
        </Typography>

        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%",
          }}
          mt={1}
        >
          Explore exciting career opportunities with us today!
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#333",
            fontWeight: 500,
            textTransform: "none",
            mt: { xs: 4, md: 0 },
            borderRadius: 2,
            paddingX: 3,
            paddingY: 1,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          Explore Open Positions
        </Button>
      </motion.div>
    </Box>
  );
};

export default Section4;
