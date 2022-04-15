import React, { useState } from "react";
import { OrderStatCards, MissingProductModal, NavBar } from "../components";
import Table from "../shared/Table";

const data = [
  {
    columns: ["Product name", "Brand", "Price", "Quantity", "Total", "Status"],
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
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <NavBar />
      <OrderStatCards />
      <Table data={data} />
      <button onClick={() => setShowModal(!showModal)}>Open Modal</button>
      {showModal ? <MissingProductModal /> : undefined}
    </>
  );
};

export default Home;
