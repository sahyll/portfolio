import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: "Mohd A Sahil",
	authors: {
		name: "Mohd A Sahil",
	},

	description:
  "Based in Bangalore, I'm a Fullstack Developer passionate about building modern web applications that users love.",
	openGraph: {
		title: "Portfolio",
		description:
    "Based in Bangalore, I'm a Fullstack Developer passionate about building modern web applications that users love.",
		url: "http://localhost:3000",
		siteName: "Portfolio",
		images: "/portfolioimg.png",
		type: "website",
	},
	keywords: ["daily web coding", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
