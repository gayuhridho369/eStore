import { useTranslations } from "next-intl";
import { Menu, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/common/mode-toggle";
import { LocaleToggle } from "@/components/common/locale-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tBrand = useTranslations("Brand");
  const tMenu = useTranslations("Menu");

  const menus = [
    {
      title: tMenu("home"),
      url: "#",
    },
    {
      title: tMenu("article"),
      url: "#",
    },
    {
      title: tMenu("career"),
      url: "#",
    },
    {
      title: tMenu("about_us"),
      url: "#",
    },
  ];

  return (
    <>
      <header className="fixed w-full bg-background top-0 z-50 h-14 md:h-16 flex items-center shadow">
        <div className="container flex items-center justify-between">
          <div className="flex flex-col gap-[-2px]">
            <h1 className="text-2xl font-bold flex items-center">
              <ShoppingBag className="fill-primary text-primary-foreground size-8" />
              {tBrand("name")}
            </h1>
          </div>

          <nav className="hidden md:flex gap-12">
            <ul className="flex items-center font-medium gap-4">
              {menus.map((menu, index) => (
                <li
                  className={cn(
                    index === 0 && "bg-primary text-primary-foreground ",
                    "px-4 py-2 hover:bg-accent rounded-md cursor-pointer"
                  )}
                  key={index}
                >
                  {menu.title}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <LocaleToggle />
            </div>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="flex md:hidden"
                variant="outline"
                size="sm"
                aria-label="Menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[400px] max-w-[90%] py-4">
              <SheetHeader>
                <SheetTitle asChild>
                  <h1 className="!text-2xl !font-bold flex items-center gap-2">
                    <ShoppingBag className="fill-primary text-primary-foreground size-8" />
                    {tBrand("name")}
                  </h1>
                </SheetTitle>
                <nav className="flex flex-col gap-12">
                  <ul className="flex flex-col items-center font-medium gap-4 mt-6">
                    {menus.map((menu, index) => (
                      <li
                        className={cn(
                          index === 0 && "bg-primary text-primary-foreground ",
                          "px-4 py-2 hover:bg-accent rounded-md cursor-pointer"
                        )}
                        key={index}
                      >
                        {menu.title}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-5 right-5 flex gap-2">
                    <ModeToggle />
                    <LocaleToggle />
                  </div>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="min-h-screen w-full mt-20">{children}</main>

      <footer className="bg-accent py-10">
        <div className="container flex flex-col md:flex-row gap-8 justify-between items-center">
          <p className="text-sm md:text-lg font-medium text-center">
            {tBrand("copyright")} &copy; {new Date().getFullYear()}{" "}
            {tBrand("name")}. {tBrand("all_rights_reserved")}
          </p>
          <h1 className="text-2xl md:text-4xl font-bold flex items-center gap-1">
            <ShoppingBag className="fill-primary text-primary-foreground size-10" />
            {tBrand("name")}
          </h1>
        </div>
      </footer>
    </>
  );
}
