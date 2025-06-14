import { Stack } from "@mui/material";
import Header from "../../parts/header";
import HomePage from "../home";
import AboutMeSection from "../aboutme";
import TechStack from "../techstack";

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
        <HomePage />
        <AboutMeSection />
        <TechStack/>
      </Stack>
    </Stack>
  );
};
export default Portfolio;
