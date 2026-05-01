"use client";
import React from 'react';
import Link from 'next/link';
import { Box, Typography, Container, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useScrollTrigger } from '../../hooks/useScrollTrigger';


const Navbar = () => {
  const isScrolled = useScrollTrigger(20);

  const navLinks = [
    { name: "ABOUT", path: "/about" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "CONTACTS", path: "/contacts" },
    { name: "SERVICES", path: "/services" }
  ];

  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="xl">
        {/* --- TOP ROW --- */}
        <Stack
          direction="row"
          sx={{ height: '70px', justifyContent: 'space-between', alignItems: 'center' }}
        >
          {/* Language Switcher */}
          <Stack direction="row" spacing={2} sx={{ width: '150px' }}>
            <Typography variant="caption" sx={{ opacity: 0.5, cursor: 'pointer', fontWeight: 600 }}>PY</Typography>
            <Typography variant="caption" sx={{ fontWeight: 800, cursor: 'pointer', borderBottom: '1px solid white' }}>ENG</Typography>
          </Stack>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="h5"
              sx={{
                letterSpacing: '0.3em',
                fontWeight: 300,
                fontFamily: 'serif',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              §TUDIA 54®
            </Typography>
          </Link>

          {/* Contact Info */}
          <Stack direction="row" spacing={1} sx={{ width: '150px', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Link href="/contacts" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="caption" sx={{ fontWeight: 600, letterSpacing: '0.1em', cursor: 'pointer' }}>
                CONTACT US
              </Typography>
            </Link>
            <MapPin size={16} strokeWidth={2.5} />
          </Stack>
        </Stack>

        {/* --- BOTTOM ROW (Animated Menu) --- */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ height: '50px', opacity: 1, y: 0 }}
              animate={{ height: '50px', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
              style={{ overflow: 'hidden' }}
            >
              <Stack
                direction="row"
                spacing={6}
                sx={{ height: '100%', borderTop: '1px solid rgba(255,255,255,0.1)', justifyContent: 'center', alignItems: 'center' }}
              >
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.path} style={{ textDecoration: 'none' }}>
                    <Typography
                      variant="caption"
                      sx={{
                        cursor: 'pointer',
                        letterSpacing: '0.2em',
                        fontWeight: 600,
                        opacity: 0.8,
                        '&:hover': { opacity: 1, transition: '0.3s' }
                      }}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Navbar;