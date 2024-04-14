import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";

import { mockDataInvoices } from "../../data/mockData.ts";
import { tokens } from "../../theme";
import { Header } from "../../components/Header";

export default function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  interface Row {
    cost: string;
  }
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: ({ row: { cost } }: { row: Row }) => {
        return <Typography color={colors.greenAccent[500]}>${cost}</Typography>;
      },
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];
  return (
    <Box padding="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
}
