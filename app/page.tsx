import Link from "next/link";

type Category = {
  icon: string;
  title: string;
  description: string;
  courses: string;
};

type Course = {
  category: string;
  title: string;
  description: string;
  level: string;
  price: string;
  oldPrice: string;
};

type LearningItem = {
  icon: string;
  title: string;
  done: boolean;
};

type FreeLearningItem = {
  icon: string;
  title: string;
  desc: string;
};

const categories: Category[] = [
  {
    icon: "💻",
    title: "Technology",
    description: "Programming, Web Development & Software Engineering",
    courses: "12+ Courses",
  },
  {
    icon: "🧪",
    title: "Software Testing",
    description: "Manual, Automation, API & Performance Testing",
    courses: "10+ Courses",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    description: "SQL, Excel, Power BI & Data Analytics",
    courses: "8+ Courses",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description: "AWS, Azure, Docker, Git & DevOps",
    courses: "10+ Courses",
  },
  {
    icon: "🤖",
    title: "AI & GenAI",
    description: "Generative AI, Prompt Engineering & AI Tools",
    courses: "8+ Courses",
  },
  {
    icon: "🎯",
    title: "Career Skills",
    description: "Interview, Resume, Aptitude & Communication",
    courses: "10+ Courses",
  },
];

const courses: Course[] = [
  {
    category: "SOFTWARE TESTING",
    title: "Complete Software Testing & Automation",
    description:
      "Master Manual Testing, Selenium, API Testing and Automation from scratch.",
    level: "Beginner → Advanced",
    price: "₹2,499",
    oldPrice: "₹4,999",
  },
  {
    category: "PROGRAMMING",
    title: "Java Programming from Scratch",
    description:
      "Build strong Java fundamentals with practical examples and exercises.",
    level: "Beginner",
    price: "₹1,999",
    oldPrice: "₹3,999",
  },
  {
    category: "DATA",
    title: "SQL & Database Mastery",
    description:
      "Learn SQL through real-world queries, practice questions and projects.",
    level: "Beginner → Intermediate",
    price: "₹1,499",
    oldPrice: "₹2,999",
  },
];

const learningItems: LearningItem[] = [
  {
    icon: "✓",
    title: "Manual Testing Fundamentals",
    done: true,
  },
  {
    icon: "✓",
    title: "Test Case Design",
    done: true,
  },
  {
    icon: "→",
    title: "Selenium WebDriver",
    done: false,
  },
  {
    icon: "🔒",
    title: "Advanced Automation",
    done: false,
  },
];

const freeLearningItems: FreeLearningItem[] = [
  {
    icon: "📘",
    title: "Free Lessons",
    desc: "Learn core concepts",
  },
  {
    icon: "🧠",
    title: "Quick Quizzes",
    desc: "Test your knowledge",
  },
  {
    icon: "💡",
    title: "Real Examples",
    desc: "Understand practically",
  },
  {
    icon: "🎯",
    title: "Career Tips",
    desc: "Prepare for opportunities",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* LOGO */}
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

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/courses" className="hover:text-indigo-600">
              Courses
            </Link>

            <Link href="/#categories" className="hover:text-indigo-600">
              Categories
            </Link>

            <Link href="/free-learning" className="hover:text-indigo-600">
              Free Learning
            </Link>

            <Link href="/practice" className="hover:text-indigo-600">
              Practice
            </Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-lg px-4 py-2 text-sm font-semibold hover:bg-slate-100 sm:block"
            >
              Login
            </Link>

            <Link
              href="/login"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
              🚀 Job-ready skills. One platform.
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Learn skills that
              <span className="text-indigo-600"> move your career </span>
              forward.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Practical courses, free learning, hands-on practice and
              career-focused learning — all in one place.
            </p>

            {/* HERO BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="inline-flex rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Explore Courses →
              </Link>

              <Link
                href="/free-learning"
                className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold transition hover:border-indigo-300 hover:text-indigo-600"
              >
                Start Learning Free
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-600">
              <div>
                <strong className="text-xl text-slate-900">50+</strong>
                <br />
                Courses
              </div>

              <div>
                <strong className="text-xl text-slate-900">100+</strong>
                <br />
                Practice Sets
              </div>

              <div>
                <strong className="text-xl text-slate-900">24/7</strong>
                <br />
                Learn Anytime
              </div>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    Continue Learning
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Software Testing
                  </h3>
                </div>

                <div className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  68% Complete
                </div>
              </div>

              {/* PROGRESS */}
              <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[68%] rounded-full bg-indigo-600" />
              </div>

              {/* LEARNING ITEMS */}
              <div className="space-y-3">
                {learningItems.map((item) => (
                  <div
                    key={item.title}
                    className={`flex items-center gap-3 rounded-xl border p-4 ${
                      item.done
                        ? "border-green-100 bg-green-50/50"
                        : "border-slate-100 bg-slate-50"
                    }`}
                  >
                    <span>{item.icon}</span>

                    <span className="text-sm font-medium">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/my-learning"
                className="mt-6 block w-full rounded-xl bg-indigo-600 py-3 text-center font-semibold text-white hover:bg-indigo-700"
              >
                Continue Learning
              </Link>
            </div>

            {/* CHALLENGE CARD */}
            <div className="absolute -right-5 -top-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:block">
              <div className="text-xs text-slate-500">
                Today's Challenge
              </div>

              <div className="mt-1 font-bold">+50 XP 🔥</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section
        id="categories"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20"
      >
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Learn what you need
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Choose a skill and start building knowledge that can be applied in
            the real world.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href="/courses"
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                {category.icon}
              </div>

              <h3 className="text-lg font-bold">{category.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {category.description}
              </p>

              <div className="mt-5 text-sm font-semibold text-indigo-600">
                {category.courses} →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= FREE LEARNING ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Start Free
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Learn before you pay.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Explore high-quality free lessons, understand our teaching
              approach and then unlock complete courses when you're ready.
            </p>

            <Link
              href="/free-learning"
              className="mt-7 inline-block rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white hover:bg-slate-800"
            >
              Explore Free Learning →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {freeLearningItems.map((item) => (
              <Link
                key={item.title}
                href="/free-learning"
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-2xl">{item.icon}</div>

                <h3 className="mt-4 font-bold">{item.title}</h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Featured Courses
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Build skills. Build confidence.
            </h2>
          </div>

          <Link
            href="/courses"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View All Courses →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={`${course.title}-${index}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* COURSE HEADER */}
              <div className="h-40 bg-gradient-to-br from-indigo-600 to-slate-900 p-6 text-white">
                <span className="text-xs font-bold tracking-widest">
                  {course.category}
                </span>

                <div className="mt-8 text-4xl">📚</div>
              </div>

              {/* COURSE DETAILS */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{course.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {course.description}
                </p>

                <div className="mt-4 text-xs font-medium text-slate-500">
                  {course.level}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold">
                      {course.price}
                    </span>

                    <span className="ml-2 text-sm text-slate-400 line-through">
                      {course.oldPrice}
                    </span>
                  </div>

                  <Link
                    href={`/courses/${index + 1}`}
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRACTICE ================= */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-indigo-300">
            Practice Arena
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Don't just learn. Practice.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Strengthen your skills with quizzes, interview questions,
            challenges and practical exercises.
          </p>

          <Link
            href="/practice"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-900 hover:bg-slate-100"
          >
            Enter Practice Arena →
          </Link>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-indigo-600 px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Your next skill starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-indigo-100">
            Start with free learning. Upgrade when you're ready.
          </p>

          <Link
            href="/free-learning"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-indigo-700 hover:bg-indigo-50"
          >
            Start Learning Free
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
          <div>
            <Link href="/" className="text-lg font-bold">
              SR Skills Academy
            </Link>

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
                href="/free-learning"
                className="block hover:text-indigo-600"
              >
                Free Learning
              </Link>

              <Link
                href="/practice"
                className="block hover:text-indigo-600"
              >
                Practice Arena
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