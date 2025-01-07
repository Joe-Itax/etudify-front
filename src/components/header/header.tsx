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
// import ThemeSwitcher from "@/app/ui/components/ThemeSwitcher";

export default function Header({ className }: { className?: string }) {
  // useEffect(() => {
  //   onScrollUpdate();
  // }, []);

  return (
    <header
      className={`flex justify-center items-center w-full bg-transparent absolute top-0 left-0 text-text z-30 text-base px-8`}
    >
      <div className={`${className} w-full flex justify-between items-center`}>
        <div className="logo-box">
          <Link
            href="/"
            className={`flex gap-2 justify-center items-center p-6 pl-0`}
          >
            {/* <RiAtLine size={40} /> */}
            <div className="w-16">
              <Image
                src="/assets/logo.png"
                alt="Logo Etudify"
                width={1590}
                height={1762}
                className="w-full "
              />
            </div>
            <span className="text-4xl font-bold text-primary">Etudify</span>
          </Link>
        </div>

        <NavDesktop className="hidden min-[1240px]:block" />
        <div className="cta-contact_us hidden min-[1240px]:flex justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-4">
            <div>
              <Link href="/login" className="rounded-l shadow-">
                <Button variant={"secondary"}>Se Connecter</Button>
              </Link>
            </div>
            <div>
              <Link href="/signup">
                <Button variant={"default"}>S&apos;inscrire</Button>
              </Link>
            </div>
          </div>
        </div>

        <NavMobile />
      </div>
    </header>
  );
}
