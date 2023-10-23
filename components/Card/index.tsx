import Button from "../Button"

type Props = {
  contentObj: {id: number, title: string, text: string}
  onOpenModal: (contentObj: {id: number, title: string, text: string}) => void
}

const Card = ({contentObj, onOpenModal}: Props) => {
  return (
    <li className="bg-white w-calc-25-min-10 p-8 rounded-xl h-[260px] flex flex-col justify-between">
      <div className="mb-[20px]">
        <h6 className="w-full text-[#3E4450] text-[20px] font-semibold leading-[1.2em]">{contentObj.title}</h6>
      </div>
      <div style={contentObj.title === "Direito Previdenciário" ? { marginTop: '-20px' } : {marginTop: "0"}} className="mb-4">
        <p className="text-[#333333] text-xs font-normal leading-[1.5]">{`${contentObj.text.substring(0,125)}...`}</p>
      </div>
      <div className="w-full h-8 flex items-end">
        <Button onClick={() => onOpenModal(contentObj)} adicionalStyle={{height: "30px", fontSize: "11px"}}>
          LER MAIS
        </Button>
      </div>
    </li>
  )
}

export default Card