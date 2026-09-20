"use client";
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import {LivingROOM, dinning, bedROOM, commercial, interiors} from "@/image";

const services = [
  {
    title: "LIVING ROOM",
    desc: "Enjoy your usual lifestyle while we bring your vision to life",
    icon: LivingROOM,
  },
  {
    title: "DINNING ROOM",
    desc: "Your trusted advisor within MINDCRAFT STUDIO *",
    icon: dinning,
  },
  {
    title: "BEDROOM",
    desc: "Enhanced service for key clients",
    icon: bedROOM,
  },
  {
    title: "MODULAR KITCHEN",
    desc: "The project will be designed exclusively for you based on individual sketches",
    icon: interiors,
  },
  {
    title: "DINNING SPACE",
    desc: "We will offer you the most favorable terms for your project",
    icon: dinning,
  },
  {
    title: "OFFICE SPACE",
    desc: "A precise project management system with clear approval milestones",
    icon: commercial,
  }
];

const Partnership = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: '#000', py: 15 }}>
      <Container maxWidth="xl">
        {/* SECTION HEADER */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h4" sx={{ 
            color: 'white', 
            fontWeight: 400, 
            letterSpacing: '0.1em',
            mb: 1
          }}>
            <Box component="span" sx={{ color: theme.palette.secondary.main }}>MINDCRAFT STUDIO</Box> — WHERE YOUR VISION TAKES SHAPE
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
            An exceptional service experience tailored to discerning clients
          </Typography>
        </Box>

        {/* SERVICES GRID */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
          }}
        >
          {services.map((item, index) => (
            <Box key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    bgcolor: '#1a1a1a',
                    borderRadius: '24px',
                    p: 4,
                    height: '200px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: '0.3s',
                    '&:hover': {
                      borderColor: 'rgba(212, 141, 59, 0.4)',
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  {/* Left Content */}
                  <Box sx={{ maxWidth: '65%' }}>
                    <Typography variant="subtitle1" sx={{ 
                      color: theme.palette.secondary.main, 
                      fontWeight: 700, 
                      mb: 2,
                      letterSpacing: '0.05em'
                    }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      lineHeight: 1.6,
                      fontWeight: 300
                    }}>
                      {item.desc}
                    </Typography>
                  </Box>

                  {/* Right Icon */}
                  <Box 
                    component="img" 
                    src={item.icon.src} 
                    alt={item.title}
                    sx={{ 
                      height: '160px', 
                      width: '200px',
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
                      borderRadius:'28px'
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

export default Partnership;