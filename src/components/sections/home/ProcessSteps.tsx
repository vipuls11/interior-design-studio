"use client";
import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "FILL OUT THE FORM",
    desc: "Provide your name and current phone number",
  },
  {
    id: 2,
    title: "WE WILL CONTACT YOU",
    desc: "Our personal expert will discuss your project's requirements and introduce you to our approach",
  },
  {
    id: 3,
    title: "RECEIVE A TAILORED OFFER",
    desc: "After a detailed review of your wishes, we will prepare a personalized project plan",
  },
];

const ProcessSteps = () => {
  const theme = useTheme();
  
  // Color palette matching image_4ca139.png
  const GOLD = '#ffb347'; 
  const DARK_CIRCLE = '#1a1a1a';

  return (
    <Box sx={{ bgcolor: '#000', py: 15 }}>
      <Container maxWidth="xl">
        {/* --- SECTION HEADING --- */}
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontWeight: 300,
              letterSpacing: '0.1em',
              lineHeight: 1.4,
              textTransform: 'uppercase',
              maxWidth: '900px',
              mx: 'auto'
            }}
          >
            LEARN MORE ABOUT{' '}
            <Box component="span" sx={{ color: GOLD }}>
              CREATING YOUR DREAM PROJECT
            </Box>{' '}
            FROM YOUR PERSONAL EXPERT
          </Typography>
        </Box>

        {/* --- STEPS GRID --- */}
        <Grid container spacing={8}> {/* Increased spacing for the larger badges */}
          {steps.map((step, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={step.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Box sx={{ position: 'relative', textAlign: 'center' }}>
                  
                  {/* --- EXACT DESIGN FROM image_4ca139.png --- */}
                  <Box
                    sx={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: DARK_CIRCLE,
                      color: GOLD,
                      fontSize: '32px',
                      fontWeight: 400,
                      mx: 'auto',
                      position: 'relative',
                      zIndex: 2,
                      mb: 5, // Pulls the badge down to overlap the card
                      boxShadow: '0px 10px 20px rgba(0,0,0,0.6), inset 0px 1px 2px rgba(255,255,255,0.05)',
                      
                      // The top-arc border effect
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -1,
                        borderRadius: '50%',
                        padding: '1px', // Border thickness
                        background: `conic-gradient(from 4deg, ${GOLD} 0deg, transparent 90deg, transparent 270deg, ${GOLD} 360deg)`,
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      },
                    }}
                  >
                    {step.id}
                  </Box>

                  {/* --- CARD CONTENT --- */}
                  <Box
                    sx={{
                      bgcolor: '#0a0a0a',
                      borderRadius: '24px',
                      p: 4,
                      minHeight: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      border: '1px solid rgba(255,255,255,0.05)',
                      transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        borderColor: 'rgba(255, 179, 71, 0.3)',
                        bgcolor: '#111',
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: GOLD,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        mb: 2,
                        textTransform: 'uppercase'
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.7,
                        fontWeight: 300,
                        maxWidth: '280px',
                        mx: 'auto'
                      }}
                    >
                      {step.desc}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProcessSteps;