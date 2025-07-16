import { Box, Stack, Typography } from "@mui/material";

const MyProjects = () => {
  return (
    <Stack height="100%" >
      <Typography variant="h1"> My Projects</Typography>
      <Stack direction="row" gap={2} justifyContent="center" alignContent="center" alignItems="center" paddingTop="2%">
        <Box border="1px solid yellow" width="30%" height="80vh"></Box>
        <Box border="1px solid yellow" width="30%" height="80vh"></Box>
        <Box border="1px solid yellow" width="30%" height="80vh"></Box>
      </Stack>
    </Stack>
  );
};

export default MyProjects;
