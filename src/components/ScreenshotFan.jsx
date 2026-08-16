export default function ScreenshotFan({ shots, caption = 'Store listing screens — Google Play' }) {
  return (
    <div data-fan data-reveal className="mt-11 [perspective:1800px]">
      <div className="flex gap-3 sm:gap-5 [transform-style:preserve-3d]">
        {shots.map((s) => (
          <figure key={s.src}
                  className="plate m-0 min-w-0 flex-1 shadow-sm transition-[transform,box-shadow] duration-500 ease-out hover:shadow-lg hover:[transform:rotateY(0deg)_translateZ(70px)]"
                  style={{ transform: 'rotateY(-13deg)', transformOrigin: '50% 50%' }}>
            <img src={s.src} alt={s.alt} loading="lazy" className="block w-full" />
          </figure>
        ))}
      </div>
      <p className="mt-3.5 text-[11.5px] text-ink/55">{caption}</p>
    </div>
  );
}
