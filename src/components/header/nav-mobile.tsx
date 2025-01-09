"use client";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiAtLine, RiMenu4Line } from "@remixicon/react";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { EtudifyLogo } from "../etudify-logo.component";
// import ThemeSwitcher from "@/app/ui/components/ThemeSwitcher";

export default function NavMobile() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const setOpenState = () => {
    setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className={`min-[1000px]:hidden`}>
        <div className="menu-icon-box cursor-pointer min-[1000px]:hidden z-50 p-2 dark:bg-[#262626] bg-[#dcdcdc] abcdef rounded-md">
          <RiMenu4Line
            size={35}
            className="menu-icon rounded-lg icon-hamburger open-menu"
          />
        </div>
      </SheetTrigger>
      <SheetContent className="w-full min-[400px]:w-[400px] min-[1000px]:hidden flex flex-col last:justify-end bg-white">
        <SheetHeader className="flex flex-row">
          <Link
            onClick={() => setOpenState()}
            href="/"
            className={`flex justify-center items-center`}
          >
            <EtudifyLogo />
          </Link>
        </SheetHeader>
        <SheetClose></SheetClose>
        <nav className={`flex justify-center items-center nav-mobile`}>
          <ul className="flex gap-1 flex-col w-full">
            <li>
              <Link
                onClick={() => setOpenState()}
                href="/"
                className={clsx("", path === "/" && "active")}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenState()}
                href="/dashbord"
                className={clsx("", path === "/dashbord" && "active")}
              >
                Dashbord
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenState()}
                href="/ressources"
                className={clsx("", path === "/ressources" && "active")}
              >
                Ressources
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenState()}
                href="/forum"
                className={clsx("", path === "/forum" && "active")}
              >
                Forum
              </Link>
            </li>

            <div className="">
              <li>
                <Link
                  onClick={() => setOpenState()}
                  href="/login"
                  className={clsx("", path === "/login" && "active")}
                >
                  Se connecter
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpenState()}
                  href="/signup"
                  className={clsx("", path === "/signup" && "active")}
                >
                  S&apos;inscrire
                </Link>
              </li>
            </div>

            <div className="hidden">
              <li>
                <Link
                  onClick={() => setOpenState()}
                  href="/profile"
                  className={clsx("", path === "/profile" && "active")}
                >
                  Profile
                </Link>
              </li>
            </div>

            <li>
              <Link
                onClick={() => setOpenState()}
                href="/support"
                className={clsx("", path === "/support" && "active")}
              >
                Support & Aide
              </Link>
            </li>
          </ul>
        </nav>
        <SheetFooter className="w-full h-full flex items-end">
          {/* <ThemeSwitcher /> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
