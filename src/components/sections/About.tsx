import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: 'white',
        px: { xs: 2, sm: 3 },
        pt: { xs: '100px', md: '130px' },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'serif',
              fontWeight: 300,
              letterSpacing: { xs: '0.08em', md: '0.2em' },
              textTransform: 'uppercase',
              mb: 3,
              fontSize: { xs: '2.1rem', sm: '3rem', md: '4rem' },
              lineHeight: 1.1,
            }}
          >
            About §TUDIA 54®
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              opacity: 0.8,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.05rem', md: '1.5rem' },
            }}
          >
            We are a premier interior design studio specializing in creating exceptional spaces
            that blend functionality, aesthetics, and innovation. Our team of expert designers
            brings years of experience in transforming ordinary spaces into extraordinary environments.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6 }}>
          <Box>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
              Our Philosophys
            </Typography>
            <Typography sx={{ lineHeight: 1.8, opacity: 0.9 }}>
            At §TUDIA 54®, we believe that great design is not just about aesthetics—it&apos;s about
            creating spaces that enhance the way people live, work, and interact. Every project
            is approached with meticulous attention to detail, innovative thinking, and a deep
            understanding of our clients&apos; needs and aspirations.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
              Our Expertise
            </Typography>
            <Typography sx={{ lineHeight: 1.8, opacity: 0.9 }}>
              From residential to commercial spaces, we specialize in modern, contemporary design
              that reflects the unique personality and lifestyle of each client. Our expertise spans
              across architectural planning, material selection, lighting design, and space optimization.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
