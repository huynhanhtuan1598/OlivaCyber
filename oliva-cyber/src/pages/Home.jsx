import React from "react";
import Navigation from "../components/Navigation";
import Collection from "../components/Collection";
import Product from "../components/Product";
import Sale from "../components/Sale";
import Bestsale from "../components/Bestsale";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Collection />
      <Product />
      <Sale />
      <Bestsale />
    </div>
  );
}
