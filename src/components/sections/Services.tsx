import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { Palette, Lightbulb, Ruler, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette size={48} />,
      title: 'Interior Design',
      description: 'Complete interior design solutions from concept to completion. We create spaces that reflect your personality and lifestyle.',
    },
    {
      icon: <Lightbulb size={48} />,
      title: 'Lighting Design',
      description: 'Strategic lighting solutions that enhance ambiance, functionality, and energy efficiency in your space.',
    },
    {
      icon: <Ruler size={48} />,
      title: 'Space Planning',
      description: 'Optimal space utilization and layout planning to maximize functionality and flow in your environment.',
    },
    {
      icon: <Wrench size={48} />,
      title: 'Project Management',
      description: 'End-to-end project coordination ensuring timelines, budgets, and quality standards are met throughout the process.',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: 'white',
        paddingTop: '130px', // Account for fixed navbar
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              mb: 4,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              opacity: 0.8,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            From initial consultation to final implementation, we offer comprehensive interior design
            services tailored to meet your unique needs and vision.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 4 }}>
          {services.map((service) => (
            <Card
              key={service.title}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(255,255,255,0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      color: 'white',
                      opacity: 0.8,
                      mb: 3,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography sx={{ lineHeight: 1.6, opacity: 0.8 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
            Ready to Start Your Project?
          </Typography>
          <Typography sx={{ opacity: 0.8, maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>
            Contact us today to discuss your vision and let us help you create the perfect space.
            Our team is ready to bring your ideas to life with our expertise and attention to detail.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;