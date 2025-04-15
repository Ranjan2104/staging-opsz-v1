import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
const SplineAnimation = dynamic(() => import("../SplineAnimation"), {
  ssr: false,
});
import { useRouter } from "next/navigation";

const HomeHero = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTab = useMediaQuery("(max-width:900px)");
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <main
      style={{
        position: "relative",
        background: "black",
        color: "#EFEFEF",
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: isMobile ? "column" : "row",
        zIndex: 2,
        minHeight: "100vh",
      }}
    >
      {/* Background Spline Animation */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <SplineAnimation />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, #d9b8ff 0%, #4e086d 100%)",
            opacity: 0.6,
            zIndex: 1,
          }}
        />
      </Box>

      {/* Foreground Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Logo with White Glow */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "auto",
            height: "auto",
          }}
        >
          {/* White Glow Behind Logo */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: isMobile ? "280px" : isTab ? "400px" : "500px",
              height: isMobile ? "280px" : isTab ? "400px" : "500px",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(50px)",
              zIndex: 1,
            }}
          />

          {/* Logo Image */}
          <img
            src="/HeroLogo.svg"
            alt="Hero Logo"
            style={{
              width: "100%",
              maxWidth: isMobile ? "400px" : isTab ? "500px" : "700px",
              display: "block",
              borderRadius: "12px",
              position: "relative",
              zIndex: 2,
            }}
          />
        </Box>

        {/* Text Content */}
        <Box
          sx={{
            marginTop: "2rem",
            textAlign: "left",
            maxWidth: "700px",
            padding: isMobile ? "unset" : "1.5rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#EFEFEF",
              fontSize: { xs: "2.5rem", sm: "3rem" },
            }}
          >
            A FORCE{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FFFFFF, #805AD5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MULTIPLIER
            </span>
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#EFEFEF",
              fontSize: { xs: "4rem", sm: "5rem" },
            }}
          >
            FOR <span style={{ color: "#3B82F6" }}>IT</span>{" "}
            <span style={{ color: "#9B4DFF" }}>TEAMS</span>
          </Typography>

          <Typography
            sx={{
              color: "#D3D3D3",
              mt: 2,
              fontSize: "18px",
              maxWidth: "571px",
            }}
          >
            OpsZ revolutionizes IT Management with intelligent agents that
            streamline operations and enhance efficiency. Experience a solution
            designed for today's dynamic environments.
          </Typography>

          <Button
            variant="contained"
            sx={{
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
              color: "white",
              fontWeight: 550,
              borderRadius: "12px",
              padding: "0.9rem 2.5rem",
              textTransform: "none",
              mt: 3,
              background: "transparent",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-2px",
                left: "-2px",
                right: "-2px",
                bottom: "-2px",
                background:
                  "linear-gradient(-45deg, #6D28D9, #3B0A45, #9333EA, #5B21B6)",
                backgroundSize: "400% 400%",
                animation: "gradientBorder 3s ease infinite",
                zIndex: -1,
                borderRadius: "14px",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: "2px",
                left: "2px",
                right: "2px",
                bottom: "2px",
                backgroundColor: "#1E1E2F",
                borderRadius: "10px",
                zIndex: -1,
                transition: "all 0.3s ease",
              },
              "&:hover": {
                transform: "scale(1.03)",
                "&::after": {
                  background:
                    "radial-gradient(circle at center, #6D28D9, #3B0A45)",
                },
              },
              "@keyframes gradientBorder": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
              },
            }}
            onClick={() => handleRedirect("/chatbot")}
          >
            SCHEDULE A DEMO
          </Button>
        </Box>
      </Box>
    </main>
  );
};

export default HomeHero;

// import { Box, Typography, Button, useMediaQuery } from "@mui/material";
// import React from "react";
// import dynamic from "next/dynamic";
// const SplineAnimation = dynamic(() => import("../SplineAnimation"), { ssr: false });
// import { useRouter } from "next/navigation";

// const HomeHero = () => {
//   const router = useRouter();
//   const isMobile = useMediaQuery("(max-width:600px)");
//   const isTab = useMediaQuery("(max-width:900px)");
//   const handleRedirect = (url) => {
//     window.location.href = url;
//   };

//   return (
//     <main
//       style={{
//         position: "relative",
//         background: "black",
//         color: "#EFEFEF",
//         overflow: "hidden",
//         display: "flex",
//         justifyContent: "space-between",
//         flexDirection: isMobile ? "column" : "row",
//         zIndex: 2,
//         minHeight: "100vh",
//       }}
//     >
//       {/* Background Spline and Gradient */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: 0,
//           overflow: "hidden",
//           pointerEvents: "none",
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             display: "block",
//             opacity: 0.8,
//             filter: isMobile || isTab ? "blur(4px)" : "none",
//           }}
//         >
//           <SplineAnimation />
//         </Box>
//         <Box
//           sx={{
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             background: "linear-gradient(to bottom, #d9b8ff 0%, #4e086d 100%)",
//             opacity: 0.6,
//             zIndex: 1,
//           }}
//         />
//       </Box>

//       {/* Foreground Content */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           justifyContent: "center",
//           padding: "2rem",
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         {/* Logo with Glow */}
//         <Box
//           sx={{
//             position: "relative",
//             zIndex: 2,
//             width: "auto",
//             height: "auto",
//           }}
//         >
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: isMobile ? "280px" : isTab ? "400px" : "500px",
//               height: isMobile ? "280px" : isTab ? "400px" : "500px",
//               background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
//               borderRadius: "50%",
//               filter: "blur(50px)",
//               zIndex: 1,
//             }}
//           />
//           <img
//             src="/HeroLogo.svg"
//             alt="Hero Logo"
//             style={{
//               width: "100%",
//               maxWidth: isMobile ? "400px" : isTab ? "500px" : "700px",
//               display: "block",
//               borderRadius: "12px",
//               position: "relative",
//               zIndex: 2,
//             }}
//           />
//         </Box>

//         {/* Text and Button */}
//         <Box
//           sx={{
//             marginTop: "2rem",
//             textAlign: "left",
//             maxWidth: "700px",
//             padding: isMobile ? "unset" : "1.5rem",
//             position: "relative",
//             zIndex: 2,
//           }}
//         >
//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: "bold",
//               color: "#EFEFEF",
//               fontSize: { xs: "2.5rem", sm: "3rem" },
//             }}
//           >
//             A FORCE{" "}
//             <span
//               style={{
//                 background: "linear-gradient(90deg, #FFFFFF, #805AD5)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               MULTIPLIER
//             </span>
//           </Typography>

//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: "bold",
//               color: "#EFEFEF",
//               fontSize: { xs: "4rem", sm: "5rem" },
//             }}
//           >
//             FOR <span style={{ color: "#3B82F6" }}>IT</span>{" "}
//             <span style={{ color: "#9B4DFF" }}>TEAMS</span>
//           </Typography>

//           <Typography
//             sx={{
//               color: "#D3D3D3",
//               mt: 2,
//               fontSize: "18px",
//               maxWidth: "571px",
//             }}
//           >
//             OpsZ revolutionizes IT Management with intelligent agents that
//             streamline operations and enhance efficiency. Experience a solution
//             designed for today's dynamic environments.
//           </Typography>

//           <Button
//             variant="contained"
//             sx={{
//               position: "relative",
//               zIndex: 1,
//               overflow: "hidden",
//               color: "white",
//               fontWeight: 550,
//               borderRadius: "12px",
//               padding: "0.9rem 2.5rem",
//               textTransform: "none",
//               mt: 3,
//               background: "transparent",
//               fontSize: "1rem",
//               transition: "all 0.3s ease",
//               "&::before": {
//                 content: '""',
//                 position: "absolute",
//                 top: "-2px",
//                 left: "-2px",
//                 right: "-2px",
//                 bottom: "-2px",
//                 background:
//                   "linear-gradient(-45deg, #6D28D9, #3B0A45, #9333EA, #5B21B6)",
//                 backgroundSize: "400% 400%",
//                 animation: "gradientBorder 3s ease infinite",
//                 zIndex: -1,
//                 borderRadius: "14px",
//               },
//               "&::after": {
//                 content: '""',
//                 position: "absolute",
//                 top: "2px",
//                 left: "2px",
//                 right: "2px",
//                 bottom: "2px",
//                 backgroundColor: "#1E1E2F",
//                 borderRadius: "10px",
//                 zIndex: -1,
//                 transition: "all 0.3s ease",
//               },
//               "&:hover": {
//                 transform: "scale(1.03)",
//                 "&::after": {
//                   background:
//                     "radial-gradient(circle at center, #6D28D9, #3B0A45)",
//                 },
//               },
//               "@keyframes gradientBorder": {
//                 "0%": { backgroundPosition: "0% 50%" },
//                 "50%": { backgroundPosition: "100% 50%" },
//                 "100%": { backgroundPosition: "0% 50%" },
//               },
//             }}
//             onClick={() => handleRedirect("/chatbot")}
//           >
//             SCHEDULE A DEMO
//           </Button>
//         </Box>
//       </Box>
//     </main>
//   );
// };

// export default HomeHero;
