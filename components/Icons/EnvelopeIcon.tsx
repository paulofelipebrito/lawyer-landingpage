"use client"

import { FaEnvelope } from "react-icons/fa"

export default function EnvelopeIcon({color}: {color?: string}){
  const iconColor = `${color ? color : "#BFAA7E"}`;
  return <FaEnvelope color={iconColor} size={20} />
}