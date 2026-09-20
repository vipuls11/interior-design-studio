"use client";
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Stack, 
  MenuItem, 
  Select,
  useTheme,
  alpha
} from '@mui/material';
import { motion } from 'framer-motion';
import { commercial } from "@/image";
const ContactForm = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: '#000', pb: 10 }}>
      <Container maxWidth="xl" >
        {/* MAIN OUTER CARD */}
        <Box
          sx={{
            bgcolor: '#141414',
            borderRadius: '32px',
            border: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden',
            mx:4
          }}
        >
          <Grid container >
            {/* LEFT SIDE: CEO IMAGE & WATERMARK */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative', minHeight: '500px' }}>
              {/* Background Watermark */}
              <Typography
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '10%',
                  transform: 'translateY(-50%)',
                  fontSize: '30rem',
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.03)',
                  zIndex: 0,
                  pointerEvents: 'none',
                  lineHeight: 1
                }}
              >
                S54
              </Typography>

              {/* CEO Photo */}
              <Box
                component="img"
                src={commercial.src} // Replace with your B&W photo
                alt="MINDCRAFT STUDIO CEOs"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) brightness(0.8)',
                  position: 'relative',
                  zIndex: 1
                }}
              />

              {/* CEO Names Overlay */}
              {/* <Box sx={{ position: 'absolute', bottom: 40, left: 40, zIndex: 2 }}>
                <Typography variant="caption" sx={{ color: '#d48d3b', fontWeight: 600, letterSpacing: '0.1em' }}>
                  OLGA IVANOVA AND STANISLAV KLUEV - <br />
                  CEO MINDCRAFT STUDIO
                </Typography>
              </Box> */}
            </Grid>

            {/* RIGHT SIDE: THE FORM */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 4, md: 8 }, display: 'flex', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 300, mb: 2, letterSpacing: '0.05em' }}>
                  TURN YOUR DREAMS OF THE <br />
                  PERFECT HOME INTO REALITY <br />
                  <Box component="span" sx={{ color: '#d48d3b' }}>WITH MINDCRAFT STUDIO</Box>
                </Typography>

                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 4, maxWidth: '450px', lineHeight: 1.6 }}>
                  Leave your contact details, and our manager will reach out to you to discuss your project. 
                  We look forward to beginning this inspiring journey with you.
                </Typography>

                <Typography sx={{ color: 'white', fontSize: '14px', mb: 4 }}>
                  Fill out the form and our manager will contact you
                </Typography>

                {/* FORM INPUTS */}
                <Stack spacing={4} component="form">
                  <TextField
                    fullWidth
                    variant="standard"
                    placeholder="Your name"
                    sx={{
                      '& .MuiInput-root': {
                        '&:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                        '&:after': { borderBottomColor: '#d48d3b' }
                      },
                      '& .MuiInput-input': {
                        color: 'white',
                        pb: 1
                      }
                    }}
                  />

                  <Stack direction="row" spacing={2}>
                    <Select
                      defaultValue="AE"
                      variant="standard"
                      sx={{ 
                        color: 'white', 
                        width: '120px',
                        '&:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                        '&:after': { borderBottomColor: '#d48d3b' },
                        '.MuiSvgIcon-root': { color: 'rgba(255,255,255,0.5)' }
                      }}
                    >
                      <MenuItem value="AE">AE (+971)</MenuItem>
                      <MenuItem value="RU">RU (+7)</MenuItem>
                      <MenuItem value="IN">IN (+91)</MenuItem>
                    </Select>
                    <TextField
                      fullWidth
                      variant="standard"
                      placeholder="50 123 4567"
                      sx={{
                        '& .MuiInput-root': {
                          '&:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                          '&:after': { borderBottomColor: '#d48d3b' }
                        },
                        '& .MuiInput-input': {
                          color: 'white',
                          pb: 1
                        }
                      }}
                    />
                  </Stack>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: '#d48d3b',
                      color: 'white',
                      borderRadius: '50px',
                      py: 2,
                      mt: 2,
                      fontSize: '14px',
                      textTransform: 'none',
                      fontWeight: 500,
                      '&:hover': { bgcolor: '#b3762f' }
                    }}
                  >
                    Request a manager's consultation
                  </Button>

                  <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
                    By clicking the "Send" button, I accept the Privacy Policy terms <Box component="span" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>privacy policy</Box>
                  </Typography>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;