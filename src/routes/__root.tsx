import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-chrome";
import { SITE } from "@/data/site";
import { asset } from "@/lib/utils";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} — Break free. Stay free.` },
      { name: "description", content: SITE.description },
      { name: "keywords", content: SITE.keywords },
      { name: "theme-color", content: "#F4F1EA" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "NEVER" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: asset("/favicon.png") },
      { rel: "icon", type: "image/png", sizes: "32x32", href: asset("/favicon-32.png") },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: asset("/__grok/manifest.webmanifest") },
      { rel: "apple-touch-icon", href: asset("/apple-touch-icon.png") },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Instrument+Serif:ital@0;1&display=swap",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-5 py-24 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">404</p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight">This page is gone.</h1>
      <p className="mt-3 text-ink-soft">
        The link may be old. The recovery guides are still here.
      </p>
      <Link to="/" className="mt-8 text-sm font-semibold text-accent underline-offset-4 hover:underline">
        Back to NEVER
      </Link>
    </main>
  );
}
