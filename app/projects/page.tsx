import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">
        Projects / Collaboration project
      </h1>

      <div className="space-y-5">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group block rounded-2xl border p-4 transition
              border-neutral-200 bg-white hover:bg-neutral-50
              dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10
            "
          >
            {/* TOP ROW: Title + short desc */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h2 className="text-base font-semibold text-neutral-900 dark:text-white">
                {project.title}
              </h2>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 sm:text-right sm:max-w-[60%]">
                {project.description?.trim() ? project.description : "—"}
              </p>
            </div>

            {/* TECH STACK CHIPS */}
            {project.tech?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="
                      rounded-full border px-2.5 py-1 text-xs font-medium
                      border-neutral-200 bg-neutral-50 text-neutral-700
                      dark:border-white/10 dark:bg-white/5 dark:text-white/80
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-xs text-neutral-500 dark:text-white/50">
                Tech stack: —
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
