import { team } from '../data/content';

const initials = (name) => name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

const Avatar = ({ children }) => (
  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-accent font-heading text-lg font-semibold text-accent-700">
    {children}
  </span>
);

export default function Team() {
  const rest = team.size - team.members.length;
  return (
    <div data-reveal className="mx-auto max-w-[1240px] px-6 pb-20 md:px-10">
      <div className="grid border-l border-t border-divider sm:grid-cols-2 lg:grid-cols-3">
        {team.members.map((m) => (
          <div key={m.name} className="flex items-center gap-4 border-b border-r border-divider px-6 py-5">
            <Avatar>{initials(m.name)}</Avatar>
            <div>
              <div className="font-heading text-xl font-semibold">{m.name}</div>
              <div className="text-[12.5px] text-ink/60">{m.role || team.role}</div>
            </div>
          </div>
        ))}
        {rest > 0 && (
          <div className="flex items-center gap-4 border-b border-r border-divider px-6 py-5">
            <Avatar>+{rest}</Avatar>
            <div>
              <div className="font-heading text-xl font-semibold">{rest} more engineers</div>
              <div className="text-[12.5px] text-ink/60">All full-stack, 4+ years each</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
