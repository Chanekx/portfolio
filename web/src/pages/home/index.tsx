import { Stack, Typography, Button, Box, useTheme, useMediaQuery, type SxProps } from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from '@mui/icons-material/Download';

type HomePageProps = {
  sx?: SxProps;
};

const HomePage = ({ sx }: HomePageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack
      minHeight="130vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
      spacing={8}
      padding={{ xs: 2, md: 8 }}
      sx={{
        background: "linear-gradient(135deg, #1a1f28 0%, #222831 50%, #1a1f28 100%)",
        position: "relative",
        overflow: "hidden",
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
            "50%": { transform: "translateY(-20px) rotate(180deg)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, rgba(0, 255, 136, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      <Stack 
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
        justifyContent="center"
        width="100%"
        maxWidth="1200px"
        sx={{ position: "relative", zIndex: 1 }}
      >
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Stack alignItems="center">
            <Box
              sx={{
                width: { xs: "280px", sm: "350px", md: "400px" },
                height: { xs: "280px", sm: "350px", md: "400px" },
                borderRadius: "50%",
                padding: "4px",
                background: "linear-gradient(45deg, #00ff88, #00cc66, #00ff88, #00cc66)",
                backgroundSize: "300% 300%",
                animation: "gradient 4s linear infinite",
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.3), 0 0 60px rgba(0, 255, 136, 0.1)",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-2px",
                  left: "-2px",
                  right: "-2px",
                  bottom: "-2px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #00ff88, #00cc66, #00ff88, #00cc66)",
                  backgroundSize: "300% 300%",
                  animation: "gradient 4s linear infinite",
                  zIndex: -1,
                  filter: "blur(10px)",
                }
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "white",
                  boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.1)",
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
              </Box>
            </Box>
          </Stack>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Stack 
            spacing={{ xs: 3, md: 4 }} 
            alignItems={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
            maxWidth={{ xs: "100%", md: "500px" }}
          >
            <Typography
              variant={isMobile ? "h3" : "h2"}
              sx={{
                fontWeight: "bold",
                color: "#00ff88",
                textShadow: "0 0 20px rgba(0, 255, 136, 0.5)",
                lineHeight: 1.2,
                background: "linear-gradient(45deg, #00ff88, #00cc66)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hey there, I'm Chanekx!
            </Typography>
            
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{
                color: "white",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                fontWeight: 300,
                lineHeight: 1.4,
              }}
            >
              I'm a Full Stack Developer
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.6,
                maxWidth: "400px",
              }}
            >
              Passionate about creating innovative web solutions and turning ideas into reality through clean, efficient code.
            </Typography>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/Circulado_Portfolio (UPDATEDJULY252025).pdf"
                download="Christian_Circulado_Portfolio.pdf"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  sx={{
                    background: "linear-gradient(45deg, #00ff88, #00cc66)",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    padding: { xs: "12px 24px", md: "16px 32px" },
                    borderRadius: "50px",
                    boxShadow: "0 8px 25px rgba(0, 255, 136, 0.3)",
                    textTransform: "none",
                    "&:hover": {
                      background: "linear-gradient(45deg, #00cc66, #00ff88)",
                      boxShadow: "0 12px 35px rgba(0, 255, 136, 0.4)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </Stack>
        </motion.div>
      </Stack>
    </Stack>
  );
};

export default HomePage;
