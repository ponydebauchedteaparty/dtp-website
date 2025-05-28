"use client";
import Link from "next/link";

export default function NewIRCServerPost() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4 py-16">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Our New IRC Server!</h1>
        <p className="mb-4 text-lg">
          We're thrilled to announce that Debauched Tea Party now has its very own IRC server! Whether you're a long-time IRC user or new to the world of real-time chat, we invite you to join our growing community and be part of the conversation.
        </p>
        <p className="mb-4 text-lg">
          <strong>Connection details:</strong><br />
          <span className="font-mono">irc.debauchedtea.party</span> port <span className="font-mono">1337</span>
        </p>
        <p className="mb-4 text-lg">
          Our IRC server is open to everyone who loves technology, infosec, AI, or just wants to hang out and chat. We're all about sharing knowledge, learning together, and having fun.
        </p>
        <p className="mb-4 text-lg">
          <strong>Web chat is coming soon!</strong> For now, you'll need to use an IRC client to connect. There are many free clients available for all platforms—just point yours to the address above and you're in!
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