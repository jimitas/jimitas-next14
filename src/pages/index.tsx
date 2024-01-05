import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import MainTitle from "@/components/MainTitle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="">
      <MainTitle />
      <br />
      {/* <Links /> */}
    </Layout>
  );
}
