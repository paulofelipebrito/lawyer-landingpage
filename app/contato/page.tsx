import ContactBanner from '@/components/ContactBanner'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SocialsAside from '@/components/SocialsAside'

export default function ContactPage() {
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
        <section>
          <ContactBanner />
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  )
}
