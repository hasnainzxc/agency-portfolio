import Link from "next/link";
import { TitleLogo } from "./Title";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close the menu after clicking a link
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
          <nav className={open ? "openMenu" : "closeMenu"}>
            <Link href="/" onClick={() => scrollToSection("top")}>
              <a>Home</a>
            </Link>
            <Link href="/agency" onClick={() => scrollToSection("agency")}>
              <a>Agency</a>
            </Link>
            <Link href="/team" onClick={() => scrollToSection("team")}>
              <a>Team</a>
            </Link>
            <Link href="/services" onClick={() => scrollToSection("services")}>
              <a>Services</a>
            </Link>
            <Link href="/showcase" onClick={() => scrollToSection("showcase")}>
              <a>Showcase</a>
            </Link>
            <Link href="/blogs" onClick={() => scrollToSection("blogs")}>
              <a>Blog</a>
            </Link>
            <Link href="/contact" onClick={() => scrollToSection("contact")}>
              <a>Contact</a>
            </Link>
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
