import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.navbar-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-800' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex flex-row justify-between items-center p-4 md:p-6 text-lg font-semibold">
        {/* Logo/Name */}
        <div className="flex items-center">
          <Link 
            smooth 
            to="#home" 
            className={`text-2xl md:text-3xl font-extrabold transition-all duration-300 ${isScrolled ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400' : 'text-white'}`}
            onClick={() => setIsDropdownOpen(false)}
          >
            Sathish R
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={`hidden md:flex flex-row items-center gap-8 ${isScrolled ? 'text-slate-100' : 'text-white'}`}>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                smooth
                to={`#${item.toLowerCase()}`}
                className="relative py-2 px-1 hover:text-blue-600 transition-colors group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden flex p-2 rounded-xl transition-colors ${isScrolled ? 'bg-slate-800 text-white' : 'bg-white/20 text-white'}`}
          onClick={handleDropdownToggle}
          aria-label="Toggle menu"
          aria-expanded={isDropdownOpen}
        >
          {isDropdownOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="navbar-dropdown absolute top-full right-4 left-4 mt-2 md:hidden bg-slate-900 shadow-2xl rounded-2xl border border-slate-800 overflow-hidden animate-in fade-in zoom-in duration-200">
            <ul className="flex flex-col p-4 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    smooth
                    to={`#${item.toLowerCase()}`}
                    className="block py-3 px-6 text-slate-100 hover:text-blue-400 hover:bg-slate-800 rounded-xl transition-all duration-200 font-bold"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;