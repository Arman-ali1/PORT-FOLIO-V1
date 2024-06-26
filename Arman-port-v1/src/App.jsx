import React, { useEffect, useState } from "react"

// Components
import Nav from "components/Nav/Nav"
import Home from "components/Home/Home"
import Menu from "components/Menu/Menu"
import Portfolio from "components/Portfolio"
import Contact from "components/Contact/Contact"
import Services from "components/Services/Services"
import Footer from "components/Footer/Footer"
// Sanity
// import sanityClient from "client"

//   https://cdn.sanity.io/images/fxul9ln3/production/4443646bac70015c710729ae2d8b945c11f7bdd1-1920x1080.png
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  const projectss=[
    {
      category: "fullstack",
      id:17,
      img: {asset: {url:"https://edumanias.com/wp-content/uploads/2022/05/0_obdOeSyZZZ2nT55E.jpg"}},
      liveUrl:"https://note-taking-app-iwg3.vercel.app/",
      repositoryUrl:"https://github.com/Arman-ali1/NoteTakingApp",
      tagline:"NoteTacking / Socket.io",
      title:"Make Dynamic Notes"
    },
    {
      category: "fullstack",
      id:18,
      img: {asset: {url:"https://edumanias.com/wp-content/uploads/2022/05/0_obdOeSyZZZ2nT55E.jpg"}},
      liveUrl:"https://infinity-blog-arman-alis-projects-c9ae4c0e.vercel.app/",
      repositoryUrl:"https://github.com/Arman-ali1/Infinity-blog",
      tagline:"BlogingApp / Appwrite",
      title:"Real Time bloging webApp"
    },
    {
      category: "fullstack",
      id:19,
      img: {asset: {url:"https://edumanias.com/wp-content/uploads/2022/05/0_obdOeSyZZZ2nT55E.jpg"}},
      liveUrl:"https://weather-app-peach-psi.vercel.app/",
      repositoryUrl:"https://github.com/Arman-ali1/currencyConvertor",
      tagline:"Currency-Convertor / Real-time-api",
      title:"Convert Currency from one to another"
    },
  ]
  const servicess=[
      {
      icon: {asset: {url:"https://cdn.sanity.io/images/fxul9ln3/production/03a9f6fc484719e6ce9349f4a57aae9cb75bdcc9-600x600.svg"}},
      tags: ["React", "Vite", "Axios", "Tailwind"],
      title: "REACT"
      },
      {
      icon: {asset: {url:"https://cdn.sanity.io/images/fxul9ln3/production/3897e694afa2408fad52fcece9c1554294a3b7fd-2500x2500.svg"}},
      tags: ["React", "Node", "Express", "MongoDB"],
      title: "Fullstack Development"
      },
       
  ]
  const [menuOpen, setMenuOpen] = useState(false)
  const [projects, setProjects] = useState(projectss)
  const [services, setServices] = useState(servicess)

  // const [testimonials, setTestimonials] = useState([])
  
  

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 })
  }, [])

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Services services={services} />
      <Portfolio projects={projects} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
