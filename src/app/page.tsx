import Link from 'next/link';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Link href="/signup">
          Go to register
        </Link>
      <Link href="/signin">
        Go to Login
      </Link>
        <Link href='/dashboard'>
            Go to Dashboard
        </Link>
    </div>
  );
}
