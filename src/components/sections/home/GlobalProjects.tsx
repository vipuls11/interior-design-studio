"use client";
import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Lucide substitute

// PLACEHOLDERS FOR YOUR ASSETS
// Before running, add these specific assets to your public/assets/ folder
// These should be high-quality PNGs with specific 3D glass and bronze lighting effects
const GLOBE_IMG_SRC = "https://studia-54.com/planet.webp";
const HOUSE_ICON_SRC = "https://media.studia-54.com/icon_0_3_8d9d85740a.webp";
const TROPHY_ICON_SRC = "https://media.studia-54.com/icon_1_3_6973aac7ba.webp";
const CHAIR_ICON_SRC = "https://media.studia-54.com/icon_2_3_5ac879a3f2.webp";
const STAR_ICON_SRC = "https://media.studia-54.com/icon_3_3_6c2187c2c4.webp";

// Custom Data structure to match the cards
const statsData = [
  { value: "1 200 m²", label: "average project area", icon: HOUSE_ICON_SRC },
  {
    value: "98%",
    label: "of customers recommend* us",
    sub: "*We continuously measure client loyalty index (NPS)",
    icon: TROPHY_ICON_SRC,
  },
  { value: "2 000 m²", label: "in-house manufacturing facility in Saint-Petersburg", icon: CHAIR_ICON_SRC },
  { value: "10+ years", label: "of expertise in architecture, design, and construction", icon: STAR_ICON_SRC },
];

const GlobalProjects = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: '#000', color: 'white', py: 15, overflow: 'hidden' }}>
      <Container maxWidth="xl" >
        {/* Top section with text and globe */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
          gap: { xs: 6, md: 8 },
          alignItems: 'center',
          mb: 10,
          position: 'relative'
        }}>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h3" sx={{
                mb: 3, maxWidth: { xs: '100%', md: '520px' }, lineHeight: 1.2
              }}>
                Completed projects in 32 countries
              </Typography>

              <Typography variant="body1" sx={{
                color: 'rgba(255,255,255,0.6)',
                mb: 5, maxWidth: { xs: '100%', md: '450px' }, lineHeight: 1.6
              }}>
                We have showcasing projects in the distinctive Studia 54 * style around the world{' '}
                <Box component="span" sx={{ color: theme.palette.secondary.main }}>
                  the most extensive portfolio
                </Box>
              </Typography>

              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: '50px',
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.main,
                  px: 4, py: 1.5, fontSize: '12px',
                  letterSpacing: '0.1em',
                  '&:hover': { borderColor: '#fff', color: '#fff' }
                }}
              >
                DISCOVER PORTFOLIO
              </Button>
            </motion.div>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              <Box
                component="img"
                src={GLOBE_IMG_SRC}
                alt="Global presence globe"
                sx={{
                  width: { xs: '70%', md: '100%' },
                  maxWidth: '520px',
                  display: 'block',
                  filter: 'drop-shadow(0 0 50px rgba(212, 141, 59, 0.15))'
                }}
              />
            </motion.div>
          </Box>
        </Box>

        {/* Bottom section: stat cards grid */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
          gap: 3,
          zIndex: 2,
          position: 'relative'
        }}>
          {statsData.map((item, idx) => (
            <Box key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Box sx={{
                  bgcolor: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '24px',
                  p: 4,
                  height: '250px',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative', overflow: 'hidden',
                  transition: '0.3s',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.06)',
                    borderColor: 'rgba(212, 141, 59, 0.3)'
                  }
                }}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 400, mb: 1 }}>
                      {item.value}
                    </Typography>
                    <Typography variant="body2" sx={{
                      color: 'rgba(255,255,255,0.5)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em', fontSize: '11px',
                      lineHeight: 1.5
                    }}>
                      {item.label}
                    </Typography>
                    {item.sub && (
                      <Typography sx={{
                        fontSize: '9px',
                        color: 'rgba(255,255,255,0.3)',
                        mt: 1, lineHeight: 1.2
                      }}>
                        {item.sub}
                      </Typography>
                    )}
                  </Box>

                  <Box
                    component="img"
                    src={item.icon}
                    alt={`${item.label} icon`}
                    sx={{
                      width: '110px',
                      alignSelf: 'flex-end',
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          ))}
        </Box>

       
        
      </Container>
    </Box>
  );
};

export default GlobalProjects;
