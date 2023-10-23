import Image from 'next/image'
import React from 'react'
import Judge from "../../public/judge.jpg"
import Button from '../Button'
import Link from 'next/link'

type Props = {}

const Book = (props: Props) => {
  return (
    <div className="h-[65vh] w-full relative flex items-center justify-center">
      <Image src={Judge} alt="justica" layout="fill"/>
      <div className="w-full h-full bg-[#1F2839] opacity-90"/>
      <div className='absolute left-1/2 transform -translate-x-1/2 w-[95%] lg:w-4/5 -top-36 md:-top-44 h-[365px] rounded-[20px] bg-[#F2F3ED] py-[100px] flex items-center justify-center'>
        <div className='flex flex-col items-start justify-center w-full max-w-6xl gap-5'>
          <div className='h-8 flex items-center justify-center'>
            <h2 className='w-full text-[#3E4450] text-3xl font-semibold leading-[1.17px] font-raleway'>Se você tem algum problema legal em sua vida...</h2>
          </div>
          <div className='h-8 flex items-center justify-center'>
            <h2 className='w-full text-defaultColor text-4xl font-semibold leading-[1.3em] font-raleway italic '>Estamos disponíveis</h2>
          </div>
          <div className='h-8 flex items-center justify-center'>
            <p className='w-full text-[#3E4450] text-base h-full flex items-center justify-center'>Estamos prontos para ajudá-lo(a) a resolver seus problemas legais de forma eficiente e profissional.</p>
          </div>
        </div>
      </div>
      <div className='w-full h-1/2 absolute bottom-0 max-w-6xl flex flex-col items-center justify-evenly'>
        <div className='flex items-center justify-center'>
          <p className='text-center text-white'>Entre em contato e resolva seus problemas legais hoje mesmo</p>
        </div>
          <Button adicionalStyle={{height: "50px"}}>
            <Link href={"/contato"}>
              <span className="h-4 flex items-center font-sans">Agende uma consulta</span>
            </Link>
          </Button>
      </div>
    </div>
  )
}

export default Book