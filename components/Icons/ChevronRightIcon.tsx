"use client"

import { FaChevronRight, FaChevronCircleRight } from "react-icons/fa"

export default function ChevronRightIcon({color, circle = false}: {color: string, circle: boolean}){
  const iconColor = `${color ? color : "#BFAA7E"}`;
  return circle ? <FaChevronRight color={iconColor} /> : <FaChevronCircleRight color={iconColor} />;
}