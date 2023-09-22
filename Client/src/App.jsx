import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="relative text-gray-800 bg-gray-50">
          {/* Navbar */}
          <header>
            <nav className="w-full">
              <div className="flex justify-between w-full px-16 py-8">
                {/* Left Nav */}
                <div>
                  <ul className="flex flex-col text-left md:flex-row space-y-5 md:space-y-0 md:space-x-6 text-xl md:text-2xl">
                    <li className="text-left">
                      <a href="#experience">Experience</a>
                    </li>
                    <li className="text-left">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
                {/* Right Nav */}
                <div>
                  {/* Socials */}
                  <ul className="flex flex-col md:flex-row items-end md:items-center md:space-x-4 space-y-4 md:space-y-0">
                    <li>
                      <a
                        href="https://www.github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Github"
                        className="hover:text-blue-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-9 h-9"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="linkedin"
                        className="hover:text-blue-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-9 h-9 rounded-full"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          {/* / Navbar */}
          {/* Name section */}
          <section className="flex flex-col items-center justify-center h-screen  -my-20 md:-mt-48 px-8">
            <div className="flex flex-col items-center justify-center text-center h-screen-half">
              {/* image */}
              <img
                className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
                src="/developer1.JPG"
                alt="Your Name Here"
              />
              <h1 className="text-5xl sm:text-6xl lg:text-9xl">
                Jose Nicolas Villagra
              </h1>
              <h2 className="font-light text-4xl sm:text-5xl lg:text-8xl">
                FullStack Developer
              </h2>
            </div>
          </section>
          {/* /Name Section */}
          {/* image section */}
          <section className="flex items-center justify-between px-8 mb-20 tracking-wider">
            {/* Summary (left) */}
            <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
              <div className="flex flex-col px-10 md:px-20">
                <h3 className="text-xl font-bold">Skills</h3>
                <br />
                <span className="text-lg">React.js</span>
                <span className="text-lg">Redux</span>
                <span className="text-lg">Tailwind UI</span>
                <span className="text-lg">Html y Css</span>
                <span className="text-lg">Node.js</span>
                <span className="text-lg">Express</span>
                <span className="text-lg">Postgres</span>
                <span className="text-lg">Sequelize</span>
              </div>
              <div className="px-10 md:px-20">
                <h3 className="text-xl font-bold">Sobre mi</h3>
                <br />
                <p className="w-full md:w-2/3">
                  Hola, mi nombre es José Nicolás Villagra y me complace
                  presentarme como un programador recién graduado de la academia
                  Henry. Estoy emocionado por la oportunidad de iniciar mi
                  carrera en el mundo de la programación y estoy buscando mi
                  primera oportunidad de empleo en el campo del desarrollo de
                  software.
                </p>
              </div>
              <div className="px-10 md:px-20">
                <br />
                <h3 className="text-xl font-bold">Contacto</h3>
                <a
                  className="text-xl hover:text-blue-600"
                  href="mailto:villagrajosenicolas@gmail.com"
                >
                  villagrajosenicolas@gmail.com
                </a>
              </div>
            </div>
            {/* image */}
            <img
              className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
              src="./developer1.JPG"
              alt="Your Name Here"
            />
            {/* statistics (right) */}
            <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
              <div className="px-20">
                <h4 className="text-xl font-bold">Experience</h4>
                <br />
                <p className="text-6xl">+2</p>
              </div>
              <div className="px-20">
                <h4 className="text-xl font-bold">Projects</h4>
                <br />
                <p className="text-6xl">+3</p>
              </div>
            </div>
          </section>
          {/* /image section */}
          <hr className="border-gray-400 mx-44" />
          {/* Resume */}
          <section className="px-20 mt-10">
            <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
              Experience
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-6 my-10">
              <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 className="text-xl md:text-2xl font-bold">
                  Full Stack Developer
                </h5>
                <h6 className="text-lg font-bold">Soy Henry</h6>
                <p>May 2023 - Sep 2023</p>
              </div>
              <div className="flex flex-col col-span-4">
                <p>
                  Me gradué de Henry, una de las academias de programación más
                  prestigiosas, donde adquirí una base sólida en tecnologías web
                  modernas y metodologías ágiles de desarrollo. Durante mi
                  tiempo en Henry, trabajé en una variedad de proyectos
                  individuales y en equipo, lo que me permitió desarrollar
                  habilidades técnicas y de resolución de problemas de manera
                  efectiva.
                </p>
              </div>
            </div>
          </section>
          <hr className="border-gray-400 mx-44" />
          {/* Resume */}
          <section className="px-20 mt-10">
            <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
              Proyectos
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-6 my-10">
              <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 className="text-xl md:text-2xl font-bold">Oasis Hotel</h5>
                <h6 className="text-lg font-bold">Proyecto Grupal</h6>
                <a href="https://pffront40.onrender.com/" className="text-lg font-bold">Ir a la pagina</a>
                <p>Ago 2023 - Sep 2023</p>
              </div>
              <div className="flex flex-col col-span-4 ">
                <div className="bg-gray-900 p-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nQNdR29VzuA?si=IERGOHTLp1oHey7x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </section>
          <footer className="absolute w-full h-36 bottom-0 p-8 px-16 bg-gray-800 text-gray-50">
            <p className="text-2xl">Gracias por ver mi portfolio</p>
            <a className="text-lg" href="mailto:villagrajosenicolas@gmail.com">
              villagrajosenicolas@gmail.com
            </a>
          </footer>
          <div className="h-80"></div>
        </div>
      </div>
    </>
  );
}

export default App;
