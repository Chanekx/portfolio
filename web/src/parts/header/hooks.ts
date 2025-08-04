import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import type { HeaderProps, Section } from ".";


interface useHooksParams extends Pick<HeaderProps, 'setSection'>{}


export const useHooks = ({setSection}:useHooksParams) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sections: Section[] = [
    "home",
    "about",
    "techstack",
    "projects",
    "contact",
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSectionClick = (section: Section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setSection?.(section);
    setMobileOpen(false);
    
  };
  return {
    mobileOpen,
    isMobile,
    sections,
    handleDrawerToggle,
    handleSectionClick

  };
};
