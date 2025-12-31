import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [navbarShrink, setNavbarShrink] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setNavbarShrink(scrollY > 50);

    const sections = ["home", "about", "skills", "projects", "contact"];
    sections.forEach(section => {
      const el = document.getElementById(section);
      if (el) {
        const offsetTop = el.offsetTop;
        const offsetHeight = el.offsetHeight;
        if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
          setActive(section);
        }
      }
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${navbarShrink ? "navbar-light bg-white shadow-sm" : "navbar-light bg-transparent"}`}>
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
          style={{ color: " #d84a83" }}
        >
          Portfolio.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className={`nav-link ${active === item ? "active fw-bold" : ""}`}
                  href={`#${item}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                  style={{ color: "black" }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
