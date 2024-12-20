import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole, faSearch, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion'
function Navbar() {
  const [drop, setdrop] = React.useState('')
  const onremove = () => {
        setdrop('')
  }
  const onstore = () => {
        setdrop('Store')
    }



  return (
    <motion.div className=' bg-navbar px-20 py-2 ' >
      <ul className='flex justify-between text-gray-300 font-sans text-[13px]   '>
        <li className='hover:text-white cursor-pointer'>
            <FontAwesomeIcon icon={faAppleWhole}/>
        </li>

        <li onMouseEnter={onstore} className='hover:text-white cursor-pointer'>
            Store
        </li>
         <li className='hover:text-white cursor-pointer' >
            Mac
          </li>
           <li className='hover:text-white cursor-pointer'>
            iPad
          </li>
           <li className='hover:text-white cursor-pointer'>
            iPhone
          </li>
           <li className='hover:text-white'>
            Watch
          </li>
           <li className='hover:text-white cursor-pointer'>
            Entertainment
        </li>
        <li className='hover:text-white cursor-pointer'>
            Accessories
          </li>
          <li className='hover:text-white cursor-pointer'>
            Support
        </li>
        <li className='hover:text-white cursor-pointer'>
             <FontAwesomeIcon icon={faSearch} className='font-extralight'/>
          </li><li className='hover:text-white cursor-pointer'>
             <FontAwesomeIcon icon={faBagShopping}/>
          </li>
      </ul>
      <div>
        {
          drop === 'Store' && <div onMouseLeave={onremove} className='w-full h-[400px]'>

          </div>

        }
      </div>
    </motion.div>
  )
}

export default Navbar