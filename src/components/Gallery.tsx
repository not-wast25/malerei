import { Box } from "@mui/material";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const imageData = [
  {
    img: "/IMG_2115.JPG",
    title: "Bild 1",
  },
  {
    img: "/IMG-20140624-WA0001(1).jpg",
    title: "Bild 2",
  },
  {
    img: "/FassadeMeier.jpg",
    title: "Bild 3",
  },
  {
    img: "/IMG-20140810-WA0008(1).jpg",
    title: "Bild 4",
  },
  {
    img: "/IMG-20230215-WA0010.jpg",
    title: "Bild 5",
  },
  {
    img: "/SAM_1824.JPG",
    title: "Bild 6",
  },
  {
    img: "/IMG-20230215-WA0002.jpg",
    title: "Bild 7",
  },
];

const Gallery: React.FC = () => {
  return (
    <Box sx={{ height: "500px", padding: "100px 50px" }}>
      <Slide
        slidesToShow={3} // Zeigt immer 3 Bilder gleichzeitig an
        slidesToScroll={1} // Bewegt sich pro Scroll um 1 Bild
        infinite={true} // Unendliches Scrollen aktivieren
        indicators // Weitere Einstellungen hier hinzufügen
      >
        {imageData.map((item, index) => (
          <div key={index} style={{ padding: "0 10px" }}>
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slide>
    </Box>
  );
};

export default Gallery;
