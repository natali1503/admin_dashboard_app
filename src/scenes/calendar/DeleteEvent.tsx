import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, Paper, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { EventClickArg } from "@fullcalendar/core/index.js";
import CustomizedButton from "./CustomizedButton";

interface IDeleteEvent {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedEvent: EventClickArg | null;
  handleDeleteEvent: () => void;
}

export default function DeleteEvent({ isOpen, setIsOpen, selectedEvent, handleDeleteEvent }: IDeleteEvent) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Dialog open={isOpen} aria-labelledby='draggable-dialog-title' PaperComponent={Paper} TransitionComponent={Fade} onClose={() => setIsOpen((show) => !show)}>
      <DialogTitle sx={{ backgroundColor: colors.primary[400] }}>Delete event</DialogTitle>
      <DialogContent sx={{ backgroundColor: colors.primary[500] }}>
        <DialogContentText paddingTop='15px'>
          Are you sure you want to delete the event
          <strong style={{ color: colors.greenAccent[500] }}>{` ${selectedEvent?.event?.title}`}</strong>
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
        <CustomizedButton onClick={handleDeleteEvent}>Yes</CustomizedButton>
        <CustomizedButton onClick={() => setIsOpen((show) => !show)}>No</CustomizedButton>
      </DialogActions>
    </Dialog>
  );
}
