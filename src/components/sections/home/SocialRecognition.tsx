"use client";
import React from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Instagram, YouTube, Pinterest } from '@mui/icons-material';
import { Counter } from '@/src/utils/Counter';
// Using a simple SVG for VK to match the design exactly
const VKIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.073 2H8.937C3.338 2 2 3.338 2 8.937v6.126C2 20.662 3.338 22 8.937 22h6.126c5.6 0 6.937-1.338 6.937-6.937V8.937C22 3.338 20.662 2 15.073 2zm3.32 12.822c.31.298.65.565.912.905.285.37.545.76.74 1.18.232.503.045 1.093-.418 1.124l-2.61.012c-.754.08-1.345-.236-1.84-.78-.344-.377-.66-.78-.992-1.17-.184-.216-.385-.41-.65-.41-.284-.002-.456.19-.508.487-.11.643-.03 1.304-.047 1.956-.008.312-.132.54-.44.604-.847.172-1.682.13-2.484-.253-1.464-.698-2.525-1.84-3.413-3.184-1.25-1.896-2.227-3.92-3.122-5.992-.12-.275-.02-.492.27-.5h2.6c.21 0 .375.09.475.29.585 1.176 1.254 2.298 2.054 3.34.194.254.383.513.67.65.25.118.423.01.5-.27.125-.456.166-.924.162-1.396-.01-.98-.246-1.432-.876-1.57-.24-.05-.19-.13-.08-.22.155-.123.364-.203.882-.203h3.585c.34 0 .43.155.474.49.076.604.05 1.21.05 1.815 0 .393-.01.787.056 1.173.064.382.235.534.595.53.284-.002.48-.19.664-.403.826-1.026 1.4-2.182 1.93-3.366.12-.27.273-.415.58-.41l2.766.012c.504.008.68.25.533.72-.25.807-.66 1.52-1.144 2.195-.415.58-.874 1.127-1.32 1.684-.33.407-.312.61.043.95z"/>
  </svg>
);



const SocialRecognition = () => {
  return (
    <Box sx={{ bgcolor: '#000', py:10 }}>
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: '80vh',
        width: '80%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '32px', // Matches your image padding
        margin: 'auto',
        maxWidth: '80%',
      }}
    >
      {/* 1. BACKGROUND VIDEO */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="https://media.studia-54.com/4da2_4ac3_8bb5_de5c5857abbf_5a8c377e49.mp4" />
      </Box>

      {/* 2. GLASSMORPHISM CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            zIndex: 2,
            position: 'relative',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '40px',
            p: { xs: 4, md: 8 },
            textAlign: 'center',
            width: '100%',
            maxWidth: '600px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: 'white',
              letterSpacing: '0.2em',
              fontWeight: 400,
              mb: 2,
              fontSize: '14px',
            }}
          >
            WORLDWIDE RECOGNITION
          </Typography>

          {/* THE ANIMATED COUNTER */}
          <Typography
            variant="h1"
            sx={{
              color: '#d48d3b', // Studia 54 Gold
              fontWeight: 500,
              mb: 1,
              fontSize: { xs: '3rem', md: '5rem' },
              fontFamily: 'sans-serif',
            }}
          >
            <Counter from={0} to={2000000} />
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 4,
              maxWidth: '300px',
              mx: 'auto',
              lineHeight: 1.4,
              textTransform: 'lowercase'
            }}
          >
            people follow our development on social media
          </Typography>

          {/* SOCIAL ICONS */}
          <Stack direction="row" spacing={2} sx={{justifyContent:"center"}}>
            {[Instagram, Pinterest, VKIcon, YouTube].map((Icon, idx) => (
              <IconButton
                key={idx}
                sx={{
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.3)',
                  padding: '10px',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}
              >
                {typeof Icon === 'function' ? <Icon /> : React.createElement(Icon, { sx: { fontSize: 20 } })}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </motion.div>
    </Box>
    </Box>
  );
};

export default SocialRecognition;