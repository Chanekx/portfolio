import { Stack, Typography, type SxProps } from "@mui/material";

type HomePageProps = {
  sx?: SxProps;
};

const HomePage = ({ sx }: HomePageProps) => {
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
      <Stack direction="column" height="100vh" width="100%">
        <Stack
          direction="row"
          spacing={8}
          alignItems="center"
          justifyContent="center"
          height="100vh"
          width="100%"
          padding={8}
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Stack>
            <Stack
              style={{
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                padding: "12px",
                background:
                  "linear-gradient(90deg, #00ff00, #00ff88, #00ff00, #00ff88)",
                backgroundSize: "300% 300%",
                animation: "gradient 4s linear infinite",
                boxShadow: "0 0 20px #00ff00, 0 0 40px #00ff88",
                filter: "blur(1px)",
              }}
            >
              <Stack
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "white",
                }}
              >
                <img
                  src="/me.jpg"
                  alt="Christian"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                color: "#00ff88",
                textShadow: "0 0 10px rgba(0, 255, 136, 0.3)",
              }}
            >
              Hey there, I'm Chanekx!
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
              }}
            >
              I'm a Full Stack Developer
            </Typography>
            <Typography></Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomePage;
