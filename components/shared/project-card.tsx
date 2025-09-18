import Link from 'next/link'
import Image from 'next/image'
import { Project } from '../types'

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group grid lg:grid-cols-12 gap-6 sm:gap-8 py-8 sm:py-12 border-b border-white/10 hover:border-white/20 transition-all duration-500">
      {/* Year */}
      <div className="lg:col-span-2">
        <div className="text-2xl sm:text-3xl font-light text-white/60 group-hover:text-white/80 transition-colors duration-500">
          {project.year}
        </div>
      </div>

      {/* Project Content */}
      <div className="lg:col-span-6 space-y-4">
        <div>
          <h3 className="text-2xl sm:text-3xl font-light group-hover:text-foreground transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        
        <p className="text-white/80 leading-relaxed max-w-2xl font-light">
          {project.description}
        </p>

      
      </div>
      <div className="lg:col-span-4 flex flex-col justify-between">
  {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs border border-white/20 text-white/80 rounded-full hover:border-white/40 hover:text-white transition-colors duration-300 font-light"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-4 pt-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="px-6 py-2 text-sm font-medium rounded-full text-blue-500 bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                Live Demo
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="px-6 py-2 text-sm font-medium rounded-full bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300"
              >
                GitHub
              </Link>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
