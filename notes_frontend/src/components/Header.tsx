"use client";
import Link from "next/link";

// PUBLIC_INTERFACE
export default function Header() {
  /**
   * Application top navigation bar
   */
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between">
        <h1 className="text-lg font-semibold">
          <Link href="/">My Notes</Link>
        </h1>
      </div>
    </header>
  );
}
