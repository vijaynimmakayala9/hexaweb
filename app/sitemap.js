import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
const base = "https://hexasoftsolutions.example";
export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/portfolio",
    "/blog",
    "/faqs",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];
  return [
    ...routes,
    ...services.map((x) => `/services/${x.slug}`),
    ...projects.map((x) => `/portfolio/${x.slug}`),
    ...posts.map((x) => `/blog/${x.slug}`),
  ].map((path) => ({ url: base + path, lastModified: new Date() }));
}
