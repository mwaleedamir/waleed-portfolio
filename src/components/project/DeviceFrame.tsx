import { cn } from "@/lib/utils";

/**
 * PhoneFrame — wraps portrait (9:16) mobile demos in a realistic phone shell
 * with notch and side buttons. Sized to feel like a real device.
 */
export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19] w-[260px] rounded-[2.5rem] border border-border bg-surface-2 p-2.5 shadow-2xl shadow-black/50",
        className
      )}
    >
      {/* Side buttons */}
      <span className="absolute -left-[3px] top-24 h-10 w-[3px] rounded-l bg-border" />
      <span className="absolute -left-[3px] top-40 h-16 w-[3px] rounded-l bg-border" />
      <span className="absolute -right-[3px] top-32 h-20 w-[3px] rounded-r bg-border" />

      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-bg">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}

/**
 * BrowserFrame — wraps landscape (16:9) web demos in a browser-chrome shell
 * with traffic-light buttons and a fake address bar.
 */
export function BrowserFrame({
  children,
  url = "yoursite.com",
  className,
}: {
  children: React.ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface-2 shadow-2xl shadow-black/50",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        <div className="ml-3 hidden flex-1 rounded-md bg-bg px-3 py-1 text-xs text-faint sm:block">
          {url}
        </div>
      </div>

      {/* Screen (16:9) */}
      <div className="relative aspect-video w-full overflow-hidden bg-bg">
        {children}
      </div>
    </div>
  );
}
