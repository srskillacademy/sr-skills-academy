"use client";

import { useMemo } from "react";

const courses = [
  {
    id: 1,
    category: "SOFTWARE TESTING",
    title: "Complete Software Testing & Automation",
    description:
      "Master Manual Testing, Selenium, Playwright, API Testing and Automation.",
    progress: 42,
    completed: 10,
    total: 23,
    level: "Beginner → Advanced",
    icon: "🧪",
  },
  {
    id: 2,
    category: "PROGRAMMING",
    title: "Java Programming from Scratch",
    description:
      "Build strong Java fundamentals with practical examples and exercises.",
    progress: 0,
    completed: 0,
    total: 20,
    level: "Beginner",
    icon: "☕",
  },
  {
    id: 3,
    category: "DATA",
    title: "SQL & Database Mastery",
    description:
      "Learn SQL through real-world queries, practice questions and projects.",
    progress: 0,
    completed: 0,
    total: 18,
    level: "Beginner → Intermediate",
    icon: "🗄️",
  },
];

const stats = [
  {
    label: "Courses Enrolled",
    value: "3",
    icon: "📚",
  },
  {
    label: "Lessons Completed",
    value: "10",
    icon: "✅",
  },
  {
    label: "Quiz Score",
    value: "86%",
    icon: "🎯",
  },
  {
    label: "Learning Streak",
    value: "7 Days",
    icon: "🔥",
  },
];

const recentActivity = [
  {
    title: "Playwright with TypeScript",
    type: "Lesson Completed",
    time: "Today",
    icon: "✓",
  },
  {
    title: "API Testing Fundamentals",
    type: "Quiz Passed",
    time: "Yesterday",
    icon: "🎯",
  },
  {
    title: "Selenium Locators",
    type: "Lesson Completed",
    time: "2 days ago",
    icon: "✓",
  },
];

export default function DashboardPage() {
  const continueCourse = useMemo(
    () => courses.find((course) => course.progress > 0),
    []
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white shadow-sm">
              SR
            </div>

            <div>
              <div className="font-bold tracking-tight">
                SR Skills Academy
              </div>

              <div className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                Learn • Practice • Grow
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a
              href="/courses"
              className="transition hover:text-indigo-600"
            >
              Courses
            </a>

            <a
              href="/dashboard"
              className="font-semibold text-indigo-600"
            >
              Dashboard
            </a>

            <a
              href="/practice"
              className="transition hover:text-indigo-600"
            >
              Practice
            </a>

            <a
              href="/free-learning"
              className="transition hover:text-indigo-600"
            >
              Free Learning
            </a>
          </nav>

          {/* USER */}
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <div className="text-xs text-slate-400">
                Welcome back
              </div>

              <div className="text-sm font-bold">
                Student 👋
              </div>
            </div>

            <button
              onClick={() => {
                window.location.href = "/";
              }}
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold transition hover:border-indigo-300 hover:text-indigo-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* WELCOME */}
        <section className="rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-slate-900 p-8 text-white shadow-xl sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
              Student Dashboard
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome back! 👋
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-indigo-100">
              Keep learning, keep practicing and build skills that move
              your career forward.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  window.location.href =
                    "/courses/software-testing/learn";
                }}
                className="rounded-xl bg-white px-6 py-3.5 font-bold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
              >
                Continue Learning →
              </button>

              <button
                onClick={() => {
                  window.location.href = "/courses";
                }}
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore Courses
              </button>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                  {stat.icon}
                </div>

                <span className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </span>
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* CONTINUE LEARNING */}
        {continueCourse && (
          <section className="mt-12">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                  Continue Learning
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Pick up where you left off
                </h2>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="grid lg:grid-cols-[1fr_360px]">
                {/* COURSE INFO */}
                <div className="p-7 sm:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold tracking-wider text-indigo-700">
                      {continueCourse.category}
                    </span>

                    <span className="text-xs font-medium text-slate-400">
                      {continueCourse.level}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold">
                    {continueCourse.title}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                    {continueCourse.description}
                  </p>

                  <div className="mt-7">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-semibold">
                        Course Progress
                      </span>

                      <span className="font-bold text-indigo-600">
                        {continueCourse.progress}%
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-indigo-600 transition-all"
                        style={{
                          width: `${continueCourse.progress}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-slate-500">
                    {continueCourse.completed} of{" "}
                    {continueCourse.total} lessons completed
                  </div>

                  <button
                    onClick={() => {
                      window.location.href =
                        "/courses/software-testing/learn";
                    }}
                    className="mt-7 rounded-xl bg-indigo-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
                  >
                    Continue Course →
                  </button>
                </div>

                {/* VISUAL */}
                <div className="flex min-h-[280px] items-center justify-center bg-gradient-to-br from-indigo-600 to-slate-950 p-8">
                  <div className="text-center text-white">
                    <div className="text-7xl">🧪</div>

                    <div className="mt-5 text-xl font-bold">
                      Software Testing
                    </div>

                    <div className="mt-2 text-sm text-indigo-200">
                      Selenium • Playwright • API • SQL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* MY COURSES */}
        <section className="mt-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                My Courses
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Your learning library
              </h2>
            </div>

            <button
              onClick={() => {
                window.location.href = "/courses";
              }}
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View All Courses →
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* COURSE HEADER */}
                <div className="flex h-36 items-center justify-center bg-gradient-to-br from-indigo-600 to-slate-900">
                  <div className="text-6xl">{course.icon}</div>
                </div>

                {/* COURSE BODY */}
                <div className="p-6">
                  <div className="text-[11px] font-bold tracking-widest text-indigo-600">
                    {course.category}
                  </div>

                  <h3 className="mt-2 text-xl font-bold">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {course.description}
                  </p>

                  <div className="mt-5">
                    <div className="mb-2 flex justify-between text-xs font-semibold">
                      <span className="text-slate-500">
                        Progress
                      </span>

                      <span className="text-indigo-600">
                        {course.progress}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-indigo-600"
                        style={{
                          width: `${course.progress}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>
                      {course.completed}/{course.total} lessons
                    </span>

                    <span>{course.level}</span>
                  </div>

                  <button
                    onClick={() => {
                      if (course.id === 1) {
                        window.location.href =
                          "/courses/software-testing/learn";
                      } else {
                        window.location.href = "/courses";
                      }
                    }}
                    className="mt-6 w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-indigo-600"
                  >
                    {course.progress > 0
                      ? "Continue Course"
                      : "Start Course"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TWO COLUMN AREA */}
        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* RECENT ACTIVITY */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                  Activity
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Recent Activity
                </h2>
              </div>

              <div className="rounded-xl bg-indigo-50 px-3 py-2 text-xl">
                📈
              </div>
            </div>

            <div className="mt-7 space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={`${activity.title}-${activity.time}`}
                  className="flex items-center gap-4 rounded-xl border border-slate-100 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                    {activity.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="truncate font-semibold">
                      {activity.title}
                    </div>

                    <div className="mt-1 text-xs text-slate-500">
                      {activity.type}
                    </div>
                  </div>

                  <div className="text-xs text-slate-400">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                Achievements
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Keep going! 🏆
              </h2>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-amber-50 p-5">
                <div className="text-3xl">🔥</div>

                <div className="mt-4 font-bold">
                  7 Day Streak
                </div>

                <div className="mt-1 text-xs text-slate-500">
                  Keep learning daily
                </div>
              </div>

              <div className="rounded-2xl bg-indigo-50 p-5">
                <div className="text-3xl">🎯</div>

                <div className="mt-4 font-bold">
                  Quiz Master
                </div>

                <div className="mt-1 text-xs text-slate-500">
                  80%+ average score
                </div>
              </div>

              <div className="rounded-2xl bg-green-50 p-5">
                <div className="text-3xl">🚀</div>

                <div className="mt-4 font-bold">
                  Fast Learner
                </div>

                <div className="mt-1 text-xs text-slate-500">
                  10 lessons completed
                </div>
              </div>

              <div className="rounded-2xl bg-purple-50 p-5">
                <div className="text-3xl">🏆</div>

                <div className="mt-4 font-bold">
                  First Course
                </div>

                <div className="mt-1 text-xs text-slate-500">
                  Certificate coming soon
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE CTA */}
        <section className="mt-12 overflow-hidden rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-300">
                Practice Arena
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Don't just learn. Practice.
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-slate-300">
                Test your knowledge with quizzes, interview questions
                and practical challenges.
              </p>
            </div>

            <button
              onClick={() => {
                window.location.href = "/practice";
              }}
              className="shrink-0 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-900 transition hover:bg-indigo-50"
            >
              Enter Practice Arena →
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-slate-200 pt-8 pb-5">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
            <div>
              © 2026 SR Skills Academy. All rights reserved.
            </div>

            <div className="flex gap-5">
              <button className="hover:text-indigo-600">
                Privacy
              </button>

              <button className="hover:text-indigo-600">
                Terms
              </button>

              <button className="hover:text-indigo-600">
                Contact
              </button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}