import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: [
    {
      name: "Joseph Itakala",
      url: "https://linkedin.com/in/joseph-itakala | https://github.com/Joe-Itax",
    },
  ],
  title: {
    default: "Etudiant 3.0",
    template: "%s | Etudiant 3.0",
  },
  description:
    "Etudiant 3.0 connecte les étudiants pour l'entraide scolaire, groupes d'études, tutorat, et partage de ressources pédagogiques. Destiné à tous les étudiants.",
  keywords:
    "Etudiant 3.0, étudiant 3.0, étudiant, entraide scolaire, groupes d'étude, tutorat, partage de ressources pédagogiques, cours en ligne, mentorat, discussion académique, performance académique, événements éducatifs, webinaires, collaboration en ligne, opportunités de stage, emploi étudiant, jeux éducatifs, quiz interactifs, communauté étudiante, communauté estudiantine, soutien académique, réseau étudiant, éducation en ligne",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
