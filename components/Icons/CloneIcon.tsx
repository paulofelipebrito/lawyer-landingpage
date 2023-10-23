"use client"

import { FaRegClone } from "react-icons/fa"

export default function CloneIcon({color}: {color: string}){
  const iconColor = `${color ? color : "#BFAA7E"}`;
  return <FaRegClone color={iconColor} />
}