import { ProjectCard } from "@/components/project-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MessageCircle, BookOpen, Sparkles } from "lucide-react"

const projects = [
  {
    title: "美剧精听播放器",
    description: "勾选字幕自动复读，支持字幕批量截图+拼图",
    url: "https://vibplayer.stevenpub.com/",
    tags: ["工具", "英语学习"],
  },
  {
    title: "House of Cards 字幕全文搜索",
    description: "纸牌屋全六季台词全文搜索",
    url: "https://tvscripts.stevenpub.com/",
    tags: ["搜索", "美剧"],
  },
  {
    title: "英语润色翻译大师（AI智能体）",
    description: "一键提升英语表达，或翻译为地道英文，让您的句子更地道、流畅，专业级语言润色",
    url: "https://chatglm.cn/share/eF0uhMPa",
    tags: ["AI", "英语学习"],
  },
  {
    title: "ebook Library",
    description: "精选英语电子书资源，支持在线阅读和下载",
    url: "https://ebooks.stevenpub.com/",
    tags: ["阅读", "资源"],
  },
  {
    title: "TopBooks",
    description: "追踪goodreads上最新高分英文书籍，按评分排序",
    url: "https://goodreads.stevenpub.com/",
    tags: ["阅读", "书籍"],
  },
  {
    title: "Latest TV",
    description: "实时追踪最新美剧、英剧，每天更新，豆瓣评分和剧情简介一目了然",
    url: "https://popshows.stevenpub.com/",
    tags: ["美剧", "追剧"],
  },
  {
    title: "VocabFlow",
    description: "卡片式背单词，猜对了才能翻牌，挑战雅思1500词汇",
    url: "https://vocabflow.stevenpub.com/",
    tags: ["英语学习", "词汇"],
  },
  {
    title: "《经济学人》在线阅读",
    description: "在线阅读《经济学人》杂志，提升英语阅读和商业视野",
    url: "https://stevenspage.github.io/the_economist/",
    tags: ["阅读", "新闻"],
  },
  {
    title: "Google搜索神器",
    description: "一个快速让你获取Google所有搜索结果和内容的神器",
    url: "https://github.com/stevenspage/sales_prospector_translator",
    tags: ["工具", "搜索"],
    isGithub: true,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12 md:py-20 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="mb-16 md:mb-24">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">Steven's Projects</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              探索我的项目，从英语学习到词汇管理，再到最新影视资讯
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com/stevenspage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>在GitHub上关注我</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </section>

          {/* Projects Grid */}
          <section id="projects" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">我的项目</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-24 mt-24 md:mt-32">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">关于我</h2>
            <div className="max-w-3xl">
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                你好！我是Steven，一名热衷于创建实用工具和学习资源的开发者。我专注于英语学习工具、内容聚合平台和实用的Web应用开发。
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                我的项目涵盖了从视频播放器、全文搜索引擎到AI智能助手等多个领域。每个项目都致力于解决实际问题，提升用户体验。
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                我相信技术应该让生活更简单、学习更高效。如果你对我的项目感兴趣，欢迎通过下方联系方式与我交流。
              </p>
            </div>
          </section>

          {/* Community Section */}
          <section id="community" className="scroll-mt-24 mt-24 md:mt-32">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">社群</h2>
            <div className="max-w-3xl">
              <div className="border border-border rounded-lg p-8 bg-card/50">
                <div className="flex items-start gap-4 mb-4">
                  <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">知识星球</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      知识星球搜："芬哥地道商务英语"，这是一个帮助你提升职场英语沟通能力，掌握实用商务表达的社群。
                    </p>
                    <a
                      href="https://t.zsxq.com/UQf2E"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>加入知识星球</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-24 mt-24 md:mt-32">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">联系方式</h2>
            <div className="max-w-3xl">
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                欢迎与我联系讨论项目合作、技术交流或任何问题。
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:steve.pub@outlook.com"
                  className="flex items-center gap-3 text-base hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>steve.pub@outlook.com</span>
                </a>
                <div className="flex items-center gap-3 text-base">
                  <MessageCircle className="w-5 h-5 text-muted-foreground" />
                  <span>微信公众号：芬哥Steven</span>
                </div>
                <a
                  href="https://www.zhihu.com/people/stevenc214"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base hover:text-primary transition-colors group"
                >
                  <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>知乎：史蒂芬</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
