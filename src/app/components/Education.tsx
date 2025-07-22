'use client'

const years = Array.from({ length: 13 }, (_, i) => 2010 + i); // fewer items for half-circle

const Education: React.FC = () => {
 

  return (
    <section className="py-10 px-2 sm:px-4 max-w-6xl mx-auto text-center">
      <h1 className="text-2xl font-semibold mb-10">My Education Details</h1>

      <div className="relative w-full max-w-3xl mx-auto">
        <div
          className="relative aspect-[2/1] mx-auto transition-transform duration-700 ease-in-out"
          style={{
            transform: `rotate(${360}deg)`,
          }}
        >
          <ul
            className="relative w-full h-full m-0 p-0 list-none"
            style={{ ['--items']: years.length } as React.CSSProperties}
          >
            {years.map((year, index) => {
              const angle = (180 / (years.length - 1)) * index;
              const radius = 150;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              return (
                <li
                  key={year}
                  className="absolute w-36 h-36 rounded-xl bg-white shadow-md p-4 transition-all duration-500 ease-in-out cursor-pointer opacity-70 hover:opacity-100 hover:scale-105"
                  style={{
                    left: `calc(50% + ${x}px - 4.5rem)`,
                    top: `calc(100% - ${y}px - 4.5rem)`,
                    transform: `rotate(${-360}deg)`, // keep items upright
                  }}
                >
                  <label className="block font-bold text-blue-600 mb-2">
                    {year}
                  </label>
                  <h2 className="text-lg font-semibold">{year}</h2>
                  <p className="text-xs text-gray-600 mt-1">
                    Short description here.
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
