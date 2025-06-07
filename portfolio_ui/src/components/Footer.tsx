const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200  py-5 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Shailesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
