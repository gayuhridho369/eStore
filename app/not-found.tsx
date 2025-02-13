import { useTranslations } from "next-intl";
import { Link, routing } from "@/i18n/routing";
import RootLayout from "@/components/layouts/root-layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <RootLayout locale={routing.defaultLocale}>
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-0 items-center">
          <h1 className="font-bold text-2xl">404 | {t("title")}</h1>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
        <Button>
          <Link href="/">{t("button")}</Link>
        </Button>
      </div>
    </RootLayout>
  );
}
