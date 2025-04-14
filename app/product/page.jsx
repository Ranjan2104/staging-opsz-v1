"use client";
import ProductPage from "../Pages/ProductPage";
import React from "react";
import Visibility from "./visibility";
import ProductSecurity from "../Components/ProductSecurity";
import ProductSaving from "../Components/ProductSaving";

export default function Product() {
  return (
    <div>
      <ProductPage />
      <ProductSecurity />
      <Visibility />
      <ProductSaving />
    </div>
  );
}
