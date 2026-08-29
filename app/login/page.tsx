import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="border-b border-slate-200 bg-white">
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

          <Link
            href="/"
            className="text-sm font-semibold text-slate-600 hover:text-indigo-600"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* LOGIN SECTION */}
      <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-12">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="inline-flex rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
                SR Skills Academy
              </div>

              <h1 className="mt-8 text-4xl font-bold leading-tight">
                Continue your
                <span className="text-indigo-400"> learning journey.</span>
              </h1>

              <p className="mt-5 max-w-md leading-7 text-slate-300">
                Access your courses, track your progress, practice your skills
                and keep moving towards your career goals.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                  ✓
                </div>
                <span className="text-sm text-slate-300">
                  Access your enrolled courses
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                  ✓
                </div>
                <span className="text-sm text-slate-300">
                  Track your learning progress
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                  ✓
                </div>
                <span className="text-sm text-slate-300">
                  Practice and improve your skills
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 sm:p-10">
            <div className="mx-auto max-w-md">
              <div className="mb-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">
                  👋
                </div>

                <h2 className="mt-5 text-3xl font-bold">
                  Welcome back
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Login to continue learning
                </p>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* PASSWORD */}
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* REMEMBER */}
              <div className="mt-5 flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-slate-600"
                >
                  Remember me
                </label>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-indigo-600 py-3.5 font-bold text-white shadow-lg shadow-indigo-100 transition hover:bg-indigo-700"
              >
                Login →
              </button>

              {/* DIVIDER */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-xs text-slate-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* GOOGLE */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white py-3.5 text-sm font-semibold transition hover:bg-slate-50"
              >
                <span className="text-lg">G</span>
                Continue with Google
              </button>

              {/* SIGNUP */}
              <p className="mt-7 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="font-bold text-indigo-600 hover:text-indigo-700"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-5 text-center text-xs text-slate-500">
        © 2026 SR Skills Academy. All rights reserved.
      </footer>
    </main>
  );
}