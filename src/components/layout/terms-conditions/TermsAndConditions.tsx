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

const termsSections = [
  {
    title: '1. Scope of Services',
    content:
      'Mindcraft Studio provides interior design consulting, concept development, project planning, and styling guidance for residential and commercial spaces. The details of each service, timeline, fees, and responsibilities will be confirmed in a written agreement before work begins.',
  },
  {
    title: '2. Project Consultation',
    content:
      'Clients are expected to provide necessary information, references, timelines, and approvals in a timely manner. Delays caused by incomplete information, late decisions, or changes in scope may affect delivery timelines and may require additional fees.',
  },
  {
    title: '3. Fees and Payment Terms',
    content:
      'All project fees, deposits, and charges are communicated in advance and must be paid according to the agreed schedule. Outstanding amounts may result in delays to project progress or suspension of services until payment is received.',
  },
  {
    title: '4. Intellectual Property',
    content:
      'Design concepts, presentations, drawings, and materials developed by Mindcraft Studio remain the intellectual property of the studio unless otherwise agreed in writing. Clients may use approved final deliverables for their project purposes only.',
  },
  {
    title: '5. Client Responsibilities',
    content:
      'Clients are responsible for ensuring access to the site, obtaining permits where required, coordinating with contractors, and confirming the final decisions needed for execution. We are not liable for delays that result from third-party work or site conditions outside our control.',
  },
  {
    title: '6. Limitation of Liability',
    content:
      'Mindcraft Studio shall not be liable for indirect, incidental, or consequential damages arising from project delays, design changes, material substitutions, or site-related issues. Our total liability for the services is limited to the fees paid for the applicable project, unless otherwise stated in writing.',
  },
  {
    title: '7. Cancellation and Termination',
    content:
      'Either party may terminate the engagement in accordance with the signed agreement. In the event of cancellation, fees already earned for completed work, consultations, and expenses incurred will remain due and payable.',
  },
  {
    title: '8. Governing Law',
    content:
      'These terms are governed by the laws of the jurisdiction in which Mindcraft Studio operates, without regard to conflict of law principles. Any dispute will be addressed through the applicable legal process in that jurisdiction.',
  },
];

export default function TermsAndConditions() {
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
              Studio Agreement
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
              Terms and Conditions
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
              These terms outline the relationship between Mindcraft Studio and our clients. By engaging with our services, you agree to the terms below.
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
              {termsSections.map((section) => (
                <ListItem key={section.title} disableGutters sx={{ display: 'block', p: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#fff',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      mb: 1.5,
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
              Final notice
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
              This document is provided as a placeholder for demonstration purposes and may be revised by the studio before publishing to production.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
    </Box>
  );
}
