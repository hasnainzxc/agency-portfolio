import Link from "next/link";
import { TitleLogo } from "./Title";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

  return (
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
          <Link href="/">
            <a className={activeLink == "/" ? "activeLink" : "none"}>Home</a>
          </Link>
          <Link href="/contact">
            <a className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </a>
          </Link>
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
