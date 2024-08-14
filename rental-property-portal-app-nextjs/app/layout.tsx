import React from "react";
import "@/app/globals.css";

export const metadata = {
  title: "PropertyHub | Find the perfect rental ",
  description: "Find your dream rental property.",
  keywords: "rental,properties, find properties",
};

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
