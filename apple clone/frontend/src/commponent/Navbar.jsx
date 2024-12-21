import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole, faSearch, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [drop, setDrop] = React.useState(0);

  const onRemove = () => {
    setDrop(0);
  };

  const onStore = () => {
    setDrop("Store");
  };

  return (
    <motion.div
      onMouseLeave={onRemove}
      className="bg-navbar px-20 py-2 shadow-md"
    >
      {/* Navbar Items */}
      <ul className="flex justify-between text-gray-300 font-sans text-[13px]">
        <li className="hover:text-white cursor-pointer">
          <FontAwesomeIcon icon={faAppleWhole} />
        </li>
        <li onMouseEnter={onStore} className="hover:text-white cursor-pointer">
          Store
        </li>
        <li className="hover:text-white cursor-pointer">Mac</li>
        <li className="hover:text-white cursor-pointer">iPad</li>
        <li className="hover:text-white cursor-pointer">iPhone</li>
        <li className="hover:text-white cursor-pointer">Watch</li>
        <li className="hover:text-white cursor-pointer">Entertainment</li>
        <li className="hover:text-white cursor-pointer">Accessories</li>
        <li className="hover:text-white cursor-pointer">Support</li>
        <li className="hover:text-white cursor-pointer">
          <FontAwesomeIcon icon={faSearch} className="font-extralight" />
        </li>
        <li className="hover:text-white cursor-pointer">
          <FontAwesomeIcon icon={faBagShopping} />
        </li>
      </ul>

      {/* Dropdown Animation */}
      <AnimatePresence>
        {drop === "Store" && (
          <motion.div
            className="w-full  px-10  text-white"
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className='h-[200px]'>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;
