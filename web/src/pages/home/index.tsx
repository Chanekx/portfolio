import { Stack, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Stack 
      direction="row" 
      spacing={8} 
      alignItems="center" 
      justifyContent="center"
      height="100vh"
      width="100%"
      padding={8}
    >
      <Stack>
        <div style={{
          width: '500px',
          height: '500px',
          borderRadius: "50%",
          padding: '12px',
          background: 'linear-gradient(90deg, #00ff00, #00ff88, #00ff00, #00ff88)',
          backgroundSize: '300% 300%',
          animation: 'gradient 4s linear infinite',
          boxShadow: '0 0 20px #00ff00, 0 0 40px #00ff88',
          filter: 'blur(1px)',
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: "50%",
            overflow: 'hidden',
            background: 'white',
          }}>
            <img
              src="/src/assets/me.png"
              alt="Christian"
              style={{
                width: '100%',
                height: '100%',
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </Stack>
      <Stack spacing={4}>
        <Typography variant="h1" sx={{ fontWeight: 'bold' }}>Hey there, I'm Chanekx!</Typography>
        <Typography variant="h2">I'm a Full Stack Developer</Typography>
      </Stack>
    </Stack>
  );
};

export default HomePage;
