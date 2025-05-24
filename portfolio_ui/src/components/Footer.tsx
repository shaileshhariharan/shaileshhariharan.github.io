const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © {currentYear} Shailesh. All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Designed & Built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
