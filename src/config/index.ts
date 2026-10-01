import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhamad Hafiz Saputra — Mobile & Web Developer",
  author: "Muhamad Hafiz Saputra",
  description:
    "Developer based in Yogyakarta, Indonesia. I specialize in enterprise web applications, scalable e-procurement systems, and robust backend architectures using Laravel, Go, and React.",
  lang: "en",
  siteLogo: "/foto gua.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/muhamadhafizsaputra" },
    { text: "Github", href: "https://github.com/muhamadhafizsaputra" },
    { text: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=muhamadhafizsaputra1@gmail.com" }
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhamad Hafiz Saputra",
    specialty: "Full Stack Web Developer",
    summary:
      "Computer Science student and developer based in Yogyakarta, Indonesia. I specialize in full-stack web development, building scalable applications and dashboards using React, Next.js, Laravel, and Docker.",
    email: "muhamadhafizsaputra1@gmail.com",
  },
  experience: [
    {
      company: "Sinergi Informatika Semen Indonesia",
      position: "Full Stack Software Engineer Intern",
      startDate: "Jan 2026",
      endDate: "Mei 2020",
      summary: [
        "Engineered an automated multi-tenant contract notification engine in Laravel across dual-database architectures (PostgreSQL & MySQL), supporting per-Project Manager threshold configurations and global fallbacks, reducing manual contract tracking overhead by 85%.",
        "Implemented a 120-day intelligent caching mechanism and rate-limited batch processing for automated Telegram & SMTP email services, completely eliminating duplicate alert notifications and preventing API rate-limit throttling (HTTP 429).",
        "Optimized complex cross-database SQL queries with dynamic aggregation (DATEDIFF, conditional joins, status filtering) across licenses, customer, and vendor contracts, accelerating dashboard backend response times by 35%.",
      ],
    },
    {
      company: "Eduprima",
      position: "Coding Tutor",
      startDate: "Oct 2025",
      endDate: "Dec 2025",
      summary: [
        "Developed customized, engaging lesson plans to teach fundamental programming concepts using MakeCode Python and Micro:bit to a young learner.",
        "Successfully translated complex coding logic, including arrays and functions, into age-appropriate educational projects to build early computational thinking skills.",
      ],
    }
  ],
  projects: [
    {
      name: "Discover Batur",
      summary: "A digital directory connecting Batur tourism and local MSMEs.",
      linkPreview: "https://discoverbatur.vercel.app/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/batur.png",
    },
    {
      name: "Teman Ibu",
      summary: "Stunting prevention web application built with Next.js.",
      linkPreview: "https://teman-ibu.vercel.app/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/temanibu.png",
    },
    {
      name: "Sky Grab",
      summary: "Cloud video downloader with automated task scheduling.",
      linkPreview: "/",
      linkSource: "https://github.com/MuhamadHafizSaputra/sky-grab",
      image: "/sky grab.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Muhamad Hafiz Saputra, a dedicated Software Engineer with a passion for building scalable, data driven applications. With professional experience engineering enterprise grade solutions, including e-procurement platforms and complex monitoring dashboards, I thrive on translating intricate business requirements into seamless digital experiences.

      Over the years, I’ve honed my technical stack across Laravel, Go, and React, alongside a strong foundation in optimizing complex SQL logic and handling SAP data integrations. My projects range from API heavy backend architectures for hardware sensors to comprehensive enterprise portals, all built with a strict focus on system performance, secure data communication, and operational efficiency.
    `,
    image: "/foto gua.jpeg",
  },
};

// #5755ff
