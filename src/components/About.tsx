import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "700px",
        padding: "100px 200px",
        backgroundColor: "rgb(248, 248, 248))",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Das macht uns aus
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ fontSize: "20px", width: "50%", margin: "40px" }}>
          Was uns im Malerhandwerk auszeichnet, ist die perfekte Verbindung von
          Kompetenz, Kreativität und Leidenschaft. Wir stehen für höchste
          Qualität – von der individuellen Beratung über die sorgfältige Planung
          bis zur präzisen Umsetzung. Mit handwerklicher Expertise, langjähriger
          Erfahrung und einem Gespür für Farben und Trends schaffen wir
          Lösungen, die Ästhetik und Funktionalität vereinen. Unsere Stärke
          liegt in der Liebe zum Detail und der Fähigkeit, jeden Raum mit
          einzigartigen Ideen zum Strahlen zu bringen. Pünktlichkeit,
          Zuverlässigkeit und die Zufriedenheit unserer Kunden sind der Kern
          unserer Arbeit – das macht uns aus.
        </Typography>
        <Box
          sx={{
            height: "400px",
            backgroundColor: "grey",
            width: "50%",
            margin: "40px",
          }}
        >
          BILD
        </Box>
      </Box>
    </Box>
  );
};

export default About;
