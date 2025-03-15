import React, { useState, useEffect } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
function Callbutton() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShow(true);
      } else {
        // Scrolling up
        setShow(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          className="bg-green-400 text-white   shadow-md w-full flex justify-center items-center gap-2  text-lg font-semibold"
          onClick={() => setShow(true)}
        >
          <IoCallSharp />{" "}
          <span className="mukta_mahee"> Call Now : 91 67890-09876</span>
        </button>
      </div>
    </>
  );
}

export default Callbutton;
