import type { NextPage } from "next";
import Link from "next/link";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
const FreeResources: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-8 flex flex-col items-center">
        <img
          className="object-cover w-36 h-36 rounded-full"
          src="/heroImg.jpg"
        ></img>
        <p className="text-sm text-center text-neutral-50 mt-1">
          Trevor Montgomery
        </p>
        <p className=" text-sm text-center text-neutral-50 mt-1">
          Online Health & Fitness Coach
        </p>
        <p className="text-sm text-center text-neutral-50 mt-1">
          Helpling you build muscle, lose body fat, & gain confidence
        </p>
        <Link href="/">
          <a className="text-green-500 text-sm hover:text-green-700 my-4">
            www.tmontfitness.com
          </a>
        </Link>
      </div>
      <div className="text-center">
        <Link href="/#freeWorkout">
          <a className="animate-fade-in-down mx-auto block my-4 rounded bg-gradient-to-r from-green-500 to-green-700 max-w-xs md:max-w-xl py-4 px-4 md:text-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-green-900 hover:text-black text-neutral-700">
            Free Full Body Workout Blueprint
          </a>
        </Link>
        <Link href="/MacroCalculator">
          <a className="animate-fade-in-down mx-auto block my-4 rounded bg-gradient-to-r from-green-500 to-green-700 max-w-xs md:max-w-xl py-4 px-4 md:text-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-green-900 hover:text-black text-neutral-700">
            Calculate Your Macros For Free
          </a>
        </Link>
        <Link href="https://discord.gg/gmPuTXUw">
          <a
            target="_blank"
            className="animate-fade-in-down mx-auto block my-4 rounded bg-gradient-to-r from-green-500 to-green-700 max-w-xs md:max-w-xl py-4 px-4 md:text-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-green-900 hover:text-black text-neutral-700"
          >
            Join Free Discord Community
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FreeResources;
