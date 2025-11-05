"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BackButton = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;
  return (
    <Link
      href="/"
      className="border border-stone-700 rounded-md px-5 py-2 m-10 bg-stone-800"
    >
      Back
    </Link>
  );
};

export default BackButton;
