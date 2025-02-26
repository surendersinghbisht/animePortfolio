import React from 'react'
import Navbar from '../components/NavBar'

const Home = () => {
    // rgb(250,148,39)
  return (
    <div id='home' className="fixed inset-0 z-0">
      <Navbar />
    <video
      autoPlay
      loop
      muted
      playsInline
      className="object-cover w-full h-full"
    >
      <source src="./videos/goku.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Translucent overlay on video */}
    <div className="absolute inset-0 bg-black/55"></div>
  </div>
  )
}

export default Home
