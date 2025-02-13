"use client";

import React from "react";
import { Product } from "@/types/product";
import ProductSort from "./product-sort";
import ProductCard from "./product-card";
import ProductPreview from "./product-preview";
import useProduct from "../_usecase/use-product";

export default function ProductList({ products }: { products: Product[] }) {
  const { data, sort, preview, resetPreview, updatePreview, handleSort } =
    useProduct({ products });

  return (
    <div className="container mb-20">
      <ProductSort sort={sort} handleSort={handleSort} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            updatePreview={updatePreview}
          />
        ))}
      </div>

      <ProductPreview data={preview} resetData={resetPreview} />
    </div>
  );
}
