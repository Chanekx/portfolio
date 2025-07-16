import { Button, Stack } from "@mui/material";

type Section = 'home' | 'about' | 'techstack' | 'projects' | 'contact';

type HeaderProps = {
  setSection?: (section: Section) => void;
  activeSection?: Section;
};

const Header = ({ setSection, activeSection }: HeaderProps) => {
  const sections: Section[] = ['home', 'about', 'techstack', 'projects', 'contact'];

  return (
    <Stack
      width="100%"
      height="60px"
      direction="row"
      alignItems="center"
      paddingX={2}
      sx={{
        backgroundColor: "#213f6b",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
      component="header"
    >
      <Stack flexGrow={1} direction="row" alignItems="center">
        <Button
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "none",
            background:"none",
          "&:hover": { backgroundColor: "#2a4a7b" },
          }}
          disableRipple
        >
          Christian
        </Button>
      </Stack>
      <Stack direction="row" gap={2} component="nav" aria-label="Main navigation">
        {sections.map((section) => (
          <Button
            key={section}
            onClick={() => {
              const el = document.getElementById(section);
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
              setSection?.(section);
            }}
            sx={{
              color: activeSection === section ? "#ffd700" : "white",
              fontWeight: activeSection === section ? "bold" : "normal",
              textTransform: "capitalize",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "#2a4a7b" },
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Header;
