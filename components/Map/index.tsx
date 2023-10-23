import React from 'react'

const Map = () => {
  return (
    <div>
      <iframe
        width="600"
        height="450"
        frameborder="0"
        style="border:0"
        src="https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=-8.0869027,-34.8910296&zoom=15">
      </iframe>
    </div>
  )
}

export default Map