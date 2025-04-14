import { legalLinks, navigationLinks } from "@/app/Utils/constants";
import {
  Box,
  Button,
  Input,
  Link,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const iconStyle = {
  color: "white",
  transition: "color 0.3s",
  "&:hover": {
    color: "#d1a4f5",
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter an email");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/subscribe", { email });
      if (response.status === 201) {
        toast.success(response.data.message);
        setEmail("");
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      role="contentinfo"
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url("/Footer.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: { xs: "4rem 1.5rem", md: "2rem 2rem" },
          objectFit: "fill",
          color: "#EFEFEF",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          },
        }}
      >
        {/* Main Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1440px",
            margin: "0 auto",
          }}
        >
          {/* Top Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center", md: "flex-start" },
              gap: 4,
              mb: 3,
            }}
          >
            {/* Logo and Navigation */}
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                maxWidth: "400px",
              }}
            >
              <img
                src="/NavLogo.svg"
                alt="OPSZ Logo"
                style={{
                  height: "30px",
                  marginBottom: "2rem",
                  filter: "drop-shadow(0 0 8px rgba(109, 40, 217, 0.3))",
                }}
              />
              <Box
                component="nav"
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 3,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {navigationLinks.map((link) => (
                  <MuiLink
                    key={link.name}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    sx={{
                      color: "#EFEFEF",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#9B4DFF",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {link.name}
                  </MuiLink>
                ))}
              </Box>
            </Box>

            {/* Newsletter Section */}
            <Box sx={{ width: "100%", maxWidth: "450px" }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Stay in the loop
              </Typography>
              <Box
                component="form"
                onSubmit={(e) => e.preventDefault()}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                }}
              >
                <Input
                  placeholder="Enter your email"
                  // type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // required
                  aria-label="Email subscription"
                  disableUnderline
                  sx={{
                    flex: 1,
                    bgcolor: "white",
                    borderRadius: "12px",
                    px: 2,
                    fontSize: "0.9rem",
                    transition: "all 0.2s ease",
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={loading}
                  sx={{
                    background: "linear-gradient(to right, #6D28D9, #3B0A45)",
                    borderRadius: "12px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: loading ? "none" : "translateY(-2px)",
                    },
                  }}
                >
                  {loading ? (
                    <CircularProgress size={20} sx={{ color: "white" }} />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Box>
              <Typography
                sx={{
                  mt: 3,
                  textAlign: "center",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                By Submitting you agree our{" "}
                <MuiLink href="/privacy-policy">Privacy Policy</MuiLink>
              </Typography>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  gap: 3,
                  justifyContent: "center",
                }}
              >
                <Link
                  href="https://www.linkedin.com/company/opsz/"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  sx={iconStyle}
                >
                  <LinkedInIcon />
                </Link>

                <Link
                  href="https://x.com/InfoOPSZ"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  sx={iconStyle}
                >
                  <XIcon />
                </Link>

                <Link
                  href="mailto:info@opsz.io"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  sx={iconStyle}
                >
                  <EmailIcon />
                </Link>
              </Box>
            </Box>
          </Box>

          <Box
            component="hr"
            sx={{
              border: 0,
              height: "1px",
              bgcolor: "rgba(255,255,255,0.1)",
              my: 1,
              mb: 3,
            }}
          />

          {/* Bottom Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {legalLinks.map((link) => (
                <MuiLink
                  key={link.name}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    "&:hover": { color: "#EFEFEF" },
                  }}
                >
                  {link.name}
                </MuiLink>
              ))}
            </Box>
            <Typography
              variant="caption"
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.8rem",
              }}
            >
              © {currentYear} OPSZ. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
