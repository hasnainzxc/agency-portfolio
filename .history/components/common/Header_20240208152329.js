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

  const handleLinkClick = (sectionId, href) => {
    const targetElement = document.querySelector(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close the menu after clicking on a link
    } else {
      // If smooth scrolling is not applicable (e.g., JavaScript disabled), navigate to the specified href
      window.location.href = href;
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <a onClick={() => handleLinkClick("#home", "/")}>
              <TitleLogo title="Vertix" caption="Code " className="logomin" />
            </a>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"}>
            <a
              onClick={() => handleLinkClick("#home", "/")}
              className={activeLink === "/" ? "activeLink" : "none"}
            >
              Home
            </a>
            <a
              onClick={() => handleLinkClick("#agency", "/agency")}
              className={activeLink === "/agency" ? "activeLink" : "none"}
            >
              Agency
            </a>
            {/* Repeat for other links */}
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
