import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { tokens } from "../../theme";
import { EventApi, formatDate } from "@fullcalendar/core/index.js";

export default function EventsList({ eventsList }: { eventsList: EventApi[] }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display='flex' gap='15px' padding='15px' bgcolor={colors.primary[400]} borderRadius='4px' flexDirection='column' flex='1 1 20%'>
      <Typography variant='h5'>Events</Typography>
      <List sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {eventsList.map((event) => {
          return (
            <ListItem
              key={event?.id}
              sx={{
                background: colors.greenAccent[500],
                borderRadius: "4px",
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography>
                    {event.start instanceof Date && !isNaN(event.start.getTime())
                      ? formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "Дата не указана"}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
