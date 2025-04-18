"use client";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Home Components/footer";
import NoformChatbot from "./Components/ChatBotApp";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { secureRoutes } from "./Utils/constants";
import CookieBanner from "./Components/CookieBanner";
import { Toaster } from "react-hot-toast";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a theme with Montserrat as the default font family
const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    button: {
      textTransform: 'none', // Prevents automatic uppercase transformation on buttons
    },
    allVariants: {
      fontFamily: '"Montserrat", sans-serif',
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
        },
        input: {
          fontFamily: '"Montserrat", sans-serif',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
        },
      },
    },
  },
});

export default function LayoutWrapper({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    setShowLoader(true);
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [pathname, isMounted]);

  if (!isMounted) return null;

  const isSecureRoute = secureRoutes.includes(pathname);

  return (
    <ThemeProvider theme={theme}>
      {showLoader && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1300,
          }}
        >
          <div className="loader"></div>
        </div>
      )}
      {isSecureRoute && <Navbar />}
      <main style={{ opacity: showLoader ? 0.3 : 1 }}>{children}</main>
      {isSecureRoute && <Footer />}
      {isSecureRoute &&
        pathname !== "/schedule-demo" &&
        pathname !== "/chatbot" &&
        pathname !== "/" &&
        pathname !== "/privacy-policy" &&
        pathname !== "/terms-condition" &&
        pathname !== "/cookie-policy" &&
        pathname !== "/product" &&
        pathname !== "/company" && <NoformChatbot />}
      <CookieBanner />
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  );
}
