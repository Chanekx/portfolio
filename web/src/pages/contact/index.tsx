import { Button, Stack, TextField, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useHooks } from "./hooks";

const ContactMe = () => {
  const { handleSubmit } = useHooks();
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight={{ xs: "auto", md: "130vh" }}
      padding={{ xs: 2, sm: 4, md: 8 }}
      sx={{
        background: "linear-gradient(180deg, #222831 0%, #1a1f28 100%)",
        paddingTop: { xs: "clamp(72px, 12vw, 96px)", md: "5%" },
        paddingBottom: { xs: 6, md: 10 },
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: { xs: 2.5, sm: 3, md: 4 },
          width: "100%",
          maxWidth: 520,
          borderRadius: 3,
          background: "rgba(34, 40, 49, 0.92)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0, 255, 136, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{
            color: "#00ff88",
            fontWeight: 700,
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          Contact Me
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: "rgba(255,255,255,0.65)", mb: 2 }}
        >
          Send a message and I will get back to you.
        </Typography>

        <Stack spacing={2} mt={1}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            InputLabelProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": { borderColor: "rgba(0, 255, 136, 0.35)" },
                "&:hover fieldset": { borderColor: "rgba(0, 255, 136, 0.55)" },
                "&.Mui-focused fieldset": { borderColor: "#00ff88" },
              },
            }}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            type="email"
            InputLabelProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": { borderColor: "rgba(0, 255, 136, 0.35)" },
                "&:hover fieldset": { borderColor: "rgba(0, 255, 136, 0.55)" },
                "&.Mui-focused fieldset": { borderColor: "#00ff88" },
              },
            }}
          />
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            InputLabelProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": { borderColor: "rgba(0, 255, 136, 0.35)" },
                "&:hover fieldset": { borderColor: "rgba(0, 255, 136, 0.55)" },
                "&.Mui-focused fieldset": { borderColor: "#00ff88" },
              },
            }}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            size="large"
            fullWidth
            startIcon={<SendIcon />}
            sx={{
              mt: 1,
              borderRadius: 50,
              textTransform: "none",
              fontWeight: "bold",
              py: 1.25,
              background: "linear-gradient(45deg, #00ff88, #00cc66)",
              color: "#0a0e12",
              boxShadow: "0 8px 24px rgba(0, 255, 136, 0.25)",
              "&:hover": {
                background: "linear-gradient(45deg, #00cc66, #00ff88)",
                boxShadow: "0 12px 28px rgba(0, 255, 136, 0.35)",
              },
            }}
          >
            Submit
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ContactMe;
