import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
type Icon = ReturnType<typeof PeopleOutlinedIcon>;

class MenuIteam {
  title: string;
  to: string;
  icon: Icon;
  selected: string;
  setSelected: string;
  constructor(
    title: string,
    to: string,
    icon: Icon,
    selected: string,
    setSelected: string
  ) {
    (this.title = title),
      (this.to = to),
      (this.icon = icon),
      (this.selected = selected),
      (this.setSelected = setSelected);
  }
}

class MenuData {
  constructor(public chapter: string, public iteam: MenuIteam[]) {}
}

const team = new MenuIteam(
  "Manage Team",
  "/team",
  <PeopleOutlinedIcon />,
  "selected",
  "setSelected"
);

const contacts = new MenuIteam(
  "Contacts Information",
  "/contacts",
  <ContactsOutlinedIcon />,
  "selected",
  "setSelected"
);
const invoices = new MenuIteam(
  "Invoices Balances",
  "/invoices",
  <ReceiptOutlinedIcon />,
  "selected",
  "setSelected"
);
const menuData = new MenuData("Data", [team, contacts, invoices]);

export default menuData;
// const menuData = new MenuData("Data",[
//   new class MenuIteam({  title: 'Manage Team',
//     to: '/team",
//     icon: <PeopleOutlinedIcon />,
//     selected: selected,
//     setSelected: setSelected,}),
//     // {  title: 'Contacts Information',
//     // to: '/contacts",
//     // icon: <ContactsOutlinedIcon />,
//     // selected: selected,
//     // setSelected: setSelected,},
//     // {  title: 'Invoices Balances',
//     // to: '/invoices",
//     // icon: <ReceiptOutlinedIcon />,
//     // selected: selected,
//     // setSelected: setSelected,}

//   ]);
