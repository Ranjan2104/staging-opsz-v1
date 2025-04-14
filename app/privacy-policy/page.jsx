"use client";
import {
  Box,
  Container,
  Typography,
  Divider,
  ThemeProvider,
  createTheme,
  CssBaseline,
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

const Section = ({ title, children }) => {
  return (
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
};

export default function page() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Privacy Policy
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Effective Date: 11/24/2024 | Last Updated: 04/09/2025
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" color="text.secondary" paragraph>
          Welcome to OpsZ ("Company", "we", "our", or "us"). This Privacy Policy describes
          how we collect, use, and disclose personal information when you visit our website,
          use our platform, or engage with us in any way. By using our services, you agree to
          the collection and use of information in accordance with this Privacy Policy.
        </Typography>

        <Section title="1. Who We Are">
          <Typography variant="body1" color="text.secondary">
            OpsZ is a SaaS platform for IT operations and process automation, designed to unify
            observability, agentic AI, and real-time system monitoring across complex enterprise
            environments.
            <br />
            Website: <a href="https://www.opsz.io" target="_blank" rel="noopener noreferrer">https://www.opsz.io</a>
            <br />
            Contact Email: info@opsz.io
            <br />
            Business Address: 131 Continental Drive., Suite 305, Newark, DE 19713
          </Typography>
        </Section>

        <Section title="2. Information We Collect">
          <Typography variant="body1" color="text.secondary" gutterBottom>
            a. Information You Provide to Us:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Contact details (e.g., name, email address, company name)</li>
            <li>Account registration info</li>
            <li>Billing and payment information</li>
            <li>Communications with support or sales teams</li>
          </Box>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            b. Information Collected Automatically:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Log data (IP address, browser type, pages visited, time and date)</li>
            <li>Device and usage data through cookies and similar technologies</li>
            <li>Analytics (e.g., page performance, feature usage)</li>
          </Box>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            c. Information from Third Parties:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Referral platforms</li>
            <li>CRM integrations</li>
            <li>Identity providers (SSO)</li>
          </Box>
        </Section>

        <Section title="3. How We Use Your Information">
          <Typography variant="body1" color="text.secondary" gutterBottom>
            We use your information to:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Provide and operate the OpsZ platform</li>
            <li>Customize and improve user experience</li>
            <li>Communicate with you about updates, support, and billing</li>
            <li>Monitor platform performance and detect/prevent misuse</li>
            <li>Comply with legal and regulatory obligations</li>
          </Box>
          <Typography variant="body1" color="text.secondary">
            We do not sell your personal data.
          </Typography>
        </Section>

        <Section title="4. Legal Basis for Processing (GDPR)">
          <Typography variant="body1" color="text.secondary" gutterBottom>
            If you are located in the EU or UK, we rely on the following legal bases for processing:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Contractual necessity – to deliver services you’ve signed up for</li>
            <li>Legitimate interest – for analytics, security, and product improvement</li>
            <li>Consent – where legally required (e.g., marketing communications, cookies)</li>
            <li>Legal obligation – to comply with applicable laws and regulations</li>
          </Box>
        </Section>

        <Section title="5. How We Share Information">
          <Typography variant="body1" color="text.secondary" gutterBottom>
            We may share information with:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Trusted service providers (e.g., hosting, email, analytics)</li>
            <li>Payment processors (e.g., Stripe)</li>
            <li>Business partners and implementation consultants (under NDA)</li>
            <li>Legal or regulatory authorities when required by law</li>
          </Box>
          <Typography variant="body1" color="text.secondary">
            All third parties are contractually obligated to protect your data.
          </Typography>
        </Section>

        <Section title="6. Data Retention">
          <Typography variant="body1" color="text.secondary">
            We retain your data only as long as necessary to fulfill the purposes described in this
            policy, including for legal, accounting, or reporting requirements.
          </Typography>
        </Section>

        <Section title="7. Data Transfers">
          <Typography variant="body1" color="text.secondary">
            Your data may be processed and stored in countries outside your jurisdiction (e.g., the
            United States). When we transfer data internationally, we ensure safeguards are in
            place (e.g., Standard Contractual Clauses under GDPR).
          </Typography>
        </Section>

        <Section title="8. Your Privacy Rights">
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Depending on your location, you may have the right to:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Access your personal information</li>
            <li>Request correction or deletion</li>
            <li>Object to or restrict processing</li>
            <li>Withdraw consent (where applicable)</li>
            <li>Request data portability</li>
          </Box>
          <Typography variant="body1" color="text.secondary">
            To exercise your rights, email us at info@opsz.io.
          </Typography>
        </Section>

        <Section title="9. Cookies and Tracking">
          <Typography variant="body1" color="text.secondary">
            We use cookies and similar technologies to improve the user experience, analyze
            platform usage, and support marketing efforts. You can manage cookie preferences via
            our Cookie Policy.
          </Typography>
        </Section>

        <Section title="10. Security">
          <Typography variant="body1" color="text.secondary">
            We take data protection seriously and implement technical and organizational measures
            to protect your information, including encryption, role-based access control, and regular
            security audits.
          </Typography>
        </Section>

        <Section title="11. Children’s Privacy">
          <Typography variant="body1" color="text.secondary">
            OpsZ is a business-to-business platform and is not intended for children under 16.
            We do not knowingly collect personal data from children.
          </Typography>
        </Section>

        <Section title="12. Changes to This Policy">
          <Typography variant="body1" color="text.secondary">
            We may update this Privacy Policy from time to time. When we do, we will post the
            updated version on this page and revise the "Last Updated" date.
          </Typography>
        </Section>

        <Section title="13. Contact Us">
          <Typography variant="body1" color="text.secondary">
            If you have any questions or concerns about this Privacy Policy or your data, please
            contact us at:
            <br />
            Email: info@opsz.io
            <br />
            Address: 131 Continental Drive., Suite 305, Newark, DE 19713
          </Typography>
        </Section>
      </Container>
    </ThemeProvider>
  );
}
