import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>jimitas(地味に助かる学習コンテンツ)</title>
        <meta name="description" content="jimitas(地味に助かる学習コンテンツ)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto flex-grow mt-8 md:mt-10 lg:mt-12">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
