'use client';

import { useEffect, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const COOKIE_NAME = 'mindcraft_cookie_consent';

type ConsentValue = 'accepted' | 'essential';

function setConsentCookie(value: ConsentValue) {
  if (typeof document === 'undefined') {
    return;
  }

  const secureFlag = window.location.protocol === 'https:' ? '; Secure' : '';
  const cookieValue = `${COOKIE_NAME}=${value}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax${secureFlag}`;
  document.cookie = cookieValue;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const consentCookie = document.cookie
      .split('; ')
      .find((item) => item.startsWith(`${COOKIE_NAME}=`));

    setVisible(!consentCookie);
  }, []);

  const handleConsent = (value: ConsentValue) => {
    setConsentCookie(value);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        insetX: 0,
        bottom: 16,
        px: { xs: 2, md: 4 },
        zIndex: 1400,
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          maxWidth: 1200,
          backgroundColor: 'rgba(15, 15, 15, 0.96)',
          border: '1px solid rgba(212, 141, 59, 0.4)',
          borderRadius: 3,
          boxShadow: '0 18px 50px rgba(0, 0, 0, 0.35)',
          p: { xs: 2.5, md: 3 },
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{ color: '#fff', fontWeight: 600, mb: 0.75 }}
            >
              We use cookies
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              We use cookies to improve your browsing experience and understand how the site is used.
              You can accept all cookies or keep only the essentials.
            </Typography>
          </Box>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <Button
              variant="outlined"
              onClick={() => handleConsent('essential')}
              sx={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: '#fff',
                px: 2.5,
                py: 1,
                borderRadius: '999px',
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#d48d3b',
                  backgroundColor: 'rgba(212, 141, 59, 0.08)',
                },
              }}
            >
              Only necessary
            </Button>

            <Button
              variant="contained"
              onClick={() => handleConsent('accepted')}
              sx={{
                backgroundColor: '#d48d3b',
                color: '#fff',
                px: 2.5,
                py: 1,
                borderRadius: '999px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#b3762f',
                },
              }}
            >
              Accept cookies
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
