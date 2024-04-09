import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { HeaderData } from "../data/headerData/headerDataTypes";

export function Header({ title, subtitle }: HeaderData) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        fontWeight="bold"
        color={colors.grey[100]}
        sx={{ m: "0 0 5px 0" }}
      >
        {title.toUpperCase()}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]} mb="5px">
        {subtitle}
      </Typography>
    </Box>
  );
}
