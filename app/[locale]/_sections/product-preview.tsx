import { Product } from "@/types/product";
import NoImage from "@/assets/no-image.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ProductPreview({
  data,
  resetData,
}: {
  data: Product;
  resetData: () => void;
}) {
  return (
    <Dialog open={!!data.id} onOpenChange={resetData}>
      <DialogContent className="w-full max-w-[600px]">
        <DialogHeader>
          <DialogTitle asChild>
            <h1 className="font-medium">{data.name || "No Image Name"}</h1>
          </DialogTitle>
          <DialogDescription asChild>
            <p className="font-semibold text-sm bg-orange-500 text-primary-foreground w-fit px-2 rounded-sm">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(data.price)}
            </p>
          </DialogDescription>
        </DialogHeader>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={(data.image || NoImage.src) as string}
          alt={data.name || ""}
          className="h-[500px] w-full object-cover rounded-t-md bg-accent"
        />
      </DialogContent>
    </Dialog>
  );
}
