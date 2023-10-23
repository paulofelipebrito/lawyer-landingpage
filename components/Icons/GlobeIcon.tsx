"use client"

import { BsGlobeAmericas } from "react-icons/bs"

export default function CloneIcon({color}: {color?: string}){
  const iconColor = `${color ? color : "#BFAA7E"}`;
  return <BsGlobeAmericas color={iconColor} size={20}/>
}