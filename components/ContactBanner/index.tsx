import Computer from '../../public/Computer.jpg'
import Image from 'next/image'

type Props = {}

const ContactBanner = (props: Props) => {
  return (
    <div className='md:mr-[60px] lg:mr-[100px] h-[280px] overflow-hidden relative rounded-tr-[20px]'>
      <div className="w-full rounded-tr-[20px]">
        <div className='relative h-[60vh] rounded-tr-[20px]'>
          <Image src={Computer} alt="advodago" className="rounded-tr-[20px] mt-[-15vh]" layout="fill"/>
        </div>
        <div className="absolute w-full h-full top-0 bg-transparent bg-gradient-to-r from-[#06090CC9] via-transparent to-[#FFFFFF00] rounded-tr-[20px]"/>
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full max-w-6xl">
          <div className="w-1/2 md:w-4/6 flex flex-col items-start justify-center gap-5">
            <div>
              <h1 className="text-white text-5xl font-semibold leading-[1.37em] font-raleway">Contato</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBanner