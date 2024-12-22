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
  const onipad = () => {
      setDrop('ipad')
  }
  const oniphone = () => {
      setDrop('iphone')
  }
  const onwatch=() => {
      setDrop('Watch')
  }
  const onEntertainment=() => {
      setDrop('Entertainment')
  }
  const onAccessories = () => {
    setDrop('Accessories')
  }
  const onSupport = () => {
      setDrop('Support')
  }

  const onsearch = () => {
      setDrop ('Search')
  }
  const oncart = () => {
        setDrop ('cart')
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
        <li onMouseEnter={onipad} className="hover:text-white cursor-pointer">iPad</li>
        <li onMouseEnter={oniphone} className="hover:text-white cursor-pointer">iPhone</li>
        <li onMouseEnter={onwatch} className="hover:text-white cursor-pointer">Watch</li>
        <li onMouseEnter={onEntertainment} className="hover:text-white cursor-pointer">Entertainment</li>
        <li onMouseEnter={onAccessories} className="hover:text-white cursor-pointer">Accessories</li>
        <li onMouseEnter={onSupport} className="hover:text-white cursor-pointer">Support</li>
        <li onMouseEnter={onsearch} className="hover:text-white cursor-pointer">
          <FontAwesomeIcon icon={faSearch} className="font-extralight" />
        </li>
        <li onMouseEnter={oncart} className="hover:text-white cursor-pointer">
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
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                 exit={{opacity: 0}}
                transition={{ duration:1, ease: "backInOut" }}

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

                transition={{ duration: 1, ease: "backInOut" }}
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

                transition={{ duration: 1, ease: "backInOut" }}
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
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Explore mac</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Explore all mac </li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Macbook air</li>
                <li className='text-[20px] my-2  font-bold cursor-pointer'>Macbook Pro</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iMac</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Mac mini</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Mac pro</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Displays</li>
                <li className='text-[14px] my-2 font-semibold cursor-pointer'>Compare Mac</li>
                <li className='text-[14px] my-2 font-semibold cursor-pointer'>Switch from Pc to Mac</li>



              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
                exit={{opacity: 0}}>
                 <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Quick links</li>
                <li className='   cursor-pointer'>Shop Mac</li>
                <li className='   cursor-pointer'>Shop Mac</li>
                <li className='  cursor-pointer'>Mac Accessories</li>
                <li className='   cursor-pointer'>Ways to buy</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>More from mac</li>
                <li className='cursor-pointer'>Mac support</li>
                <li className='cursor-pointer'>Apple+for mac</li>
                <li className='cursor-pointer'>MacOs Sequoia</li>
                <li className='cursor-pointer'>Apple intelligent</li>
                <li className='cursor-pointer'>Apps by apple</li>
                <li className='cursor-pointer'>Continuity</li>
                <li className='cursor-pointer'>iCloud+</li>
                <li className='cursor-pointer'>Mac for business</li>
                <li className='cursor-pointer'>Education</li>

              </motion.ul>
            </div>
          </motion.div>
              ) : drop === "ipad" ? (
                   <motion.div
            className="w-full    text-white"
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Explore iPad</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPad pro</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPad air</li>
                <li className='text-[20px] my-2  font-bold cursor-pointer'>iPad</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPad mini</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Apple Pencil</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Keyboard</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Compare iPad</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Why iPad</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
                exit={{opacity: 0}}>
                 <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Shop iPad</li>
                <li className='   cursor-pointer'>Shop iPad</li>
                <li className='   cursor-pointer'>iPad Accessories</li>
                <li className='   cursor-pointer'>Ways to Buy</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>More from iPad</li>
                <li className='cursor-pointer'>iPad Support</li>
                <li className='cursor-pointer'>Applecare+ for ipad</li>
                <li className='cursor-pointer'>iPadOS 18</li>
                <li className='cursor-pointer'> Apple intelligent</li>
                <li className='cursor-pointer'>Apps by Apple</li>
                <li className='cursor-pointer'>iCloud+</li>
                <li className='cursor-pointer'>Education</li>
              </motion.ul>
            </div>
          </motion.div>
                ) : drop === "iphone"?(
                     <motion.div
            className="w-full    text-white"
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Explore iPhone</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPhone 16 Pro</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPhone 16</li>
                <li className='text-[20px] my-2  font-bold cursor-pointer'>iPhone 15</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iphone 14</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPhone SE</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Compre iPhone </li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Switch from Android</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
                exit={{opacity: 0}}>
                 <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Shop iPhone</li>
                <li className='   cursor-pointer'>Shop iPhone</li>
                <li className='   cursor-pointer'>iPhone Accessories</li>
                <li className='  cursor-pointer'>Apple trade in</li>
                <li className='   cursor-pointer'>Ways to Buy</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>More from iPhone</li>
                <li className='cursor-pointer'>iPhone support</li>
                <li className='cursor-pointer'>AppleCare+ for iPhone</li>
                <li className='cursor-pointer'>iOS 18</li>
                <li className='cursor-pointer'>Apple intelligent</li>
                <li className='cursor-pointer'>Apps by Apple</li>
                <li className='cursor-pointer'>iPhone Privacy</li>
                <li className='cursor-pointer'>iCloud+</li>
                <li className='cursor-pointer'>Wallet</li>
                <li className='cursor-pointer'>Siri</li>

                        </motion.ul>
            </div>
          </motion.div>
                  ) : drop === 'Watch' ? (
                       <motion.div
            className="w-full    text-white"
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
                exit={{opacity: 0}}
              >
                <li className='text-gray-300 mb-3 text-[13px] cursor-default'>Explore Watch</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Explore all apple Watch</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Mac</li>
                <li className='text-[20px] my-2  font-bold cursor-pointer'>iPad</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>iPhone</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Apple Watch</li>
                <li className='text-[20px] my-2 font-bold cursor-pointer'>Accessories</li>
              </motion.ul>
              <motion.ul className=' py-12 text-[14px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
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

                transition={{ duration: 1, ease: "backInOut" }}
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
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
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

                transition={{ duration: 1, ease: "backInOut" }}
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

                transition={{ duration: 1, ease: "backInOut" }}
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
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
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

                transition={{ duration: 1, ease: "backInOut" }}
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

                transition={{ duration: 1, ease: "backInOut" }}
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
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className=' flex  gap-[100px]'>
              <motion.ul className=' py-12 font-sans'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1, ease: "backInOut" }}
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

                transition={{ duration: 1, ease: "backInOut" }}
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

                transition={{ duration: 1, ease: "backInOut" }}
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
