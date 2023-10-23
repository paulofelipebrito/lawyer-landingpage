"use client"

import { FaShare } from "react-icons/fa"

export default function ShareIcon({color}: {color: string}){
  const iconColor = `${color ? color : "#BFAA7E"}`;
  return <FaShare color={iconColor} />
}