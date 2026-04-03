import { Stack, Typography } from "@mui/material";
import ScrollCards from "../../parts/scrollcard";

const TechStack = () => {
  const firstRow = [
    { src: "/techstackimage/git.png", title: "Git" },
    { src: "/techstackimage/reactJs.png", title: "ReactJs" },
    { src: "/techstackimage/typescript.png", title: "TypeScript" },
  ];
  const secondRow = [
    { src: "/techstackimage/yarn.png", title: "Yarn" },
    { src: "/techstackimage/viteJs.png", title: "Vite" },
    { src: "/techstackimage/prisma.png", title: "Prisma ORM" },
  ];

  const thirdRow = [
    { src: "/techstackimage/postgres.png", title: "Postgres" },
    { src: "/techstackimage/nestjs.png", title: "Nestjs" },
    { src: "/techstackimage/nextjs.png", title: "NextJs" },
  ];

  return (
    <Stack
      minHeight={{ xs: "auto", md: "130vh" }}
      width="100%"
      alignItems="center"
      justifyContent="center"
      spacing={{ xs: 4, md: 8 }}
      padding={{ xs: 2, sm: 4, md: 8 }}
      sx={{
        background: "linear-gradient(180deg, #222831 0%, #1a1f28 100%)",
        paddingTop: { xs: "clamp(72px, 12vw, 96px)", md: "5%" },
        paddingBottom: { xs: 4, md: 8 },
      }}
    >
      <Stack spacing={{ xs: 3, md: 4 }} width={{ xs: "100%", sm: "95%", md: "80%" }}>
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
          My Techstack
        </Typography>
        <Stack width="100%" spacing={{ xs: 3, md: 4 }}>
          <ScrollCards cards={firstRow} />
          <ScrollCards cards={secondRow} />
          <ScrollCards cards={thirdRow} />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default TechStack;
