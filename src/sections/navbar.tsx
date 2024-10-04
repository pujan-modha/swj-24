import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/sheet";

const DURATION = 0.2;
const STAGGER = 0.03;

const FlipLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="block overflow-hidden hover:text-brand duration-300 relative text-lg font-semibold uppercase whitespace-nowrap"
      style={{
        lineHeight: 0.8,
      }}
    >
      <div>
        {String(children ?? "")
          .split("")
          .map((l, i) => (
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
        {String(children ?? "")
          .split("")
          .map((l, i) => (
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
  // const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full border-b backdrop-blur bg-background/50 border-current-line h-20">
      <div className="flex flex-wrap justify-between items-center p-4 mx-auto max-w-7xl">
        <a href="/" className="flex items-center space-x-0">
          <img
            src="/logo-main.png"
            alt="logo"
            className="w-32 h-auto mr-auto"
          />
        </a>
        <div className="flex space-x-3 lg:order-1 lg:space-x-0">
          {/* <Button className="hidden lg:block hover:text-brand hover:bg-brand/10 rounded-full border-2 backdrop-blur-sm bg-brand text-background border-brand duration-300">
            <a href="/register">Register</a>
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </span>
          </Button> */}

          {/* Mobile Navigation */}
          <div className="lg:hidden my-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant={"link"}
                  onClick={toggleMenu}
                  type="button"
                  className="lg:hidden p-0 m-0 text-foreground"
                >
                  <span className="sr-only">Open main menu</span>
                  <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="border-none bg-background w-screen p-4"
              >
                <SheetTitle />
                <div className="border-b border-current-line pb-4">
                  <a
                    href="/"
                    className="cursor-pointer flex items-center gap-1 my-auto"
                  >
                    <img
                      src="/logo-main.png"
                      alt="logo"
                      className="w-32 h-auto mr-auto"
                    />
                  </a>
                </div>
                <div>
                  <SheetClose asChild>
                    <nav className="flex h-full flex-col gap-6 py-8 text-foreground">
                      <SheetClose asChild>
                        <FlipLink href="#overview">Overview</FlipLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <FlipLink href="#sponsors">Sponsors</FlipLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <FlipLink href="#timeline">Timeline</FlipLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <FlipLink href="/mentor-booking">Mentors</FlipLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <FlipLink href="/team">Team</FlipLink>
                      </SheetClose>
                      {/* <SheetClose asChild>
                        <FlipLink href="/campus-ambassador">
                          Campus-Ambassador
                        </FlipLink>
                      </SheetClose> */}
                    </nav>
                  </SheetClose>
                  {/* <div className="flex flex-col gap-4">
                    <Button className="w-full hover:text-brand hover:bg-brand/10 rounded-full border-2 backdrop-blur-sm bg-brand text-background border-brand duration-300">
                      <a href="/register">In-House</a>
                      <span>
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      </span>
                    </Button>
                    <Button className="w-full hover:text-brand hover:bg-brand/10 rounded-full border-2 backdrop-blur-sm bg-brand text-background border-brand duration-300">
                      <a href="https://unstop.com/competitions/startup-weekend-jaipur-24-manipal-university-jaipur-1161081">
                        Out-House
                      </a>
                      <span>
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      </span>
                    </Button>
                  </div> */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:w-auto lg:order-1">
          <section className="flex gap-8 place-content-center px-8 lg:px-0">
            <FlipLink href="#overview">Overview</FlipLink>
            <FlipLink href="#sponsors">Sponsors</FlipLink>
            <FlipLink href="#timeline">Timeline</FlipLink>
            <FlipLink href="/mentor-booking">Mentors</FlipLink>
            <FlipLink href="/team">Team</FlipLink>
            {/* <FlipLink href="/campus-ambassador">Campus-Ambassador</FlipLink> */}
          </section>
        </div>
      </div>
    </nav>
  );
}
