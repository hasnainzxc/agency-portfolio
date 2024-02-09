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

  const handleLinkClick = (href) => (e) => {
    e.preventDefault();
    router.push(href);
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close the menu after clicking on a link
    }
  };

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
            onClick={handleLinkClick("/")}
            className={activeLink == "/" ? "activeLink" : "none"}
          >
            Home
          </a>
          <a
            href="/agency"
            onClick={handleLinkClick("/agency")}
            className={activeLink == "/agency" ? "activeLink" : "none"}
          >
            Agency
          </a>
          <a
            href="/team"
            onClick={handleLinkClick("/team")}
            className={activeLink == "/team" ? "activeLink" : "none"}
          >
            Team
          </a>
          <a
            href="/services"
            onClick={handleLinkClick("/services")}
            className={activeLink == "/services" ? "activeLink" : "none"}
          >
            Services
          </a>
          <a
            href="/showcase"
            onClick={handleLinkClick("/showcase")}
            className={activeLink == "/showcase" ? "activeLink" : "none"}
          >
            Showcase
          </a>
          <a
            href="/blogs"
            onClick={handleLinkClick("/blogs")}
            className={activeLink == "/blogs" ? "activeLink" : "none"}
          >
            Blog
          </a>
          <a
            href="/contact"
            onClick={handleLinkClick("/contact")}
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
