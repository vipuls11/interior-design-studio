"use client";

import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import createEmotionCache from '@/src/createEmotionCache';
import theme from '@/src/theme';

// Client-side cache, shared across the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
