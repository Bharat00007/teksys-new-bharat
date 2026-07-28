import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/teksys1.png";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const navbarLabels: Record<string, string> = {
  "/training": "Training Module & Certification",
  "/semiconductor-skill-training": "Academy, Industry & Trainee Partner MoU",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-xl"
          : "bg-background",
      )}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-col leading-none" aria-label={SITE.name}>
          <img src={logo} alt="TEKSYS logo" className="h-10 w-30 object-contain" />
          <span className="mt-1 text-[10px] font-semibold tracking-[0.18em] text-primary/80">
            INNOVATE | TRAIN | TRANSFORM
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center justify-center gap-4 xl:flex" aria-label="Primary">
          {NAV.map((item) => {
            const isServices = item.label === "Services";
            const label = navbarLabels[item.to] || item.label;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => `group relative inline-flex items-center gap-1 whitespace-nowrap py-2 text-[15px] font-medium transition-colors ${isActive ? "!text-primary" : "text-foreground/80 hover:text-primary"}`}
              >
                {label}
                {isServices && <ChevronDown className="h-3.5 w-3.5" />}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-center scale-x-0 bg-primary transition-transform group-[.active]:scale-x-100 group-aria-[current=page]:scale-x-100" />
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-indigo-glow"
          >
            Get In Touch
          </Link>
        </div>

        <button
          type="button"
          className="col-start-3 inline-flex items-center justify-center rounded-md p-2 text-foreground xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border/60 bg-background xl:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent"
                >
                  {navbarLabels[item.to] || item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md bg-primary px-3 py-2 text-center text-base font-semibold text-primary-foreground"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
