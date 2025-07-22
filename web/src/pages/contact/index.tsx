import { Button, Stack, TextField, Typography, Paper } from "@mui/material";

const ContactMe = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="100%"
      sx={{ backgroundColor: "#f5f5f5" }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: { xs: "90%", sm: "500px" },
          borderRadius: 3,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Contact Me
        </Typography>

        <Stack spacing={2} mt={2}>
          <TextField label="Your Name" variant="outlined" fullWidth />
          <TextField label="Your Email" variant="outlined" fullWidth />
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{
              borderRadius: 50,
              textTransform: "none",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#1976d2",
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
