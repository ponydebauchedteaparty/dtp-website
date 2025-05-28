"use client";
import Link from "next/link";

export default function NewIRCServerPost() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4 py-16">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Our New IRC Server!</h1>
        <p className="mb-4 text-lg">
          We&apos;re excited to announce the launch of our brand new IRC server at <span className="font-mono">irc.debauchedtea.party</span> port <span className="font-mono">1337</span>!
        </p>
        <p className="mb-4 text-lg">
          Our IRC server is now live and ready for you to join. We&apos;ve set up a welcoming space where you can chat about tech, infosec, AI, and more.
        </p>
        <p className="mb-4 text-lg">
          Whether you&apos;re a seasoned IRC user or just getting started, you&apos;ll find a friendly community here.
        </p>
        <p className="mb-4 text-lg">
          <strong>Web chat is coming soon!</strong> For now, you&apos;ll need to use an IRC client to connect. There are many free clients available for all platforms—just point yours to the address above and you&apos;re in!
        </p>
        <p className="mb-4 text-lg">
          We look forward to meeting new friends, sharing ideas, and building something great together. See you on IRC!
        </p>
        <div className="mt-8">
          <Link href="/blog" className="text-blue-400 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    </main>
  );
} 