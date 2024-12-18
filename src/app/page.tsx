import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Github, Mail, Twitter, Linkedin, ExternalLink, Code2, Brain, Contact, AlertCircle, Trophy, Briefcase, GraduationCap, Palette, Smartphone, Server, Database, HeadingIcon as HeadingQuestion } from 'lucide-react'

const skills = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Languages" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "TailwindCSS", level: 95, category: "Frontend" },
  { name: "PostgreSQL", level: 70, category: "Backend" },
  { name: "Python", level: 65, category: "Languages" },
  { name: "Docker", level: 60, category: "DevOps" },
]

const projects = [
  {
    title: "Project 1",
    description: "A comprehensive web application built with Next.js and TypeScript",
    tags: ["React", "Next.js", "TypeScript"],
    link: "https://github.com/yourusername/project1",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Project 2",
    description: "Backend service built with Node.js and Express",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/yourusername/project2",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Project 3",
    description: "Mobile application developed with React Native",
    tags: ["React Native", "Firebase"],
    link: "https://github.com/yourusername/project3",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const testimonials = [
  {
    name: "John Doe",
    role: "CEO at TechCorp",
    content: "Exceptional work and great attention to detail!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    content: "One of the most talented developers I've worked with.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Alex Johnson",
    role: "Product Manager",
    content: "Delivers high-quality work consistently.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to my portfolio
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Full Stack Developer & UI/UX Designer
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex space-x-4">
              <TooltipProvider>
                {[
                  { href: "https://github.com/yourusername", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/yourusername", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://twitter.com/yourusername", icon: Twitter, label: "Twitter" },
                ].map((social) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="h-5 w-5" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow on {social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Passionate about creating beautiful and functional web applications
              </p>
            </div>
            <div className="w-full max-w-4xl mt-8">
              <Tabs defaultValue="experience" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="experience">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Experience
                  </TabsTrigger>
                  <TabsTrigger value="education">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Education
                  </TabsTrigger>
                  <TabsTrigger value="achievements">
                    <Trophy className="mr-2 h-4 w-4" />
                    Achievements
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="experience">
                  <Card>
                    <CardHeader>
                      <CardTitle>Professional Experience</CardTitle>
                      <CardDescription>My journey in software development</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="scroll-area-sm pr-4">
                        <div className="space-y-8">
                          {[
                            {
                              title: "Senior Developer",
                              company: "TechCorp",
                              period: "2021 - Present",
                              description: [
                                "Led development of multiple full-stack applications",
                                "Mentored junior developers",
                                "Implemented CI/CD pipelines",
                              ],
                            },
                            {
                              title: "Full Stack Developer",
                              company: "StartupX",
                              period: "2019 - 2021",
                              description: [
                                "Developed and maintained various web applications",
                                "Worked with React, Node.js, and PostgreSQL",
                                "Improved application performance by 40%",
                              ],
                            },
                            // Add more experiences...
                          ].map((exp, index) => (
                            <div key={index} className="relative pl-6 border-l">
                              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                              <h3 className="font-semibold">{exp.title}</h3>
                              <p className="text-sm text-muted-foreground">{exp.company} • {exp.period}</p>
                              <ul className="mt-2 space-y-1">
                                {exp.description.map((item, i) => (
                                  <li key={i} className="text-sm text-muted-foreground">
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="education">
                  <Card>
                    <CardHeader>
                      <CardTitle>Education</CardTitle>
                      <CardDescription>Academic background and certifications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="scroll-area-sm pr-4">
                        <div className="space-y-8">
                          {[
                            {
                              title: "BSc in Computer Science",
                              institution: "University of Technology",
                              period: "2015 - 2019",
                            },
                            {
                              title: "Various Certifications",
                              description: ["AWS Certified Developer", "Google Cloud Professional"],
                            },
                          ].map((edu, index) => (
                            <div key={index} className="relative pl-6 border-l">
                              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                              <h3 className="font-semibold">{edu.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {edu.institution} • {edu.period}
                              </p>
                              {edu.description && (
                                <ul className="mt-2 space-y-1">
                                  {edu.description.map((item, i) => (
                                    <li key={i} className="text-sm text-muted-foreground">
                                      • {item}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="achievements">
                  <Card>
                    <CardHeader>
                      <CardTitle>Achievements</CardTitle>
                      <CardDescription>Awards and recognitions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="scroll-area-sm pr-4">
                        <div className="space-y-8">
                          {[
                            {
                              title: "Employee of the Year",
                              company: "TechCorp",
                              year: 2022,
                            },
                            {
                              title: "Top Performer Award",
                              company: "StartupX",
                              year: 2020,
                            },
                          ].map((ach, index) => (
                            <div key={index} className="relative pl-6 border-l">
                              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                              <h3 className="font-semibold">{ach.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {ach.company} • {ach.year}
                              </p>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Technologies and tools I work with
              </p>
            </div>
            <div className="w-full max-w-4xl mt-8">
              <Tabs defaultValue="Frontend" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  {["Frontend", "Backend", "Languages", "DevOps"].map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {["Frontend", "Backend", "Languages", "DevOps"].map((category) => (
                  <TabsContent key={category} value={category}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{category} Skills</CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-6">
                        {skills
                          .filter((skill) => skill.category === category)
                          .map((skill) => (
                            <HoverCard key={skill.name}>
                              <HoverCardTrigger asChild>
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <h4 className="font-medium">{skill.name}</h4>
                                    <span className="text-muted-foreground">{skill.level}%</span>
                                  </div>
                                  <Progress value={skill.level} className="h-2" />
                                </div>
                              </HoverCardTrigger>
                              <HoverCardContent>
                                <div className="space-y-2">
                                  <h4 className="font-semibold">{skill.name}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Level: {skill.level >= 80 ? "Expert" : skill.level >= 60 ? "Intermediate" : "Beginner"}
                                  </p>
                                </div>
                              </HoverCardContent>
                            </HoverCard>
                          ))}
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Projects</h2>
              <p className="text-muted-foreground">
                Some of my recent work
              </p>
            </div>
            <div className="w-full max-w-3xl mt-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {projects.map((project, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-0">
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <CardDescription className="text-sm">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="relative h-[150px] mb-4 rounded-md overflow-hidden bg-muted">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <span>View Project</span>
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden sm:flex">
                  <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12" />
                  <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                What people say about my work
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
            </div>
            <Card className="w-full max-w-md mt-8">
              <CardHeader>
                <CardTitle>Contact Options</CardTitle>
                <CardDescription>Choose your preferred way to reach me</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Quick Response</AlertTitle>
                  <AlertDescription>
                    I typically respond within 24 hours.
                  </AlertDescription>
                </Alert>
                <div className="grid gap-4">
                  <Button className="w-full" asChild>
                    <a href="mailto:your.email@example.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Follow on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Next.js
            </a>
            {" "}and{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn/ui
            </a>
            . All rights reserved.
          </p>
          <div className="flex gap-4">
            <TooltipProvider>
              {[
                { href: "https://github.com/yourusername", icon: Github, label: "GitHub" },
                { href: "https://twitter.com/yourusername", icon: Twitter, label: "Twitter" },
              ].map((social) => (
                <Tooltip key={social.label}>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow on {social.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </footer>
    </div>
  )
}