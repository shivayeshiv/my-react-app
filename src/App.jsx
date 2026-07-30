import React from 'react'
import Navbar from "./component/Navbar/Navbar.jsx"
import Main1 from './component/MainSection/Mainsection.jsx'
import About from './component/MainSection/About1.jsx'
import Card1 from './component/MainSection/Card1.jsx'
import Mainsection2 from './component/Mainsection2.jsx'
const App = () => {
  return (
    <div>
        <Navbar />
        <Main1 />
        <About />
        <Card1 />
        <Mainsection2 />
      </div>
  )
}

export default App