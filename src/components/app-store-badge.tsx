import { APP_STORE_URL } from "@/data/site";
import { cn } from "@/lib/utils";

export function AppStoreBadge({
  className,
  height = 44,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download NEVER on the App Store"
      className={cn("inline-flex shrink-0 transition-opacity hover:opacity-80", className)}
    >
      <img
        src="/app/download-on-the-app-store.svg"
        alt="Download on the App Store"
        width={Math.round(height * (284.3 / 95))}
        height={height}
        className="outline-none"
        style={{ height, width: "auto" }}
      />
    </a>
  );
}
