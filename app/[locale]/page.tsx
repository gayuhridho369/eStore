import { Suspense } from "react";
import { getProducts } from "@/actions/product";
import Loader from "@/components/common/loader";
import HeroBrand from "./_sections/hero-brand";
import ProductHeader from "./_sections/product-header";
import ProductList from "./_sections/product-list";

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <HeroBrand />

      <ProductHeader />
      <Suspense fallback={<Loader />}>
        <ProductList products={products} />
      </Suspense>
    </>
  );
}
