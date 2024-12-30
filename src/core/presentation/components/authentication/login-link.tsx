import Link from 'next/link';

export const LoginLink = () => {
  return (
    <Link
      className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
      href="/sign-in"
    >
      Sign in
    </Link>
  );
};
