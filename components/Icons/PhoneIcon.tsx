"use client"

import { AiFillPhone } from "react-icons/ai"

export default function PhoneIcon({color}: {color?: string}){
  const iconColor = `${color ? color : "#BFAA7E"}`;
  return <AiFillPhone color={iconColor} />
}