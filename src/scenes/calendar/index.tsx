import { Box } from "@mui/material";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateSelectArg, EventApi, EventClickArg, EventSourceInput } from "@fullcalendar/core/index.js";
import listPlugin from "@fullcalendar/list";

import { Header } from "../../components/Header";
import EventsList from "./EventsList";
import DeleteEvent from "./DeleteEvent";
import CreateEvent from "./CreateEvent";

export default function Calendar() {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [isDeleteEvent, setIsDeleteEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventClickArg | null>(null);
  const [selectedData, setSelectedData] = useState<DateSelectArg | null>(null);
  const [isCreateEvent, setIsCreateEvent] = useState(false);

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
    <Box padding='20px'>
      <Header title='Calendar' subtitle='Full Calendar Interactive Page' />
      <Box display='flex' justifyContent='space-between' gap='15px'>
        <EventsList eventsList={currentEvents} />
        <Box flex='1 1 100%'>
          <DeleteEvent isOpen={isDeleteEvent} setIsOpen={setIsDeleteEvent} handleDeleteEvent={handleDeleteEvent} selectedEvent={selectedEvent} />
          <CreateEvent isOpen={isCreateEvent} setIsOpen={setIsCreateEvent} handleCreateEvent={handleCreateEvent} />
          <FullCalendar
            height='75vh'
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            dayMaxEvents={true}
            selectMirror={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events: EventApi[]) => {
              setCurrentEvents(events);
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
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
