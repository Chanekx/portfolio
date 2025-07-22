import { Stack, Typography, Paper, type SxProps } from "@mui/material";

type AboutMeSectionProps = {
  sx?: SxProps;
};

const AboutMeSection = ({ sx }: AboutMeSectionProps) => {
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
        ...sx,
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
          About Me
        </Typography>
        <Typography
          variant="h5"
          sx={{
            lineHeight: 1.8,
            color: "white",
            textAlign: "justify",
          }}
        >
          I am a passionate Full Stack Developer with a strong foundation in
          both front-end and back-end technologies. My journey in web
          development has equipped me with the skills to create responsive,
          user-friendly applications that solve real-world problems. I enjoy
          tackling complex challenges and turning ideas into reality through
          clean, efficient code.
        </Typography>
      </Stack>

      <Stack spacing={6} maxWidth="800px">
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#00ff88",
            textShadow: "0 0 10px rgba(0, 255, 136, 0.3)",
          }}
        >
          Experience
        </Typography>

        <Paper
          elevation={3}
          sx={{
            padding: 4,
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant="h4"
              sx={{
                color: "#00ff88",
                fontWeight: "bold",
              }}
            >
              Software Engineer Intern - HomeSourced Inc.
            </Typography>
            <Typography variant="h6" sx={{ color: "#00ff88" }}>
              Jan 2025 - June 2025
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "white",
              }}
            >
              Built front-end and back-end features for a CRM tool and book
              marketing website with Next.js, Material-UI, and NestJS. Enhanced
              user experience and workflow efficiency through API integrations
              that enabled role-based data access.
            </Typography>
          </Stack>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            padding: 4,
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant="h4"
              sx={{
                color: "#00ff88",
                fontWeight: "bold",
              }}
            >
              Product Owner Intern - Ruralnet Inc
            </Typography>
            <Typography variant="h6" sx={{ color: "#00ff88" }}>
              Sept 2024 - Dec 2024
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "white",
              }}
            >
              Managed product backlog and created detailed documentation,
              including user stories and acceptance criteria. Tested SaaS
              platforms, identified bugs, and implemented improvements using
              generative AI tools.
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
};
export default AboutMeSection;
