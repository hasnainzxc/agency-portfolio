import { useEffect, useState } from "react";
import { Link as NextLink } from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <NextLink href="/">
            <TitleLogo title="Vertix" caption="Code " className="logomin" />
          </NextLink>
        </div>
        <nav className={open ? "openMenu" : "closeMenu"}>
          <ScrollLink
            to="top"
            smooth={true}
            className={activeLink == "/" ? "activeLink" : "none"}
            onClick={() => setOpen(false)}
          >
            Home
          </ScrollLink>
          <NextLink href="/agency">
            <a className={activeLink == "/agency" ? "activeLink" : "none"}>
              Agency
            </a>
          </NextLink>
          <NextLink href="/team">
            <a className={activeLink == "/team" ? "activeLink" : "none"}>
              Team
            </a>
          </NextLink>
          <NextLink href="/services">
            <a className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </a>
          </NextLink>
          <NextLink href="/showcase">
            <a className={activeLink == "/showcase" ? "activeLink" : "none"}>
              Showcase
            </a>
          </NextLink>
          <NextLink href="/blogs">
            <a className={activeLink == "/blogs" ? "activeLink" : "none"}>
              Blog
            </a>
          </NextLink>
          <ScrollLink
            to="contact"
            smooth={true}
            className={activeLink == "/contact" ? "activeLink" : "none"}
            onClick={() => setOpen(false)}
          >
            Contact
          </ScrollLink>
          <button className="button-primary">book a consultation</button>
        </nav>
        <button onClick={scrollToTop}>
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
