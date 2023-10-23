import Image from "next/image"
import Button from "../Button"
import laywerPic from '../../public/lawyers-are-advising-clients-about-real-estate.jpg'

const Hero = () => {
  return (
    <div className="hero md:mr-[60px] lg:mr-[100px]">
      <div className="w-full h-[87vh] relative">
        <Image src={laywerPic} alt="advodago" className="rounded-tr-[20px]" layout="fill"/>
        <div className="absolute w-full h-full bg-transparent bg-gradient-to-r from-[#06090CC9] via-transparent to-[#FFFFFF00] rounded-tr-[20px]"/>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full max-w-6xl">
        <div className="w-1/2 md:w-4/6 flex flex-col items-start justify-center gap-5">
          <div>
            <h1 className="text-white text-5xl font-light leading-[0.6em]">Defendemos seu direito</h1>
          </div>
          <div>
            <h1 className="text-white text-5xl font-extrabold leading-[1.3em]">com comprometimento e experiência.</h1>
          </div>
          <div>
            <Button isInverted>Entre em contato</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero