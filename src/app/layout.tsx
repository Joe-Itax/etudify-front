import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/header/header";
import { poppins } from "@/styles/fonts";

export const metadata: Metadata = {
  authors: [
    {
      name: "Joseph Itakala",
      url: "https://linkedin.com/in/joseph-itakala | https://github.com/Joe-Itax",
    },
  ],
  title: {
    default: "Etudify",
    template: "%s | Etudify",
  },
  description:
    "Etudify connecte les étudiants pour l'entraide scolaire, groupes d'études, tutorat, et partage de ressources pédagogiques. Destiné à tous les étudiants.",
  keywords:
    "Etudify, étudiant 3.0, étudiant, entraide scolaire, groupes d'étude, tutorat, partage de ressources pédagogiques, cours en ligne, mentorat, discussion académique, performance académique, événements éducatifs, webinaires, collaboration en ligne, opportunités de stage, emploi étudiant, jeux éducatifs, quiz interactifs, communauté étudiante, communauté estudiantine, soutien académique, réseau étudiant, éducation en ligne",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
