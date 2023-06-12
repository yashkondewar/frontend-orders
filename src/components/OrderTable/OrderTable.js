import React from "react";
import "./OrderTable.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import view from "../img/view.png";
import order from "../img/order.png";

const DashboardTable = () => {
  // Sample data for the table
  const columns = [
    "ID",
    "Status",
    "Delivery type",
    "Payment",
    "Content",
    "View",
  ];
  const rows = [
    {
      id: 1,
      status: "New order",
      deliveryType: "Delivery",
      payment: "Paid",
      content: "Crocin",
      view: <img src={view} alt="Logo" />,
    },
    {
      id: 2,
      status: "New order",
      deliveryType: "Pick up",
      payment: "Not Paid",
      content: "Crocin",
      view: <img src={view} alt="Logo" />,
    },
    {
      id: 3,
      status: "New order",
      deliveryType: "Delivery",
      payment: "_",
      content: "Crocin",
      view: <img src={view} alt="Logo" />,
    },
    {
      id: 4,
      status: "New order",
      deliveryType: "Delivery",
      payment: "COD",
      content: "Crocin",
      view: <img src={view} alt="Logo" />,
    },
    {
      id: 5,
      status: "New order",
      deliveryType: "Pick up",
      payment: "Paid",
      content: "Crocin",
      view: <img src={view} alt="Logo" />,
    },
  ];

  return (
    <div className="table_area">
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="table_head">
            <TableRow>
              {columns.map((column) => (
                <TableCell className="column_cell" key={column}>
                  {column}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={order} alt="Logo" />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="table_body" style={{}}>
            {rows.map((row) => (
              <TableRow
                style={{
                  textAlign: "left",
                }}
                key={row.id}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell
                  style={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "123.4%",
                    color: "#666666",
                  }}
                >
                  {row.deliveryType === "Delivery" ? (
                    <LocalShippingIcon style={{ color: "#666666" }} />
                  ) : (
                    <StoreIcon style={{ color: "#666666" }} />
                  )}
                  {row.deliveryType}
                </TableCell>
                <TableCell>{row.payment}</TableCell>
                <TableCell
                  style={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "123.4%",
                    color: "#666666",
                  }}
                >
                  {row.content}
                </TableCell>
                <TableCell>{row.view}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DashboardTable;
