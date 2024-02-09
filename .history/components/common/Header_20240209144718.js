import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import contact from "@/pages/contact";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Define activeLink state
  const router = useRouter(); // Get the router object

  useEffect(() => {
    // Update activeLink state when route changes
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#" onClick={() => scrollToSection("top")}>
            {/* Assuming "top" is the ID of the section you want to scroll to */}
            <TitleLogo title="Vertix" caption="Code " className="logomin" />
          </a>
        </div>
        <nav className={open ? "openMenu" : "closeMenu"}>
          <a
            href="#"
            onClick={() => scrollToSection("top")}
            className={activeLink == "/" ? "activeLink" : "none"}
          >
            Home
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className={activeLink == "/contact" ? "activeLink" : "none"}
          >
            Contact
          </a>
          {/* Repeat the same for other links */}
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
