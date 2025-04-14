"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0",
    },
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const Section = ({ title, children }) => (
  <Box mb={5}>
    <Typography
      variant="h6"
      component="h2"
      gutterBottom
      sx={{ fontWeight: "bold", color: "primary.main" }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

export default function page() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Cookie Policy
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Effective Date: 11/24/2024
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" color="text.secondary" paragraph>
            This Cookie Policy explains how OpsZ ("we", "us", and "our") uses
            cookies and similar technologies to recognize you when you visit our
            website at <strong>opsz.io</strong> ("Website"). It explains what
            these technologies are, why we use them, and your rights to control
            their use.
          </Typography>

          <Section title="1. What Are Cookies?">
            <Typography variant="body1" color="text.secondary">
              Cookies are small data files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners to make their websites work or function more
              efficiently, as well as to provide reporting information.
              <br />
              <br />
              Cookies set by the website owner (in this case, OpsZ) are called
              "first-party cookies." Cookies set by parties other than the
              website owner are called "third-party cookies." Third-party
              cookies enable third-party features or functionality to be
              provided on or through the website (e.g., analytics, advertising,
              and interactive content).
            </Typography>
          </Section>

          <Section title="2. Why Do We Use Cookies?">
            <Typography variant="body1" color="text.secondary" paragraph>
              We use first-party and third-party cookies for several reasons:
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              fontWeight="bold"
            >
              a. Essential Cookies
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              These cookies are strictly necessary to provide you with services
              available through our Website and to use some of its features
              (e.g., access to secure areas).
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              fontWeight="bold"
            >
              b. Analytics and Performance Cookies
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              These cookies collect information that is used either in aggregate
              form to help us understand how our Website is being used or to
              help us customize our Website for you.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              fontWeight="bold"
            >
              c. Marketing and Targeting Cookies
            </Typography>
            <Typography variant="body1" color="text.secondary">
              These cookies are used to make advertising messages more relevant
              to you. They perform functions like preventing the same ad from
              continuously reappearing and ensuring that ads are properly
              displayed.
            </Typography>
          </Section>

          <Section title="3. How Can I Control Cookies?">
            <Typography variant="body1" color="text.secondary">
              You have the right to decide whether to accept or reject cookies.
              <br />
              <br />
              • When you first visit our Website, a cookie banner will give you
              the option to accept, reject, or manage preferences.
              <br />
              • You can also set or amend your web browser controls to accept or
              refuse cookies.
              <br />
              <br />
              Please note that if you choose to reject cookies, you may still
              use our Website, though your access to some functionality and
              areas may be restricted.
            </Typography>
          </Section>

          <Section title="4. How Often Will We Update This Cookie Policy?">
            <Typography variant="body1" color="text.secondary">
              We may update this Cookie Policy from time to time in order to
              reflect changes to the cookies we use or for other operational,
              legal, or regulatory reasons.
              <br />
              <br />
              Please revisit this Cookie Policy regularly to stay informed about
              our use of cookies and related technologies.
            </Typography>
          </Section>

          <Section title="5. Where Can I Get More Information?">
            <Typography variant="body1" color="text.secondary">
              If you have any questions about our use of cookies or other
              technologies, please contact us:
              <br />
              Email: info@opsz.io
              <br />
              Address: 131 Continental Drive., Suite 305, Newark, DE 19713
            </Typography>
          </Section>
        </Container>
      </ThemeProvider>
    </>
  );
}
