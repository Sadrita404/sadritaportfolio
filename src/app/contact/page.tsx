import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-[100dvh] flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-md w-full rounded-[25px] border border-white/20 bg-[#0a0a0a]/70 p-10 shadow-xl">
        <h1 className="text-3xl font-semibold mb-4">Get in Touch</h1>
        <p className="text-sm text-white/70 mb-6">
          Feel free to reach out via email. Click the address below to open your mail client.
        </p>
        <a
          href="mailto:sadritaneogi@gmail.com"
          className="inline-flex w-full items-center justify-center rounded-[14px] border border-white/20 bg-white/5 px-6 py-4 text-center text-base font-medium text-white transition hover:bg-white/10"
        >
          sadritaneogi@gmail.com
        </a>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
