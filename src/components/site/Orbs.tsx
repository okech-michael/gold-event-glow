export function Orbs({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          top: "-10%",
          left: "-10%",
          background: "var(--gold)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          bottom: "-20%",
          right: "-15%",
          background: "var(--gold-soft)",
          animationDelay: "4s",
          opacity: 0.25,
        }}
      />
    </div>
  );
}
