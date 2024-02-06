import Footer from "./Footer";
import Header from "./Header";
import { Team } from "@/sections";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Team> </Team>
      <Footer />
    </>
  );
};

export default Layout;
