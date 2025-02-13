import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProductSort({
  sort,
  handleSort,
}: {
  sort: {
    field: keyof Product;
    type: "asc" | "desc";
  };
  handleSort: (field: keyof Product) => void;
}) {
  const t = useTranslations("Product");

  return (
    <div className="flex gap-2 mb-4">
      <Button
        variant={sort.field === "name" ? "default" : "outline"}
        onClick={() => handleSort("name")}
      >
        {t("sort_by_name")}{" "}
        {sort.field === "name" &&
          (sort.type === "asc" ? (
            <ArrowDownNarrowWide />
          ) : (
            <ArrowUpNarrowWide />
          ))}
      </Button>
      <Button
        variant={sort.field === "price" ? "default" : "outline"}
        onClick={() => handleSort("price")}
      >
        {t("sort_by_price")}{" "}
        {sort.field === "price" &&
          (sort.type === "asc" ? (
            <ArrowDownNarrowWide />
          ) : (
            <ArrowUpNarrowWide />
          ))}
      </Button>
    </div>
  );
}
