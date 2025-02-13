import Image from "next/image";
import { useTranslations } from "next-intl";
import { Headset, PackageSearch, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import BannerImg from "@/assets/banner.webp";

export default function HeroBrand() {
  const tBrand = useTranslations("Brand");

  return (
    <div className="w-full h-full relative container mt-6">
      <div className="absolute z-10 flex flex-row justify-between md:justify-start md:flex-col left-0 px-10 md:p-0 md:left-20 top-1/2 -translate-y-1/2 w-full md:w-1/2">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 flex z-20 items-center gap-1">
            <ShoppingBag className="fill-primary text-primary-foreground size-10" />
            {tBrand("name")}
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-900">
            {tBrand("moto")}
          </p>
          <p className="mt-4 hidden lg:block text-gray-700">
            {tBrand("description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:mt-6">
          <Button>
            <PackageSearch />
            {tBrand("learn_more")}
          </Button>
          <Button variant="outline">
            <Headset /> {tBrand("contact_us")}
          </Button>
        </div>
      </div>

      <AspectRatio ratio={3 / 1}>
        <Image
          src={BannerImg}
          alt="Image"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
}
