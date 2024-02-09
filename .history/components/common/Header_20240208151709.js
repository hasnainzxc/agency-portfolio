import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { TitleLogo } from "./Title";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleLinkClick = (link) => {
    document.querySelector(link).scrollIntoView({ behavior: "smooth" });
    setOpen(false); // Close the menu after clicking on a link
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <TitleLogo title="Vertix" caption="Code " className="logomin" />
          </div>
          <nav className={open ? "openMenu" : "closeMenu"}>
            <button onClick={() => handleLinkClick("#home")}>Home</button>
            <button onClick={() => handleLinkClick("#agency")}>Agency</button>
            <button onClick={() => handleLinkClick("#team")}>Team</button>
            <button onClick={() => handleLinkClick("#services")}>
              Services
            </button>
            <button onClick={() => handleLinkClick("#showcase")}>
              Showcase
            </button>
            <button onClick={() => handleLinkClick("#blogs")}>Blog</button>
            <button onClick={() => handleLinkClick("#contact")}>Contact</button>
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
