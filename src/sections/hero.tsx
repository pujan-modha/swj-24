import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 items-center gap-4 lg:gap-8 max-w-7xl m-auto">
      <div className="mt-24 lg:my-auto">
        <img
          src="/google-for-startups.svg"
          alt="Google for Startups Logo"
          className="w-48 h-auto pb-2"
        />
        <img
          src="/logo-main.png"
          alt="Startup Weekend Jaipur Logo"
          className="w-96 h-auto"
        />
        <p className="text-base md:text-lg text-foreground my-4 md:my-6">
          {`"We built a company in 54 hours, what did you do this weekend?"`}
        </p>
        <Button className="text-brand bg-brand/10 rounded-full border-2 backdrop-blur-sm hover:bg-brand hover:text-background border-brand duration-300">
          <span>Register</span>
          <span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </span>
        </Button>
      </div>
      <div>
        <ShuffleGrid />
      </div>
    </section>
  );
}

const shuffle = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/images/img1.jpg",
  },
  {
    id: 2,
    src: "/images/img2.jpg",
  },
  {
    id: 3,
    src: "/images/img3.jpg",
  },
  {
    id: 4,
    src: "/images/img4.jpg",
  },
  {
    id: 5,
    src: "/images/img5.jpg",
  },
  {
    id: 6,
    src: "/images/img6.jpg",
  },
  {
    id: 7,
    src: "/images/img7.jpg",
  },
  {
    id: 8,
    src: "/images/img8.jpg",
  },
  {
    id: 9,
    src: "/images/img9.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full aspect-square"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(() => generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 lg:h-[30rem] gap-1">
      {squares}
    </div>
  );
};
