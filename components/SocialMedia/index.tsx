import React from 'react'
import InstaGrid from '../InstaGrid'

type Props = {}

const SocialMedia = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 max-w-6xl w-full">
      <h3 className={"text-[#3E4450] font-sans text-3xl font-semibold"}>@veigaemaiaadvogados</h3>
      <InstaGrid/>
    </div>
  )
}

export default SocialMedia