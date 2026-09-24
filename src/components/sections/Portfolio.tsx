import React from 'react';
import { Box, Typography, Container, Card, CardMedia, CardContent } from '@mui/material';

const Portfolio = () => {
  const projects = [
    {
      title: 'Modern Living Room',
      description: 'Contemporary design with minimalist aesthetics',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Executive Office',
      description: 'Professional workspace with ergonomic focus',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Luxury Kitchen',
      description: 'High-end finishes and functional layout',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Master Bedroom',
      description: 'Serene retreat with custom lighting',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'RestRAJESH INERIORnt Interior',
      description: 'Dining space with ambient atmosphere',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Retail Store',
      description: 'Commercial space with brand identity',
      image: '/api/placeholder/400/300',
    },
  ];

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
              fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
              lineHeight: 1.1,
            }}
          >
            Our Portfolio
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              opacity: 0.8,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.05rem', md: '1.5rem' },
            }}
          >
            Explore our collection of transformative interior design projects that showcase
            our commitment to excellence and innovation.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
          {projects.map((project) => (
            <Card
              key={project.title}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 250,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white', opacity: 0.6 }}>
                    Project Image
                  </Typography>
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;