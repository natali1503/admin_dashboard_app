import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import EmailIcon from "@mui/icons-material/Email";

export function StatBox() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box padding="20px" bgcolor={colors.primary[600]}>
      <Box display="flex" flexDirection="column" gap="4px">
        <Box display="flex" gap="8px">
          <Box display="flex" flexDirection="column">
            <EmailIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
            <Typography variant="h4" color={colors.grey[100]} fontWeight="bold">
              12,361
            </Typography>
          </Box>
          <Box
            bgcolor={colors.greenAccent[600]}
            borderRadius="50px"
            width="40px"
            height="40px"
          ></Box>
        </Box>

        <Box display="flex" gap="8px">
          <Box display="flex" flexDirection="column">
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Emails
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Sent
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              fontStyle="italic"
            >
              +14%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
