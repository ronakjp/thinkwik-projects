import React from "react";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "PropertyHub | Find the perfect rental ",
  description: "Find your dream rental property.",
  keywords: "rental,properties, find properties",
};

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
          <body>
              <NavBar/>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
