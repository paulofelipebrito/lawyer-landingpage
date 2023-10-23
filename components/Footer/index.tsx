import React from 'react'
import Logo from '../../public/footer-logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import FaPhoneIcon from '../Icons/FaPhoneIcon'
import GlobeIcon from '../Icons/GlobeIcon'
import EnvelopeIcon from '../Icons/EnvelopeIcon'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-[#171F30] w-full h-full flex flex-col items-center'>
      <div className='flex items-center justify-between w-full max-w-6xl py-[5em] gap-10'>
        <div className='flex flex-col items-start w-1/3 gap-8 h-[200px]'>
          <div className='w-[130px]'> 
            <Image src={Logo} alt="Veiga e Maia - Logo" width={130} height={46}/>
          </div>
          <div>
            <p className='text-base text-white'>Escritório de advocacia especializado em Direito Tributário, Direito do Trabalho e Direito Previdenciário.</p>
          </div>
        </div>
        <div className='flex flex-col items-start justify-start w-1/3 gap-6 h-[200px]'>
          <h6 className='text-2xl text-white font-raleway font-semibold'>Áreas de Atuação</h6>
          <div>
            <nav>
              <ul>
                <li className='mb-3'>
                  <Link href="#inicio" className='text-white text-base font-raleway font-semibold'>Início</Link>
                </li>
                <li className='mb-3'>
                  <Link href="#sobre" className='text-white text-base font-raleway font-semibold'>Sobre</Link>
                </li>
                <li className='mb-3'>
                  <Link href="#area-atuacao" className='text-white text-base font-raleway font-semibold'>Áreas de Atuação</Link>
                </li>
                <li className='mb-3'>
                  <Link href="/contato" className='text-white text-base font-raleway font-semibold'>Contato</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='flex flex-col items-start w-1/3 gap-6 h-[200px]'>
          <h6 className='text-2xl text-white font-raleway font-semibold'>Contato</h6>
          <div>
            <ul>
              <li className='mb-4'>
                <div className="flex items-center justify-start gap-4">
                  <span><FaPhoneIcon size={20}/></span>
                  <a href="tel:81999439956" className="text-defaultColor text-sm font-light font-sans">(81) 99943-9956</a>
                </div>
              </li>
              <li className='mb-4'>
                <div className="flex items-center justify-start gap-4">
                  <span><GlobeIcon /></span>
                  <a target="_blank" href="https://goo.gl/maps/rhrbQQWsrowJXodk9" className="text-defaultColor text-sm font-light font-sans">Av Republica do Líbano, 251 Torre 3, Sala 2801 - Pina, Recife PE</a>
                </div>
              </li>
              <li className='mb-4'>
                <div className="flex items-center justify-start gap-4">
                  <span><EnvelopeIcon /></span>
                  <a href="mailto:contato@veigaemaia.com.br" className="text-defaultColor text-sm font-light font-sans">contato@veigaemaia.com.br</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t-[1px] border-solid border-[#536381] w-full flex items-center justify-center py-[25px] px-[40px]'>
        <p className='text-[#FFFFFF5C] text-xs font-sans'>Veiga e Maia 2023 © | Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Footer