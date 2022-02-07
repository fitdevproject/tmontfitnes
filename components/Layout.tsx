import { FC } from "react";
import Navbar from "./Header";
import Footer from "./Footer";

const Layout: FC<{}> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-tmontGray-100">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
