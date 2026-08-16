import { useRef } from 'react';
import { useCursorTilt } from '../hooks/useMotion';

const LABELS = ['Design', 'Engineering', 'Mobile', 'Web', 'Cloud', 'QA', 'DevOps', 'SaaS'];

const ORBITS = [
  { inset: '6%',  tilt: 'rotateX(74deg) rotateZ(12deg)',  dur: '22s', ring: 'rgba(182,130,53,.85)', dot: '#b68235', size: 7, reverse: false },
  { inset: '12%', tilt: 'rotateY(76deg) rotateX(8deg)',   dur: '34s', ring: 'rgba(232,98,42,.75)',  dot: '#e8622a', size: 6, reverse: true },
  { inset: '20%', tilt: 'rotateX(56deg) rotateZ(-38deg)', dur: '28s', ring: 'rgba(125,84,17,.7)',   dot: '#7d5411', size: 5, reverse: false },
  { inset: '28%', tilt: 'rotateY(52deg) rotateZ(24deg)',  dur: '44s', ring: 'rgba(32,31,29,.16)',   dot: 'rgba(32,31,29,.45)', size: 4, reverse: true },
];

export default function Orrery() {
  const scene = useRef(null);
  useCursorTilt(scene);

  return (
    <div className="relative aspect-square w-full max-w-[460px] justify-self-center [perspective:1100px]">
      <div className="absolute -inset-[18%] animate-glow rounded-full blur-[30px]"
           style={{ background: 'radial-gradient(circle at 42% 38%, rgba(232,98,42,.55), transparent 66%)' }} />
      <div className="absolute -inset-[12%] animate-glowB rounded-full blur-[34px]"
           style={{ background: 'radial-gradient(circle at 62% 66%, rgba(182,130,53,.62), transparent 64%)' }} />

      <div className="absolute inset-0 animate-drift [transform-style:preserve-3d]">
        <div ref={scene}
             className="absolute inset-0 transition-transform duration-700 ease-out [transform-style:preserve-3d]"
             style={{ transform: 'rotateX(10deg) rotateY(-8deg)' }}>

          <div className="absolute inset-0 rounded-full border border-divider" style={{ transform: 'translateZ(-40px)' }} />

          {ORBITS.map((o, i) => (
            <div key={i} className="absolute [transform-style:preserve-3d]"
                 style={{ inset: o.inset, transform: o.tilt }}>
              <div className="absolute inset-0 rounded-full animate-spin360"
                   style={{ border: `1.5px solid ${o.ring}`, animationDuration: o.dur, animationDirection: o.reverse ? 'reverse' : 'normal' }}>
                <span className="absolute left-1/2 rounded-full"
                      style={{ top: -o.size / 2, width: o.size, height: o.size, marginLeft: -o.size / 2,
                               background: o.dot, boxShadow: `0 0 ${o.size * 2.6}px ${o.dot}` }} />
              </div>
            </div>
          ))}

          <div className="absolute inset-[36%] animate-breathe rounded-full border border-accent/40" style={{ transform: 'translateZ(30px)' }} />

          <div className="absolute inset-0 grid place-items-center" style={{ transform: 'translateZ(70px)' }}>
            <div className="text-center">
              <div className="font-heading text-[26px] tracking-wide">Product</div>
              <div className="mx-auto my-2 h-px w-[34px] bg-accent" />
              <div className="text-[9.5px] uppercase tracking-[0.16em] text-ink/55">One team</div>
            </div>
          </div>

          <div className="absolute inset-0 animate-spin360 [container-type:size]"
               style={{ transform: 'translateZ(24px)', animationDuration: '120s' }}>
            {LABELS.map((label, i) => {
              const a = i * 45;
              return (
                <div key={label} className="absolute left-1/2 top-1/2 flex w-0 justify-center"
                     style={{ transform: `rotate(${a}deg) translate(43cqw)` }}>
                  <span className="block animate-spinRev whitespace-nowrap text-[9.5px] uppercase tracking-[0.16em] text-ink/60"
                        style={{ rotate: `-${a}deg`, animationDuration: '120s' }}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
