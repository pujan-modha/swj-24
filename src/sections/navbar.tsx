import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/sheet";

const DURATION = 0.2;
const STAGGER = 0.02;

import { ReactNode } from "react";

const FlipLink = ({ children, href }: { children: ReactNode, href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="block overflow-hidden hover:text-brand duration-300 relative text-xl font-semibold uppercase whitespace-nowrap"
      style={{
        lineHeight: 1,
      }}
    >
      <div>
        {String(children ?? "").split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {String(children ?? "").split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full border-b backdrop-blur bg-background/50 border-current-line h-20">
      <div className="flex flex-wrap justify-between items-center p-4 mx-auto max-w-7xl">
        <a href="/" className="flex items-center space-x-0">
          <img
            src="/src/assets/logo-main.png"
            alt="logo"
            className="w-32 h-auto mr-auto"
          />
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0">
          <Button className="hidden lg:block hover:text-brand hover:bg-brand/10 rounded-full border-2 backdrop-blur-sm bg-brand text-background border-brand duration-300">
            <span>Register</span>
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </span>
          </Button>

          {/* Mobile Navigation */}
          <div className="md:hidden my-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                variant={"link"}
                  onClick={toggleMenu}
                  type="button"
                  className="md:hidden p-0 m-0 text-foreground"
                >
                  <span className="sr-only">Open main menu</span>
                  <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="border-none bg-background w-screen p-4"
              >
                <div className="border-b border-current-line pb-4">
                  <a
                    href="/"
                    className="cursor-pointer flex items-center gap-1 my-auto"
                  >
                    <img
                      src="/src/assets/logo-main.png"
                      alt="logo"
                      className="w-32 h-auto mr-auto"
                    />
                  </a>
                </div>
                <div>
                  <SheetClose asChild>
                    <nav className="flex h-full flex-col gap-6 py-8 text-foreground">
                      <SheetClose asChild>
                        <FlipLink href="#">Overview</FlipLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <FlipLink href="#">Sponsors</FlipLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <FlipLink href="#">Timeline</FlipLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <FlipLink href="#">Mentors</FlipLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <FlipLink href="#">Team</FlipLink>
                      </SheetClose>
                    </nav>
                  </SheetClose>
                  <div>
                    <Button className="w-full hover:text-brand hover:bg-brand/10 rounded-full border-2 backdrop-blur-sm bg-brand text-background border-brand duration-300">
                      <span>Register</span>
                      <span>
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      </span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:w-auto md:order-1">
          <section className="flex gap-8 place-content-center px-8 md:px-0">
            <FlipLink href="#">Overview</FlipLink>
            <FlipLink href="#">Sponsors</FlipLink>
            <FlipLink href="#">Timeline</FlipLink>
            <FlipLink href="#">Mentors</FlipLink>
            <FlipLink href="#">Team</FlipLink>
          </section>
        </div>
      </div>
    </nav>
  );
}