"use client";

import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  // subject: string;
  message: string;
};

const initialState: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  // subject: '',
  message: '',
};

const Contacts = () => {
  const [formData, setFormData] = useState<ContactFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setSubmitMessage({
        type: 'error',
        text: 'Please complete your name, email, phone number, and message.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          // service: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || 'Unable to send your message right now.');
      }

      setFormData(initialState);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully. A confirmation email has also been sent to your inbox.',
      });
    } catch (error: unknown) {
      setSubmitMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Something went wrong while sending your message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: 'white',
        px: { xs: 2, sm: 3 },
        pt: { xs: '100px', md: '180px' },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'serif',
              fontWeight: 300,
              letterSpacing: { xs: '0.08em', md: '0.2em' },
              textTransform: 'uppercase',
              mb: 3,
              fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
              lineHeight: 1.1,
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              opacity: 0.8,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.05rem', md: '1.5rem' },
            }}
          >
            Ready to transform your space? Get in touch with our team of expert designers.
            We&apos;re here to bring your vision to life.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6 }}>
          <Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                Get In Touch
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <MapPin size={24} style={{ marginRight: 16, opacity: 0.8 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Address
                  </Typography>
                  <Typography sx={{ opacity: 0.8 }}>
                    Room no 5, jansewa ambewadi, RK Singh Marg,<br />
                    Mogra Village, Mogra Pada, Natwar Nagar,<br />
                    Andheri East, Mumbai, Maharashtra 400069
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Phone size={24} style={{ marginRight: 16, opacity: 0.8 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Phone
                  </Typography>
                  <Typography sx={{ opacity: 0.8 }}>
                    080800 81996
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Mail size={24} style={{ marginRight: 16, opacity: 0.8 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Email
                  </Typography>
                  <Typography sx={{ opacity: 0.8 }}>
                    hello@mindcraftstudio.net
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Clock size={24} style={{ marginRight: 16, opacity: 0.8 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Hours
                  </Typography>
                  <Typography sx={{ opacity: 0.8 }}>
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 10:00 AM - 4:00 PM<br />
                    Sun: Closed
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 2,
                p: 4,
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Send us a Message
              </Typography>

              <TextField
                fullWidth
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                }}
              />

              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                }}
              />

              <TextField
                fullWidth
                name="phone"
                label="Phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                }}
              />

              {/* <TextField
                fullWidth
                name="subject"
                label="Subject"
                value={formData.subject}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                }}
              /> */}

              <TextField
                fullWidth
                name="message"
                label="Message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                }}
              />

              {submitMessage && (
                <Typography
                  sx={{
                    mb: 2,
                    color: submitMessage.type === 'success' ? '#9ae6b4' : '#fbb4b4',
                    fontSize: '14px',
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
                  backgroundColor: 'white',
                  color: 'black',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' },
                  '&.Mui-disabled': { backgroundColor: 'rgba(255,255,255,0.5)', color: 'black' },
                  fontWeight: 600,
                  py: 1.5,
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contacts;