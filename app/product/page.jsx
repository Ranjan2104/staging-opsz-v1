"use client";

import React, { lazy, Suspense } from "react";
import ProductPage from "../Pages/ProductPage";

const Visibility = lazy(() => import("./visibility"));
const ProductSecurity = lazy(() => import("../Components/ProductSecurity"));
const ProductSaving = lazy(() => import("../Components/ProductSaving"));

export default function Product() {
  return (
    <div>
      <ProductPage />

      <Suspense fallback={<div>Loading Security...</div>}>
        <ProductSecurity />
      </Suspense>

      <Suspense fallback={<div>Loading Visibility...</div>}>
        <Visibility />
      </Suspense>

      <Suspense fallback={<div>Loading Savings...</div>}>
        <ProductSaving />
      </Suspense>
    </div>
  );
}
