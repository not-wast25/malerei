import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  return (
    <Parallax
      bgImage="/bharath-g-s-aLGiPJ4XRO4-unsplash.jpg"
      strength={600}
      bgImageStyle={{ objectFit: "cover", backgroundPositionY: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          height: "600px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px 200px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ color: "#000" }}>
            Unsere Leistungen im Malerhandwerk
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "#000" }}>
            Das Malerhandwerk bietet ein vielseitiges Spektrum an Leistungen:
            Von klassischen Maler- und Lackierarbeiten über kreative
            Wandgestaltungen bis hin zu hochwertigen Spachteltechniken. Zu den
            Kernbereichen gehören zudem Fassadensanierungen, Tapezierarbeiten,
            Wärmedämmung sowie der Einsatz moderner Beschichtungstechniken. Ob
            Neubau, Renovierung oder individuelle Designlösungen - jeder Auftrag
            wird mit Präzision, Fachkompetenz und hochwertigen Materialien
            umgesetzt, um ein perfektes Ergebnis zu garantieren.Sprechen Sie uns
            an, wir beraten Sie gerne!
          </Typography>
        </motion.div>
      </Box>
    </Parallax>
  );
};

export default Services;
