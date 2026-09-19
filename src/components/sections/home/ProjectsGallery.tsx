"use client";
import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { interiors , commercial } from "@/image";
import Image from "next/image";

// UPDATE THE DATA: Include hover images
// I have provided placeholder paths. Add your own "-hover" image pairs to your assets folder.
const projectCategories = [
  // {
  //   title: "ARCHITECTURE",
  //   primaryImage: commercial,
  //   hoverImage: commercial, // NEW IMAGE
  // },
  {
    title: "INTERIORS",
    primaryImage: interiors,
    hoverImage: interiors, // NEW IMAGE
  },
  {
    title: "COMMERCIAL",
    primaryImage: commercial,
    hoverImage: commercial, // NEW IMAGE
  },
];
const ProjectsGallery = () => {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: "#000", py: 10 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "#141414",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.05)",
            p: { xs: 4, md: 8 },
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "white",
              fontWeight: 400,
              letterSpacing: "0.15em",
              mb: 6,
              textTransform: "uppercase",
            }}
          >
            MORE THAN{" "}
            <Box component="span" sx={{ color: theme.palette.secondary.main }}>
              650
            </Box>{" "}
            COMPLETED PROJECTS
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
              justifyContent: "center",
            }}
          >
            {projectCategories.map((item, index) => (
              <Box key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    {/* The main interactive container */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1 / 1",
                        borderRadius: "24px",
                        overflow: "hidden", // Crucial for zoom effect containment
                        mb: 3,
                        cursor: "pointer",
                        // Triggers for the entire container
                        "&:hover .project-image": {
                          transform: "scale(1.05)", // Gentle zoom factor
                        },
                        "&:hover .hover-overlay": {
                          opacity: 1, // Reveal the hover image
                        },
                      }}
                    >
 {/* Primary Image */}
          <Image
            src={item.primaryImage}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="project-image"
            style={{
              objectFit: 'fill',
              transition:
                'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform',
            }}
          />

          {/* Hover Image */}
          <Image
            src={item.hoverImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="project-image hover-overlay"
            style={{
              objectFit: 'fill',
              opacity: 0,
              transition:
                'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-in-out',
              willChange: 'transform, opacity',
            }}
          />
                    </Box>

                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.secondary.main,
                        letterSpacing: "0.2em",
                        fontWeight: 600,
                        fontSize: "18px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsGallery;
