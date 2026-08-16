const Line = () => <div className="h-8 w-px bg-accent" />;

export default function Ecosystem() {
  return (
    <div data-reveal data-tilt="10" className="border-t border-divider pb-3 pt-14 [transform-style:preserve-3d]">
      <h4 className="mb-9 font-heading text-[15px] font-semibold uppercase tracking-[0.1em] text-ink/60">
        The GoHomeyy system
      </h4>
      <div className="flex flex-col items-center">
        <div className="border border-divider px-9 py-3.5 font-heading text-[17px] tracking-wide">Customer app</div>
        <Line />
        <div className="border border-accent px-12 py-4 font-heading text-[21px] tracking-wide text-accent-700">Platform backend</div>
        <Line />
        <div className="flex flex-wrap justify-center gap-4">
          {['Chefs', 'Orders', 'Users'].map((n) => (
            <div key={n} className="border border-divider px-7 py-3 text-xs uppercase tracking-[0.12em]">{n}</div>
          ))}
        </div>
        <Line />
        <div className="border border-divider px-9 py-3.5 font-heading text-[17px] tracking-wide">Chef / partner app</div>
        <Line />
        <div className="border border-divider px-9 py-3.5 font-heading text-[17px] tracking-wide">Operations &amp; delivery</div>
      </div>
    </div>
  );
}
