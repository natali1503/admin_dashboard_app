import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { Icon, MenuItem as MenuItemType } from "../../data/menuData/menuTypes";

interface ItemProps {
  title: string;
  to: string;
  icon: Icon;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
export const Item = ({ title, to, icon, selected, setSelected }: ItemProps) => {
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

interface SidebarItemProps {
  chapter: string;
  item: MenuItemType[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
function SidebarItem({
  chapter,
  item,
  selected,
  setSelected,
}: SidebarItemProps) {
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
      {item.map((el: MenuItemType, i: number) => {
        return (
          <Item
            title={el.title}
            to={el.to}
            icon={el.icon}
            selected={selected}
            setSelected={setSelected}
            key={i}
          />
        );
      })}
    </>
  );
}
export default SidebarItem;
