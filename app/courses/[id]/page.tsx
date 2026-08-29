import Link from "next/link";

const modules = [
  {
    number: "01",
    title: "Software Testing Fundamentals",
    lessons: "12 Lessons",
    duration: "4h 20m",
    topics: [
      "Software Testing Introduction",
      "SDLC & STLC",
      "Testing Principles",
      "Verification & Validation",
      "Testing Levels",
      "Testing Types",
      "Test Scenario & Test Case",
      "Defect Life Cycle",
    ],
  },
  {
    number: "02",
    title: "Test Case Design & Bug Reporting",
    lessons: "14 Lessons",
    duration: "5h 10m",
    topics: [
      "Test Case Writing",
      "Test Scenario Design",
      "Boundary Value Analysis",
      "Equivalence Partitioning",
      "Decision Table Testing",
      "Defect Reporting",
      "Severity & Priority",
      "Jira Workflow",
    ],
  },
  {
    number: "03",
    title: "SQL for Software Testers",
    lessons: "12 Lessons",
    duration: "4h 30m",
    topics: [
      "Database Fundamentals",
      "SELECT Queries",
      "WHERE & ORDER BY",
      "GROUP BY & HAVING",
      "Joins",
      "Subqueries",
      "Functions",
      "Real-world SQL Practice",
    ],
  },
  {
    number: "04",
    title: "API Testing with Postman",
    lessons: "14 Lessons",
    duration: "5h 20m",
    topics: [
      "API Fundamentals",
      "REST Architecture",
      "HTTP Methods",
      "Status Codes",
      "Headers & Parameters",
      "Postman Collections",
      "Assertions",
      "API Test Automation Basics",
    ],
  },
  {
    number: "05",
    title: "Java for Automation Testing",
    lessons: "18 Lessons",
    duration: "8h 15m",
    topics: [
      "Java Fundamentals",
      "Variables & Data Types",
      "Conditions & Loops",
      "Methods",
      "OOP Concepts",
      "Inheritance & Polymorphism",
      "Collections",
      "Exception Handling",
      "Streams & Lambdas",
    ],
  },
  {
    number: "06",
    title: "Selenium WebDriver",
    lessons: "20 Lessons",
    duration: "10h 30m",
    topics: [
      "Selenium Architecture",
      "WebDriver Setup",
      "Locators",
      "Web Elements",
      "Browser Commands",
      "Waits",
      "Alerts & Frames",
      "Windows & Tabs",
      "Actions Class",
      "Advanced Selenium",
    ],
  },
  {
    number: "07",
    title: "TestNG + Cucumber + BDD",
    lessons: "16 Lessons",
    duration: "7h 40m",
    topics: [
      "TestNG Fundamentals",
      "Annotations",
      "Assertions",
      "DataProvider",
      "Parallel Execution",
      "BDD Fundamentals",
      "Gherkin",
      "Feature Files",
      "Step Definitions",
      "Cucumber Reports",
    ],
  },
  {
    number: "08",
    title: "Automation Framework Design",
    lessons: "18 Lessons",
    duration: "9h 30m",
    topics: [
      "Page Object Model",
      "Page Factory",
      "Reusable Components",
      "Configuration Management",
      "Properties Files",
      "Excel Data Handling",
      "Data-driven Framework",
      "Hybrid Framework",
      "Logging & Reporting",
    ],
  },
  {
    number: "09",
    title: "Playwright + TypeScript",
    lessons: "22 Lessons",
    duration: "11h 45m",
    topics: [
      "Why Playwright",
      "Playwright Architecture",
      "TypeScript Fundamentals",
      "Locators",
      "Assertions",
      "Auto Waiting",
      "Fixtures",
      "Page Object Model",
      "Screenshots & Videos",
      "Parallel Testing",
      "Trace Viewer",
      "Playwright API Testing",
    ],
  },
  {
    number: "10",
    title: "CI/CD + Git + Docker",
    lessons: "12 Lessons",
    duration: "5h 50m",
    topics: [
      "Git Fundamentals",
      "GitHub",
      "Branching Strategy",
      "Pull Requests",
      "CI/CD Fundamentals",
      "Pipeline Concepts",
      "Automation Execution in CI",
      "Docker Fundamentals",
    ],
  },
  {
    number: "11",
    title: "AI-Powered Software Testing",
    lessons: "10 Lessons",
    duration: "4h 15m",
    topics: [
      "AI in Software Testing",
      "AI-assisted Test Case Generation",
      "Prompt Engineering for QA",
      "AI-assisted Automation",
      "Test Data Generation",
      "AI Productivity Tools",
      "Limitations of AI Testing",
    ],
  },
  {
    number: "12",
    title: "Real-World Projects + Interview",
    lessons: "14 Lessons",
    duration: "8h 30m",
    topics: [
      "E-Commerce Testing Project",
      "Investment Banking Testing Project",
      "Automation Framework Project",
      "Playwright Project",
      "API Automation Project",
      "QA Interview Questions",
      "Framework Interview Questions",
      "Mock Interview",
    ],
  },
];

const highlights = [
  ["📚", "150+", "Lessons"],
  ["⏱️", "80+", "Hours"],
  ["💼", "5", "Real Projects"],
  ["🧪", "500+", "Practice Questions"],
  ["🎓", "1", "Certificate"],
  ["♾️", "Lifetime", "Access"],
];

export default function CourseDetailsPage() {
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
            <Link
              href="/courses"
              className="font-semibold text-indigo-600"
            >
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

          <Link
            href="/dashboard"
            className="hidden rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50 sm:block"
          >
            My Account
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
            {/* LEFT */}
            <div className="lg:col-span-3">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-500/20 px-3 py-1.5 text-xs font-bold text-indigo-300">
                  🔥 BESTSELLER
                </span>

                <span className="rounded-full bg-green-500/20 px-3 py-1.5 text-xs font-bold text-green-300">
                  JOB READY
                </span>

                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-300">
                  BEGINNER → ADVANCED
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                Complete Software Testing
                <span className="text-indigo-400">
                  {" "}
                  & Automation
                </span>
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Master Manual Testing, SQL, API Testing, Java, Selenium,
                TestNG, Cucumber, Framework Design, Playwright + TypeScript,
                CI/CD and AI-powered testing in one complete career-focused
                program.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
                <span className="font-bold text-yellow-400">
                  ★ 4.9
                </span>

                <span className="text-slate-300">
                  2,500+ learners
                </span>

                <span className="text-slate-400">
                  English
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/learn"
                  className="rounded-xl bg-indigo-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-indigo-950 transition hover:bg-indigo-500"
                >
                  Start Learning →
                </Link>

                <a
                  href="#curriculum"
                  className="rounded-xl border border-slate-600 px-7 py-3.5 font-semibold text-white transition hover:border-indigo-400 hover:text-indigo-300"
                >
                  View Curriculum
                </a>
              </div>
            </div>

            {/* RIGHT COURSE CARD */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl">
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-indigo-600 to-slate-950 text-8xl">
                  🧪
                </div>

                <div className="p-7">
                  <div className="text-sm font-semibold text-green-600">
                    50% OFF — Limited Launch Price
                  </div>

                  <div className="mt-3 flex items-end gap-3">
                    <span className="text-4xl font-black">
                      ₹2,499
                    </span>

                    <span className="mb-1 text-lg text-slate-400 line-through">
                      ₹4,999
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    Lifetime access • Certificate included
                  </p>

                  <Link
                    href="/signup"
                    className="mt-6 block rounded-xl bg-indigo-600 py-3.5 text-center font-bold text-white transition hover:bg-indigo-700"
                  >
                    Enroll Now →
                  </Link>

                  <div className="mt-5 space-y-3 text-sm text-slate-600">
                    <div>✓ Lifetime course access</div>
                    <div>✓ All future course updates</div>
                    <div>✓ Practice questions</div>
                    <div>✓ Real-world projects</div>
                    <div>✓ Completion certificate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
          {highlights.map(([icon, value, label]) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="text-2xl">{icon}</div>

              <div className="mt-2 text-xl font-bold">
                {value}
              </div>

              <div className="text-xs text-slate-500">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              What You'll Learn
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything you need for modern QA
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Build your skills step-by-step, from testing fundamentals to
              advanced automation and modern AI-assisted workflows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {[
              "Build strong Manual Testing fundamentals",
              "Write professional test cases and bug reports",
              "Use SQL for database validation",
              "Test REST APIs using Postman",
              "Automate web applications with Selenium",
              "Build automation frameworks using Java",
              "Implement TestNG + Cucumber + BDD",
              "Design Page Object & Hybrid Frameworks",
              "Master Playwright with TypeScript",
              "Perform API automation with Playwright",
              "Run tests using CI/CD pipelines",
              "Use AI effectively in software testing",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="font-bold text-green-600">
                  ✓
                </span>

                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section
        id="curriculum"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Complete Curriculum
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              12 modules. One complete career path.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Follow a structured roadmap that takes you from testing
              fundamentals to modern automation engineering.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {modules.map((module) => (
              <details
                key={module.number}
                className="group rounded-2xl border border-slate-200 bg-slate-50 transition open:bg-white open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
                    {module.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold sm:text-lg">
                      {module.title}
                    </h3>

                    <div className="mt-1 flex flex-wrap gap-3 text-xs text-slate-500">
                      <span>{module.lessons}</span>
                      <span>•</span>
                      <span>{module.duration}</span>
                    </div>
                  </div>

                  <span className="text-xl text-slate-400 transition group-open:rotate-180">
                   ⌄
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-6">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {module.topics.map((topic) => (
                      <div
                        key={topic}
                        className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5 text-sm text-slate-600"
                      >
                        <span className="text-xs text-green-600">
                          ✓
                        </span>

                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-300">
              Real-World Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Build projects. Not just watch videos.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Apply what you learn through practical projects designed around
              real QA workflows.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "🛒",
                title: "E-Commerce Testing",
                description:
                  "Test an end-to-end e-commerce application using manual and automation techniques.",
              },
              {
                icon: "🏦",
                title: "Investment Banking",
                description:
                  "Work with realistic financial workflows, API validation and regression scenarios.",
              },
              {
                icon: "⚡",
                title: "Playwright Automation",
                description:
                  "Build a modern Playwright + TypeScript framework with POM, fixtures and reporting.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-7"
              >
                <div className="text-4xl">{project.icon}</div>

                <h3 className="mt-5 text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                Career Ready
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Learn skills companies actually look for.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Finish the course with practical automation experience,
                projects, interview preparation and a portfolio-ready skill
                set.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Resume preparation",
                "QA interview questions",
                "Automation interview questions",
                "Framework discussions",
                "Mock interviews",
                "Practical assignments",
                "500+ practice questions",
                "Course certificate",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white p-4 text-sm font-semibold shadow-sm"
                >
                  <span className="mr-2 text-green-600">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-indigo-600">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center text-white">
          <div className="text-5xl">🚀</div>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Ready to become a QA Automation Engineer?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-indigo-100">
            Start learning today and build the skills needed for modern
            software testing roles.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-xl bg-white px-8 py-3.5 font-bold text-indigo-700 transition hover:bg-indigo-50"
            >
              Enroll Now — ₹2,499
            </Link>

            <Link
              href="/learn"
              className="rounded-xl border border-indigo-300 px-8 py-3.5 font-bold text-white transition hover:bg-indigo-500"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
          <div>
            <div className="text-lg font-bold">
              SR Skills Academy
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Practical learning for real career growth.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Learn</h4>

            <div className="mt-4 space-y-2 text-sm text-slate-500">
              <Link
                href="/courses"
                className="block hover:text-indigo-600"
              >
                Courses
              </Link>

              <Link
                href="/practice"
                className="block hover:text-indigo-600"
              >
                Practice
              </Link>

              <Link
                href="/dashboard"
                className="block hover:text-indigo-600"
              >
                My Learning
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Course</h4>

            <div className="mt-4 space-y-2 text-sm text-slate-500">
              <a href="#curriculum" className="block hover:text-indigo-600">
                Curriculum
              </a>

              <a href="#curriculum" className="block hover:text-indigo-600">
                Projects
              </a>

              <Link
                href="/learn"
                className="block hover:text-indigo-600"
              >
                Start Learning
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
        </div>

        <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-500">
          © 2026 SR Skills Academy. All rights reserved.
        </div>
      </footer>
    </main>
  );
}