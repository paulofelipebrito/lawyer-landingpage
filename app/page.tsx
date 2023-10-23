import AboutUs from '@/components/AboutUs/inbdex'
import Book from '@/components/Book'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import OurServices from '@/components/OurServices'
import SocialMedia from '@/components/SocialMedia'
import SocialsAside from '@/components/SocialsAside'

export default function Home() {
  return (
    <>
      <section className='bg-[#F2F3ED] py-2.5 px-5 lg:px-16 xl:px-40 flex justify-center items-center'>
        <ContactInfo/>
      </section>
      <section className='flex justify-center items-center'>
        <Navbar />
      </section>
      <main className="relative">
        <SocialsAside />
        <section id='inicio' className='relative'>
          <Hero />
        </section>
        <section id='sobre' className='w-full flex items-center justify-center'>
          <AboutUs />
        </section>
        <section id='areas-atuacao' className='w-full mt-52 md:mt-64'>
          <OurServices />
        </section>
        <section className='w-full mt-52 md:mt-64 flex items-center justify-center'>
          {/* <SocialMedia /> */}
        </section>
        <section className='w-full mt-52 md:mt-64 flex items-center justify-center'>
          <Book />
        </section>
      </main>
      <Footer />
    </>
  )
}
