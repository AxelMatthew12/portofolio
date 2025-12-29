export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  tech: string[];
  role?: string;
  status?: "Completed" | "In Progress";
}


export const projects: Project[] = [
  {
    title: "SiProject",
    year: 2025,
    description: "Platform for finding and sharing collaboration project offers.",
    url: "https://github.com/AxelMatthew12/SiProJek",
    tech: ["Php","Laravel", "Tailwind CSS", "MySQL"],
    role: "Fullstack Developer",
    status: "Completed",
  },
  {
    title: "PBL Akreditasi",
    year: 2025,
    description:
      "Web-based accreditation information system for JTI educational programs.",
    url: "https://github.com/AxelMatthew12/PBL_Akreditasi",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap","Tailwind"],
    role: "Backend Developer",
    status: "Completed",
  },
  {
    title: "Cepuin",
    year: 2025,
    description: "Public news-sharing platform for publishing and reading articles.",
    url: "https://github.com/AxelMatthew12/cepuin",
    tech: ["React", "Tailwind CSS", "REST API"],
    role: "Frontend Developer",
    status: "In Progress",
  },
  {
    title: "BloodNearMe",
    year: 2025,
    description:
      "Web application to help users find nearby blood donors quickly.",
    url: "https://bloodnearme.vercel.app/",
    tech: ["TypeScript", "Flask", "Tailwind CSS", "Vercel"],
    role: "Frontend Developer",
    status: "Completed",
  },
  {
    title: "Klik Antri",
    year: 2025,
    description:
      "Online queue management system for clinics and public services.",
    url: "https://github.com/AxelMatthew12/antrean_poliklinik.git",
    tech: ["Flutter", "Firebase", "Dart"],
    role: "Fullstack Developer",
    status: "Completed",
  },
  {
    title: "GPIB Margo Mulyo Website",
    year: 2025,
    description:
      "Official church website for sharing information, schedules, and announcements.",
    url: "https://github.com/AxelMatthew12/gpib_margomulyowebsite.git",
    tech: ["React JS", "Tailwind CSS"],
    role: "Frontend Developer",
    status: "In Progress",
  },
];

