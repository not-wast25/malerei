import React from "react";
import { Parallax } from "react-parallax";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Landing: React.FC = () => {
  return (
    //<Parallax bgImage="/public\IMG-20230215-WA0010.jpg" strength={500}>
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        padding: "0 0 0 100px",
        backgroundColor: "#FCFCFC",
      }}
    >
      <Box
        sx={{
          width: "40%",
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "left",
          marginTop: "300px",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            margin: 0,
            fontWeight: "500",
            color: "#000",
            //textTransform: "uppercase",
            //transform: "scaleY(1.1)",
          }}
        >
          Herzlich Willkommen bei Ihrem Meisterbetrieb
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            margin: 0,
            fontWeight: "700",
            textTransform: "uppercase",
            color: "#C12430",
          }}
        >
          Mühlbauer
        </Typography>
        <Button
          sx={{
            color: "#000",
            padding: "10px 30px",
            margin: "30px 0 0 0",
            fontSize: "20px",
          }}
        >
          Kontakt
        </Button>
      </Box>
      <Box
        sx={{
          width: "60%",
          backgroundImage:
            'url("/public/theme-photos-Cl-OpYWFFm0-unsplash.jpg")',
          backgroundSize: "cover", // Verhindert Streckung, füllt den Container aus
          ///public/theme-photos-Cl-OpYWFFm0-unsplash.jpg
          //backgroundPosition: "center", // Zentriert das Bild
          backgroundRepeat: "no-repeat", // Verhindert Wiederholung des Bildes
        }}
      ></Box>
    </Box>
    //</Parallax>
  );
};

export default Landing;
