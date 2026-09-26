"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Box,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Menu, X } from 'lucide-react';

import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import { mindcraftBGLOGO } from '@/image';

const navLinks = [
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACTS', path: '/contacts' },
  { name: 'SERVICES', path: '/services' },
];

const Navbar = () => {
  const isScrolled = useScrollTrigger(20);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousHeight = document.body.style.height;

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.height = previousHeight;
      document.documentElement.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  const renderDesktopLinks = () => (
    <Stack
      direction="row"
      spacing={{ xs: 2, sm: 3, md: 6 }}
      sx={{
        height: '100%',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
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
              color: 'white',
              transition: 'opacity 0.2s ease',
              '&:hover': { opacity: 1 },
            }}
          >
            {link.name}
          </Typography>
        </Link>
      ))}
    </Stack>
  );

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
        backgroundColor: isScrolled ? 'rgba(12, 12, 12, 0.78)' : 'rgba(0, 0, 0, 0.42)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          sx={{
            minHeight: { xs: '64px', md: '70px' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ width: { xs: '48px', md: '150px' }, display: 'flex', alignItems: 'center' }}>
            {isMobile ? (
              <IconButton
                aria-label="Open navigation menu"
                onClick={() => setMobileOpen(true)}
                sx={{
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
                }}
              >
                <Menu size={20} />
              </IconButton>
            ) : null}
          </Box>

          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex' }}>
            <Image
              src={mindcraftBGLOGO}
              alt="Mindcraft Studio"
              width={200}
              priority
              style={{
                width: '100%',
                maxWidth: isMobile ? 150 : 250,
                height: 'auto',
                objectFit: 'contain',
                cursor: 'pointer',
                display: 'block',
              }}
            />
          </Link>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              width: { xs: '48px', md: '150px' },
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            {!isMobile && (
              <Link href="/contacts" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    cursor: 'pointer',
                    color: 'white',
                    whiteSpace: 'nowrap',
                  }}
                >
                  CONTACT US
                </Typography>
              </Link>
            )}
            {!isMobile && <MapPin size={16} strokeWidth={2.5} />}
          </Stack>
        </Stack>

        {!isMobile && (
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: -12 }}
                animate={{ height: '50px', opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }}
                style={{ overflow: 'hidden' }}
              >
                {renderDesktopLinks()}dsfdf
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeMobileMenu}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              backgroundColor: '#0f0f0f',
              color: 'white',
              borderLeft: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
              overflow: 'hidden',
            },
          },
        }}
      >
        <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Stack
            direction="row"
            sx={{
              mb: 4,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6" sx={{ letterSpacing: '0.12em', fontWeight: 700 }}>
              MENU
            </Typography>
            <IconButton aria-label="Close navigation menu" onClick={closeMobileMenu} sx={{ color: 'white' }}>
              <X size={20} />
            </IconButton>
          </Stack>

          <Stack spacing={2.5}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    letterSpacing: '0.12em',
                    fontWeight: 600,
                    opacity: 0.9,
                    '&:hover': { opacity: 1 },
                  }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}

            <Link href="/contacts" onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  mt: 2,
                  color: 'white',
                  alignItems: 'center',
                }}
              >
                <MapPin size={16} strokeWidth={2.5} />
                <Typography variant="body2" sx={{ letterSpacing: '0.12em', fontWeight: 600 }}>
                  CONTACT US
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;