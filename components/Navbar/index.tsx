import Image from 'next/image'
import Link from 'next/link';
import Button from '../Button';

const Navbar = () => {
  return (
    <nav className="navbar w-full bg-white flex items-center justify-between py-3.5 max-w-6xl">
      <div>
        <Link href="/">
          <Image src="./logo.svg" alt="Veiga e Maia - Logo" width={130} height={46}/>
        </Link>
      </div>
      <div className='flex items-center justify-between'>
        <ul className="flex items-center justify-evenly">
          <li className="px-4 py-1">
            <Link href="#inicio" className='text-defaultColor text-[15px] font-light leading-[1.3em] hover:text-[#536381] transition duration-[0.4s]'>Início</Link>
          </li>
          <li className="px-4 py-1">
            <Link href="#sobre" className='text-defaultColor text-[15px] font-light leading-[1.3em] hover:text-[#536381] transition duration-[0.4s]'>Sobre</Link>
          </li>
          <li className="px-4 py-1">
            <Link href="#areas-atuacao" className='text-defaultColor text-[15px] font-light leading-[1.3em] hover:text-[#536381] transition duration-[0.4s]'>Áreas de Atuação</Link>
          </li>
          <li className="px-4 py-1">
            <Link href="/contato" className='text-defaultColor text-[15px] font-light leading-[1.3em] hover:text-[#536381] transition duration-[0.4s]'>Contato</Link>
          </li>
        </ul>
        <Button>
          <span className="h-4 flex items-center">Fale Conosco</span>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar;