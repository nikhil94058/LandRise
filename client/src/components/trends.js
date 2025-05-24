import * as React from "react";
import 'tailwindcss/tailwind.css';

function MyComponent() {
  // Define an array containing the data for each locality
  const localities = [
    { hashtag: "#DLF CYBERCITY", tweets: "456K" },
    { hashtag: "#DWARKA EXPRESSWAY", tweets: "456K" },
    { hashtag: "#KMP EXPRESSWAY", tweets: "456K" },
    { hashtag: "#JEVAR AIRPORT", tweets: "456K" },
    { hashtag: "#AYODHYA", tweets: "456K" },
    { hashtag: "#MUMBAI EXPRESSWAY", tweets: "456K" }
  ];

  return (
    <div className="flex flex-col py-3.5 rounded-xl bg-slate-50 max-w-[280px] text-zinc-500 absolute top-[100px] right-[20px]">
      <div className="flex gap-5 items-start self-center px-5 py-px w-full text-xl font-black text-black max-w-[280px]">
        <div className="flex-auto mt-3">Trending Localities</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2f82c15dd0349654a71f9954e04c018d3e61cc7cc9d541ae9c0d9802ffdab6?"
          className="shrink-0 w-6 aspect-square"
        />
      </div>
      {/* Map over the localities array */}
      {localities.map((locality, index) => (
        <div key={index}>
          <div className="flex flex-col px-4 mt-5 w-full">
            <div className="flex gap-5 justify-between w-full text-xs">
              <div className="flex gap-0 self-start">
                <div>{index + 1}.</div>
                <div> Trending</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/75578caf947ac30a62ee457d4dad39c950ea31bdde7d70f5e520bb7c992f42f4?"
                className="shrink-0 w-4 aspect-square"
              />
            </div>
            <div className="mt-1.5 text-base font-bold text-zinc-800">
              {locality.hashtag}
            </div>
            <div className="flex gap-0 mt-2 text-sm">
              <div>{locality.tweets}</div>
              <div> Tweets</div>
            </div>
          </div>
          <div className="mt-4 w-full border border-solid bg-black bg-opacity-10 border-black border-opacity-10 min-h-[1px]" />
        </div>
      ))}
      <div className="self-center mt-3 text-sm font-medium text-sky-500">
        Show more
      </div>
    </div>
  );
}

export default MyComponent;
