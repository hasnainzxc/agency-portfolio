import Footer from "./Footer";
import Header from "./Header";
import { Team } from "@/sections";
import Contact from "./Contact";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Team> </Team>
      <Contact> </Contact>
      <Footer />
    </>
  );
};

export default Layout;
