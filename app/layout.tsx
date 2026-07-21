import { Manrope } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'light') {
                  document.documentElement.classList.add('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={manrope.className}>
        <ThemeToggle />
        {children}
      </body>
      <script
  dangerouslySetInnerHTML={{
    __html: `
      try {
        if (localStorage.getItem('theme') === 'light') {
          document.documentElement.classList.add('light');
        }
      } catch (e) {}

      console.log(
        '%c👀 Looking for bugs? So am I.',
        'color: #86e0cc; font-size: 16px; font-weight: bold;'
      );
      console.log(
        '%cIf you\\'re reading this, you\\'re exactly the kind of person I want to work with. Let\\'s talk: fian.molanza@outlook.com',
        'color: #a9b8c9; font-size: 12px;'
      );
    `,
  }}
/>
    </html>
  );
}