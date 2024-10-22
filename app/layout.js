import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
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
          <div className="w-9/12 flex mx-auto bg-white">
            <div className="mx-auto">{children}</div>
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
}
