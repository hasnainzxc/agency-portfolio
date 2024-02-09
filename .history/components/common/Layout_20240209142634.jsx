import Footer from "./Footer";
import Header from "./Header";
import { Team } from "@/sections"; // Assuming alias is properly configured
import Contact from "@/sections/Contact"; // Assuming alias is properly configured

const Layout = (props) => {
  return (
    <>
      <Header />
      {/* <main>{props.children}</main> */}
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
