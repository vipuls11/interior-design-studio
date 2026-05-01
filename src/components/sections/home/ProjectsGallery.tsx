"use client";
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// UPDATE THE DATA: Include hover images
// I have provided placeholder paths. Add your own "-hover" image pairs to your assets folder.
const projectCategories = [
  {
    title: "ARCHITECTURE",
    primaryImage: "https://media.studia-54.com/thumbnail_1_6_65b3133039.png", 
    hoverImage: "https://media.studia-54.com/large_1_6_65b3133039.png", // NEW IMAGE
  },
  {
    title: "INTERIORS",
    primaryImage: "https://media.studia-54.com/thumbnail_1_3_68e625bf85.png", 
    hoverImage: "https://media.studia-54.com/thumbnail_1_3_68e625bf85.png", // NEW IMAGE
  },
  {
    title: "COMMERCIAL",
    primaryImage: "https://media.studia-54.com/thumbnail_1_2_aba4243c7f.png",
    hoverImage: "https://media.studia-54.com/large_1_2_aba4243c7f.png", // NEW IMAGE
  },
];

const ProjectsGallery = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: '#000', py: 10 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: '#141414',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.05)',
            p: { xs: 4, md: 8 },
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: 'white',
              fontWeight: 400,
              letterSpacing: '0.15em',
              mb: 6,
              textTransform: 'uppercase',
            }}
          >
            MORE THAN{' '}
            <Box component="span" sx={{ color: theme.palette.secondary.main }}>
              650
            </Box>{' '}
            COMPLETED PROJECTS
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {projectCategories.map((item, index) => (
              <Box key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    {/* The main interactive container */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '1 / 1', 
                        borderRadius: '24px',
                        overflow: 'hidden', // Crucial for zoom effect containment
                        mb: 3,
                        cursor: 'pointer',
                        // Triggers for the entire container
                        '&:hover .project-image': {
                          transform: 'scale(1.05)', // Gentle zoom factor
                        },
                        '&:hover .hover-overlay': {
                          opacity: 1, // Reveal the hover image
                        }
                      }}
                    >
                      {/* LAYER 1: Primary Image (The Zooming Base) */}
                      <img
                        src={item.primaryImage}
                        alt={item.title}
                        className="project-image" // Class for the hover trigger above
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          // Performant CSS transitions
                          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)', 
                          willChange: 'transform',
                        }}
                      />

                      {/* LAYER 2: Hover Image (Absolute Positioning) */}
                      <img
                        src={item.hoverImage}
                        alt={`${item.title} secondary`}
                        className="project-image hover-overlay" // Classes for both effects
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: 0, // Hidden by default
                          // Performant CSS transitions for opacity and scale together
                          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-in-out',
                          willChange: 'transform, opacity',
                        }}
                      />
                    </Box>

                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.secondary.main,
                        letterSpacing: '0.2em',
                        fontWeight: 600,
                        fontSize: '12px',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsGallery;