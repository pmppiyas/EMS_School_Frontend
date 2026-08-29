'use client';

import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
  Home,
  LayoutDashboard,
  Info,
  Image as ImageIcon,
  PhoneCall,
  LogIn,
  GraduationCap,
  UserCheck,
  Sun,
  Moon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/hooks/useUser';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close on route / pathname change
  useEffect(() => {
    setOpenNavbar(false);
  }, [pathname]);

  // Close on desktop resize & Escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNavbar(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenNavbar(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Gallery', href: '/gallery', icon: ImageIcon },
    { name: 'Contact', href: '/contact', icon: PhoneCall },
  ];

  const isLoggedIn = user && user.success;

  return (
    <>
      {/* Outside Click / Backdrop Overlay */}
      {openNavbar && (
        <div
          onClick={() => setOpenNavbar(false)}
          className="fixed inset-0 z-40 bg-blue-950/30 backdrop-blur-xs lg:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 inset-x-0 z-50 pt-2 pb-2 sm:pt-3 sm:pb-3 px-3 sm:px-6 pointer-events-none transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-xs'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full pointer-events-auto transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800 shadow-[0_12px_40px_-5px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_40px_-5px_rgba(0,0,0,0.5)]'
              : 'bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white backdrop-blur-xl border border-white/90 dark:border-slate-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
          }`}
        >
          {/* Logo Section */}
          <Link
            href="/"
            onClick={() => setOpenNavbar(false)}
            className="group flex items-center gap-2.5 transition-transform duration-200 hover:opacity-95"
          >
            <div className="relative flex h-9.5 w-9.5 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 text-white shadow-md shadow-blue-500/25 ring-2 ring-white/20 group-hover:scale-105 transition-all">
              <GraduationCap className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                EMS School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs lg:text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/30 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-300 hover:bg-white/90 dark:hover:bg-slate-700/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side CTA Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Theme Switcher Toggle */}
            {mounted && (
              <button
                onClick={() =>
                  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                }
                title={resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                aria-label="Toggle Theme"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 animate-in zoom-in-50 duration-300" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 animate-in zoom-in-50 duration-300" />
                )}
              </button>
            )}

            {isLoggedIn ? (
              <Button
                size="sm"
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full px-5 h-9.5 shadow-md shadow-blue-500/25"
              >
                <Link href="/dashboard" className="flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
              </Button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-xs lg:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-300 px-3 py-1.5 transition-colors"
                >
                  Login
                </Link>

                <Button
                  size="sm"
                  asChild
                  className="relative group overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:via-indigo-700 hover:to-sky-700 text-white text-xs lg:text-sm font-bold px-5 h-9.5 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                >
                  <Link href="/contact" className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-200 group-hover:rotate-12 transition-transform" />
                    <span>Contact</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu & Action Toggle */}
          <div className="lg:hidden flex items-center gap-1.5">
            {mounted && (
              <button
                onClick={() =>
                  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                }
                title="Toggle Theme"
                aria-label="Toggle Theme"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                )}
              </button>
            )}

            {isLoggedIn ? (
              <Button
                size="sm"
                asChild
                className="bg-blue-600 text-white text-[11px] font-bold h-8 px-3 rounded-full"
              >
                <Link href="/dashboard" onClick={() => setOpenNavbar(false)}>
                  Dashboard
                </Link>
              </Button>
            ) : (
              <Button
                size="sm"
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold h-8 px-3.5 rounded-full shadow-xs"
              >
                <Link href="/login" onClick={() => setOpenNavbar(false)}>
                  Login
                </Link>
              </Button>
            )}

            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              aria-label="Toggle navigation"
              className="p-1.5 rounded-full text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            >
              {openNavbar ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 pointer-events-auto max-w-7xl mx-auto ${
            openNavbar ? 'max-h-[500px] mt-2 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-4 shadow-xl border border-slate-200/80 dark:border-slate-800 space-y-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpenNavbar(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent
                      size={18}
                      className={isActive ? 'text-blue-600 dark:text-sky-400' : 'text-slate-400 dark:text-slate-500'}
                    />
                    <span>{link.name}</span>
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-sky-400" />
                  )}
                </Link>
              );
            })}

            <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />

            {/* Mobile Bottom Actions */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {isLoggedIn ? (
                <Button
                  size="sm"
                  asChild
                  className="col-span-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold"
                >
                  <Link
                    href="/dashboard"
                    onClick={() => setOpenNavbar(false)}
                    className="flex items-center justify-center gap-1.5"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Go to Dashboard</span>
                  </Link>
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full rounded-2xl border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold"
                  >
                    <Link
                      href="/login"
                      onClick={() => setOpenNavbar(false)}
                      className="flex items-center justify-center gap-1.5"
                    >
                      <LogIn className="w-3.5 h-3.5" />
                      <span>Login</span>
                    </Link>
                  </Button>

                  <Button
                    size="sm"
                    asChild
                    className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white font-bold shadow-md shadow-blue-500/25"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setOpenNavbar(false)}
                      className="flex items-center justify-center gap-1.5"
                    >
                      <span>Contact</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
