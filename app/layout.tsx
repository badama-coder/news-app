import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: { default: "The Daily — A fresh perspective", template: "%s | The Daily" },
  description: "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
    >
      <body>{children}
      <footer className="h-[133px] w-full border-t border-[#E2E2DA] flex items-center px-8 justify-between bg-[#FAF9F6]">
        <div>
          <div className="text-3xl font-semibold mb-1">the daily <span className="text-[#C44724]">▧</span></div>
          <div className="text-xs text-[#65675F]">A fresh perspective. Every day.</div>
        </div>
        <button type="button" className="text-[#22241F] text-xs">Back to top ↑</button>
      </footer>
      </body>
      
    </html>
  );
}
