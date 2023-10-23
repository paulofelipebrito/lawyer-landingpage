"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappIcon({color, size = 16}: {color?: string, size?: number}){
  const iconColor = `${color ? color : "#BFAA7E"}`;
  return <FaWhatsapp color={iconColor} size={size}/>
}