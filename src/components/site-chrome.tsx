import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { APP_STORE_URL, NAV, SITE } from "@/data/site";
import { AppStoreBadge } from "@/components/app-store-badge";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="NEVER home"
          onClick={() => setOpen(false)}
        >
          <img
            src="/app/logo-mark.png"
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-[9px] object-cover outline-none"
          />
          <span className="text-[17px] font-extrabold tracking-[0.18em] text-ink">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink-soft transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <AppStoreBadge height={40} />
        </div>

        <button
          type="button"
          className="relative z-50 grid size-11 place-items-center rounded-[12px] text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="rounded-[14px] px-3 py-3 text-base font-medium text-ink hover:bg-paper-2"
                onNavigate={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-5" onClick={() => setOpen(false)}>
              <AppStoreBadge height={48} />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({
  href,
  className,
  children,
  onNavigate,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
}) {
  if (href.startsWith("/#")) {
    const hash = href.slice(2);
    return (
      <Link to="/" hash={hash} className={className} onClick={onNavigate}>
        {children}
      </Link>
    );
  }

  return (
    <Link to={href as "/blog"} className={className} onClick={onNavigate}>
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="flex items-center gap-2.5 text-[17px] font-extrabold tracking-[0.18em]">
            <img
              src="/app/logo-mark.png"
              alt=""
              width={28}
              height={28}
              className="size-7 rounded-[8px] object-cover outline-none"
            />
            NEVER
          </p>
          <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-muted">
            A private companion for quitting compulsive porn use. Streak, urge
            tools, coach.
          </p>
          <div className="mt-5">
            <AppStoreBadge height={44} />
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            Product
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/" hash="features" className="text-ink-soft hover:text-ink">
                Features
              </Link>
            </li>
            <li>
              <Link to="/" hash="tools" className="text-ink-soft hover:text-ink">
                Tools
              </Link>
            </li>
            <li>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft hover:text-ink"
              >
                App Store
              </a>
            </li>
            <li>
              <Link to="/science" className="text-ink-soft hover:text-ink">
                How rewiring works
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            Resources
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/blog" className="text-ink-soft hover:text-ink">
                Recovery blog
              </Link>
            </li>
            <li>
              <Link to="/" hash="faq" className="text-ink-soft hover:text-ink">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/" hash="stories" className="text-ink-soft hover:text-ink">
                Stories
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            Legal
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/privacy" className="text-ink-soft hover:text-ink">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-ink-soft hover:text-ink">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} NEVER. Built for people who want their evenings back.</p>
          <p>Not medical advice. If you are in crisis, seek local professional help.</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
