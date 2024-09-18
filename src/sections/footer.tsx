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
                <img src="/logo-main.png" alt="SWJ 24" className="w-[128px]" />
              </a>
              <ul className="flex flex-wrap items-center mt-4 lg:mt-0 text-sm text-center justify-center font-semibold text-brand sm:mb-0 gap-4">
                <li className="hover:text-foreground duration-300">
                  <a
                    href="mailto:startupweekendjaipur@gmail.com"
                    className="text-center "
                  >
                    E-MAIL
                  </a>
                </li>
                <li className="hover:text-foreground duration-300">
                  <a
                    href="https://www.instagram.com/startupweekend_jaipur/"
                    className="text-center"
                  >
                    INSTAGRAM
                  </a>
                </li>
                <li className="hover:text-foreground duration-300">
                  <a
                    href="https://in.linkedin.com/company/techstars-startup-weekend-jaipur"
                    className="text-center"
                  >
                    LINKEDIN
                  </a>
                </li>
                {/* <li className="hover:text-foreground duration-300">
                  <a
                    href="https://www.facebook.com/ieeeindiacouncil/"
                    className=""
                  >
                    FACEBOOK
                  </a>
                </li> */}
              </ul>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Made with 💛 by{" "}
              <a href="/credits" className="text-brand underline">
                SWJ'24 Technical Team
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
