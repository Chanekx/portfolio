import { useState, useEffect } from "react";
import { Stack, Box, Slide } from "@mui/material";
import Header from "../../parts/header";
import HomePage from "../home";
import AboutMeSection from "../aboutme";
import TechStack from "../techstack";
import MyProjects from "../projects";
import ContactMe from "../contact";

const Portfolio = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      // Scrolling UP
      setShowHeader(true);
    } else {
      // Scrolling DOWN
      setShowHeader(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Stack width="100%" sx={{ overflow: "auto", minHeight: "100vh" }}>
      <Slide direction="down" in={showHeader}>
        <Box position="fixed" width="100%" zIndex={1000}>
          <Header />
        </Box>
      </Slide>

      <Stack
        sx={{
          overflowY: "auto",
          scrollSnapType: "y mandatory",
          "& > *": {
            scrollSnapAlign: "start",
            minHeight: "130vh",
          },
        }}
      >
        <Box id="home">
          <HomePage />
        </Box>
        <Box id="about">
          <AboutMeSection />
        </Box>
        <Box id="techstack">
          <TechStack />
        </Box>
        <Box id="projects">
          <MyProjects />
        </Box>
        <Box id="contact">
          <ContactMe />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Portfolio;
