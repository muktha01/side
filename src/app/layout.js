import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "SDEV Solutions - Software Development Company for Scalable & Innovative Solutions",
  description: "From Vision To Execution, Accelerated With SDEV Solutions. Expert software development services for web, mobile, AI, and cloud solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
