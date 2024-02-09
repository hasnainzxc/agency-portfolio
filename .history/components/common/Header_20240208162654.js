import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Define activeLink state
  const router = useRouter(); // Get the router object

  useEffect(() => {
    // Update activeLink state when route changes
    setActiveLink(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    // Scroll to the desired section after navigating to the page
    const sectionId = window.location.hash.substring(1);
    if (sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <TitleLogo title="Vertix" caption="Code " className="logomin" />
          </Link>
        </div>
        <nav className={open ? "openMenu" : "closeMenu"}>
          <a
            href="/"
            onClick={() => setOpen(false)}
            className={activeLink == "/" ? "activeLink" : "none"}
          >
            Home
          </a>
          <a
            href="/agency"
            onClick={() => setOpen(false)}
            className={activeLink == "/agency" ? "activeLink" : "none"}
          >
            Agency
          </a>
          <a
            href="/team"
            onClick={() => setOpen(false)}
            className={activeLink == "/team" ? "activeLink" : "none"}
          >
            Team
          </a>
          <a
            href="/services"
            onClick={() => setOpen(false)}
            className={activeLink == "/services" ? "activeLink" : "none"}
          >
            Services
          </a>
          <a
            href="/showcase"
            onClick={() => setOpen(false)}
            className={activeLink == "/showcase" ? "activeLink" : "none"}
          >
            Showcase
          </a>
          <a
            href="/blogs"
            onClick={() => setOpen(false)}
            className={activeLink == "/blogs" ? "activeLink" : "none"}
          >
            Blog
          </a>
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className={activeLink == "/contact" ? "activeLink" : "none"}
          >
            Contact
          </a>
          <button className="button-primary">book a consultation</button>
        </nav>
        <button onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
