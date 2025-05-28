"use client";

export default function WebChatPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4 py-16">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Web Chat</h1>
        <p className="mb-4 text-lg">
          Connect with the DTP community directly from your browser! Our web chat will soon let you join the conversation without any setup. For now, you can connect using your favorite IRC client:
        </p>
        <ul className="mb-4 text-lg list-disc list-inside">
          <li><strong>Server:</strong> irc.debauchedtea.party</li>
          <li><strong>Port:</strong> 1337</li>
        </ul>
        <div className="my-8 flex justify-center">
          {/* TODO: Replace with actual web chat embed */}
          <div className="w-full h-32 bg-gray-800 rounded flex items-center justify-center text-gray-400">
            [Web chat coming soon]
          </div>
        </div>
        <p className="text-md text-center">
          Stay tuned for updates as we roll out our web chat feature!
        </p>
      </div>
    </main>
  );
} 