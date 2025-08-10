import "./globals.css";
import React from "react";

export const metadata = {
  title: "Rügen mit Hund – Bester Direktpreis",
  description: "Hundefreundliche Unterkünfte auf Rügen. Finde den besten Direktpreis ohne OTA-Gebühren.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen">
        <header className="sticky top-0 z-40 backdrop-blur bg-neutral-900/70 border-b border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div className="text-xl font-semibold">🐾 Rügen mit Hund</div>
            <nav className="text-sm opacity-80">Bester Direktpreis · Stündlich aktualisiert*</nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
          <p>*Im MVP mit Mock-Daten. Live-Feeds via Google Hotel Ads / trivago / Expedia/Hotelbeds möglich.</p>
          <p className="mt-2">Impressum · Datenschutz · Affiliate-Hinweis</p>
        </footer>
      </body>
    </html>
  );
}
