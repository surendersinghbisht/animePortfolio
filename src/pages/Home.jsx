import React from 'react'

const Home = () => {
    // rgb(250,148,39)
  return (
    <div className="fixed inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="object-cover w-full h-full"
    >
      <source src="./videos/goku.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
    {/* Translucent overlay on video */}
    <div className="absolute inset-0 bg-black/55"></div>
  </div>
  )
}

export default Home
