import Home from './Home'
import Projects from './Projects'
import About from './About'

const Goku = () => {
  return (
    <div className="relative overflow-x-hidden">

      <Home />

      <div className="relative z-10 font-heading">

        <div className="min-h-screen p-6 flex flex-col items-center justify-center text-white gap-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            EAT.<span className="text-customOrange">CODE</span>.SLEEP
          </h1>
          <h2 className="text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl">
            WELCOME TO MY PORTFOLIO
          </h2>
          <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg font-title leading-tight max-w-lg mx-auto">
            A code-crafting problem solver, passionate about building intuitive software experiences with clean code and cutting-edge technologies.
          </p>
        </div>

        <Projects />
        <About />
      </div>
    </div>
  )
}

export default Goku
