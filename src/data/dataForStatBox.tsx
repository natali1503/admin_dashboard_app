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
    private precent: number
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
    if (this.precent > 0) return `+${this.precent}%`;
    return `${this.precent}%`;
  }
}

const emails = new StatBox("Emails Sent", <EmailIcon />, 12361, 14);

const sales = new StatBox("Sales Obtained", <PointOfSaleIcon />, 431225, 21);
const clients = new StatBox("New Clients", <PersonAddIcon />, 32441, 5);
const traffic = new StatBox("Traffic Received", <TrafficIcon />, 1325134, 43);
export const dataForStatBox = [emails, sales, clients, traffic];
