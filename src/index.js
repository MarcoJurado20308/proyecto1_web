import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './componentes/Navbar.jsx'
import Divunicef from './componentes/Unicef.jsx'
import DivTV from './componentes/Divtv.jsx'
import Iphone13pro from './componentes/Iphone13pro.jsx'
import Iphonese from './componentes/Iphonese.jsx'
import Griddisplay from './componentes/Griddisplay.jsx'
import Footer from './componentes/Footer.jsx'
import './styles/Master.css'

const App = () => (
  <nav>
    <Navbar />
    <br />
    <Divunicef />
    <Iphone13pro />
    <br />
    <Iphonese />
    <br />
    <DivTV />
    <br />
    <Griddisplay />
    <br />
    <Footer />
  </nav>
)

ReactDOM.render(<App />, document.getElementById('root'))
