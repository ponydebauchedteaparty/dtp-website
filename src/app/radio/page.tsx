"use client";

export default function RadioPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4 py-16">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Radio Debauchery</h1>
        <p className="mb-4 text-lg">
          Welcome to Radio Debauchery, your go-to destination for music, tech discussions, and live shows curated by our community. Our radio station is a space for creativity and connection—tune in to discover new music, listen to tech talks, or catch live DJ sets from our members.
        </p>
        <p className="mb-4 text-lg">
          Interested in becoming a DJ or hosting your own show? We&apos;d love to have you! Reach out to us on IRC to get started. Radio Debauchery is always evolving, and we&apos;re excited to see what you&apos;ll bring to the airwaves.
        </p>
        <div className="my-8 flex justify-center">
          <div
            dangerouslySetInnerHTML={{
              __html: `<iframe
                src="https://radio.debauchedtea.party/public/radio_debauchery/embed?theme=light"
                frameborder="0"
                allowtransparency="true"
                style="width: 100%; min-height: 150px; border: 0;"
                class="rounded w-full"
                title="DTP Radio Player"
              ></iframe>`
            }}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center my-6">
          <a
            href="https://radio.debauchedtea.party/public/radio_debauchery/playlist.m3u"
            className="btn-primary flex items-center gap-2 px-5 py-3 rounded font-semibold transition text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Music Note Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-2v13" />
              <circle cx="6" cy="18" r="3" fill="currentColor" />
              <circle cx="18" cy="16" r="3" fill="currentColor" />
            </svg>
            Download M3U
          </a>
          <a
            href="https://radio.debauchedtea.party/public/radio_debauchery/playlist.pls"
            className="btn-secondary flex items-center gap-2 px-5 py-3 rounded font-semibold transition text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* File Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6" />
            </svg>
            Download PLS
          </a>
        </div>
        <p className="text-md text-center">
          <strong>How to Listen:</strong> <br />
          Use the embedded player above or connect via your favorite streaming app
        </p>
      </div>
    </main>
  );
} 