import { Stack } from "@mui/material";
import Header from "../../parts/header";
import AboutMeSection from "../aboutme";
import HomePage from "../home";

const Homepage = () => {
  return (
    <Stack height="100vh" width="100%">
      <Header />
      <HomePage/>
    </Stack>
  );
};
export default Homepage;
