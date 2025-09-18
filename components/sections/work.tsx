import ProjectCard from '@/components/shared/project-card'
import { Project } from '../types'

interface WorkProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

export default function Work({ sectionsRef }: WorkProps) {
  const projects: Project[] = [
    {
      year: "2025",
      title: "PictureWhisperAI",
      description: "This project appears to be an AI-powered image analysis application called \"PictureWhisper\" built with Next.js. It allows users to upload images and receive detailed AI-generated descriptions of their content. The application implements rate limiting for API calls and uses OpenAI's API for image analysis.",
      tech: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "Image Processing"],
      liveUrl: "https://image-whisper-ai.vercel.app/",
      githubUrl: "https://github.com/anynomous001/ImageWhisperAI",
    },
    {
      year: "Early 2025",
      title: "Readium",
      description: "A comprehensive reading platform designed to enhance your reading experience with modern features and intuitive design.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      year: "Mid 2024",
      title: "PlayTM",
      description: "A light replica of how PayTM works, like adding money to your wallet, sending money to a friend, adding beneficiaries, requesting a friend for money. Not only that you can also check your balance and history of your wallet.",
      tech: ["React", "Node.js", "PostgreSQL", "Prisma", "NextAuth"],
      liveUrl: "https://playtm.vercel.app/",
      githubUrl: "https://github.com/anynomous001/Turborepo_Paytm",
    },
    {
      year: "2023",
      title: "Quizzicle",
      description: "A quiz platform where you can create your own quiz and test your knowledge on a variety of topics.",
      tech: ["React", "JavaScript", "CSS", "Local Storage"],
      liveUrl: "https://spectacular-kataifi-8d603e.netlify.app/",
      githubUrl: "https://github.com/anynomous001/Quiz",
    },
  ];

  return (
    <section
      id="work"
      ref={(el) => (sectionsRef.current[1] = el)}
      className="relative min-h-screen py-20 sm:py-32"
    >
      <div className="relative z-10 max-w-6xl mx-auto ">
        <div className="space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-light text-white">
              Selected Projects
            </h2>
            <div className="text-sm text-white/60 font-mono tracking-wider">
              2023 — 2025
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-8 sm:space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
