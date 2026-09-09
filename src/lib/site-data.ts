import logo from "@/assets/arc-logo.jpg.asset.json";
import heroImage from "@/assets/arc-hero.jpg";
import interiorImage from "@/assets/arc-interior.jpg";
import studioImage from "@/assets/arc-studio.jpg";

export const img = {
  logo: logo.url,
  hero: heroImage,
  interior: interiorImage,
  studio: studioImage,
};

export const site = {
  name: "ARC Studio",
  short: "ARC",
  fullName: "ARC Studio — Architecture, Build & Interiors",
  tagline: "Architecture • Build • Interiors",
  byline: "by M.M Associates",
  logo: img.logo,
  address: "Islamabad, Pakistan",
  email: "info@buildarcstudio.com",
  phone: "+92 300 0037272",
  phoneTel: "+923000037272",
  whatsapp:
    "https://wa.me/923000037272?text=Hello%20ARC%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project.",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "architecture",
    title: "Architectural Design",
    body: "Residential, commercial and mixed-use buildings designed for function, form and future.",
  },
  {
    slug: "interior",
    title: "Interior Design & Execution",
    body: "Modern interiors that reflect your lifestyle. From concept to installation.",
  },
  {
    slug: "construction",
    title: "Construction & Build",
    body: "End-to-end construction with quality materials and on-time delivery.",
  },
  {
    slug: "visualisation",
    title: "3D Visualization",
    body: "See your space before we build it. Photorealistic renders and walkthroughs.",
  },
];

export const whyUs = [
  {
    title: "Purpose-Driven Design",
    body: "Every space is designed around how you live and work.",
  },
  {
    title: "Quality Craftsmanship",
    body: "We use premium materials and trusted contractors. Built to last.",
  },
  {
    title: "Transparent Process",
    body: "Clear timelines, clear budgets, zero surprises.",
  },
  {
    title: "One-Stop Solution",
    body: "Design, approvals, construction and interiors — all under one roof.",
  },
];

export const testimonials = [
  {
    name: "Client Name",
    role: "Residential Project",
    quote: "ARC Studio turned our house into a home. Professional, creative, and reliable.",
  },
];
