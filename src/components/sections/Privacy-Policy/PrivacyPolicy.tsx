"use client";

import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';

const policySections = [
  {
    title: '1. Information We Collect',
    content:
      'We may collect personal information such as your name, email address, phone number, project preferences, and any details you voluntarily provide through our contact forms, consultation requests, or email communication. We may also collect non-personal technical information such as browser type, device information, and referral URLs to improve the performance of our website.',
  },
  {
    title: '2. How We Use Your Information',
    content:
      'The information we collect is used to respond to inquiries, provide design consultations, manage project discussions, send updates related to your request, and improve the quality of our services. We may also use anonymized data for internal analytics and to refine user experience across our website.',
  },
  {
    title: '3. Sharing of Information',
    content:
      'We do not sell or rent your personal information. Information may be shared only with trusted service providers who help us operate the website, process inquiries, or deliver our services, and only to the extent necessary. We may also disclose information when required by law or to protect our legal rights.',
  },
  {
    title: '4. Cookies and Tracking',
    content:
      'Our website may use cookies or similar technologies to remember preferences, support site functionality, and analyze visitor behavior. You may disable cookies in your browser settings; however, some features of the site may not work properly if cookies are disabled.',
  },
  {
    title: '5. Data Security',
    content:
      'We take reasonable administrative, technical, and physical safeguards to protect the information we collect. While we strive to protect personal data, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
  },
  {
    title: '6. Your Rights',
    content:
      'You may request access to, correction of, or deletion of your personal information, subject to applicable legal requirements. If you would like to review or update the details we hold about you, please contact our team using the details provided below.',
  },
  {
    title: '7. Contact Information',
    content:
      'If you have questions about this Privacy Policy or how we handle your personal information, please contact us at hello@mindcraftstudio.net or through the contact form on our website. We are committed to responding to privacy-related requests in a timely and respectful manner.',
  },
];

export default function PrivacyPolicy() {
  return (
        <Box
          sx={{
            minHeight: '100vh',
            backgroundColor: '#000',
            color: 'white',
            px: { xs: 2, sm: 3 },
            pt: { xs: '100px', md: '180px' },
            pb: { xs: 6, md: 10 },
          }}
        >
    <Box sx={{ bgcolor: '#000', color: '#fff', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{
                color: '#d48d3b',
                letterSpacing: '0.45em',
                fontWeight: 700,
                fontSize: '0.72rem',
              }}
            >
              Legal Notice
            </Typography>

            <Typography
              variant="h1"
              sx={{
                mt: 2,
                fontWeight: 300,
                letterSpacing: '0.08em',
                fontSize: { xs: '2.2rem', md: '4rem' },
                textTransform: 'uppercase',
              }}
            >
              Privacy Policy
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 760,
                mx: 'auto',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.08rem' },
              }}
            >
              This Privacy Policy explains how Mindcraft Studio collects, uses, and protects personal information when you visit our website or interact with our services.
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: '#111111',
              border: '1px solid rgba(255,255,255,0.08)',
              p: { xs: 3, md: 5 },
            }}
          >
            <List disablePadding sx={{ display: 'grid', gap: 3 }}>
              {policySections.map((section) => (
                <ListItem key={section.title} disableGutters sx={{ display: 'block', p: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#fff',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      mb: 1.5,
                      textTransform: 'none',
                    }}
                  >
                    {section.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.72)',
                      lineHeight: 1.8,
                      fontSize: '0.97rem',
                    }}
                  >
                    {section.content}
                  </Typography>

                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mt: 3 }} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box
            sx={{
              border: '1px solid rgba(212, 141, 59, 0.35)',
              bgcolor: 'rgba(212, 141, 59, 0.04)',
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#d48d3b',
                mb: 1,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Policy Update
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
              This Privacy Policy may be updated from time to time to reflect changes in our practices or legal requirements. Continued use of our website after any update indicates your acceptance of the revised policy.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
    </Box>
  );
}
