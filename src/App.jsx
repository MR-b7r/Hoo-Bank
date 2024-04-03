import styles from "./style";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
  UpButton,
} from "./components";
import { useEffect, useState } from "react";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.scrollY > 800 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisiblity);

    return () =>
      window.removeEventListener("scroll", handleScrollButtonVisiblity);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-primary  w-full relative">
      {/* click to move to the top of screen */}
      {showButton && (
        <div
          className="fixed bottom-[5%] right-[5%] p-3 bg-blue-gradient rounded-[14px] z-50 cursor-pointer"
          onClick={scrollToTop}
        >
          <UpButton />
        </div>
      )}
      {/* navbar */}
      <div
        className={`${styles.paddingX} ${
          isScrolled ? "bg-black-gradient-2-opacity" : "bg-transparent"
        } sticky z-20 top-0 block w-full `}
      >
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      {/* hero section */}
      <div className={`${styles.flexStart} bg-primary `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* other sections */}
      <div
        className={`${styles.flexStart} ${styles.paddingX} bg-primary overflow-hidden`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
