import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import sandiPhoto from "@/assets/sandi.jpg.asset.json";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  GraduationCap,
  Award,
  Code2,
  BarChart3,
  Brain,
  Sparkles,
  Wrench,
  Users,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      {
        property: "og:image",
        content: sandiPhoto.url,
      },
      {
        name: "twitter:image",
        content: sandiPhoto.url,
      },
    ],
  }),
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const SKILLS = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "Java", "C", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    icon: BarChart3,
    title: "Data Science",
    items: ["Data Analysis", "Data Visualization", "Data Mining", "Data Preprocessing"],
  },
  {
    icon: Sparkles,
    title: "Machine Learning",
    items: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
  },
  {
    icon: Brain,
    title: "Deep Learning",
    items: ["Neural Networks", "RNN", "LSTM", "GRU"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PyTorch",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
      "Figma",
      "Balsamiq",
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Critical Thinking",
      "Adaptability",
    ],
  },
];

const PROJECTS = [
  {
    title: "NLP Skip-gram Project",
    description:
      "End-to-end NLP pipeline covering text preprocessing, feature engineering and model comparison on a real-world text dataset.",
    role: "Team member — preprocessing, modeling, and reporting",
    stack: ["Python", "Scikit-learn", "Pandas", "NLTK"],
    href: "https://github.com/ThinLeiSandi/NLP-Final-Project.git",
    tag: "Natural Language Processing",
  },
  {
    title: "Student Dropout Prevention",
    description:
      "Early-warning system that predicts at-risk students using academic and behavioral signals so advisors can intervene sooner.",
    role: "ML lead — feature engineering, model selection, evaluation",
    stack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    href: "https://github.com/ThinLeiSandi/Student-Dropout-Prevention---Early-Warning-System.git",
    tag: "Machine Learning",
  },
  {
    title: "Data Storm Vietnam 2025",
    description:
      "Datathon submission tackling a real business problem under tight constraints — exploratory analysis, modeling, and story-driven presentation.",
    role: "Team member — EDA, modeling,eva;uation and insight communication",
    stack: ["Python", "Pandas", "Seaborn", "Scikit-learn"],
    href: "https://github.com/ThinLeiSandi/2025_Datathon-Trained_Models.git",
    tag: "Competition",
  },
  {
    title: "Massive Data Processing",
    description:
      "Course project on processing and analyzing large-scale datasets with distributed and batch pipelines.",
    role: "Team member — pipeline design and performance analysis",
    stack: ["Python", "SQL", "Spark concepts"],
    href: "https://github.com/ThinLeiSandi/Mining-Massive-Datasets-Gold-Price-Prediction.git",
    tag: "Big Data",
  },
  {
    title: "Software Engineering — UI/UX",
    description:
      "Designed and prototyped the UI/UX for a software engineering course project, from user flows to hi-fi mockups.",
    role: "UI/UX designer — research, wireframes, prototypes",
    stack: ["Figma", "Balsamiq"],
    href: "https://www.figma.com/design/46msmfky7dFkC95G5wXhN6/Final_Project?node-id=0-1&t=UBTwxKfqYvERC1p6-1",
    tag: "Design",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-border bg-background/60 px-4 py-3 backdrop-blur-md md:px-6">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight md:text-base"
        >
          <span className="text-gradient">Thin Lei Sandi</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary md:inline-flex"
          >
            Let's talk
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-hero relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] [background-size:28px_28px]"
      />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="animate-fade-up grid items-center gap-10 lg:grid-cols-2 lg:gap-4">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-fit lg:mx-0">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/50 via-primary/20 to-transparent blur-xl" />
              <div className="relative overflow-hidden rounded-full border-2 border-border bg-secondary/30 p-1.5 shadow-2xl">
                <img
                  src={sandiPhoto.url}
                  alt="Thin Lei Sandi"
                  className="h-36 w-36 rounded-full object-cover sm:h-40 sm:w-40 md:h-44 md:w-44"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-2xl border border-border bg-background/80 px-3 py-2 backdrop-blur-md shadow-lg">
                <p className="font-display text-sm font-bold text-gradient">Final Year</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">CS Student</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="glow-dot mb-6 inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
              Open to Data Science & ML internships
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              <span className="whitespace-nowrap">Hi, I'm <span className="text-gradient">Thin Lei Sandi</span></span>
              <br />
              <span className="text-muted-foreground">turning data into decisions.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-sm text-muted-foreground md:text-base">
              Computer Science Student · Data Science · Machine Learning
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Final-year Computer Science student at{" "}
              <span className="text-foreground">Ton Duc Thang University</span> with a
              strong interest in Data Science, Machine Learning and NLP. I like
              working on projects that combine technical problem solving with
              practical impact. My experience includes data analysis and
              visualizations, early warning systems, big data processing and UI/UX
              design.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

function About() {
  return (
    <>
      <section id="about" className="py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeader eyebrow="About" title="Curious about data. Built to ship." />
          <div className="card-glass card-glass-hover gradient-border rounded-2xl p-8 md:p-10">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              I'm drawn to problems where{" "}
              <span className="text-foreground">data, machine learning and NLP</span>{" "}
              meet the real world — predicting outcomes, understanding language and
              turning messy signals into useful decisions. I like building useful
              projects and learning from practical work: less theory for its own sake,
              more shipping things that actually help people.
            </p>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}

function Skills() {
  return (
    <>
      <section id="skills" className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Skills"
            title="Tools I reach for"
            description="A working toolkit across programming, data, and modeling."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="card-glass card-glass-hover rounded-2xl p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((it) => (
                    <span
                      key={it}
                      className="rounded-lg border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}

function Projects() {
  return (
    <>
      <section id="projects" className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work"
            description="A mix of coursework, competitions, and self-driven builds."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="card-glass card-glass-hover group relative flex flex-col rounded-2xl p-7"
              >
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 z-0 rounded-2xl"
                  aria-label={`Open ${p.title}`}
                />
                <div className="relative z-10 flex flex-col">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-primary">
                      {p.tag}
                    </span>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="pointer-events-auto relative z-20 inline-flex items-center gap-1 rounded-lg border border-border bg-background/40 px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <p className="mt-4 text-sm">
                    <span className="text-muted-foreground">Role: </span>
                    <span className="text-foreground">{p.role}</span>
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary/60 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3 pt-2">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="pointer-events-auto relative z-20 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
                    >
                      View project
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}

function Education() {
  return (
    <>
      <section id="education" className="py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeader eyebrow="Education" title="Where I'm studying" />
          <div className="card-glass card-glass-hover gradient-border rounded-2xl p-8 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold md:text-2xl">
                    Ton Duc Thang University
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Bachelor of Computer Science · Final Year Student
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    Ho Chi Minh City, Vietnam
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background/50 px-4 py-3 text-center">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  GPA
                </p>
                <p className="font-display text-2xl font-bold text-gradient">
                  8.44<span className="text-base text-muted-foreground">/10.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}

function Certifications() {
  return (
    <>
      <section id="certifications" className="py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeader eyebrow="Certifications" title="Recognitions" />
          <div className="card-glass card-glass-hover flex items-center gap-4 rounded-2xl p-6">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
              <Award className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="font-display text-lg font-semibold">
                Datathon Vietnam 2025 — Participation
              </p>
              <p className="text-sm text-muted-foreground">
                Data Storm Vietnam 2025 competitor
              </p>
            </div>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}

function Contact() {
  const items = [
    {
      icon: Mail,
      label: "Email",
      value: "thinlei.ori16@gmail.com",
      href: "mailto:thinlei.ori16@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/thinleisandi",
      href: "https://github.com/thinleisandi",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/thinleisandi02/",
      href: "https://www.linkedin.com/in/thinleisandi02/",
    },
  ];
  return (
    <section id="contact" className="py-24 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something"
          description="Open to internships and entry-level roles in Data Science, ML, and NLP."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="card-glass card-glass-hover group flex flex-col gap-2 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 text-primary">
                <Icon className="h-4 w-4" />
                <span className="font-mono text-[11px] uppercase tracking-wider">
                  {label}
                </span>
              </div>
              <p className="truncate text-sm text-foreground">{value}</p>
            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="/Thin_Lei_Sandi-CV.pdf"
            download="Thin_Lei_Sandi-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row md:px-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground">Thin Lei Sandi</span>. Built with care.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/thinleisandi"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/thinleisandi02/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:thinlei.ori16@gmail.com"
            className="hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
