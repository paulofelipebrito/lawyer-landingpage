"use client"

import { FaPhone } from "react-icons/fa"

export default function FaPhoneIcon({color, size = 16}: {color?: string, size?: number}){
  const iconColor = `${color ? color : "#BFAA7E"}`;
  return <FaPhone color={iconColor} size={size}/>
}