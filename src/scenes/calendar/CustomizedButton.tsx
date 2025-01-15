import { Button, ButtonProps } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { tokens } from "../../theme";

const StyledButton = styled(Button)(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    backgroundColor: colors.greenAccent[600],
    color: colors.grey[100],
    "&:hover": {
      backgroundColor: colors.greenAccent[700],
    },
  };
});

const CustomizedButton = (props: ButtonProps) => {
  const theme = useTheme();
  return <StyledButton theme={theme} {...props} />;
};

export default CustomizedButton;
