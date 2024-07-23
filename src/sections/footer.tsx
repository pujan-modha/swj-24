const Footer = () => {
  return (
    <>
      <div>
        <footer className="pb-4">
          <div className="w-full mx-auto">
            <hr className="mb-6 border-current-line sm:mx-auto lg:mb-4" />
            <div className="sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto p-4">
              <a
                href="/"
                className="flex items-center align-middle text-center justify-center"
              >
                <img
                  src="/logo-main.png"
                  alt="SWJ 24"
                  className="w-[128px]"
                />
              </a>
              <ul className="flex flex-wrap items-center mt-4 lg:mt-0 text-sm text-center justify-center font-semibold text-brand sm:mb-0">
                <li className="hover:text-foreground duration-300">
                  <a
                    href="mailto:ichack2023@gmail.com"
                    className="mr-4  md:mr-6 "
                  >
                    E-MAIL
                  </a>
                </li>
                <li className="hover:text-foreground duration-300">
                  <a
                    href="https://www.instagram.com/ieee_ic_hack/"
                    className="mr-4  md:mr-6 "
                  >
                    INSTAGRAM
                  </a>
                </li>
                <li className="hover:text-foreground duration-300">
                  <a
                    href="https://www.linkedin.com/company/ieeeindiacouncil/"
                    className="mr-4  md:mr-6"
                  >
                    LINKEDIN
                  </a>
                </li>
                <li className="hover:text-foreground duration-300">
                  <a
                    href="https://www.facebook.com/ieeeindiacouncil/"
                    className=""
                  >
                    FACEBOOK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
