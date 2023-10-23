"use client"

import { MdLocationPin } from "react-icons/md"

export default function LocationIcon({color, size = 16}: {color?: string, size?: number}){
  const iconColor = `${color ? color : "#BFAA7E"}`;
  return <MdLocationPin color={iconColor} size={size}/>
}