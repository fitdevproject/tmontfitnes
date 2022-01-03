import type { NextPage } from "next";
import Link from "next/link";
const FreeResources: NextPage = () => {
  return (
    <div>
      <h1 className="block mx-auto my-8 text-center text-neutral-50 text-3xl">
        Free Resources
      </h1>
      <div className=" my-16 text-center">
        <Link href="https://tmontfitness.gumroad.com/l/UOSFf?_ga=2.212175188.1582768222.1639430290-841510740.1630159065&_gl=1*1eu84co*_ga*ODQxNTEwNzQwLjE2MzAxNTkwNjU.*_ga_6LJN6D94N6*MTYzOTQzMDI4OS40LjEuMTYzOTQzMDgxNy4w">
          <a
            className="mx-auto block my-4 rounded bg-gradient-to-r from-green-500 to-green-700 max-w-xs md:max-w-xl py-4 px-4 text-sm md:text-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-green-900 hover:text-black text-neutral-700"
            target="_blank"
          >
            Free Full Body Workout Blueprint
          </a>
        </Link>
        <Link href="https://twitter.com/tmontfitness">
          <a
            className="mx-auto block my-4 rounded bg-gradient-to-r from-green-500 to-green-700  max-w-xs md:max-w-xl py-4 px-4 text-sm md:text-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-green-900 hover:text-black text-neutral-700"
            target="_blank"
          >
            Follow On Twitter
          </a>
        </Link>

        <Link href="https://instagram.com/tmontfitness">
          <a
            className="mx-auto block my-4 rounded bg-gradient-to-r from-green-500 to-green-700 max-w-xs md:max-w-xl py-4 px-4 text-sm md:text-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-green-900 hover:text-black text-neutral-700"
            target="_blank"
          >
            Follow On Instagram
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FreeResources;
