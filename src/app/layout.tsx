import { Inter } from "next/font/google";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";
import { metadata } from './metadata';

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors`} suppressHydrationWarning>
        <ThemeProvider>
          <main className="min-h-screen bg-white dark:bg-gray-900">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
