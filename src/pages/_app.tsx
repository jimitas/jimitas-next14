import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-8 md:mt-10 lg:mt-12">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
