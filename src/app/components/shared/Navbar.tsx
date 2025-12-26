'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => setOpenNavbar((openNavbar) => !openNavbar);
  const closeNavbar = () => setOpenNavbar(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <Link
        href="/"
        className="duration-300 font-medium ease-linear px-3 hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/dashboard"
        className="duration-300 font-medium ease-linear px-3 hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/about"
        className="duration-300 font-medium ease-linear px-3 hover:text-primary"
      >
        About
      </Link>
      <Link
        href="/gallery"
        className="duration-300 font-medium ease-linear px-3 hover:text-primary"
      >
        Gallery
      </Link>
      <Link
        href="/contact"
        className="duration-300 font-medium ease-linear px-3 hover:text-primary"
      >
        Contact
      </Link>
    </>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 py-4 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <nav className="w-full flex justify-between gap-6 relative">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <Link href="/" className="relative flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden flex rounded-xl">
                <span className="absolute w-5 h-5 -top-1 -right-1 bg-primary rounded-md rotate-45" />
                <span className="absolute w-5 h-5 -bottom-1 -right-1 bg-primary/90 rounded-md rotate-45" />
                <span className="absolute w-5 h-5 -bottom-1 -left-1 bg-primary/80 rounded-md rotate-45" />
                <span className="absolute w-3 h-3 rounded-full bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="inline-flex text-2xl font-bold text-primary">
                EMS School
              </div>
            </Link>
          </div>

          <div
            onClick={closeNavbar}
            aria-hidden="true"
            className={`fixed inset-0 bg-black/60 backdrop-filter backdrop-blur-sm ${
              openNavbar ? 'flex lg:hidden' : 'hidden'
            }`}
          />

          <div
            className={`flex overflow-hidden duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-gray-900 lg:bg-transparent border-x border-x-gray-800 lg:border-x-0 ${
              openNavbar
                ? 'visible opacity-100 translate-y-0'
                : 'invisible opacity-0 translate-y-10 lg:visible lg:opacity-100 lg:translate-y-0'
            }`}
          >
            <ul className="border-t border-gray-800 lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-white w-full lg:justify-center lg:items-center">
              {navLinks}
            </ul>
            <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-800 lg:border-0 px-6 lg:px-0">
              <Link
                href="/login"
                className="flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-primary hover:after:opacity-100 hover:after:scale-[2.5] bg-primary border-transparent hover:border-primary/90"
              >
                <span className="relative z-10 text-white">Login</span>
              </Link>
            </div>
          </div>

          <div className="min-w-max flex items-center gap-x-3">
            <Button
              onClick={toggleNavbar}
              className="lg:hidden lg:invisible outline-none h-auto flex flex-col relative bg-primary hover:bg-transparent"
            >
              <span className="sr-only">toggle navbar</span>
              <span
                className={`w-6 h-0.5 rounded-full bg-background transition-transform duration-300 ease-linear ${
                  openNavbar ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 rounded-full bg-background origin-center mt-0.5 transition-all duration-300 ease-linear ${
                  openNavbar ? 'scale-x-0 opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 rounded-full bg-background mt-0.5 transition-all duration-300 ease-linear ${
                  openNavbar ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
