import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    } else {
      router.push(`/#${id}`); // Navigate to the specified section
      setOpen(false);
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <TitleLogo title="Vertix" caption="Code " className="logomin" />
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <a
              onClick={() => scrollToSection("top")}
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("agency")}
              className={activeLink == "/agency" ? "activeLink" : "none"}
            >
              Agency
            </a>
            <a
              onClick={() => scrollToSection("team")}
              className={activeLink == "/team" ? "activeLink" : "none"}
            >
              Team
            </a>
            <a
              onClick={() => scrollToSection("services")}
              className={activeLink == "/services" ? "activeLink" : "none"}
            >
              Services
            </a>
            <a
              onClick={() => scrollToSection("showcase")}
              className={activeLink == "/showcase" ? "activeLink" : "none"}
            >
              Showcase
            </a>
            <a
              onClick={() => scrollToSection("blogs")}
              className={activeLink == "/blogs" ? "activeLink" : "none"}
            >
              Blog
            </a>
            <a
              onClick={() => scrollToSection("contact")}
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
    </>
  );
};

export default Header;
