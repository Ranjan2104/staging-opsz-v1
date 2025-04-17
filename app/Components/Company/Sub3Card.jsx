import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Link,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

const Sub3Card = ({
  name,
  designation,
  description,
  image,
  linkedinUrl,
  twitterUrl,
  dribbbleUrl,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 4,
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        padding: isMobile ? "unset" : 2,
        overflow: "hidden",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.1)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        sx={{
          height: 400,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          objectPosition: "center",
          position: "relative",
          borderRadius: 4,
          boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
            transform: "scale(1.02)",
          },
        }}
      />
      <CardContent>
        <Typography variant="h6" fontWeight={600}>
          {name}
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
          {designation}
        </Typography>
        <Typography variant="body2" mt={1}>
          {description}
        </Typography>
        <Box display="flex" gap={1} mt={2}>
          <IconButton
            sx={{
              color: "#fff",
              opacity: 0.8,
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#0077B5",
                transform: "scale(1.1)",
              },
            }}
          >
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="none"
            >
              <LinkedInIcon />
            </Link>
          </IconButton>

          <IconButton
            sx={{
              color: "#fff",
              opacity: 0.8,
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#1DA1F2",
                transform: "scale(1.1)",
              },
            }}
          >
            <Link
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="none"
            >
              <XIcon />
            </Link>
          </IconButton>

          <IconButton
            sx={{
              color: "#fff",
              opacity: 0.8,
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#ea4c89",
                transform: "scale(1.1)",
              },
            }}
          >
            <Link
              href={dribbbleUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="none"
            >
              <SportsBasketballIcon />
            </Link>
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Sub3Card;
