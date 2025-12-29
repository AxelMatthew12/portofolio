export default function TechPage() {
  const techStack = [
    "JavaScript",
    "CSS",
    "Python",
    "React",
    "Laravel",
    "PHP",
    "Flutter",
    "Java",
    "Git",
    
  ];

  return (
    <section className="pb-16">
      {/* WRAPPER biar sejajar dengan bio */}
      <div className="mx-auto max-w-2xl">
        {/* DESCRIPTION */}
        <p className="mb-6 text-white/70">
          Technologies, languages, and tools that I use for building
          applications and learning new things.
        </p>

        {/* TECH LIST */}
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/15 bg-white/5
                         px-4 py-1.5 text-sm font-medium text-white/90
                         hover:bg-white/10 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
