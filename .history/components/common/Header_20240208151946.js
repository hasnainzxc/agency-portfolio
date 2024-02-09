import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleLinkClick = (sectionId) => {
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
    setOpen(false); // Close the menu after clicking on a link
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <a onClick={() => handleLinkClick("#home")}>
              <TitleLogo title="Vertix" caption="Code " className="logomin" />
            </a>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"}>
            <a
              onClick={() => handleLinkClick("#home")}
              className={activeLink === "/" ? "activeLink" : "none"}
            >
              Home
            </a>
            <a
              onClick={() => handleLinkClick("#agency")}
              className={activeLink === "/agency" ? "activeLink" : "none"}
            >
              Agency
            </a>
            <a
              onClick={() => handleLinkClick("#team")}
              className={activeLink === "/team" ? "activeLink" : "none"}
            >
              Team
            </a>
            <a
              onClick={() => handleLinkClick("#services")}
              className={activeLink === "/services" ? "activeLink" : "none"}
            >
              Services
            </a>
            <a
              onClick={() => handleLinkClick("#showcase")}
              className={activeLink === "/showcase" ? "activeLink" : "none"}
            >
              Showcase
            </a>
            <a
              onClick={() => handleLinkClick("#blogs")}
              className={activeLink === "/blogs" ? "activeLink" : "none"}
            >
              Blog
            </a>
            <a
              onClick={() => handleLinkClick("#contact")}
              className={activeLink === "/contact" ? "activeLink" : "none"}
            >
              Contact
            </a>
          </nav>
          <button onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
