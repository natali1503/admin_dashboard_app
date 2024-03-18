import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { MenuData, MenuItem } from "./menuTypes";

const team = new MenuItem("Manage Team", "/team", <PeopleOutlinedIcon />);
const contacts = new MenuItem(
  "Contacts Information",
  "/contacts",
  <ContactsOutlinedIcon />
);
const invoices = new MenuItem(
  "Invoices Balances",
  "/invoices",
  <ReceiptOutlinedIcon />
);
const menuData = new MenuData("Data", [team, contacts, invoices]);

export default menuData;
