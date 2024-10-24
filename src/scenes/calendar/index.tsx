import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  DateSelectArg,
  EventApi,
  EventClickArg,
  EventSourceInput,
  formatDate,
} from "@fullcalendar/core/index.js";
import listPlugin from "@fullcalendar/list";

import { Header } from "../../components/Header";
import { tokens } from "../../theme";

export default function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [isDeleteEvent, setIsDeleteEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventClickArg | null>(
    null
  );
  const [selectedData, setSelectedData] = useState<DateSelectArg | null>(null);
  const [isCreateEvent, setIsCreateEvent] = useState(false);
  const CustomizedButton = styled(Button)`
    &:hover {
      background-color: ${colors.greenAccent[700]};
    }
    background-color: ${colors.greenAccent[600]};
    color: ${colors.grey[100]};
  `;

  function handleEventClick(selected: EventClickArg) {
    if (isCreateEvent) return;

    setSelectedEvent(selected);
    setIsDeleteEvent((show) => !show);
  }
  function handleDeleteEvent() {
    selectedEvent?.event.remove();
    setSelectedEvent(null);
    setIsDeleteEvent((show) => !show);
  }

  function handleDateClick(selected: DateSelectArg) {
    if (isDeleteEvent) return;
    setSelectedData(selected);
    setIsCreateEvent((show) => !show);
  }
  function handleCreateEvent(title: string) {
    const calendarApi = selectedData?.view?.calendar;
    if (!calendarApi) return;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selectedData?.startStr}-${title}`,
        title,
        start: selectedData?.startStr,
        end: selectedData?.endStr,
        allDay: selectedData?.allDay,
      });
      setSelectedData(null);
    }
  }

  return (
    <Box padding="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between" gap="15px">
        <Box
          display="flex"
          gap="15px"
          padding="15px"
          bgcolor={colors.primary[400]}
          borderRadius="4px"
          flexDirection="column"
          flex="1 1 20%"
        >
          <Typography variant="h5">Events</Typography>
          <List sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            {currentEvents.map((event) => {
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
                        {event.start instanceof Date &&
                        !isNaN(event.start.getTime())
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
        <Box flex="1 1 100%">
          {/* DeleteEvent */}
          <Dialog
            open={isDeleteEvent}
            aria-labelledby="draggable-dialog-title"
            PaperComponent={Paper}
            TransitionComponent={Fade}
            onClose={() => setIsDeleteEvent((show) => !show)}
          >
            <DialogTitle sx={{ backgroundColor: colors.primary[400] }}>
              Delete event
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: colors.primary[500] }}>
              <DialogContentText paddingTop="15px">
                Are you sure you want to delete the event
                <strong style={{ color: colors.greenAccent[500] }}>
                  {` ${selectedEvent?.event?.title}`}
                </strong>
              </DialogContentText>
            </DialogContent>
            <DialogActions
              sx={{
                backgroundColor: colors.primary[400],
                padding: "15px",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <CustomizedButton onClick={handleDeleteEvent}>
                Yes
              </CustomizedButton>
              <CustomizedButton
                onClick={() => setIsDeleteEvent((show) => !show)}
              >
                No
              </CustomizedButton>
            </DialogActions>
          </Dialog>
          {/* CreateEvent */}
          <Dialog
            open={isCreateEvent}
            aria-labelledby="draggable-dialog-title"
            PaperProps={{
              component: CustomizedForm,
              onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const eventTitle = Object.fromEntries(formData.entries());
                console.log(formData);
                console.log(eventTitle);

                if (eventTitle) {
                  handleCreateEvent(String(eventTitle.event));
                }
                setIsCreateEvent((show) => !show);
              },
            }}
            TransitionComponent={Fade}
            onClose={() => setIsCreateEvent((show) => !show)}
          >
            <DialogTitle sx={{ backgroundColor: colors.primary[400] }}>
              Create event
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: colors.primary[500] }}>
              <DialogContentText paddingTop="15px">
                Please enter new event
              </DialogContentText>
              <TextField
                autoFocus
                required
                name="event"
                id="event"
                type="text"
                label="Event"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions
              sx={{
                backgroundColor: colors.primary[400],
                padding: "15px",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <CustomizedButton type="submit">Add</CustomizedButton>
              <CustomizedButton
                onClick={() => setIsCreateEvent((show) => !show)}
              >
                Cancel
              </CustomizedButton>
            </DialogActions>
          </Dialog>

          <FullCalendar
            height="75vh"
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            dayMaxEvents={true}
            selectMirror={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events: EventApi[]) => {
              setCurrentEvents(events);
            }}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialEvents={initialEvents}
          ></FullCalendar>
        </Box>
      </Box>
    </Box>
  );
}
const initialEvents: EventSourceInput = [
  {
    id: "12315",
    title: "All-day event",
    date: "2024-03-14",
  },
  {
    id: "5123",
    title: "Timed event",
    date: "2024-03-28",
  },
];
const CustomizedForm = styled("form")`
  width: 60%;
`;
