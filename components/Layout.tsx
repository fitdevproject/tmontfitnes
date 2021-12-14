import { FC } from "react";
import Navbar from "./Header";
import Footer from "./Footer";

const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </>
  );
};

export default Layout;
