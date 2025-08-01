import { Stack, Typography } from "@mui/material";
import ScrollCards from "../../parts/scrollcard";

const TechStack = () => {
  const firstRow = [
    {
      src: "/techstackimage/git.png",
      title: "Git"
    },
    {
      src: "/techstackimage/reactJs.png",
      title: "ReactJs"
    },
    {
      src: "/techstackimage/typescript.png",
      title: "TypeScript"
    },
  ];
  const secondRow = [
    {
      src: "/techstackimage/yarn.png",
      title: "Yarn"
    },
    {
      src: "/techstackimage/viteJs.png",
      title: "Vite"
    },
    {
      src: "/techstackimage/prisma.png",
      title: "Prisma ORM"
    },
  ];

  const thirdRow = [
    {
      src: "/techstackimage/postgres.png",
      title: "Postgres"
    },
    {
      src: "/techstackimage/nestjs.png",
      title: "Nestjs"
    },
    {
      src: "/techstackimage/nextjs.png",
      title: "NextJs"
    },
  ];

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
      <Stack spacing={4} width="80%">
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#00ff88",
            textShadow: "0 0 10px rgba(0, 255, 136, 0.3)",
            textAlign: "center",
          }}
        >
          My Techstack
        </Typography>
        <Stack width="100%" spacing={4}>
          <ScrollCards cards={firstRow} />
          <ScrollCards cards={secondRow} />
          <ScrollCards cards={thirdRow} />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default TechStack;
