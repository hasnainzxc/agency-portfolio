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

  const handleLinkClick = (sectionId) => {
    const targetElement = document.querySelector(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close the menu after clicking on a link
    } else {
      console.error(`Section with ID ${sectionId} not found`);
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <a onClick={() => handleLinkClick("#home")} className="logo-link">
              Vertix
            </a>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"}>
            <a onClick={() => handleLinkClick("#home")} className="nav-link">
              Home
            </a>
            <a onClick={() => handleLinkClick("#agency")} className="nav-link">
              Agency
            </a>
            <a onClick={() => handleLinkClick("#team")} className="nav-link">
              Team
            </a>
            <a
              onClick={() => handleLinkClick("#services")}
              className="nav-link"
            >
              Services
            </a>
            <a
              onClick={() => handleLinkClick("#showcase")}
              className="nav-link"
            >
              Showcase
            </a>
            <a onClick={() => handleLinkClick("#blogs")} className="nav-link">
              Blog
            </a>
            <a onClick={() => handleLinkClick("#contact")} className="nav-link">
              Contact
            </a>
            <button className="button-primary">book a consultation</button>
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
