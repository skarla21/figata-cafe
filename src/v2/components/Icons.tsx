export function LeafIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 42c0-14 12-26 20-30-2 16-10 28-20 30Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 42C24 28 12 16 4 12c2 16 10 28 20 30Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M24 42V16" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CupIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 16h20v12c0 6-4.5 10-10 10s-10-4-10-10V16Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M32 20h5a5 5 0 0 1 0 10h-5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 40h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function SmileIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 22v1M30 22v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M18 28c1.8 3 10.2 3 12 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClockIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 10v7l5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function PinIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 28s8-8.2 8-14a8 8 0 1 0-16 0c0 5.8 8 14 8 14Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="16" cy="14" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 7h4l1.5 5-2.5 1.5a12 12 0 0 0 5.5 5.5L20 16.5l5 1.5v4c0 1-1 2.5-3 2.5C13 24.5 7.5 19 7.5 10c0-2 1.5-3 2.5-3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FigBranch({ className = "h-36 w-44" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 140" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 120c40-10 70-40 90-78"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M70 96c18-22 8-40-8-46 22 2 36 22 22 48Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M108 52c-4-14 8-24 20-20-14 8-12 28-8 36-10-2-14-8-12-16Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M128 44c2-10 12-14 20-8-10 2-14 14-12 22-8-2-10-8-8-14Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M96 70c16-6 28 8 22 22-16 2-28-10-22-22Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
