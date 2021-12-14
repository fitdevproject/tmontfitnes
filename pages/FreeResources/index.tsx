import type { NextPage } from "next";
import Link from "next/link";
const FreeResources: NextPage = () => {
  return (
    <div>
      <h1 className="block mx-auto my-8 text-center text-gray-500 text-3xl">
        Free Resources
      </h1>
      <div className=" my-16 text-center">
        <Link href="https://tmontfitness.gumroad.com/l/UOSFf?_ga=2.212175188.1582768222.1639430290-841510740.1630159065&_gl=1*1eu84co*_ga*ODQxNTEwNzQwLjE2MzAxNTkwNjU.*_ga_6LJN6D94N6*MTYzOTQzMDI4OS40LjEuMTYzOTQzMDgxNy4w">
          <a
            className="mx-auto block my-4 rounded bg-gray-100 max-w-xs md:max-w-xl py-4 px-4 text-sm md:text-lg hover:bg-gray-200 hover:text-gray-900 text-gray-500"
            target="_blank"
          >
            Free Full Body Workout Blueprint
          </a>
        </Link>
        <Link href="https://twitter.com/tmontfitness">
          <a
            className="mx-auto block my-4 rounded bg-gray-100 max-w-xs md:max-w-xl py-4 px-4 text-sm md:text-lg hover:bg-gray-200 hover:text-gray-900 text-gray-500"
            target="_blank"
          >
            Follow On Twitter
          </a>
        </Link>

        <Link href="https://instagramß.com/tmontfitness">
          <a
            className="mx-auto block my-4 rounded bg-gray-100 max-w-xs md:max-w-xl py-4 px-4 text-sm md:text-lg hover:bg-gray-200 hover:text-gray-900 text-gray-500"
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
