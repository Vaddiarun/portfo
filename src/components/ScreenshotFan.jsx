export default function ScreenshotFan({ shots, caption = 'Store listing screens — Google Play' }) {
  return (
    <div data-fan data-reveal className="mt-11 [perspective:1800px]">
      {/* Phones: swipeable row at a readable size. Wider screens: all four side by side, fanned. */}
      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 [scrollbar-width:none] [transform-style:preserve-3d]">
        {shots.map((s) => (
          <figure key={s.src}
                  className="plate m-0 w-[68%] shrink-0 snap-center shadow-sm transition-[transform,box-shadow] duration-500 ease-out sm:w-auto sm:min-w-0 sm:flex-1 sm:shrink sm:[transform:rotateY(-13deg)] hover:shadow-lg sm:hover:[transform:rotateY(0deg)_translateZ(70px)]">
            <img src={s.src} alt={s.alt} loading="lazy" className="block w-full" />
          </figure>
        ))}
      </div>
      <p className="mt-3.5 text-[11.5px] text-ink/55">
        {caption}<span className="sm:hidden"> · swipe for more</span>
      </p>
    </div>
  );
}
