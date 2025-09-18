"use client"

import { useEffect, useRef, useState } from "react"
import Navigation from "@/components/ui/navigation"
import Header from "@/components/sections/header"
import Work from "@/components/sections/work"
import Thoughts from "@/components/sections/thoughts"
import Connect from "@/components/sections/connect"
import Footer from "@/components/sections/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navigation activeSection={activeSection} />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <Header sectionsRef={sectionsRef} />
        <Work sectionsRef={sectionsRef} />
        <Thoughts sectionsRef={sectionsRef} />
        <Connect sectionsRef={sectionsRef} />
        <Footer isDark={isDark} onToggleTheme={toggleTheme} />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
