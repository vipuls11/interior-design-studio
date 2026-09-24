import { Box, Typography, Container, Button } from '@mui/material';
import Link from 'next/link';
import Hero from '@/components/sections/home/Hero';
import GlobalProjects from '@/components/sections/home/GlobalProjects';
import ProjectsGallery from '@/components/sections/home/ProjectsGallery';
import Partnership from '@/components/sections/home/Partnership';
import StyleDiscovery from '@/components/sections/home/StyleDiscovery';
import SocialRecognition from '@/components/sections/home/SocialRecognition';
import ClientLogos from '@/components/sections/home/ClientLogos';
import ProcessSteps from '@/components/sections/home/ProcessSteps';
import ContactForm from '@/components/sections/home/ContactForm';

export default function Home() {
  return (
    <Box>
    {/* <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: 'white',
        paddingTop: '100px', // Account for fixed navbar
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', py: 12 }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              mb: 4,
              fontSize: { xs: '2.5rem', md: '4rem' },
            }}
          >
            §TUDIA 54®
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 400,
              opacity: 0.8,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              mb: 6,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Crafting exceptional interior spaces that blend innovation, elegance, and functionality.
            Transform your vision into reality with our expert design team.
          </Typography>

          <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/portfolio" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 0,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                VIEW OUR WORK
              </Button>
            </Link>

            <Link href="/contacts" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  px: 4,
                  py: 1.5,
                  borderRadius: 0,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                  },
                }}
              >
                START YOUR PROJECT
              </Button>
            </Link>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              opacity: 0.7,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Scroll to explore our services
          </Typography>
        </Box>
      </Container>
    </Box> */}
    <Hero/>
    <GlobalProjects/>
    <ProjectsGallery/>
    <Partnership/>
    <StyleDiscovery/>
    <SocialRecognition/>
    <ClientLogos/>
    <ProcessSteps/>
    <ContactForm/>
    </Box>
  );
}
