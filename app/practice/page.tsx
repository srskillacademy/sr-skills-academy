import Link from "next/link";

const practiceCategories = [
  {
    icon: "🧪",
    title: "Software Testing",
    description: "Manual testing, automation, API testing and QA interview questions.",
    questions: "150+ Questions",
    level: "Beginner → Advanced",
  },
  {
    icon: "☕",
    title: "Java",
    description: "Core Java, OOP, Collections, Exception Handling and more.",
    questions: "100+ Questions",
    level: "Beginner → Advanced",
  },
  {
    icon: "🗄️",
    title: "SQL",
    description: "Queries, joins, subqueries, functions and database challenges.",
    questions: "100+ Questions",
    level: "Beginner → Intermediate",
  },
  {
    icon: "💻",
    title: "Programming",
    description: "Logic building, coding challenges and programming fundamentals.",
    questions: "100+ Challenges",
    level: "Beginner → Advanced",
  },
];

const recentAttempts = [
  {
    icon: "🧪",
    title: "Software Testing Quiz",
    score: "8 / 10",
    percentage: "80%",
    time: "Today",
  },
  {
    icon: "🗄️",
    title: "SQL Fundamentals",
    score: "7 / 10",
    percentage: "70%",
    time: "Yesterday",
  },
  {
    icon: "☕",
    title: "Java OOP Quiz",
    score: "9 / 10",
    percentage: "90%",
    time: "2 days ago",
  },
];

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
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
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <Link
              href="/courses"
              className="text-slate-600 hover:text-indigo-600"
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
              className="font-semibold text-indigo-600"
            >
              Practice
            </Link>
          </nav>

          {/* PROFILE */}
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 transition hover:bg-slate-50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
              R
            </div>

            <div className="hidden text-left sm:block">
              <div className="text-sm font-semibold">Rushikesh</div>
              <div className="text-xs text-slate-500">Learner</div>
            </div>
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
              🎯 Practice Arena
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Don't just learn.
              <span className="text-indigo-400"> Practice.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Test your knowledge, solve practical questions and build the
              confidence you need for real-world projects and interviews.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-white px-6 py-3.5 font-bold text-slate-900 transition hover:bg-slate-100">
                Start Daily Challenge →
              </button>

              <Link
                href="/courses"
                className="rounded-xl border border-slate-600 px-6 py-3.5 font-semibold text-white transition hover:border-indigo-400 hover:text-indigo-300"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto -mt-8 max-w-7xl px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="text-2xl">🎯</div>
            <div className="mt-4 text-3xl font-bold">450+</div>
            <p className="mt-1 text-sm text-slate-500">Practice Questions</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="text-2xl">🔥</div>
            <div className="mt-4 text-3xl font-bold">7 Days</div>
            <p className="mt-1 text-sm text-slate-500">Current Streak</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="text-2xl">⭐</div>
            <div className="mt-4 text-3xl font-bold">1,250</div>
            <p className="mt-1 text-sm text-slate-500">Total XP Earned</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="text-2xl">🏆</div>
            <div className="mt-4 text-3xl font-bold">84%</div>
            <p className="mt-1 text-sm text-slate-500">Average Score</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            Choose Your Topic
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Practice by skill
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Choose a category and start solving questions designed to
            strengthen your concepts.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practiceCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl">
                {category.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {category.description}
              </p>

              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="font-semibold text-indigo-600">
                  {category.questions}
                </span>

                <span className="text-slate-400">
                  {category.level}
                </span>
              </div>

             <Link
  href="/practice/quiz"
  className="mt-6 block w-full rounded-xl border border-slate-200 py-3 text-center text-sm font-bold transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
>
  Start Practice →
</Link>
            </div>
          ))}
        </div>
      </section>

      {/* DAILY CHALLENGE */}
      <section className="bg-indigo-600">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="text-white">
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-200">
                Challenge of the Day
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Can you solve today's challenge?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-indigo-100">
                Complete today's challenge and earn up to 50 XP. Keep your
                streak alive and improve your skills every day.
              </p>
            </div>

            <div className="shrink-0 rounded-2xl bg-white p-6 text-center shadow-xl">
              <div className="text-3xl">🔥</div>

              <div className="mt-2 text-2xl font-bold text-slate-900">
                +50 XP
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Available today
              </p>

              <button className="mt-4 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
                Take Challenge
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT ATTEMPTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Your Progress
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Recent Attempts
            </h2>
          </div>

          <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
            View All Attempts →
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {recentAttempts.map((attempt, index) => (
            <div
              key={attempt.title}
              className={`flex flex-col gap-4 p-6 sm:flex-row sm:items-center ${
                index !== recentAttempts.length - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                {attempt.icon}
              </div>

              <div className="flex-1">
                <h3 className="font-bold">
                  {attempt.title}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Attempted {attempt.time}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <div className="text-sm font-bold">
                    {attempt.score}
                  </div>

                  <div className="text-xs text-slate-400">
                    Score
                  </div>
                </div>

                <div className="rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
                  {attempt.percentage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-14 text-center text-white sm:px-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20 text-2xl">
            🚀
          </div>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Ready to improve your skills?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
            Practice consistently, track your progress and become interview
            ready.
          </p>

          <button className="mt-8 rounded-xl bg-indigo-600 px-7 py-3.5 font-bold text-white transition hover:bg-indigo-700">
            Start Practicing →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 SR Skills Academy. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>

            <Link href="/courses" className="hover:text-indigo-600">
              Courses
            </Link>

            <Link href="/dashboard" className="hover:text-indigo-600">
              My Learning
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}