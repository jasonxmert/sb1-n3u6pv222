"use client";

import ThemeSwitcher from "./theme-switcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="font-semibold">Postcodes</a>
        </div>

        <nav className="flex items-center gap-2">
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
}