import React from 'react'
import Navbar from "./component/Navbar/MainSection/Navbar.jsx"
import Main1 from './component/MainSection/Mainsection.jsx'
import About from './component/MainSection/About.jsx'
import Card1 from './component/MainSection/Card1.jsx'
const App = () => {
  return (
    <div>
        <Navbar />
        <Main1 />
        <About />
        <Card1 />
      </div>
  )
}

export default App