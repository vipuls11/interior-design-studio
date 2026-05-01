"use client";
import React from 'react';
import { Box, Container, Grid, Typography, Stack, Divider, Link } from '@mui/material';
import NextLink from 'next/link';

// Data mapping for maintainability
const navLinks = [
  { label: 'ABOUT US', href: '/about' },
  { label: 'CONTACTS', href: '/contacts' },
  { label: 'SERVICES', href: '/services' },
  { label: 'CAREER', href: '/career' },
  { label: 'BLOG', href: '/blog' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'COMMERCIALS', href: '/commercials' },
];

const serviceLinks = [
  { label: 'ARCHITECTURAL DESIGN', href: '/architectural-design' },
  { label: 'RESIDENTIAL INTERIORS', href: '/residential-interiors' },
  { label: 'FURNITURE BRAND FIFTYFOURMS', href: '/furniture' },
  { label: 'SITE MAP', href: '/sitemap' },
];

const socialLinks = [
  { label: 'Instagram*', href: 'https://instagram.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
  { label: 'VKontakte', href: 'https://vk.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
];

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#000', color: '#fff', pt: 10, pb: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ mb: 10 }}>
          
          {/* COLUMN 1: Main Navigation */}
          <Grid  size={{ xs: 12 ,sm: 6 ,md: 2.4 }}>
            <Stack spacing={2}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  component={NextLink}
                  href={link.href}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    '&:hover': { color: '#d48d3b' }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* COLUMN 2: Services */}
          <Grid size={{ xs: 12 ,sm: 6 ,md: 2.4 }}>
            <Stack spacing={2}>
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  component={NextLink}
                  href={link.href}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    '&:hover': { color: '#d48d3b' }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* COLUMN 3: Regional Contact (Russia & Dubai) */}
          <Grid size={{ xs: 12 ,sm: 6 ,md: 2.4 }}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, display: 'block', mb: 1 }}>RUSSIA</Typography>
                <Typography sx={{ fontSize: '13px', mb: 0.5 }}>+7 (931) 270 54 54</Typography>
                <Link href="mailto:welcome@studia-54.com" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'none', '&:hover': { color: 'white' } }}>welcome@studia-54.com</Link>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, display: 'block', mb: 1 }}>DUBAI</Typography>
                <Typography sx={{ fontSize: '13px', mb: 0.5 }}>+971 (58) 562-45-54</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', lineHeight: 1.5 }}>
                  Platinum Tower, Jumeirah Lake Towers,<br />
                  Star Business Centre DMCC, Unit Number 808-04 (international office)
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* COLUMN 4: Global Offices & Cooperation */}
          <Grid size={{ xs: 12 ,sm: 6 ,md: 2.4 }}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, display: 'block', mb: 1 }}>WE WORK ALL OVER THE WORLD, OFFICE</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', lineHeight: 1.5 }}>
                  191014, St. Petersburg, Novgorodskaya<br />
                  23A, office 340 (pre-registration)
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, display: 'block', mb: 1 }}>COOPERATION</Typography>
                <Link href="mailto:partners@studia-54.com" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'none', '&:hover': { color: 'white' } }}>partners@studia-54.com</Link>
              </Box>
            </Stack>
          </Grid>

          {/* COLUMN 5: Branding & Socials */}
          <Grid size={{ xs: 12 ,sm: 6 ,md: 2.4 }}>
            <Typography variant="h4" sx={{ letterSpacing: '0.2em', fontWeight: 300, mb: 1 }}>STUDIA 54 ®</Typography>
            <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', mb: 4 }}>
              © 2013 — 2026 Studia-54 Interior Design and Engineering
            </Typography>
            
            <Typography variant="caption" sx={{ fontWeight: 700, display: 'block', mb: 2 }}>WE'RE ON SOCIAL MEDIA</Typography>
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'none', '&:hover': { color: 'white' } }}
                >
                  {social.label}
                </Link>
              ))}
            </Stack>
            <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.4 }}>
              *The Meta company is recognized as an extremist organization and is banned in the Russian Federation.
            </Typography>
          </Grid>
        </Grid>

        {/* BOTTOM BAR */}
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
        }}
      >
        <Stack direction="row" spacing={3} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', cursor: 'pointer' }}>
            Ru
          </Typography>
          <Typography sx={{ color: 'white', fontSize: '13px', borderBottom: '1px solid white', cursor: 'pointer' }}>
            En
          </Typography>
          <Link component={NextLink} href="/privacy" sx={{ color: 'white', fontSize: '13px', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
        </Stack>

  <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>
    LLC Studia 54 © All rights reserved
  </Typography>
</Stack>
      </Container>
    </Box>
  );
};

export default Footer;