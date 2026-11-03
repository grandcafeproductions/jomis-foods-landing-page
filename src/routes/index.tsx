import { createFileRoute } from "@tanstack/react-router";
import { Mail, RefreshCw } from "lucide-react";
import logo from "@/assets/jomis-logo.png.asset.json";
import productShot from "@/assets/banana-chips.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jomis Foods — Website Expired" },
      {
        name: "description",
        content:
          "The jomisfoods.com hosting has expired. Renew to continue. Contact your agent at info@grandcafeproductions.com.",
      },
      { property: "og:title", content: "Jomis Foods — Website Expired" },
      {
        property: "og:description",
        content:
          "jomisfoods.com has expired. Renew to continue — contact info@grandcafeproductions.com.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ExpiredNotice,
});

function ExpiredNotice() {
  const year = new Date().getFullYear();

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      {/* Warm brand glow behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 32rem at 50% -10%, var(--color-snack-yellow)/35, transparent 70%), radial-gradient(40rem 24rem at 100% 110%, var(--color-leaf-green)/18, transparent 70%)",
        }}
      />

      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
        <div className="relative w-full max-w-xl">
          {/* Floating product shot, decorative */}
          <img
            src={productShot.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-16 hidden w-56 rotate-6 opacity-90 mix-blend-multiply drop-shadow-xl lg:block"
          />

          <div className="relative rounded-4xl border border-border bg-card px-6 py-10 text-center shadow-[0_24px_60px_-24px_var(--color-foreground)] sm:px-12">
            <img
              src={logo.url}
              alt="Jomis — The Snacksperts"
              className="mx-auto w-56 max-w-full sm:w-64"
            />

            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground">
              <RefreshCw className="h-3.5 w-3.5" aria-hidden />
              Hosting expired
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              jomisfoods.com is expired
            </h1>

            <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
              This website is temporarily offline because its hosting has
              expired. Renew the hosting to continue.
            </p>

            <div className="mt-8 rounded-2xl border border-dashed border-primary/30 bg-secondary px-6 py-5">
              <p className="text-sm font-semibold text-foreground">
                Contact your agent to renew
              </p>
              <a
                href="mailto:info@grandcafeproductions.com?subject=Renewal%20request%20for%20jomisfoods.com"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                <Mail className="h-4 w-4" aria-hidden />
                info@grandcafeproductions.com
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Grandcafe Productions · Digital partner for Jomis Foods
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 pb-6 text-center text-xs text-muted-foreground">
        © {year} Jomis Foods · Reach into hearts · Managed by Grandcafe
        Productions
      </footer>
    </div>
  );
}
