import { useState, useEffect, useRef, useCallback } from "react";
import { Stack, Box, Slide } from "@mui/material";
import Header, { type Section } from "../../parts/header";
import HomePage from "../home";
import AboutMeSection from "../aboutme";
import TechStack from "../techstack";
import MyProjects from "../projects";
import ContactMe from "../contact";

const SECTION_IDS: Section[] = [
  "home",
  "about",
  "techstack",
  "projects",
  "contact",
];

const Portfolio = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [activeSection, setActiveSection] = useState<Section>("home");

  const updateActiveSection = useCallback(() => {
    const marker = window.scrollY + window.innerHeight * 0.35;
    for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
      const id = SECTION_IDS[i];
      const el = document.getElementById(id);
      if (el && el.offsetTop <= marker) {
        setActiveSection(id);
        break;
      }
    }
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 72) {
      setShowHeader(true);
    } else if (currentScrollY < lastScrollY.current) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    lastScrollY.current = currentScrollY;
    updateActiveSection();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveSection();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateActiveSection]);

  return (
    <Stack width="100%" sx={{ overflow: "auto", minHeight: "100vh" }}>
      <Slide direction="down" in={showHeader} mountOnEnter unmountOnExit={false}>
        <Box position="fixed" width="100%" zIndex={1000}>
          <Header activeSection={activeSection} />
        </Box>
      </Slide>

      <Stack
        sx={{
          overflowY: "auto",
          scrollSnapType: { xs: "none", md: "y proximity" },
          "& > *": {
            scrollSnapAlign: { xs: "unset", md: "start" },
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
