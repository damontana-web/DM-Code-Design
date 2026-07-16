import { useState } from "react";

interface AnnouncementBannerProps {
  title?: string;
  buttonLabel: string;
  href: string;
  avatarSrc: string;
  avatarAlt?: string;
  onDismiss?: () => void;
}

/** Dismissible bottom banner — dark glass pill, avatar, text, single CTA. Mirrors AnnouncementBanner.astro. */
export function AnnouncementBanner({
  title,
  buttonLabel,
  href,
  avatarSrc,
  avatarAlt = "David Montana",
  onDismiss,
}: AnnouncementBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-0 start-1/2 z-50 mx-auto w-full -translate-x-1/2 transform p-6 sm:max-w-2xl"
      role="region"
      aria-label="Informational Banner"
    >
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-neutral-900/80 p-2 ps-2 pe-3 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] backdrop-blur-md">
        <img
          src={avatarSrc}
          alt={avatarAlt}
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-blue-primary"
        />
        {title ? (
          <p className="grow text-pretty text-sm font-medium text-neutral-50 sm:text-base">{title}</p>
        ) : null}
        <a
          href={href}
          className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50"
        >
          {buttonLabel}
        </a>
        <button
          type="button"
          onClick={() => {
            setDismissed(true);
            onDismiss?.();
          }}
          className="shrink-0 rounded-full p-2 text-neutral-400 transition duration-300 hover:text-neutral-50 disabled:pointer-events-none disabled:opacity-50"
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="size-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
