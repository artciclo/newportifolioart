import { NavbarProvider } from "@/context/NavbarContext";
import { SectionRefsProvider } from "@/context/SectionRefsContext";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import type { Metadata } from "next";
import { Quicksand, Poppins } from "next/font/google";

const quicksand = Quicksand({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Arthur Lima | Portfolio",
  description:
    "Portfolio de Arthur Lima - Project Manager e Desenvolvedor de Software",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${quicksand.variable} ${poppins.variable}`}>
      <NavbarProvider>
        <SectionRefsProvider>
          <body>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </body>
        </SectionRefsProvider>
      </NavbarProvider>
    </html>
  );
}
