import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import RootLayout from "@/components/layouts/root-layout";
import BaseLayout from "@/components/layouts/base-layout";

export const metadata: Metadata = {
  title: "eStore",
  description: "Your Business Solutions",
};

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <RootLayout locale={locale}>
      <BaseLayout>{children}</BaseLayout>
    </RootLayout>
  );
}
