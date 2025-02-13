import React from "react";
import { Product } from "@/types/product";

const DEFAULT_PRODUCT = {
  id: "",
  name: "",
  image: "",
  price: 0,
};

export default function useProduct({ products }: { products: Product[] }) {
  const [preview, setPreview] = React.useState<Product>(DEFAULT_PRODUCT);
  const resetPreview = () => setPreview(DEFAULT_PRODUCT);
  const updatePreview = (product: Product) => setPreview(product);

  const [sort, setSort] = React.useState<{
    field: keyof Product;
    type: "asc" | "desc";
  }>({
    field: "name",
    type: "asc",
  });

  const [data, setData] = React.useState<Product[]>(products);

  const handleSort = (field: keyof Product) => {
    setSort((prevSort) => {
      const isAscending = prevSort.field === field && prevSort.type === "asc";
      return { field, type: isAscending ? "desc" : "asc" };
    });
  };

  React.useEffect(() => {
    setData((prevData) => {
      return [...prevData].sort((a, b) => {
        if (sort.field === "price") {
          return sort.type === "asc" ? a.price - b.price : b.price - a.price;
        }

        return sort.type === "asc"
          ? String(a[sort.field as keyof Product]).localeCompare(
              String(b[sort.field as keyof Product])
            )
          : String(b[sort.field as keyof Product]).localeCompare(
              String(a[sort.field as keyof Product])
            );
      });
    });
  }, [sort]);

  return { data, preview, sort, resetPreview, updatePreview, handleSort };
}
