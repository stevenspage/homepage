import Link from "next/link"
import { Github } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold hover:text-primary transition-colors">
            Steven
          </Link>

          <nav className="flex items-center gap-4 md:gap-6">
            <a
              href="#projects"
              className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              项目
            </a>
            <a
              href="#about"
              className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              关于
            </a>
            <a
              href="#community"
              className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              社群
            </a>
            <a
              href="#contact"
              className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              联系
            </a>
            <Link
              href="https://github.com/stevenspage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
