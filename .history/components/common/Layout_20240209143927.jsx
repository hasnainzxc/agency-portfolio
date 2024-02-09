import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      {/* <Team />
      <Contact /> */}
      <Footer />
    </>
  );
};

export default Layout;
