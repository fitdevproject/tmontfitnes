import type { NextPage } from "next";
import Newsletter from "../components/Newsletter";

const Home: NextPage = () => {
  return (
    <>
      <div id="freeWorkout">
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
