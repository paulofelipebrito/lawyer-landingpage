// "use client"
import { MouseEventHandler } from "react"

type Props = {
  children: React.ReactNode,
  isInverted?: boolean,
  adicionalStyle?: any,
  onClick?: any
}

const Button = ({children, onClick, isInverted = false, adicionalStyle = ''}: Props) => {
  const style = isInverted 
    ? "px-7 py-3 text-lg font-normal font-raleway bg-defaultColor text-white rounded flex items-center justify-center hover:bg-white hover:text-[#536381] transition duration-[0.3s]" 
    : "px-7 py-2.5 text-base font-bold font-raleway bg-defaultColor text-white rounded flex items-center justify-center hover:bg-[#536381] transition duration-[0.3s]"
  return (
    <button onClick={onClick && onClick} className={style} style={Object.keys(adicionalStyle).length > 0 ? adicionalStyle : null}>{children}</button>
  )
}

export default Button