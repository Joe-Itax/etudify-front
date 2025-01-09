"use client";
import { RiAtLine } from "@remixicon/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { onScrollUpdate } from "../../lib/utils";
import { useEffect } from "react";
import NavMobile from "./nav-mobile";
import NavDesktop from "./nav-desktop";
import { Button } from "../ui/button";
import Image from "next/image";
import { EtudifyLogo } from "../etudify-logo.component";
// import ThemeSwitcher from "@/app/ui/components/ThemeSwitcher";

export default function Header({ className }: { className?: string }) {
  // useEffect(() => {
  //   onScrollUpdate();
  // }, []);

  return (
    <header
      className={`flex justify-center items-center w-full bg-transparent absolute top-0 left-0 text-text z-30 text-base px-4`}
    >
      <div className={`${className} w-full flex justify-between items-center`}>
        <div className="logo-box">
          <Link
            href="/"
            className={`flex gap-2 justify-center items-center p-6 pl-0`}
          >
            <EtudifyLogo />
          </Link>
        </div>

        <NavDesktop className="hidden min-[1000px]:block" />
        <div className="cta-contact_us hidden min-[1000px]:flex justify-center items-center gap-2">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-2">
              <div>
                <Link href="/login" className="">
                  <Button variant={"secondary"}>Se Connecter</Button>
                </Link>
              </div>
              <div>
                <Link href="/signup">
                  <Button variant={"default"}>S&apos;inscrire</Button>
                </Link>
              </div>
            </div>

            <div className="">
              {/* Avatar user */}
              {/* <Avatar /> */}
            </div>
          </div>
        </div>

        <NavMobile />
      </div>
    </header>
  );
}
