import React from 'react';
import HeroImage from '../assets/mike-von-YsiSAp3ccvk-unsplash.jpg';

function Hero() {
  return (
    <div className="relative flex">
      <div className="self-end max-w-[10rem]">
        <h1 className="text-3xl font-bold underline">
          FASHION IS THE SPIRIT OF LIFE
        </h1>
      </div>

      <img
        className="self-center w-1/4 mx-auto rounded-xl"
        src={HeroImage}
        alt=""
      />

      <div className="flex flex-col justify-between items-center max-w-[10rem]">
        <h1 className="text-lg border-b border-b-slate-700">
          We provide all styles of fashion products and latest trends
        </h1>

        <p
          className="tracking-tighter cursor-default hover:animate-bounce"
          style={{
            writingMode: 'vertical-lr',
            textOrientation: 'upright',
          }}
        >
          scroll↓
        </p>
      </div>

      <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5">
        <h1 className="self-start text-8xl font-bold text-slate-900">
          FRESH
        </h1>
        <h1
          className="self-center text-8xl font-bold text-stone-300"
          style={{
            WebkitTextStroke: '2px rgb(15 23 42)',
          }}
        >
          2022
        </h1>
        <h1 className="self-end text-8xl font-bold text-slate-900">
          LOOK
        </h1>
      </div>
    </div>
  );
}

export default Hero;
