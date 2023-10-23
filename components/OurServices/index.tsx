import Image from 'next/image';
import justicePic from '../../public/figure-of-justice-holding-scales-and-a-sword.jpg';
import Card from '../Card';
import ListService from './ListService';
import Achievements from '../Achievements';

export type ContentType = {
  id: number,
  title: string,
  text: string
}

const OurServices = () => {
  const content: ContentType[] = [
    {id: 1, title: "Direito Tributário", text: `
    O Brasil possui um sistema tributário complexo e com elevada carga tributária, sendo, portanto, imprescindível a busca por uma assessoria especializada para auxiliar na redução dos custos tributários, permitindo, dessa forma, que as empresas se tornem mais  lucrativas e competitivas no mercado. <br />
    A assessoria tributária auxilia a empresa na maximização dos seus resultados, na medida em que ordena o aproveitamento de benefícios fiscais, direciona a  recuperação de créditos tributários consolidados pelo STJ e STF e, ainda, na defesa e assessoria de passivos tributários, dentre outras oportunidades.<br />    
    O escritório Veiga & Maia possui os melhores profissionais na área do Direito Tributário prontos para ajudar a sua empresa a crescer.`},
    {id: 2, title: "Direito do Trabalho", text: `
    O escritório Veiga & Maia surgiu da vontade de fazer uma advocacia diferenciada e de forma pessoal. Contamos com uma equipe especializada, com mais de 11 anos de experiência na área trabalhista, para oferecer aos nossos clientes um atendimento personalizado, realizado por advogados altamente qualificados para cada área específica do Direito do Trabalho, sejam eles: bancários, securitários (seguros), financiários e terceirizados, prestadores de serviço (profissionais autônomos, PJ, CLT), comércio varejista (gerentes, coordenadores, supervisores e vendedores), área da saúde e demais setores.<br /> 

    Com uma visão moderna e totalmente integrada às constantes evoluções do mercado de trabalho, a nossa equipe se destaca pelo amplo conhecimento na área de tecnologia da informação, financeira, comércio e indústria, especialmente em demandas de alta complexidade e grande valor econômico.<br /> 
    
    Além dos profissionais altamente capacitados que possuem especialização no Direito do trabalho, o escritório Veiga & Maia advogados possui equipe de colaboradores, assistentes técnicos, peritos e contadores legitimados a militar em ações que demandam perícias médicas de doença proveniente do trabalho.
    `},
    {id: 3, title: "Direito Civil", text: `
    No direito civil lidamos com uma ampla gama de assuntos que envolvem as relações entre pessoas, empresas e instituições. Nossos serviços abrangem áreas como contratos, responsabilidade civil, direito das obrigações, direito das sucessões, direito imobiliário, entre outros.<br /> 

    Entendemos que cada cliente tem necessidades e objetivos específicos. Por isso, dedicamos tempo para lhe receber em nosso escritório a fim de trilharmos a estratégia adequada à solução do seu processo.<br /> 
    
    Acreditamos na importância da comunicação transparente e na construção do relacionamento de confiança com nossos clientes.<br /> 
    
    Ao escolher o escritório Veiga e Maia você terá ao seu lado uma equipe de profissionais comprometidos em alcançar os melhores resultados.<br /> 
    
    Conte com o escritório Veiga e Maia para oferecer a representação adequada ao sucesso do seu processo.
    `},
    {id: 4, title: "Direito Previdenciário", text: `
    Possuímos vasta experiência na área do Direito Previdenciário, além de profissionais extremamente qualificados, para oferecer aos nossos clientes todo o suporte necessário às questões relacionadas à previdência social  e, também, à seguridade social.<br /> 

    Atuamos na esfera administrativa e judicial.
    `},
  ]

  return (
    <div className="h-[65vh] w-full relative flex items-center justify-center">
      <Image src={justicePic} alt="justica" layout="fill"/>
      <div className="w-full h-full bg-[#1F2839] opacity-90"/>
      <div className='absolute left-1/2 transform -translate-x-1/2 w-[95%] lg:w-4/5 -top-52 md:-top-64 h-[580px] rounded-[20px] bg-[#F2F3ED] py-[100px] flex items-center justify-center'>
        <div className='flex flex-col items-start justify-center w-full max-w-6xl'>
          <div className='h-4 flex items-center justify-center mb-[20px]'>
            <h6 className='w-full text-defaultColor text-sm font-bold uppercase leading-[1.17px] font-sans'>COMO PODEMOS AJUDAR</h6>
          </div>
          <div className='h-10 flex items-center justify-center mb-2'>
            <h3 className='w-full text-[#3E4450] text-[34px] font-semibold uppercase leading-[1.3px] font-sans'>Áreas de Atuação</h3>
          </div>
          <ListService content={content} />
        </div>
      </div>
      <Achievements />
    </div>
  )
}

export default OurServices;