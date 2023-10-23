import Team from '../../public/team.png';
import Trophy from '../../public/trophy.png';
import Balance from '../../public/balance.png';
import Auction from '../../public/auction.png';
import Image from 'next/image';

const Achievements = () => {
  const achievements = [
    {id: 1, icon: Team, alt: "team", firstLine: "+ de 100", secondLine: "CLIENTES SATISFEITOS"},
    {id: 2, icon: Trophy, alt: "trophy", firstLine: "+ de 120", secondLine: "CAUSAS GANHAS"},
    {id: 3, icon: Balance, alt: "balance", firstLine: "+ de 10", secondLine: "PROFISSIONAIS DEDICADOS"},
    {id: 4, icon: Auction,  alt: "auction", firstLine: "+ de 90%", secondLine: "DE SUCESSO"},
  ]
  return (
    <div className="w-full h-[200px] absolute bottom-0 max-w-6xl">
      <div className="gap-2 flex items-center justify-between w-full">
        {achievements?.map((el) => (  
          <div key={el.id} className='flex items-center justify-between w-full'>
            <div className='w-20 h-20 rounded-full flex items-center justify-center bg-[#1F2839] border-[3px] border-[#2E3E5B]'>
              <Image src={el.icon} alt={el.alt}/>
            </div>
            <div className='w-3/5'>
              <span className='grow whitespace-pre-wrap text-white font-raleway text-[32px] leading-[1.2em] font-semibold'>{el.firstLine}</span>
              <p className='text-white font-raleway text-[13px] leading-[1.5em] uppercase font-semibold'>{el.secondLine}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements