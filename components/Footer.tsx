const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex justify-center">
        <div className="py-5 px-2 text-gray-500 text-sm">
          Copyright &copy; {new Date().getFullYear()} TMONT FITNESS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
