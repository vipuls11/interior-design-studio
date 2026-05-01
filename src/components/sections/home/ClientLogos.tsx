// "use client";
// import React, { useState } from 'react';
// import { Box, Typography, Container, useTheme } from '@mui/material';
// import { motion, useAnimationControls } from 'framer-motion';

// // Replace these with your actual logo paths from public/assets/
// const logos = [
//   "https://media.studia-54.com/image_7_3951b87320.webp",
//   "https://media.studia-54.com/image_11_011333fc0b.webp",
//   "https://media.studia-54.com/image_12_47595e2b5d.webp",
//   "https://media.studia-54.com/image_8_db5eafad91.webp",
//   "https://media.studia-54.com/image_233_b1210fb3a5.webp",
//   "https://media.studia-54.com/Mandarin_Oriental_Hotel_Group_logo_1_b41768ec41.webp",
//   "https://media.studia-54.com/image_6_db947332b0.webp",
//   "https://media.studia-54.com/image_2df69079d3.webp",
//   "https://media.studia-54.com/image_9_3766d37f9d.webp",
// ];

// const ClientLogos = () => {
//   const theme = useTheme();
  
//   // We double the array to create a seamless infinite loop
//   const duplicatedLogos = [...logos, ...logos];

//   return (
//     <Box sx={{ bgcolor: '#000', py: 5 }}>
//       <Container maxWidth="xl">
//         {/* Main Wrapper: Charcoal background with rounding */}
//         <Box
//           sx={{
//             bgcolor: '#141414',
//             borderRadius: '24px',
//             border: '1px solid rgba(255,255,255,0.05)',
//             py: 6,
//             px: 4,
//             overflow: 'hidden', // Hides the logos outside the box
//           }}
//         >
//           {/* Section Headline */}
//           <Typography
//             variant="body1"
//             align="center"
//             sx={{
//               color: 'white',
//               letterSpacing: '0.1em',
//               mb: 6,
//               fontSize: { xs: '12px', md: '16px' },
//               fontWeight: 300,
//               textTransform: 'uppercase',
//             }}
//           >
//             WE ARE CHOSEN BY THOSE{' '}
//             <Box component="span" sx={{ color: theme.palette.secondary.main }}>
//               WHO STRIVE FOR EXCELLENCE
//             </Box>{' '}
//             — AMONG OUR CLIENTS:
//           </Typography>

//           {/* Marquee Container */}
//           <Box
//             sx={{
//               position: 'relative',
//               width: '100%',
//               display: 'flex',
//               // Subtle fade-out effect on the edges for luxury feel
//               '&::before, &::after': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 width: '100px',
//                 height: '100%',
//                 zIndex: 2,
//               },
//               '&::before': {
//                 left: 0,
//                 background: 'linear-gradient(to right, #141414, transparent)',
//               },
//               '&::after': {
//                 right: 0,
//                 background: 'linear-gradient(to left, #141414, transparent)',
//               },
//             }}
//           >
//             <motion.div
//               style={{
//                 display: 'flex',
//                 gap: '80px', // Spacing between logos
//                 alignItems: 'center',
//               }}
//               // INFINITE ANIMATION LOGIC
//               animate={{
//                 x: ['0%', '-50%'], // Moves half the width (the first set of logos)
//               }}
//               transition={{
//                 duration: 25, // Speed of movement
//                 ease: 'linear',
//                 repeat: Infinity,
//               }}
//               // PAUSE ON HOVER LOGIC
//               whileHover={{ animationPlayState: 'paused' }}
//             >
//               {duplicatedLogos.map((logo, index) => (
//                 <Box
//                   key={index}
//                   component="img"
//                   src={logo}
//                   alt={`Client Logo ${index}`}
//                   sx={{
//                     height: { xs: '30px', md: '45px' }, // Responsive logo heights
//                     width: 'auto',
//                     opacity: 0.6, // Muted look to match reference
//                     filter: 'brightness(0) invert(1)', // Forces white logos
//                     transition: 'opacity 0.3s',
//                     '&:hover': { opacity: 1 },
//                   }}
//                 />
//               ))}
//             </motion.div>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ClientLogos;

"use client";
import React from 'react';
import { Box, Typography, Container, useTheme, GlobalStyles } from '@mui/material';
import { motion } from 'framer-motion';

const logos = [
  "https://media.studia-54.com/image_7_3951b87320.webp",
  "https://media.studia-54.com/image_11_011333fc0b.webp",
  "https://media.studia-54.com/image_12_47595e2b5d.webp",
  "https://media.studia-54.com/image_8_db5eafad91.webp",
  "https://media.studia-54.com/image_233_b1210fb3a5.webp",
  "https://media.studia-54.com/Mandarin_Oriental_Hotel_Group_logo_1_b41768ec41.webp",
  "https://media.studia-54.com/image_6_db947332b0.webp",
  "https://media.studia-54.com/image_2df69079d3.webp",
  "https://media.studia-54.com/image_9_3766d37f9d.webp",
];

const ClientLogos = () => {
  const theme = useTheme();
  const duplicatedLogos = [...logos, ...logos, ...logos]; // Triple for extra smoothness

  return (
    <Box sx={{ bgcolor: '#000', py: 5 }}>
      {/* 1. DEFINE THE CSS KEYFRAMES */}
      <GlobalStyles styles={{
        '@keyframes marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' } // Moves exactly one set of logos
        }
      }} />

      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: '#141414',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.05)',
            py: 6,
            px: 0, // Set to 0 to let logos flow edge-to-edge inside the rounding
            overflow: 'hidden',
          }}
        >
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: 'white',
              letterSpacing: '0.1em',
              mb: 6,
              fontSize: { xs: '14px', md: '24px' },
              fontWeight: 500,
              textTransform: 'uppercase',
            }}
          >
            WE ARE CHOSEN BY THOSE{' '}
            <Box component="span" sx={{ color: theme.palette.secondary.main }}>
              WHO STRIVE FOR EXCELLENCE
            </Box>{' '}
            — AMONG OUR CLIENTS:
          </Typography>

          {/* 2. THE MARQUEE CONTAINER */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              position: 'relative',
              // Edge fades for luxury look
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                width: '150px',
                height: '100%',
                zIndex: 2,
              },
              '&::before': { 
                left: 0, 
                background: 'linear-gradient(to right, #141414, transparent)' 
            },
              '&::after': { right: 0, 
                background: 'linear-gradient(to left, #141414, transparent)' 
            },
            }}
          >
            <Box
              component={motion.div}
              sx={{
                display: 'flex',
                gap: '80px',
                whiteSpace: 'nowrap',
                // Applying the CSS animation directly
                animation: 'marquee 30s linear infinite',
                // 3. THE FIX: Native CSS pause on hover
                '&:hover': {
                  animationPlayState: 'paused',
                }
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <Box
                  key={index}
                  component="img"
                  src={logo}
                  alt="Client Logo"
                  sx={{
                    height: { xs: '25px', md: '40px' },
                    width: 'auto',
                    opacity: 0.5,
                    filter: 'brightness(0) invert(1)', // Ensures pure white logos
                    flexShrink: 0,
                    transition: 'opacity 0.3s',
                    '&:hover': { opacity: 1 }
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientLogos;