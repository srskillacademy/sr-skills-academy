"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    question: "What is the main purpose of software testing?",
    options: [
      "To write more code",
      "To find defects and verify software quality",
      "To increase application size",
      "To replace developers",
    ],
    answer: 1,
    explanation:
      "Software testing helps identify defects and verifies that the software meets the expected requirements.",
  },
  {
    question: "Which testing is performed after a new build is deployed?",
    options: [
      "Regression Testing",
      "Smoke Testing",
      "Load Testing",
      "Security Testing",
    ],
    answer: 1,
    explanation:
      "Smoke testing checks whether the major functionality of a new build is stable enough for further testing.",
  },
  {
    question: "Which tool is commonly used for web browser automation?",
    options: [
      "MySQL",
      "Jira",
      "Selenium",
      "Postman",
    ],
    answer: 2,
    explanation:
      "Selenium is widely used for automating web browsers and testing web applications.",
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Question Language",
      "System Query Logic",
      "Software Query Language",
    ],
    answer: 0,
    explanation:
      "SQL stands for Structured Query Language and is used to work with relational databases.",
  },
  {
    question: "Which keyword is used to create a class in Java?",
    options: [
      "function",
      "define",
      "class",
      "object",
    ],
    answer: 2,
    explanation:
      "The 'class' keyword is used to define a class in Java.",
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = questions[currentQuestion];

  const handleSelect = (index: number) => {
    if (submitted) return;

    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setSubmitted(true);

    if (selectedAnswer === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
      return;
    }

    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setSubmitted(false);
    setQuizFinished(false);
  };

  const getOptionClass = (index: number) => {
    if (!submitted) {
      if (selectedAnswer === index) {
        return "border-indigo-600 bg-indigo-50 text-indigo-700";
      }

      return "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/40";
    }

    if (index === question.answer) {
      return "border-green-500 bg-green-50 text-green-700";
    }

    if (index === selectedAnswer) {
      return "border-red-500 bg-red-50 text-red-700";
    }

    return "border-slate-200 bg-white text-slate-500";
  };

  if (quizFinished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* NAVBAR */}
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
                SR
              </div>

              <div>
                <div className="font-bold">SR Skills Academy</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500">
                  Learn • Practice • Grow
                </div>
              </div>
            </Link>

            <Link
              href="/practice"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              ← Practice Arena
            </Link>
          </div>
        </header>

        {/* RESULT */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 text-4xl">
              {percentage >= 80
                ? "🏆"
                : percentage >= 50
                  ? "🎯"
                  : "💪"}
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-indigo-600">
              Quiz Completed
            </p>

            <h1 className="mt-3 text-4xl font-bold">
              Great job! 🎉
            </h1>

            <p className="mt-3 text-slate-500">
              Here is your final performance.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-3xl font-bold text-indigo-600">
                  {score}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Correct
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-3xl font-bold text-red-500">
                  {questions.length - score}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Wrong
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-3xl font-bold text-green-600">
                  {percentage}%
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Score
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-indigo-50 p-5">
              <div className="text-sm font-semibold text-indigo-700">
                ⭐ XP Earned
              </div>

              <div className="mt-1 text-2xl font-bold text-indigo-900">
                +{score * 10} XP
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={restartQuiz}
                className="rounded-xl bg-indigo-600 px-7 py-3.5 font-bold text-white transition hover:bg-indigo-700"
              >
                Try Again
              </button>

              <Link
                href="/practice"
                className="rounded-xl border border-slate-300 px-7 py-3.5 font-bold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
              >
                Back to Practice
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const progress = Math.round(
    ((currentQuestion + 1) / questions.length) * 100
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
              SR
            </div>

            <div>
              <div className="font-bold">SR Skills Academy</div>

              <div className="text-[10px] uppercase tracking-widest text-slate-500">
                Practice Arena
              </div>
            </div>
          </Link>

          <Link
            href="/practice"
            className="text-sm font-semibold text-slate-600 hover:text-indigo-600"
          >
            ← Exit Quiz
          </Link>
        </div>
      </header>

      {/* QUIZ */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                Software Testing
              </p>

              <h1 className="mt-1 text-2xl font-bold">
                Practice Quiz
              </h1>
            </div>

            <div className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
              {currentQuestion + 1} / {questions.length}
            </div>
          </div>

          {/* PROGRESS */}
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-2 text-right text-xs font-medium text-slate-500">
            {progress}% completed
          </div>
        </div>

        {/* QUESTION CARD */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
              {currentQuestion + 1}
            </div>

            <h2 className="pt-1 text-xl font-bold leading-8 sm:text-2xl">
              {question.question}
            </h2>
          </div>

          {/* OPTIONS */}
          <div className="mt-8 space-y-4">
            {question.options.map((option, index) => (
              <button
                key={option}
                onClick={() => handleSelect(index)}
                disabled={submitted}
                className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition ${getOptionClass(
                  index
                )}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current text-sm font-bold">
                  {String.fromCharCode(65 + index)}
                </span>

                <span className="font-medium">
                  {option}
                </span>

                {submitted && index === question.answer && (
                  <span className="ml-auto text-xl">✓</span>
                )}

                {submitted &&
                  index === selectedAnswer &&
                  selectedAnswer !== question.answer && (
                    <span className="ml-auto text-xl">✕</span>
                  )}
              </button>
            ))}
          </div>

          {/* EXPLANATION */}
          {submitted && (
            <div
              className={`mt-6 rounded-2xl p-5 ${
                selectedAnswer === question.answer
                  ? "bg-green-50"
                  : "bg-red-50"
              }`}
            >
              <div
                className={`font-bold ${
                  selectedAnswer === question.answer
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {selectedAnswer === question.answer
                  ? "✓ Correct Answer!"
                  : "✕ Incorrect Answer"}
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {question.explanation}
              </p>
            </div>
          )}

          {/* BUTTON */}
          <div className="mt-8 flex justify-end">
            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className="rounded-xl bg-indigo-600 px-7 py-3.5 font-bold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Submit Answer →
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="rounded-xl bg-slate-900 px-7 py-3.5 font-bold text-white transition hover:bg-slate-800"
              >
                {currentQuestion === questions.length - 1
                  ? "View Result →"
                  : "Next Question →"}
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}