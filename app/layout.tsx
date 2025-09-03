import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "GetMeLixked",
  description: "Events and Drinks",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
          <div className="">{children}</div>
          <Footer />
        </body>
      </html>
    </>
  );
}
