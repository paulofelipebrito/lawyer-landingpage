import React from 'react'
import WhatsappIcon from '../Icons/WhatsappIcon'
import FaPhoneIcon from '../Icons/FaPhoneIcon'
import InstaIcon from '../Icons/InstaIcon'
import Link from 'next/link'
import LocationIcon from '../Icons/LocationIcon'

type Props = {}

const SocialsAside = (props: Props) => {
  return (
    <div className='fixed right-0 flex flex-col items-center justify-between w-24 gap-8 z-50'>
      <div className='h-32 w-[1px] bg-[#536381]'/>
      <div className='flex flex-col items-center gap-6'>
        <a target="_blank" href="http://wa.me/558199439956" className='hover:scale-125 cursor-pointer duration-300'>
          <WhatsappIcon color="#536381" size={20}/>
        </a>
        <a target="_blank" href="tel:81999439956" className='hover:scale-125 cursor-pointer duration-300'>
          <FaPhoneIcon color="#536381" size={20} />
        </a>
        <a target="_blank" href="https://www.instagram.com/veigaemaiaadvogados/" className='hover:scale-125 cursor-pointer duration-300'>
          <InstaIcon color="#536381" size={20} />
        </a>
        <a target="_blank" href="https://goo.gl/maps/rhrbQQWsrowJXodk9" className='hover:scale-125 cursor-pointer duration-300'>
          <LocationIcon color="#536381" size={22}/>
        </a>
      </div>
    </div>
  )
}

export default SocialsAside