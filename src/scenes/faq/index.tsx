import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Box,
  Typography,
} from "@mui/material";
import { tokens } from "../../theme";
import { Header } from "../../components/Header";
import { dataFAQ, Questions } from "../../data/dataFAQ";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = theme.palette.mode;
  return (
    <Box padding="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box>
        {dataFAQ.map((el: Questions) => {
          return (
            <Accordion sx={{ backgroundColor: `${colors.primary[400]}` }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  color={
                    mode === "dark"
                      ? colors.greenAccent[500]
                      : colors.greenAccent[300]
                  }
                  variant="h5"
                  fontWeight={500}
                >
                  {el.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>{el.answer}</AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
}
