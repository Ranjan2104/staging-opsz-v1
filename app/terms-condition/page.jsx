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
      sx={{ fontWeight: "bold", color: "primary.main", textAlign: "left" }}
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
        <Container
          maxWidth="md"
          sx={{ py: 6, px: { xs: 2, sm: 3, md: 4 }, textAlign: "left" }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Terms and Conditions for OpsZ
          </Typography>

          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Effective Date: 11/24/2024 | Last Updated: 04/09/2025
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" color="text.secondary" paragraph>
            Welcome to OpsZ. These Terms and Conditions (“Terms”) govern your
            access to and use of the OpsZ platform, services, website, and
            related tools (collectively, the “Services”), provided by OpsZ, Inc.
            (“Company”, “we”, “us”, or “our”). By accessing or using our
            Services, you agree to be bound by these Terms. If you do not agree,
            please do not use the Services.
          </Typography>

          <Section title="1. Overview">
            <Typography variant="body1" color="text.secondary">
              OpsZ provides enterprise SaaS solutions for IT operations,
              automation, observability, and agentic AI across complex
              infrastructure environments. These Terms apply to all visitors,
              users, customers, and others who access or use the Services.
            </Typography>
          </Section>

          <Section title="2. Eligibility & Account Registration">
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>
                You must be at least 18 years old and authorized to act on
                behalf of your organization to create and maintain an account.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                credentials.
              </li>
              <li>
                You agree to provide accurate and complete information during
                registration and to update it as necessary.
              </li>
            </Box>
          </Section>

          <Section title="3. Use of Services">
            <Typography variant="body1" color="text.secondary" paragraph>
              You agree to use the Services solely for lawful business purposes
              and in compliance with:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <li>These Terms</li>
              <li>Our Privacy Policy</li>
              <li>All applicable laws and regulations</li>
            </Box>
            <Typography variant="body1" color="text.secondary" paragraph>
              You may not:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <li>
                Reverse engineer, decompile, or otherwise attempt to extract the
                source code of the platform
              </li>
              <li>
                Use the Services for illegal, harmful, or abusive activities
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                Services
              </li>
            </Box>
          </Section>

          <Section title="4. Subscription & Payment Terms">
            <Box component="ul" sx={{ pl: 3 }}>
              <li>
                Fees and billing terms are defined in your Master Services
                Agreement (MSA) or Statement of Work (SOW)
              </li>
              <li>
                Payment obligations are non-cancelable and fees paid are
                non-refundable unless otherwise stated
              </li>
              <li>Late payments may incur interest or suspension of access</li>
            </Box>
          </Section>

          <Section title="5. Intellectual Property">
            <Typography variant="body1" color="text.secondary">
              All content and technology provided through the OpsZ
              platform—including source code, UI/UX, documentation, analytics,
              and trademarks—are the exclusive property of OpsZ, Inc. You
              receive a limited, non-exclusive, non-transferable license to use
              the Services in accordance with these Terms and any applicable
              agreements.
            </Typography>
          </Section>

          <Section title="6. Data Ownership & Privacy">
            <Box component="ul" sx={{ pl: 3 }}>
              <li>
                You retain ownership of all data you input into the Services
                (“Customer Data”).
              </li>
              <li>
                OpsZ may use aggregate or anonymized data for analytics,
                benchmarking, and product improvement.
              </li>
              <li>
                Your use of the Services is subject to our Privacy Policy and
                Cookie Policy.
              </li>
            </Box>
          </Section>

          <Section title="7. Availability & Support">
            <Box component="ul" sx={{ pl: 3 }}>
              <li>
                OpsZ makes commercially reasonable efforts to ensure uptime,
                availability, and technical support in accordance with your
                service tier.
              </li>
              <li>
                We may perform scheduled maintenance or upgrades with advance
                notice when possible.
              </li>
              <li>
                No guarantees are made for 100% uptime or uninterrupted access.
              </li>
            </Box>
          </Section>

          <Section title="8. Termination">
            <Box component="ul" sx={{ pl: 3 }}>
              <li>You violate these Terms or applicable law</li>
              <li>You fail to pay applicable fees</li>
              <li>Required by legal or regulatory authority</li>
            </Box>
            <Typography variant="body1" color="text.secondary" paragraph>
              You may terminate your use at any time, but no refunds will be
              issued for unused portions of subscriptions unless explicitly
              agreed upon in writing.
            </Typography>
          </Section>

          <Section title="9. Disclaimers">
            <Typography variant="body1" color="text.secondary">
              The Services are provided “as is” and “as available.” We disclaim
              all warranties, express or implied, including but not limited to
              fitness for a particular purpose, non-infringement, and security
              or availability guarantees.
            </Typography>
          </Section>

          <Section title="10. Limitation of Liability">
            <Box component="ul" sx={{ pl: 3 }}>
              <li>
                OpsZ shall not be liable for indirect, incidental, special, or
                consequential damages
              </li>
              <li>
                Our total liability for any claims arising from the use of the
                Services shall not exceed the amount paid by you in the 12
                months preceding the claim
              </li>
            </Box>
          </Section>

          <Section title="11. Indemnification">
            <Typography variant="body1" color="text.secondary">
              You agree to indemnify, defend, and hold harmless OpsZ from and
              against any claims, damages, liabilities, costs, or expenses
              (including reasonable attorneys’ fees) arising from:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <li>Your use of the Services</li>
              <li>Your violation of these Terms or applicable law</li>
              <li>
                Infringement of intellectual property rights by your content or
                configurations
              </li>
            </Box>
          </Section>

          <Section title="12. Changes to These Terms">
            <Typography variant="body1" color="text.secondary">
              We may update these Terms from time to time. When we do, we will
              notify you via email or through the Services, and revise the "Last
              Updated" date. Continued use of the Services after such changes
              constitutes your acceptance of the new Terms.
            </Typography>
          </Section>

          <Section title="13. Governing Law & Jurisdiction">
            <Typography variant="body1" color="text.secondary">
              These Terms are governed by the laws of the State of Delaware
              without regard to its conflict of law principles. Any legal action
              must be brought in the courts located in Newark, DE.
            </Typography>
          </Section>

          <Section title="14. Force Majeure">
            <Typography variant="body1" color="text.secondary">
              OpsZ shall not be liable for any failure or delay in performance
              of its obligations under these Terms if such failure or delay
              arises from causes beyond its reasonable control, including but
              not limited to acts of God, natural disasters, pandemics,
              epidemics, war, terrorism, civil unrest, labor strikes,
              governmental actions, power or internet outages, or failures of
              third-party service providers (each a “Force Majeure Event”). OpsZ
              will make reasonable efforts to resume performance as soon as
              practicable and will communicate delays to affected users when
              feasible.
            </Typography>
          </Section>

          <Section title="15. Contact Us">
            <Typography variant="body1" color="text.secondary">
              If you have any questions about these Terms, please contact us:
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
