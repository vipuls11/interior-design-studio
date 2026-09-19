"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, Stack, Container, Link } from "@mui/material";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";


const Hero = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const posterUrl =
    "https://media.studia-54.com/mainpage_poster_desktop_d32d52173b.webp";

  useEffect(() => {
    setShowVideo(true);
  }, []);

  const handleCanPlay = () => {
    setIsVideoReady(true);
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* 1. THE VIDEO / THUMBNAIL BACKGROUND */}
      <Box
        component="img"
        src={posterUrl}
        alt="Hero thumbnail"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: isVideoReady ? 0 : 1,
          transition: "opacity 0.6s ease",
        }}
      />

      {showVideo && (
        <Box
          component="video"
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterUrl}
          onCanPlay={handleCanPlay}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            opacity: isVideoReady ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          <source
            src="https://s3.ru1.storage.beget.cloud/4b5ae5ff7535-studia-videos/glavnaya_obrezano_1cad87c532.mp4"
            type="video/mp4"
          />
        </Box>
      )}

      {/* 2. GRADIENT OVERLAY (For Text Readability) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)",
          zIndex: 1,
        }}
      />

      {/* 3. MAIN CONTENT */}
      <Container maxWidth="xl" sx={{ zIndex: 2, position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 500,
              color: "white",
              letterSpacing: "0.1em",
              mb: 1,
              fontSize: { xs: "2.5rem", md: "2.5rem" },
            }}
          >
            Welcome to Your Dream Space
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "white",
              mb: 4,
              maxWidth: "600px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: 1.4,
            }}
          >
            <Box component="span" sx={{ color: "#d48d3b", fontWeight: 600 }}>
              We Do Not Just Decorate Interiors...
            </Box>{" "}
            <br />
            We create a Feeling of Being at Home.
          </Typography>

          <Link
            href="/contacts"
            sx={{
              backgroundColor: "#d48d3b",
              color: "white",
              padding: "12px 40px",
              borderRadius: "50px",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              "&:hover": {
                backgroundColor: "#b3762f",
              },
            }}
          >
            Discuss Your Project
          </Link>
        </motion.div>
      </Container>

      {/* 4. BOTTOM RIGHT FLOATING ACTION */}
      <Link
        href="/contacts"
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          zIndex: 3,
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            padding: "10px 20px",
            borderRadius: "50px",
            border: "1px solid rgba(255,255,255,0.2)",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
          }}
        >
          <MessageCircle color="white" size={20} />
          <Typography variant="body1" sx={{ color: "white", fontWeight: 500 }}>
            Contact us
          </Typography>
        </Stack>
      </Link>
    </Box>
  );
};

export default Hero;
