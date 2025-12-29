import Image from "next/image";
import { socialLinks } from "./lib/config";
import TechPage from "./techStack/tech";

export default function Page() {
  const tags = [
    "Business Information Systems",
    "Tech Enthusiast",
    "Fullstack Developer",
  ];

  return (
    <section className="py-4">
      {/* HEADER LAYOUT */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_auto] sm:items-start">
        {/* LEFT: TEXT */}
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Axelo Matthew Terang Barus
          </h1>

          {/* TAGLINE / BADGE */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="
                  rounded-full border px-3 py-1 text-sm
                  border-neutral-200 bg-neutral-50 text-neutral-700
                  dark:border-white/10 dark:bg-white/5 dark:text-white/80
                "
              >
                {t}
              </span>
            ))}
          </div>

          {/* BIO */}
          <div className="prose prose-neutral mt-6 dark:prose-invert">
            <p>
              I like programming, but what interests me more is data processing,
              especially converting words into knowledge insights and information
              transparency, which naturally reveal unique things that I want to
              process with the help of machine learning and data science knowledge
              that I am gradually improving.
            </p>
          
            <p>
              My inspiration is Napoleon Bonaparte and his history alongside
              Alexander the Great. One of Napoleon&apos;s quotes that I use as a
              personal motivator:
            </p>
          
            <blockquote>
              “Impossible is a word that can only be found in the dictionary of fools.”
            </blockquote>
          </div>
        </div>

        {/* RIGHT: AVATAR */}
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noreferrer"
          className="justify-self-start sm:justify-self-end"
        >
          <Image
            src="/profile.png"
            alt="Profile photo"
            className="
              rounded-2xl grayscale hover:grayscale-0 transition
              bg-neutral-100 ring-1 ring-neutral-200
              dark:bg-white/5 dark:ring-white/10
            "
            unoptimized
            width={180}
            height={180}
            priority
          />
        </a>
      </div>
      <br></br>
       <TechPage />
    </section>
  );
 
}
