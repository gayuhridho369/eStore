"use server";

import { API_PRODUCT, API_PRODUCT_IMAGE } from "@/constants/api";
import { DUMMY_PRODUCT_PRICE } from "@/constants/data";
import { Product, ProductImage } from "@/types/product";

const NO_NAME_DEFAULT = "No Name";

export async function getProducts(): Promise<Product[]> {
  try {
    const [productsRes, imagesRes] = await Promise.all([
      fetch(API_PRODUCT).then((res) => res.json()),
      fetch(API_PRODUCT_IMAGE).then((res) => res.json()),
    ]);

    const products: Product[] = productsRes.data || [];
    const images: ProductImage[] = imagesRes.data || [];

    const processedProducts = products.map((product) => {
      const imageObj = images.find((img) => img.id.includes(product.id));
      const priceObj = DUMMY_PRODUCT_PRICE.find(
        (p) => p.id === Number(product.id)
      );

      return {
        ...product,
        image: imageObj?.image,
        price: priceObj?.price ?? 0,
      };
    });

    return processedProducts.sort((a, b) =>
      (a.name ?? NO_NAME_DEFAULT).localeCompare(b.name ?? NO_NAME_DEFAULT)
    );
  } catch (error) {
    console.error("Error fetching products:", error);

    return [];
  }
}
