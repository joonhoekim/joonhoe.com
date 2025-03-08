import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Brain,
  Video,
  HardDrive,
  BarChart2,
  BookOpen,
  HomeIcon,
  Info,
  ExternalLink,
  Github,
  ChevronRight,
  Globe
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

interface Website {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  category: string;
  status?: string;
}

export default function Home() {
  const websites: Website[] = [
    {
      id: "ai",
      name: "AI Lab",
      url: "https://ai.joonhoe.com",
      description: "I use LLM with API. I love the Open web UI",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      textColor: "text-white",
      category: "tools"
    },
    {
      id: "metube",
      name: "MeTube",
      url: "https://metube.joonhoe.com",
      description: "Download and watch videos from Metube",
      icon: <Video className="h-6 w-6" />,
      color: "bg-gradient-to-br from-red-500 to-pink-600",
      textColor: "text-white",
      category: "media"
    },
    {
      id: "nas",
      name: "NAS",
      url: "https://nas.joonhoe.com",
      description: "Network attached storage system",
      icon: <HardDrive className="h-6 w-6" />,
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      textColor: "text-white",
      category: "tools"
    },
    {
      id: "stat",
      name: "Statistics",
      url: "https://stat.joonhoe.com",
      description: "Host statistics of machines.",
      icon: <BarChart2 className="h-6 w-6" />,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      textColor: "text-white",
      category: "tools"
    },
    {
      id: "blog",
      name: "Blog",
      url: "https://blog.joonhoe.com",
      description: "Personal thoughts and articles",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-gradient-to-br from-amber-500 to-yellow-600",
      textColor: "text-white",
      category: "content",
      status: "under construction"
    },
    {
      id: "home",
      name: "Home",
      url: "https://joonhoe.com",
      description: "Main landing page (this site)",
      icon: <HomeIcon className="h-6 w-6" />,
      color: "bg-gradient-to-br from-slate-700 to-slate-900",
      textColor: "text-white",
      category: "main"
    },
    {
      id: "about",
      name: "About",
      url: "https://joonhoe.com/about",
      description: "About this project",
      icon: <Info className="h-6 w-6" />,
      color: "bg-gradient-to-br from-slate-500 to-slate-700",
      textColor: "text-white",
      category: "main"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-6 p-3 rounded-full bg-primary/10 animate-pulse">
              <Globe className="h-10 w-10 text-primary" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-purple-600 animate-gradient">
              Joonhoe.com
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Your gateway to my digital universe. Explore my collection of websites, tools, and projects.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button size="lg" className="gap-2 group">
                <span>Explore Sites</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://github.com/joonhoekim" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </Button>

              <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
              </div>
            </div>

            {/* Animated Dots */}
            <div className="flex space-x-2 mb-12">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-primary animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">My Digital Ecosystem</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through my collection of websites and projects. Each one serves a unique purpose in my digital workflow.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websites.map((site) => (
                <SiteCard key={site.id} site={site} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websites
                .filter((site) => site.category === "tools")
                .map((site) => (
                  <SiteCard key={site.id} site={site} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="media" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websites
                .filter((site) => site.category === "media")
                .map((site) => (
                  <SiteCard key={site.id} site={site} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="content" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websites
                .filter((site) => site.category === "content")
                .map((site) => (
                  <SiteCard key={site.id} site={site} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Featured Section */}
        <div className="mb-16 bg-secondary/30 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4">Featured</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Discover My LLM Usage</h3>
              <p className="text-muted-foreground mb-6">
                It was not enough to use LLM with provided UI. So I self-hosted the LLM with API.
              </p>
              <Button asChild variant="default" className="gap-2">
                <a href="https://ai.joonhoe.com" target="_blank" rel="noopener noreferrer">
                  <span>Visit Open Web UI</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-8 flex items-center justify-center">
              <Brain className="h-24 w-24 text-white" />
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        <footer className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/joonhoekim" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
            <ThemeToggle />
          </div>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Joonhoe. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

function SiteCard({ site }: { site: Website }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className={`${site.color} ${site.textColor} p-6 flex items-center justify-between group-hover:scale-105 transition-transform duration-300`}>
        <div className="flex items-center gap-3">
          {site.icon}
          <h3 className="font-bold text-xl">{site.name}</h3>
        </div>
        {site.status && (
          <Badge variant="outline" className="bg-black/20 text-white border-white/20">
            {site.status}
          </Badge>
        )}
      </div>
      <CardContent className="pt-6">
        <p className="text-muted-foreground">{site.description}</p>
      </CardContent>
      <CardFooter className="flex justify-end pb-6">
        <Button asChild variant="outline" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          <a href={site.url} target="_blank" rel="noopener noreferrer">
            <span>Visit</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}