import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

const Iteam = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

function SidebarIteam({ chapter, iteam }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0px 5px 20px" }}
      >
        {chapter}
      </Typography>
      {iteam.map((el: object, i: number) => {
        return (
          <Iteam
            title={el.title}
            to={el.to}
            icon={el.icon}
            selected={el.selected}
            setSelected={el.setSelected}
            key={i}
          />
        );
      })}
    </>
  );
}
export default SidebarIteam;
