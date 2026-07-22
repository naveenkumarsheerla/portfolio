import React from "react";
import MCV from "../assets/portfolio/MCV.png";
import stacx from "../assets/portfolio/stacx-logo-cube-3d.png";

const portfolios = [
  {
    id: 1,
    name: "Zunosync",
    subtitle: "AI Social Media Management Platform",
    description:
      "AI-powered command center for publishing to Instagram, LinkedIn, X, TikTok, Facebook & YouTube — AI content assistant, calendar scheduling, RBAC team collaboration, and payments.",
    tech: ["React", "TypeScript", "Vite", "Supabase", "TanStack Query", "Razorpay"],
    gradient: "from-indigo-600 via-purple-600 to-pink-500",
  },
  {
    id: 2,
    name: "Zunosync",
    subtitle: "Marketing Landing Page",
    description:
      "SEO-optimized marketing site with a dynamic INR/USD pricing page, full OpenGraph/Schema.org metadata, and a glassmorphic dark-theme design system with Framer Motion micro-interactions.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "Framer Motion"],
    gradient: "from-slate-800 via-cyan-700 to-teal-500",
  },
  {
    id: 3,
    name: "CRM & Business Operations",
    subtitle: "Unified CRM, HR & Project Management",
    description:
      "Leads, deals, clients, projects and tasks in one platform. Speech-to-text lead logging, a multi-tab project dashboard, and an HR module for recruitment and team administration.",
    tech: ["Vite", "React", "TypeScript", "shadcn/ui", "Tailwind CSS"],
    gradient: "from-emerald-600 via-teal-600 to-blue-600",
  },
  {
    id: 4,
    name: "stacX",
    subtitle: "Cloud-Based Technology Platform",
    description:
      "Modular SaaS platform spanning organization management, school administration, expense tracking, volunteer management and employee management, with real-time dashboards.",
    tech: ["Next.js", "Material UI", "Node.js", "NextAuth"],
    src: stacx,
  },
  {
    id: 5,
    name: "MCV MotoCorp",
    subtitle: "Vehicle Sales & Management App",
    description:
      "Inventory management, multi-branch sales tracking with real-time updates, and a customer interaction module for test-drives and service scheduling.",
    tech: ["React", "REST APIs"],
    src: MCV,
  },
];

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full text-white bg-gradient-to-b from-black to-gray-800 py-16"
    >
      <div className="flex flex-col justify-center w-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-gray-400">Check out some of my work right here</p>
        </div>

        <div className="grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 sm:px-0">
          {portfolios.map(({ id, name, subtitle, description, tech, src, gradient }) => (
            <div
              key={id}
              className="relative flex flex-col overflow-hidden bg-gray-900 rounded-lg shadow-lg shadow-black/50 group"
            >
              <div
                className={
                  "flex items-center justify-center h-40 " +
                  (src ? "" : `bg-gradient-to-br ${gradient}`)
                }
              >
                {src ? (
                  <img
                    src={src}
                    alt={name}
                    className="object-cover w-full h-40 duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="px-4 text-2xl font-bold text-center text-white/90">
                    {name}
                  </span>
                )}
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="mb-2 text-sm font-medium text-teal-400">{subtitle}</p>
                <p className="flex-1 text-sm text-gray-400">{description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs text-gray-300 bg-white/10 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
