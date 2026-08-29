import Link from "next/link";

const categories = [
  "All Courses",
  "Software Testing",
  "Programming",
  "Data & Analytics",
  "Cloud & DevOps",
  "AI & GenAI",
  "Career Skills",
];

const courses = [
  {
    id: "01",
    category: "Software Testing",
    badge: "🔥 BESTSELLER",
    icon: "🧪",
    title: "Complete Software Testing & Automation",
    description:
      "Become job-ready with Manual Testing, API Testing, Selenium, Java, Playwright, TypeScript, Framework Design and CI/CD.",
    level: "Beginner → Advanced",
    duration: "80+ Hours",
    lessons: "150+ Lessons",
    projects: "5 Real Projects",
    price: "₹2,499",
    oldPrice: "₹4,999",
    rating: "4.9",
    students: "2.5K+",
    skills: [
      "Manual Testing",
      "Selenium",
      "Playwright",
      "API Testing",
      "Java",
      "TypeScript",
    ],
  },
  {
    id: "02",
    category: "Programming",
    badge: "POPULAR",
    icon: "☕",
    title: "Java Programming from Scratch",
    description:
      "Build strong Java fundamentals with OOP, Collections, Exception Handling, Java 8+, practical coding and interview problems.",
    level: "Beginner → Advanced",
    duration: "35+ Hours",
    lessons: "90+ Lessons",
    projects: "3 Projects",
    price: "₹1,999",
    oldPrice: "₹3,999",
    rating: "4.8",
    students: "1.8K+",
    skills: [
      "Core Java",
      "OOP",
      "Collections",
      "Streams",
      "Exception Handling",
      "Coding",
    ],
  },
  {
    id: "03",
    category: "Data & Analytics",
    badge: "TRENDING",
    icon: "🗄️",
    title: "SQL & Database Mastery",
    description:
      "Master SQL with real-world queries, joins, subqueries, functions, database concepts and interview practice.",
    level: "Beginner → Intermediate",
    duration: "25+ Hours",
    lessons: "70+ Lessons",
    projects: "4 Projects",
    price: "₹1,499",
    oldPrice: "₹2,999",
    rating: "4.9",
    students: "1.5K+",
    skills: [
      "SQL",
      "MySQL",
      "Joins",
      "Subqueries",
      "Functions",
      "Database",
    ],
  },
  {
    id: "04",
    category: "Cloud & DevOps",
    badge: "NEW",
    icon: "☁️",
    title: "DevOps & Cloud Essentials",
    description:
      "Learn Git, GitHub, Docker, CI/CD and cloud fundamentals with practical DevOps workflows.",
    level: "Beginner → Intermediate",
    duration: "30+ Hours",
    lessons: "80+ Lessons",
    projects: "3 Projects",
    price: "₹2,199",
    oldPrice: "₹4,499",
    rating: "4.8",
    students: "900+",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "AWS",
      "DevOps",
    ],
  },
  {
    id: "05",
    category: "AI & GenAI",
    badge: "🔥 HOT",
    icon: "🤖",
    title: "AI & GenAI for IT Professionals",
    description:
      "Learn Generative AI, prompt engineering, AI tools and practical AI workflows for modern IT careers.",
    level: "Beginner → Intermediate",
    duration: "20+ Hours",
    lessons: "60+ Lessons",
    projects: "5 AI Projects",
    price: "₹1,799",
    oldPrice: "₹3,499",
    rating: "4.9",
    students: "1.2K+",
    skills: [
      "GenAI",
      "Prompt Engineering",
      "AI Tools",
      "Automation",
      "AI Testing",
      "Productivity",
    ],
  },
  {
    id: "06",
    category: "Career Skills",
    badge: "CAREER",
    icon: "🎯",
    title: "IT Interview & Career Mastery",
    description:
      "Prepare for technical interviews with resume building, HR questions, aptitude, communication and mock interviews.",
    level: "Beginner → Advanced",
    duration: "18+ Hours",
    lessons: "75+ Lessons",
    projects: "Mock Interviews",
    price: "₹999",
    oldPrice: "₹1,999",
    rating: "4.8",
    students: "2K+",
    skills: [
      "Resume",
      "Interview",
      "HR Questions",
      "Aptitude",
      "Communication",
      "Mock Interviews",
    ],
  },
];

const testingRoadmap = [
  {
    number: "01",
    title: "Manual Testing",
    description: "SDLC, STLC, test cases, bug lifecycle and testing techniques.",
    icon: "🧪",
  },
  {
    number: "02",
    title: "API + SQL",
    description: "Postman, REST APIs, HTTP methods and SQL for testers.",
    icon: "🔌",
  },
  {
    number: "03",
    title: "Java for Automation",
    description: "Core Java, OOP, Collections and automation-ready coding.",
    icon: "☕",
  },
  {
    number: "04",
    title: "Selenium Automation",
    description: "WebDriver, locators, waits, TestNG and browser automation.",
    icon: "🌐",
  },
  {
    number: "05",
    title: "Framework Design",
    description: "POM, BDD, Cucumber, Maven, data-driven and hybrid frameworks.",
    icon: "🏗️",
  },
  {
    number: "06",
    title: "Playwright + TypeScript",
    description: "Modern browser automation, fixtures, locators, API and advanced testing.",
    icon: "⚡",
  },
  {
    number: "07",
    title: "CI/CD + Git",
    description: "Git, GitHub, pipelines and running automation in CI environments.",
    icon: "🚀",
  },
  {
    number: "08",
    title: "AI-Powered Testing",
    description: "Modern AI tools, test generation and productivity workflows.",
    icon: "🤖",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
              SR
            </div>

            <div>
              <div className="text-lg font-bold tracking-tight">
                SR Skills Academy
              </div>

              <div className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
                Learn • Practice • Grow
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/courses" className="font-semibold text-indigo-600">
              Courses
            </Link>

            <Link
              href="/dashboard"
              className="text-slate-600 hover:text-indigo-600"
            >
              My Learning
            </Link>

            <Link
              href="/practice"
              className="text-slate-600 hover:text-indigo-600"
            >
              Practice
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-lg px-4 py-2 text-sm font-semibold hover:bg-slate-100 sm:block"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
              🚀 Learn • Practice • Get Job Ready
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Courses designed for
              <span className="text-indigo-400"> real careers.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Practical, structured and career-focused courses built to help
              you learn real skills and apply them to real-world projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <div>
                <strong className="text-2xl text-white">50+</strong>
                <br />
                Courses
              </div>

              <div>
                <strong className="text-2xl text-white">500+</strong>
                <br />
                Practice Questions
              </div>

              <div>
                <strong className="text-2xl text-white">20+</strong>
                <br />
                Real Projects
              </div>

              <div>
                <strong className="text-2xl text-white">24/7</strong>
                <br />
                Learning Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER UI */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6">
          <div className="flex min-w-max gap-2 py-5">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  index === 0
                    ? "bg-indigo-600 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COURSE */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            ⭐ Flagship Course
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Become a QA Automation Engineer
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            One complete path from Manual Testing to modern Playwright
            automation and CI/CD.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid lg:grid-cols-5">
            {/* LEFT */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-950 p-8 text-white lg:col-span-2 lg:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

              <span className="relative inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">
                🔥 MOST POPULAR
              </span>

              <div className="relative mt-10 text-7xl">🧪</div>

              <h3 className="relative mt-6 text-3xl font-bold leading-tight">
                Complete Software Testing & Automation
              </h3>

              <p className="relative mt-4 leading-7 text-indigo-100">
                Manual + Automation + API + Selenium + Playwright + TypeScript
                + Framework + CI/CD + AI Testing.
              </p>

              <div className="relative mt-8 flex flex-wrap gap-2">
                {[
                  "Selenium",
                  "Playwright",
                  "TypeScript",
                  "API",
                  "Java",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-8 lg:col-span-3 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                  Beginner → Advanced
                </span>

                <span className="text-sm font-semibold text-yellow-600">
                  ★ 4.9
                </span>

                <span className="text-sm text-slate-500">
                  2.5K+ learners
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Everything you need to become automation-ready
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Manual Testing & STLC",
                  "API Testing with Postman",
                  "SQL for Testers",
                  "Java for Automation",
                  "Selenium WebDriver",
                  "TestNG & Cucumber",
                  "POM & Hybrid Framework",
                  "Playwright + TypeScript",
                  "API Automation",
                  "Git & CI/CD",
                  "Docker Basics",
                  "AI-Powered Testing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="font-bold text-green-600">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-y border-slate-100 py-6 sm:grid-cols-4">
                <div>
                  <div className="font-bold">80+ Hours</div>
                  <div className="mt-1 text-xs text-slate-500">Content</div>
                </div>

                <div>
                  <div className="font-bold">150+ Lessons</div>
                  <div className="mt-1 text-xs text-slate-500">Lessons</div>
                </div>

                <div>
                  <div className="font-bold">5 Projects</div>
                  <div className="mt-1 text-xs text-slate-500">Practical</div>
                </div>

                <div>
                  <div className="font-bold">Lifetime</div>
                  <div className="mt-1 text-xs text-slate-500">Access</div>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-3xl font-bold">₹2,499</span>

                  <span className="ml-3 text-base text-slate-400 line-through">
                    ₹4,999
                  </span>

                  <div className="mt-1 text-xs font-semibold text-green-600">
                    50% OFF
                  </div>
                </div>

                <Link
                  href="/courses/1"
                  className="rounded-xl bg-indigo-600 px-7 py-3.5 text-center font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
                >
                  View Course →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTING ROADMAP */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Software Testing Roadmap
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From beginner to automation engineer
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A structured learning path covering the tools and skills used in
              modern QA teams.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testingRoadmap.map((step) => (
              <div
                key={step.number}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-indigo-200">
                    {step.number}
                  </span>

                  <span className="text-3xl">{step.icon}</span>
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL COURSES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            Explore All Courses
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Pick your next skill
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Learn at your own pace with practical lessons, exercises and
            projects.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* CARD TOP */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-indigo-600 to-slate-950 p-6 text-white">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

                <div className="relative flex items-start justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-wider">
                    {course.badge}
                  </span>

                  <span className="text-4xl">{course.icon}</span>
                </div>

                <div className="relative mt-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-200">
                    {course.category}
                  </span>

                  <h3 className="mt-2 text-xl font-bold leading-7">
                    {course.title}
                  </h3>
                </div>
              </div>

              {/* CARD BODY */}
              <div className="p-6">
                <p className="min-h-[72px] text-sm leading-6 text-slate-600">
                  {course.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {course.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-500">
                  <div>⏱ {course.duration}</div>
                  <div>📚 {course.lessons}</div>
                  <div>🚀 {course.projects}</div>
                  <div>⭐ {course.rating} Rating</div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-2xl font-bold">
                        {course.price}
                      </span>

                      <span className="ml-2 text-sm text-slate-400 line-through">
                        {course.oldPrice}
                      </span>
                    </div>

                    <Link
                      href={`/courses/${course.id}`}
                      className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FREE LEARNING */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-300">
                Start Before You Buy
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Learn something free today.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Explore free lessons, quizzes and practical examples before
                choosing a complete course.
              </p>

              <Link
                href="/practice"
                className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Start Free Learning →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["📘", "Free Lessons", "Learn core concepts"],
                ["🧠", "Practice Questions", "Test your knowledge"],
                ["💡", "Real Examples", "Learn practically"],
                ["🎯", "Career Tips", "Prepare for jobs"],
              ].map(([icon, title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-700 bg-slate-800 p-6"
                >
                  <div className="text-3xl">{icon}</div>

                  <h3 className="mt-4 font-bold">{title}</h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-indigo-600 px-8 py-14 text-center text-white sm:px-16">
          <div className="text-4xl">🚀</div>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Your next career move starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-indigo-100">
            Choose a skill, start learning and build something you're proud
            of.
          </p>

          <Link
            href="/signup"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-indigo-700 transition hover:bg-indigo-50"
          >
            Create Free Account →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
          <div>
            <div className="text-lg font-bold">SR Skills Academy</div>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Practical learning for real career growth.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Learn</h4>

            <div className="mt-4 space-y-2 text-sm text-slate-500">
              <Link href="/courses" className="block hover:text-indigo-600">
                Courses
              </Link>

              <Link href="/practice" className="block hover:text-indigo-600">
                Practice
              </Link>

              <Link href="/dashboard" className="block hover:text-indigo-600">
                My Learning
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Academy</h4>

            <div className="mt-4 space-y-2 text-sm text-slate-500">
              <p>About Us</p>
              <p>Contact</p>
              <p>FAQ</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Legal</h4>

            <div className="mt-4 space-y-2 text-sm text-slate-500">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Refund Policy</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-500">
          © 2026 SR Skills Academy. All rights reserved.
        </div>
      </footer>
    </main>
  );
}