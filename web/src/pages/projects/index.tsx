import { Box, Stack, Typography, Paper } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

const placeholders = [
  {
    title: "Project one",
    blurb: "Case study and live demo will appear here.",
  },
  {
    title: "Project two",
    blurb: "Highlights, stack, and links coming soon.",
  },
  {
    title: "Project three",
    blurb: "Screenshots and GitHub will be added next.",
  },
];

const MyProjects = () => {
  return (
    <Stack
      minHeight={{ xs: "auto", md: "130vh" }}
      width="100%"
      alignItems="center"
      spacing={{ xs: 3, md: 5 }}
      padding={{ xs: 2, sm: 4, md: 8 }}
      sx={{
        background: "linear-gradient(180deg, #222831 0%, #1a1f28 100%)",
        paddingTop: { xs: "clamp(72px, 12vw, 96px)", md: "5%" },
        paddingBottom: { xs: 6, md: 10 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "#00ff88",
          textShadow: "0 0 10px rgba(0, 255, 136, 0.3)",
          textAlign: "center",
          fontSize: { xs: "1.75rem", sm: "2rem", md: "3rem" },
        }}
      >
        My Projects
      </Typography>

      <Box
        sx={{
          display: "grid",
          width: "100%",
          maxWidth: 1200,
          gap: { xs: 2, sm: 3 },
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
        }}
      >
        {placeholders.map((item) => (
          <Paper
            key={item.title}
            elevation={4}
            sx={{
              minHeight: { xs: 220, sm: 260, md: 320 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              p: { xs: 2, md: 3 },
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(0, 255, 136, 0.25)",
              borderRadius: 2,
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 12px 40px rgba(0, 255, 136, 0.12)",
              },
            }}
          >
            <CodeIcon sx={{ fontSize: { xs: 40, md: 48 }, color: "#00ff88", opacity: 0.9 }} />
            <Typography
              variant="h6"
              sx={{
                color: "#00ff88",
                fontWeight: 700,
                textAlign: "center",
                fontSize: { xs: "1.05rem", md: "1.25rem" },
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.75)",
                textAlign: "center",
                lineHeight: 1.6,
                maxWidth: 280,
              }}
            >
              {item.blurb}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "rgba(0, 255, 136, 0.85)",
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              Coming soon
            </Typography>
          </Paper>
        ))}
      </Box>
    </Stack>
  );
};

export default MyProjects;
