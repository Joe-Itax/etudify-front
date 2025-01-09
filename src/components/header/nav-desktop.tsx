"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavDesktop({ className }: { className?: string }) {
  const path = usePathname();
  return (
    <nav className={`flex justify-between ${className}`}>
      <ul className={``}>
        {/* <li>
          <Link href="/" className={clsx("", path === "/" && "active")}>
            Accueil
          </Link>
        </li> */}
        <li>
          <Link
            href="/dashbord"
            className={clsx("", path === "/dashbord" && "active")}
          >
            Dashbord
          </Link>
        </li>
        <li>
          <Link
            href="/ressources"
            className={clsx("", path === "/ressources" && "active")}
          >
            Ressources
          </Link>
        </li>
        <li>
          <Link
            href="/forum"
            className={clsx("", path === "/forum" && "active")}
          >
            Forum
          </Link>
        </li>
        <li>
          <Link
            href="/support"
            className={clsx("", path === "/support" && "active")}
          >
            Support & Aide
          </Link>
        </li>
      </ul>
    </nav>
  );
}
