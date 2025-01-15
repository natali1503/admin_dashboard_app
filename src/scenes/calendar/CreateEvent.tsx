import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, TextField, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CustomizedButton from "./CustomizedButton";
import styled from "@emotion/styled";

interface ICreateEvent {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCreateEvent: (title: string) => void;
}

export default function CreateEvent({ isOpen, setIsOpen, handleCreateEvent }: ICreateEvent) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Dialog
      open={isOpen}
      aria-labelledby='draggable-dialog-title'
      PaperProps={{
        component: CustomizedForm,
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const eventTitle = Object.fromEntries(formData.entries());

          if (eventTitle) {
            handleCreateEvent(String(eventTitle.event));
          }
          setIsOpen((show) => !show);
        },
      }}
      TransitionComponent={Fade}
      onClose={() => setIsOpen((show) => !show)}
    >
      <DialogTitle sx={{ backgroundColor: colors.primary[400] }}>Create event</DialogTitle>
      <DialogContent sx={{ backgroundColor: colors.primary[500] }}>
        <DialogContentText paddingTop='15px'>Please enter new event</DialogContentText>
        <TextField autoFocus required name='event' id='event' type='text' label='Event' fullWidth variant='standard' />
      </DialogContent>
      <DialogActions
        sx={{
          backgroundColor: colors.primary[400],
          padding: "15px",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <CustomizedButton type='submit'>Add</CustomizedButton>
        <CustomizedButton onClick={() => setIsOpen((show) => !show)}>Cancel</CustomizedButton>
      </DialogActions>
    </Dialog>
  );
}
const CustomizedForm = styled("form")`
  width: 60%;
`;
