import { Stack, Box } from "@mui/material";
import Header from "../../parts/header";
import HomePage from "../home";
import AboutMeSection from "../aboutme";
import TechStack from "../techstack";
import MyProjects from "../projects";
import ContactMe from "../contact";

const Portfolio = () => {
  return (
    <Stack width="100%" sx={{ overflow: "auto", minHeight: "100vh" }}>
      <Header />
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
        <Box id="home"><HomePage /></Box>
        <Box id="about"><AboutMeSection /></Box>
        <Box id="techstack"><TechStack /></Box>
        <Box id="projects"><MyProjects /></Box>
        <Box id="contact"><ContactMe /></Box>
      </Stack>
    </Stack>
  );
};
export default Portfolio;
