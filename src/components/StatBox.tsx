import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Icon } from "../data/dataForStatBox";

interface StatBoxProps {
  title: string;
  icon: Icon;
  value: string;
  precent: string;
}
export function StatBox({ title, icon, value, precent }: StatBoxProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box padding="20px" bgcolor={colors.primary[400]}>
      <Box display="flex" flexDirection="column" gap="10px" minWidth={160}>
        <Box display="flex" gap="18px" justifyContent="space-between">
          <Box display="flex" flexDirection="column" gap="2px">
            {icon && (
              <icon.type
                sx={{ fontSize: 26, color: colors.greenAccent[600] }}
              />
            )}
            <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
              {value}
            </Typography>
          </Box>
          <Box
            bgcolor={colors.greenAccent[600]}
            borderRadius="50px"
            width="40px"
            height="40px"
          ></Box>
        </Box>

        <Box display="flex" gap="18px" justifyContent="space-between">
          <Box display="flex" flexDirection="column">
            <Typography variant="h5" color={colors.greenAccent[500]}>
              {title}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              fontStyle="italic"
            >
              {precent}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
