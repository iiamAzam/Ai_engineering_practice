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
  const onMac = () => {
    setDrop('')
    setDrop('Mac')
  }

  return (
    <motion.div
      onMouseLeave={onRemove}
      className="bg-navbar px-20 py-2 font-sans shadow-md"
    >
      {/* Navbar Items */}
      <ul className="flex justify-between text-gray-300  text-[13px]">
        <li className="hover:text-white cursor-pointer">
          <FontAwesomeIcon icon={faAppleWhole} />
        </li>
        <li onMouseEnter={onStore} className="hover:text-white cursor-pointer">
          Store
        </li>
        <li onMouseEnter={onMac} className="hover:text-white cursor-pointer">Mac</li>
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
      <div>
      <AnimatePresence>
          {
            drop === "Store" ? (
          <motion.div
            className="w-full    text-white"
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>shop</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Shop the latest</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Mac</li>
                <li className='text-[20px] my-2  font-bold cursor-pointer'>iPad</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPhone</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Apple Watch</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Accessories</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}>
                 <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Quick links</li>
                <li className='   cursor-pointer'>Shop holiday gift</li>
                <li className='   cursor-pointer'>Find a Store</li>
                <li className='  cursor-pointer'>Order Status</li>
                <li className='   cursor-pointer'>Ways to Buy</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Shop Special Stores</li>
                <li className='cursor-pointer'>Education</li>
                <li className='cursor-pointer'>Bussnes</li>
              </motion.ul>
            </div>
          </motion.div>
            ) : drop === 'Mac' ? (
                 <motion.div
            className="w-full    text-white"
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>shop</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Shop the latest</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Mac</li>
                <li className='text-[20px] my-2  font-bold cursor-pointer'>iPad</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPhone</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Apple Watch</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Accessories</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}>
                 <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Quick links</li>
                <li className='   cursor-pointer'>Shop holiday gift</li>
                <li className='   cursor-pointer'>Find a Store</li>
                <li className='  cursor-pointer'>Order Status</li>
                <li className='   cursor-pointer'>Ways to Buy</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Shop Special Stores</li>
                <li className='cursor-pointer'>Education</li>
                <li className='cursor-pointer'>Bussnes</li>
              </motion.ul>
            </div>
          </motion.div>
              ) : drop === "ipad" ? (
                   <motion.div
            className="w-full    text-white"
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>shop</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Shop the latest</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Mac</li>
                <li className='text-[20px] my-2  font-bold cursor-pointer'>iPad</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPhone</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Apple Watch</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Accessories</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}>
                 <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Quick links</li>
                <li className='   cursor-pointer'>Shop holiday gift</li>
                <li className='   cursor-pointer'>Find a Store</li>
                <li className='  cursor-pointer'>Order Status</li>
                <li className='   cursor-pointer'>Ways to Buy</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Shop Special Stores</li>
                <li className='cursor-pointer'>Education</li>
                <li className='cursor-pointer'>Bussnes</li>
              </motion.ul>
            </div>
          </motion.div>
                ) : drop === "iphone"?(
                     <motion.div
            className="w-full    text-white"
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>shop</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Shop the latest</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Mac</li>
                <li className='text-[20px] my-2  font-bold cursor-pointer'>iPad</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPhone</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Apple Watch</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Accessories</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}>
                 <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Quick links</li>
                <li className='   cursor-pointer'>Shop holiday gift</li>
                <li className='   cursor-pointer'>Find a Store</li>
                <li className='  cursor-pointer'>Order Status</li>
                <li className='   cursor-pointer'>Ways to Buy</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Shop Special Stores</li>
                <li className='cursor-pointer'>Education</li>
                <li className='cursor-pointer'>Bussnes</li>
              </motion.ul>
            </div>
          </motion.div>
                  ) : drop === 'Watch' ? (
                       <motion.div
            className="w-full    text-white"
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>shop</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Shop the latest</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Mac</li>
                <li className='text-[20px] my-2  font-bold cursor-pointer'>iPad</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPhone</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Apple Watch</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Accessories</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}>
                 <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Quick links</li>
                <li className='   cursor-pointer'>Shop holiday gift</li>
                <li className='   cursor-pointer'>Find a Store</li>
                <li className='  cursor-pointer'>Order Status</li>
                <li className='   cursor-pointer'>Ways to Buy</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Shop Special Stores</li>
                <li className='cursor-pointer'>Education</li>
                <li className='cursor-pointer'>Bussnes</li>
              </motion.ul>
            </div>
          </motion.div>
                    ) : drop === 'Entertainment' ? (
                          <motion.div
            className="w-full    text-white"
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>shop</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Shop the latest</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Mac</li>
                <li className='text-[20px] my-2  font-bold cursor-pointer'>iPad</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPhone</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Apple Watch</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Accessories</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}>
                 <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Quick links</li>
                <li className='   cursor-pointer'>Shop holiday gift</li>
                <li className='   cursor-pointer'>Find a Store</li>
                <li className='  cursor-pointer'>Order Status</li>
                <li className='   cursor-pointer'>Ways to Buy</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Shop Special Stores</li>
                <li className='cursor-pointer'>Education</li>
                <li className='cursor-pointer'>Bussnes</li>
              </motion.ul>
            </div>
          </motion.div>
                      ) : drop === 'Accessories' ? (
                         <motion.div
            className="w-full    text-white"
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>shop</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Shop the latest</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Mac</li>
                <li className='text-[20px] my-2  font-bold cursor-pointer'>iPad</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPhone</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Apple Watch</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Accessories</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}>
                 <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Quick links</li>
                <li className='   cursor-pointer'>Shop holiday gift</li>
                <li className='   cursor-pointer'>Find a Store</li>
                <li className='  cursor-pointer'>Order Status</li>
                <li className='   cursor-pointer'>Ways to Buy</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Shop Special Stores</li>
                <li className='cursor-pointer'>Education</li>
                <li className='cursor-pointer'>Bussnes</li>
              </motion.ul>
            </div>
          </motion.div>
            ) : drop === 'Support'?(
           <motion.div
            className="w-full    text-white"
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>shop</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Shop the latest</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Mac</li>
                <li className='text-[20px] my-2  font-bold cursor-pointer'>iPad</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPhone</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Apple Watch</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Accessories</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}>
                 <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Quick links</li>
                <li className='   cursor-pointer'>Shop holiday gift</li>
                <li className='   cursor-pointer'>Find a Store</li>
                <li className='  cursor-pointer'>Order Status</li>
                <li className='   cursor-pointer'>Ways to Buy</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Shop Special Stores</li>
                <li className='cursor-pointer'>Education</li>
                <li className='cursor-pointer'>Bussnes</li>
              </motion.ul>
            </div>
          </motion.div>
                          ) : (<div></div>)
}

      </AnimatePresence>
</div>
      <div>
      </div>


    </motion.div>
  );
}

export default Navbar;
