'use client';
// Import necessary modules
import { useState } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [loading, setLoading] = useState(false);

  // Function to handle email sending
  const sendWelcomeEmail = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
      });

      if (response.ok) {
        toast.success('Welcome email sent successfully!');
      } else {
        toast.error('Failed to send welcome email.');
      }
    } catch {
      toast.error('An error occurred while sending the email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Toaster position="top-right" reverseOrder={false} />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
    

        {/* Button to trigger email sending */}
        <button
          className={`rounded-full border border-solid transition-colors flex items-center justify-center ${
            loading ? 'bg-gray-300' : 'bg-foreground text-background'
          } hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5`}
          onClick={sendWelcomeEmail}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Welcome Email'}
        </button>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
