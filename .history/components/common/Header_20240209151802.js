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
              <a>
                <TitleLogo title="Vertix" caption="Code " className="logomin" />
              </a>
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"}>
            <a onClick={() => scrollToSection("top")}>Home</a>
            <a onClick={() => scrollToSection("agency")}>Agency</a>
            <a onClick={() => scrollToSection("team")}>Team</a>
            <a onClick={() => scrollToSection("services")}>Services</a>
            <a onClick={() => scrollToSection("showcase")}>Showcase</a>
            <a onClick={() => scrollToSection("blogs")}>Blog</a>
            <a onClick={() => scrollToSection("contact")}>Contact</a>
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
