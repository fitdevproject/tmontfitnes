import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-neutral-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="flex mt-2">
          <Link href="https://twitter.com/tmontfitness">
            <a className="animate-fade-in-down mr-4" target="_blank">
              <IoLogoTwitter
                className="animate-wiggle"
                color="green"
                size={30}
              />
            </a>
          </Link>

          <Link href="https://instagram.com/tmontfitness">
            <a className="animate-fade-in-down " target="_blank">
              <IoLogoInstagram
                className="animate-wiggle"
                color="green"
                size={30}
              />
            </a>
          </Link>
        </div>
        <div className="py-3 px-2 text-neutral-50 text-sm">
          Copyright &copy; {new Date().getFullYear()} TMONT FITNESS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
