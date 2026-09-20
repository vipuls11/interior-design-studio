"use client";
import React from 'react';
import { Box, Container, Typography, Grid, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { LivingROOM } from "@/image";

const StyleDiscovery = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: '#000', py: 10 }}>
      <Container maxWidth="xl">
        {/* MAIN OUTER CONTAINER */}
        <Box
          sx={{
            bgcolor: '#141414', // Lighter charcoal for the card background
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.05)',
            p: { xs: 4, md: 8 },
            overflow: 'hidden'
          }}
        >
          <Grid container spacing={6} >
            {/* LEFT SIDE: CONTENT */}
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* HEADLINE */}
                <Typography variant="h3" sx={{ 
                  color: 'white', 
                  fontWeight: 300, 
                  letterSpacing: '0.05em',
                  lineHeight: 1.1,
                  mb: 4
                }}>
                  DISCOVER <Box component="span" sx={{ color: theme.palette.secondary.main }}>THE</Box> <br />
                  <Box component="span" sx={{ color: theme.palette.secondary.main }}>MINDCRAFT STUDIO</Box> STYLE
                </Typography>

                {/* DESCRIPTION */}
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  fontWeight: 300,
                  maxWidth: '400px',
                  mb: 6,
                  lineHeight: 1.6
                }}>
                 From thoughtful concepts to refined details. We design spaces around the way you live, work, and connect.
                </Typography>

                {/* STATISTIC */}
                {/* <Box sx={{ mb: 6 }}>
                  <Typography variant="h4" sx={{ color: theme.palette.secondary.main, fontWeight: 500, mb: 0.5 }}>
                    98%
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.02em' }}>
                    of our customers recommend us
                  </Typography>
                </Box> */}

                {/* BUTTON */}
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    color: 'white',
                    borderRadius: '50px',
                    px: 6,
                    py: 1.8,
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    '&:hover': { bgcolor: '#b3762f' }
                  }}
                >
                  Contact a manager
                </Button>
              </motion.div>
            </Grid>

            {/* RIGHT SIDE: TEAM IMAGE */}
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src={LivingROOM.src}// Add your black & white team photo here
                  alt="MINDCRAFT STUDIO Team"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '24px',
                    display: 'block',
                    // Grayscale filter to match the reference look
                    filter: 'grayscale(100%) brightness(0.9)',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default StyleDiscovery;