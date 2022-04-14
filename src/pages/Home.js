import React from "react";
import OrderStatCards from "../components/OrderStatCards";
import { NavBar } from "../components/NavBar";
import Table from "../shared/Table";

const data = [
  {
    columns: ['Product name', 'Brand', 'Price', 'Quantity', 'Total', 'Status'],
    rows: [
      {
        productName: "Oct-19",
        brand: 123,
        price: 12,
        quantity: 123,
        total: 12,
        status: 4,
      },
      {
        productName: "Oct-19",
        brand: 123,
        price: 12,
        quantity: 123,
        total: 12,
        status: 4,
      },
    ],
  },
];

export const Home = () => {
  return (
    <>
      <NavBar />
      <OrderStatCards />
      <Table data={data} />
    </>
  );
};

export default Home;
