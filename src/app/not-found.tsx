import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm text-ink-soft">404</p>
      <h1 className="mt-3 text-3xl font-semibold">This route does not exist.</h1>
      <Link href="/" className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm text-[var(--bg)]">
        Back home
      </Link>
    </div>
  );
}
