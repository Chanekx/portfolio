import { Button, Stack } from "@mui/material";

type HeaderProps = {
  setSection?: 'home' | 'about'

}

const Header = ({setSection}: HeaderProps) => {
  return (
    <Stack
      width="100%"
      height="100vh"
      maxHeight="60px"
      direction="row"
      alignItems="center"
      paddingX={2}
      sx={{ backgroundColor: "#213f6b" }}
    >
      <Stack flexGrow={1}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Button>Christian</Button>
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="flex-end" gap={2}>
        <Button onClick={() => setSection('home') }>Home</Button>
        <Button onClick={() => setSection('about')}>About</Button>
        <Button onClick={() => openPage('techstack')}>TechStack</Button>
        <Button onClick={()=> openPage('projects')}>Projects</Button>
        <Button onClick={() => openPage('contact')}>Contact</Button>
      </Stack>
    </Stack>
  );
};
export default Header;
