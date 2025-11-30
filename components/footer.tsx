import Link from "next/link"
import { Github, Mail, MessageCircle, BookOpen } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Steven's Projects. Built with Next.js
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="mailto:steve.pub@outlook.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <button
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="微信公众号：芬哥Steven"
                title="微信公众号：芬哥Steven"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <Link
                href="https://www.zhihu.com/people/stevenc214"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="知乎"
              >
                <BookOpen className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/stevenspage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
