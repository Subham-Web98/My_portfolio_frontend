import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderNavLinks = (to, label) => (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-orange-400 scale-110 font-bold"
          : "text-orange-100 hover:text-orange-200 hover:scale-90 drop-shadow-md transition-all duration-500"
      }
      to={to}
      onClick={() => setIsMobileOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-50 bg-transparent shadow-sm ">
      {/* Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>

      <nav>
        <div className="flex justify-between items-center px-5 py-3 backdrop-blur-3xl">
          {/* Logo Section */}
          <div>
            <Link to="/">
              <img
                className="rounded-full"
                src="/myLogo.webp"
                height={40}
                width={40}
                alt="logo"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-2xl focus:outline-none text-orange-100 pr-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? "✖" : "☰"}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-8 text-lg">
            {renderNavLinks("/", "Home")}
            {renderNavLinks("/project", "Projects")}
            {renderNavLinks("/about", "About")}
            {renderNavLinks("/contact", "Contact")}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="flex flex-col items-center gap-y-4 md:hidden py-5 shadow-md backdrop-blur-md">
            {renderNavLinks("/", "Home")}
            {renderNavLinks("/project", "Projects")}
            {renderNavLinks("/about", "About")}
            {renderNavLinks("/contact", "Contact")}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
