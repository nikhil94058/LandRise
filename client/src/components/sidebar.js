import * as React from "react";
import 'tailwindcss/tailwind.css';


const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center px-2.5 pt-6 pb-20 bg-yellow-400 bg-opacity-90 max-w-[77px] h-full">
      {/* Images */}
      <a href="#">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4cdd582600be5e833ebdce10006b742fe0d6987fc14898d893ad616ceddc0db?"
          className="w-full aspect-[0.98]"
        />
      </a>
      <a href="#">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c03918205596da09704e632f44f976db110ebfd127a8a4ea5e9913b406f4fbb1?"
          className="self-start mt-11 w-full aspect-[1.15] fill-black"
        />
      </a>
      <a href="#">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3505543c322d48df05fa623dcab882361ec40135310a889a564d5873a907c4ee?"
          className="mt-14 w-full aspect-[1.2]"
        />
      </a>
      <a href="#">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff17f098f9a5b69c5a0eec9cab8809c1f7d0648e80cf15152e0080a0cefdef15?"
          className="mt-11 w-full aspect-[1.19]"
        />
      </a>
      <a href="#">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0382068dad75bc2d3d0d90b16d9e260d3b3327d4540d4d0aa725ed3e7fd82550?"
          className="mt-8 w-full aspect-[1.11]"
        />
      </a>
      <a href="#">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1506c62e74bbc0cd62b4c5a4e268dfe417017f23cd547ae7eb9353765b260f48?"
          className="mt-11 w-full aspect-[0.98]"
        />
      </a>
    </div>
  );
}

export default Sidebar;
