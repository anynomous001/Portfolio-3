import JobCard from '@/components/shared/job-card'
import { Job } from '../types'

interface WorkProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

export default function Work({ sectionsRef }: WorkProps) {
  const jobs: Job[] = [
    {
      year: "2023",
      role: "Senior Frontend Engineer",
      company: "Vercel",
      description: "Leading frontend architecture for developer tools and AI-powered features.",
      tech: ["React", "TypeScript", "Next.js"],
    },
    {
      year: "2022",
      role: "Frontend Engineer",
      company: "Linear",
      description: "Built performant interfaces for project management and team collaboration.",
      tech: ["React", "GraphQL", "Framer Motion"],
    },
    {
      year: "2021",
      role: "Full Stack Developer",
      company: "Stripe",
      description: "Developed payment infrastructure and merchant-facing dashboard features.",
      tech: ["Ruby", "React", "PostgreSQL"],
    },
    {
      year: "2019",
      role: "Software Engineer",
      company: "Airbnb",
      description: "Created booking flow optimizations and host management tools.",
      tech: ["React", "Node.js", "MySQL"],
    },
  ];

  return (
    <section
      id="work"
      ref={(el) => (sectionsRef.current[1] = el)}
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
          <div className="text-sm text-muted-foreground font-mono">2019 — 2025</div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
