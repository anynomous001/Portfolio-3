import BlogCard from '@/components/shared/blog-card'
import { BlogPost } from '../types'

interface ThoughtsProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

export default function Thoughts({ sectionsRef }: ThoughtsProps) {
  const posts: BlogPost[] = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring how AI and automation are reshaping the way we build for the web.",
      date: "Dec 2024",
      readTime: "5 min",
    },
    {
      title: "Design Systems at Scale",
      excerpt: "Lessons learned from building and maintaining design systems across multiple products.",
      date: "Nov 2024",
      readTime: "8 min",
    },
    {
      title: "Performance-First Development",
      excerpt: "Why performance should be a first-class citizen in your development workflow.",
      date: "Oct 2024",
      readTime: "6 min",
    },
    {
      title: "The Art of Code Review",
      excerpt: "Building better software through thoughtful and constructive code reviews.",
      date: "Sep 2024",
      readTime: "4 min",
    },
  ];

  return (
    <section
      id="thoughts"
      ref={(el) => (sectionsRef.current[2] = el)}
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-light">Recent Thoughts</h2>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
