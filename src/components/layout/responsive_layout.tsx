import { Box } from "@mui/material";

interface ResponsiveLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const ResponsiveLayout = ({ left, right }: ResponsiveLayoutProps) => {
  return (
    <Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>{left}</Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>{right}</Box>
    </Box>
  );
};
