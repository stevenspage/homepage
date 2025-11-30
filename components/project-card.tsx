import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  url: string
  tags: string[]
  isGithub?: boolean
}

export function ProjectCard({ title, description, url, tags, isGithub }: ProjectCardProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between gap-2 mb-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors text-balance">{title}</CardTitle>
            {isGithub ? (
              <Github className="w-5 h-5 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
            ) : (
              <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
            )}
          </div>
          <CardDescription className="text-pretty leading-relaxed">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
