export interface DataTeam {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
}
export interface DataContacts {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}
export interface DataInvoices {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
}
export interface Transactions {
  txId: string;
  user: string;
  date: string;
  cost: string;
}

export interface BarData {
  country: string;
  items: Map<string, number>;
  colorItems?: Map<string, string>;
}

export interface PieData {
  id: string;
  label: string;
  value: number;
  color?: string;
}
export interface LineData {
  id: string;
  color: string;
  data: { x: string; y: number }[];
}
export interface GeographyData {
  id: string;
  value: number;
}

export interface GeoFeatures {
  type: string;
  features: FeaturesType[];
}

interface FeaturesType {
  type: string;
  properties: { name: string };
  geometry: {
    type: string;
    coordinates: number[][][][] | number[][][];
  };
  id: string;
}
