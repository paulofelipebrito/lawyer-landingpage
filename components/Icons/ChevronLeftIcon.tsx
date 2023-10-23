"use client"

import { FaChevronLeft, FaChevronCircleLeft } from "react-icons/fa"

export default function ChevronLeftIcon({color, circle = false}: {color: string, circle: boolean}){
  const iconColor = `${color ? color : "#BFAA7E"}`;
  return circle ? <FaChevronLeft color={iconColor} /> : <FaChevronCircleLeft color={iconColor} />;
}