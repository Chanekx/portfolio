import {
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  type SxProps,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useHooks } from "./hooks";

export type Section = "home" | "about" | "techstack" | "projects" | "contact";

export interface HeaderProps {
  setSection?: (section: Section) => void;
  activeSection?: Section;
  sx?: SxProps;
};

const Header = ({ setSection, activeSection, sx }: HeaderProps) => {
  const {
    mobileOpen,
    isMobile,
    sections,
    handleDrawerToggle,
    handleSectionClick,
  } = useHooks({setSection});

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {sections.map((section) => (
          <ListItem key={section} disablePadding>
            <ListItemButton
              onClick={() => handleSectionClick(section)}
              sx={{
                color: activeSection === section ? "#00ff88" : "white",
                fontWeight: activeSection === section ? "bold" : "normal",
                "&:hover": {
                  backgroundColor: "rgba(0, 255, 136, 0.1)",
                },
              }}
            >
              <ListItemText
                primary={section.charAt(0).toUpperCase() + section.slice(1)}
                sx={{
                  textAlign: "center",
                  "& .MuiListItemText-primary": {
                    fontSize: "1.1rem",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Stack
        width="100%"
        height={{ xs: "60px", md: "70px" }}
        direction="row"
        alignItems="center"
        paddingX={{ xs: 2, md: 4 }}
        sx={{
          background: "rgba(33, 63, 107, 0.95)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          borderBottom: "1px solid rgba(0, 255, 136, 0.2)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          ...sx,
        }}
        component="header"
      >
        <Stack flexGrow={1} direction="row" alignItems="center">
          <Button
            sx={{
              color: "#00ff88",
              fontWeight: "bold",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              textTransform: "none",
              background: "none",
              "&:hover": {
                backgroundColor: "rgba(0, 255, 136, 0.1)",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease",
            }}
            disableRipple
          >
            Christian
          </Button>
        </Stack>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(0, 255, 136, 0.1)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Stack
            direction="row"
            gap={{ xs: 1, md: 2 }}
            component="nav"
            aria-label="Main navigation"
          >
            {sections.map((section) => (
              <Button
                key={section}
                onClick={() => handleSectionClick(section)}
                sx={{
                  color: activeSection === section ? "#00ff88" : "white",
                  fontWeight: activeSection === section ? "bold" : "normal",
                  textTransform: "capitalize",
                  backgroundColor: "transparent",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  padding: { xs: "8px 12px", md: "10px 16px" },
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "rgba(0, 255, 136, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                  position: "relative",
                  "&::after":
                    activeSection === section
                      ? {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "60%",
                          height: "2px",
                          backgroundColor: "#00ff88",
                          borderRadius: "1px",
                        }
                      : {},
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Stack>
        )}
      </Stack>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            background: "rgba(33, 63, 107, 0.98)",
            backdropFilter: "blur(10px)",
            borderRight: "1px solid rgba(0, 255, 136, 0.2)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
