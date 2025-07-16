import { Button, Stack, TextField, Typography } from "@mui/material";

const ContactMe = () => {
    return (
<Stack height="100%">
<Typography variant="h1">
    Contact Me
</Typography>
<TextField label="Your name"></TextField>
<TextField label="Your email"></TextField>
<TextField label="Your message here"></TextField>
<Button> Submit</Button>
</Stack>
    )
    
}
export default ContactMe;