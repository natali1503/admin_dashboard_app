import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";
import { Header } from "../../components/Header";

export default function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  interface Row {
    access: string;
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
    {
      field: "age",
      headerName: "Age",
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }: { row: Row }) => {
        return (
          <Box
            width="80%"
            margin="0 auto"
            bgcolor={colors.greenAccent[600]}
            borderRadius="4px"
            padding="5px"
            display="flex"
            gap="4px"
            flexDirection="row"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <LockOpenOutlinedIcon />}
            {access === "user" && <SecurityOutlinedIcon />}
            <Typography>{access}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box padding="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
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
        <DataGrid rows={mockDataTeam} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
}
