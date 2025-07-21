import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, useScrollTrigger, Slide } from "@mui/material";

interface HideOnScrollProps {
  children: React.ReactElement;
}

const HideOnScroll: React.FC<HideOnScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger();
  console.log(trigger);
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
const Navbar: React.FC = () => {
  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          height: "100px",
          bgcolor: "white",
        }}
      >
        <Toolbar sx={{ alignItems: "center", height: "100%" }}>
          {/* Logo */}
          <img
            alt="Logo"
            style={{ width: "150px", height: "auto", padding: "20px" }}
            src="public\M-C3-BChlbauer_Maler_Logo_FINAL-aa359044-1920w.webp"
          />

          {/* Navigationspunkte */}
          <Box sx={{ marginLeft: "auto" }}>
            {["Über uns", "Leistungen", "Galerie", "Kontakt"].map(
              (item, index) => (
                <Button
                  key={index}
                  sx={{ color: "#000", fontSize: "20px", padding: "20px" }}
                >
                  {item}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
