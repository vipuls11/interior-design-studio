"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';

import { commercial } from '@/image';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setSubmitMessage({
        type: 'error',
        text: 'Please fill in your name, email, and phone number.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || 'Unable to send your request right now.');
      }

      setFormData(initialForm);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your request has been sent successfully. We have also sent a confirmation email to your inbox.',
      });
    } catch (error: unknown) {
      setSubmitMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Something went wrong while sending your request.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ bgcolor: '#000', pb: 10 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: '#141414',
            borderRadius: '32px',
            border: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden',
            mx: { xs: 0, md: 4 },
          }}
        >
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative', minHeight: '500px' }}>
              <Box
                component="img"
                src={commercial.src}
                alt="MINDCRAFT STUDIO CEOs"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) brightness(0.8)',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 3, sm: 4, md: 8 }, display: 'flex', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: 'white',
                    fontWeight: 300,
                    mb: 2,
                    letterSpacing: '0.05em',
                    fontSize: { xs: '1.8rem', sm: '2.3rem', md: '2.5rem' },
                    lineHeight: 1.2,
                  }}
                >
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

                <Stack spacing={3} component="form" onSubmit={handleSubmit} noValidate>
                  <TextField
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="standard"
                    placeholder="Your name"
                    sx={{
                      '& .MuiInput-root': {
                        '&:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                        '&:after': { borderBottomColor: '#d48d3b' },
                      },
                      '& .MuiInput-input': {
                        color: 'white',
                        pb: 1,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="standard"
                    placeholder="Your email"
                    sx={{
                      '& .MuiInput-root': {
                        '&:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                        '&:after': { borderBottomColor: '#d48d3b' },
                      },
                      '& .MuiInput-input': {
                        color: 'white',
                        pb: 1,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="standard"
                    placeholder="+91 80800 81996"
                    sx={{
                      '& .MuiInput-root': {
                        '&:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                        '&:after': { borderBottomColor: '#d48d3b' },
                      },
                      '& .MuiInput-input': {
                        color: 'white',
                        pb: 1,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    minRows={4}
                    placeholder="Tell us about your project"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '18px',
                        color: 'white',
                        backgroundColor: 'rgba(255,255,255,0.02)',
                        '& fieldset': {
                          borderColor: 'rgba(255,255,255,0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255,255,255,0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#d48d3b',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />

                  {submitMessage && (
                    <Typography
                      sx={{
                        fontSize: '13px',
                        color: submitMessage.type === 'success' ? '#9ae6b4' : '#fbb4b4',
                        mt: 1,
                      }}
                    >
                      {submitMessage.text}
                    </Typography>
                  )}

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{
                      bgcolor: '#d48d3b',
                      color: 'white',
                      borderRadius: '50px',
                      py: 2,
                      mt: 2,
                      fontSize: '14px',
                      textTransform: 'none',
                      fontWeight: 500,
                      '&:hover': { bgcolor: '#b3762f' },
                      '&.Mui-disabled': { bgcolor: '#7d5631', color: 'rgba(255,255,255,0.7)' },
                    }}
                  >
                    {isSubmitting ? 'Sending...' : "Request a manager's consultation"}
                  </Button>

                  <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
                    By clicking the Send button, I accept the Privacy Policy terms{' '}
                    <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>
                      privacy policy
                    </Link>
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