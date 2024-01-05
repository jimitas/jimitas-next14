import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-8 md:mt-10 lg:mt-12">
        <div className="bg-blue-100">{title}</div>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
