import { Paper, Stack, Typography } from "@mui/material";

const TechStack = () => {
  return (
    <Stack
      minHeight="130vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
      spacing={8}
      padding={8}
      sx={{
        background: "linear-gradient(180deg, #222831 0%, #1a1f28 100%)",
        paddingTop: "5%",
      }}
    >
      <Stack spacing={4} maxWidth="800px" sx={{ paddingTop: "5%" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#00ff88",
            textShadow: "0 0 10px rgba(0, 255, 136, 0.3)",
          }}
        >
          My Techstack
        </Typography>
        
      </Stack>
    </Stack>
  );
};
export default TechStack;
