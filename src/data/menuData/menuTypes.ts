import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
export type Icon = ReturnType<typeof PeopleOutlinedIcon>;

export class MenuItem {
  title: string;
  to: string;
  icon: Icon;
  constructor(title: string, to: string, icon: Icon) {
    (this.title = title), (this.to = to), (this.icon = icon);
  }
}

export class MenuData {
  constructor(public chapter: string, public item: MenuItem[]) {}
}
