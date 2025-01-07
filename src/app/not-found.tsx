import { Metadata } from "next";
import Link from "next/link";

const metadata: Metadata = {
  title: "Page non trouvée",
};

export default function NotFound() {
  return (
    <main className="flex absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 flex-col items-center justify-center gap-2 px-4">
      <div className="text-center">
        <p className=" text-8xl sm:text-9xl font-semibold text-primary-foreground">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Page non trouvée
        </h1>
        <p className="mt-6 text-base leading-7">
          Désolé, nous n&apos;avons pas pu trouver la page que vous recherchez.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="btn btn-primary">
            Retour à l&apos;accueil
          </Link>
          <Link href="/contact" className="btn btn-secondary group">
            Contacter le support{" "}
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            >
              -&gt;
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
