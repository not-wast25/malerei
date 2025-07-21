import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Landing />
        <About />
        <Services />
        <Gallery />
        <Contact />{" "}
      </ThemeProvider>{" "}
    </>
  );
};

export default App;
