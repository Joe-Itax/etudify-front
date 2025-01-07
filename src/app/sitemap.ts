import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://etudify.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // {
    //   url: "https://etudify.vercel.app/services",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: "https://etudify.vercel.app/realisations",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: "https://etudify.vercel.app/about",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.6,
    // },
    // {
    //   url: "https://etudify.vercel.app/contact",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: "https://etudify.vercel.app",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly or monthly or yearly",
    //   priority: 0.5,
    // },
  ];
}
