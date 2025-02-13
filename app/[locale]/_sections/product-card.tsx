import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";
import NoImage from "@/assets/no-image.png";
import { Button } from "@/components/ui/button";

export default function ProductCard({
  product,
  updatePreview,
}: {
  product: Product;
  updatePreview: (product: Product) => void;
}) {
  return (
    <div
      key={product.id}
      className="relative border rounded-md shadow-sm"
      onClick={() => updatePreview(product)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={(product?.image || NoImage.src) as string}
        alt={product?.name || ""}
        className="h-[150px] md:h-[200px] w-full object-cover rounded-t-md bg-accent"
      />
      <span className="absolute top-3 left-3 inline-flex items-center justify-center bg-primary text-primary-foreground p-1 text-sm rounded-full w-6 h-6 font-medium">
        {product.id}
      </span>

      <div className="flex flex-col md:flex-row gap-2 justify-between px-3 py-4">
        <div className="flex flex-col w-[80%]">
          <h1 className="font-medium w-[80%] truncate mb-2">
            {product.name || "No Image Name"}
          </h1>
          <p className="font-semibold text-sm bg-orange-500 text-primary-foreground w-fit px-2 rounded-sm">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(product.price)}
          </p>
        </div>
        <Button size="icon" variant="outline">
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
