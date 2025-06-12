import { Stack, type SxProps } from "@mui/material";

export interface HeaderProps {
  sx?: SxProps;
}

const Header = ({ sx }: HeaderProps) => {
  return <Stack width="100%" height="60px" sx={{ ...sx }}></Stack>;
};
export default Header;
