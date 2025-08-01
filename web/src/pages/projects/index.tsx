import { Box, Stack, Typography } from "@mui/material";

const MyProjects = () => {
  return (
    <Stack
      minHeight="130vh"
      sx={{
        background: "linear-gradient(180deg, #222831 0%, #1a1f28 100%)",
        paddingTop: "5%",
      }}
    >
      <Typography variant="h1"> My Projects</Typography>
      <Stack
        direction="row"
        gap={2}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        paddingTop="2%"
      >
        <Box
          border="1px solid yellow"
          width="30%"
          height="80vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#2c3440",
            color: "yellow",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {" "}
          Coming Soon....
        </Box>
        <Box
          border="1px solid yellow"
          width="30%"
          height="80vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#2c3440",
            color: "yellow",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Coming Soon....
        </Box>
        <Box
          border="1px solid yellow"
          width="30%"
          height="80vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#2c3440",
            color: "yellow",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Coming Soon....
        </Box>
      </Stack>
    </Stack>
  );
};

export default MyProjects;
