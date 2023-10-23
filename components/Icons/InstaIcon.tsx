"use client"

import { AiOutlineInstagram } from "react-icons/ai"

export default function InstaIcon({color, size = 16}: {color?: string, size?: number}){
  const iconColor = `${color ? color : "#BFAA7E"}`;
  return <AiOutlineInstagram color={iconColor} size={size}/>
}