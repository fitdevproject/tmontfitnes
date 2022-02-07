import type { NextPage } from "next";
import Link from "next/link";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
const Links: NextPage = () => {
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
          Build Muscle - Lose Body Fat - Gain Confidence
        </p>
        <Link href="/">
          <a className="text-tmontGreen-100 text-sm hover:scale-110 my-4">
            www.tmontfitness.com
          </a>
        </Link>
      </div>
      <div className="text-center">
        <Link href="/#freeWorkout">
          <a className="animate-fade-in-down mx-auto block my-4 rounded  max-w-xs md:max-w-xl py-4 px-4 md:text-lg bg-tmontGreen-100 hover:scale-110">
            Free Full Body Workout Blueprint
          </a>
        </Link>
        <Link href="/MacroCalculator">
          <a className="animate-fade-in-down mx-auto block my-4 rounded bg-gradient-to-r max-w-xs md:max-w-xl py-4 px-4 md:text-lg bg-tmontGreen-100 hover:scale-110">
            Calculate Your Macros For Free
          </a>
        </Link>
        <Link href="https://discord.gg/gmPuTXUw">
          <a
            target="_blank"
            className="animate-fade-in-down mx-auto block mt-4 mb-12 rounded bg-gradient-to-r  max-w-xs md:max-w-xl py-4 px-4 md:text-lg bg-tmontGreen-100 hover:scale-110"
          >
            Join Free Discord Community
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Links;
