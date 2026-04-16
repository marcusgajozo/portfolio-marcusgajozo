import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Roboto_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfólio - Marcus Gajozo",
  description:
    "Portfólio de Marcus Gajozo, desenvolvedor full stack e entusiasta de tecnologia. Explore meus projetos, artigos e contribuições para a comunidade de código aberto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        robotoMono.variable,
        "font-sans",
        geist.variable,
      )}
      suppressHydrationWarning
    >
      <body className="h-screen overflow-hidden">
        <ThemeProvider>
          <main className="flex h-full flex-col md:flex-row">
            <Sidebar />
            <section className="flex-1 overflow-y-auto">
              {children}
              <Footer />
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
