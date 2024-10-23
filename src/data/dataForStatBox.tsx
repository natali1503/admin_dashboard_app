import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

export type Icon = ReturnType<typeof EmailIcon>;

class StatBox {
  constructor(
    private title: string,
    private icon: Icon,
    private value: number,
    private precent: number,
    private precentDiff: number
  ) {}
  getTitle() {
    return this.title;
  }
  getIcon() {
    return this.icon;
  }
  getValue() {
    return this.value.toLocaleString();
  }
  getPrecent() {
    return this.precent;
  }
  getPrecentDiff() {
    if (this.precentDiff > 0) return `+${this.precentDiff}%`;
    return `${this.precentDiff}%`;
  }
}

const emails = new StatBox("Emails Sent", <EmailIcon />, 12361, 14, 40);

const sales = new StatBox(
  "Sales Obtained",
  <PointOfSaleIcon />,
  431225,
  21,
  57
);
const clients = new StatBox("New Clients", <PersonAddIcon />, 32441, 5, 83);
const traffic = new StatBox(
  "Traffic Received",
  <TrafficIcon />,
  1325134,
  43,
  37
);
export const dataForStatBox = [emails, sales, clients, traffic];
