import { useTranslations } from "next-intl";

export default function ProductHeader() {
  const t = useTranslations("Product");

  return (
    <div className="container my-10">
      <div className="my-6 flex flex-col gap-2 items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-primary mt-8">
          {t("title")}
        </h1>
        <p className="w-full md:w-[50%] text-sm md:text-base text-center">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
