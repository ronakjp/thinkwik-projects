import React from "react";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "PropertyHub | Find the perfect rental ",
  description: "Find your dream rental property.",
  keywords: "rental,properties, find properties",
};

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
};

export default MainLayout;
