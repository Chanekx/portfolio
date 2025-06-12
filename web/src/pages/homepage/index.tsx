import { Stack, Typography } from "@mui/material";
import Header from "../../parts/header";

const Homepage  = () => {
 return (
    <Stack height="100vh" width="100%">
        <Header sx={{backgroundColor:'black'}}/>
        <Typography> Hi I'm Christian</Typography>
    </Stack>                                
 )
}
export default Homepage;