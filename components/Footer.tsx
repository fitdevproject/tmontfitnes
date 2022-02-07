import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-tmontSecondaryGray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h1 className="text-neutral-50 mt-2 text-sm">Follow On Social</h1>
        <div className="flex mt-2">
          <Link href="https://twitter.com/tmontfitness">
            <a className="animate-wiggle mr-4" target="_blank">
              <IoLogoTwitter
                className="hover:scale-110 text-tmontGreen-100"
                size={30}
              />
            </a>
          </Link>

          <Link href="https://instagram.com/tmontfitness">
            <a className="animate-wiggle" target="_blank">
              <IoLogoInstagram
                className="hover:scale-110 text-tmontGreen-100"
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
