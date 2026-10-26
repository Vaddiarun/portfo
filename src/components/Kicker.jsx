/** Numbered section label with a rule running to the edge. */
export default function Kicker({ n, children, className = 'mb-11' }) {
  return (
    <div className={`flex items-baseline gap-4 ${className}`}>
      <span className="kicker">{n} — {children}</span>
      <span className="h-px flex-1 bg-divider" />
    </div>
  );
}
