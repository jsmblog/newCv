//import img
/************************************************************/
import menuHam from './Img/menuHamburguer.png'
import translateLogo from './Img/traducir.png'
import iconCellphone from './Img/correo-de-contacto.png'
import portfolio from './Img/portafolio.png'
import moon from './Img/moon.png'
import linkedin from './Img/linkedin.png'
import whatsapp from './Img/whatsapp.png'
import html from './Img/html-5.png'
import css from './Img/css-3.png'
import js from './Img/js.png'
import react from './Img/react.png'
import github from './Img/github.png'
import slack from './Img/slack.png'
import notion from './Img/notion.png'
import bootstrap from './Img/bootstrap.png'
/************************************************************/
import NavBar from './Components/NavBar'
import './App.css'
import Principal from './Components/Principal'
import { useState } from 'react'

function App() {
 const [darkMode, setDarkMode] = useState(false)
 const changeDarkMode = ()=> {
  setDarkMode(!darkMode)
  console.log(darkMode)
 }
 const isOnDarkMode = (darkMode) ? "onDarkMode" : ""
  return (
    <>
     <div id={`${isOnDarkMode}`} className='APP'> 
     <NavBar changeDarkMode={changeDarkMode} menuHam={menuHam} translateLogo={translateLogo} iconCellphone={iconCellphone} portfolio={portfolio} moon={moon} />
      <Principal html={html} css={css} js={js} react={react} github={github} slack={slack} notion={notion} bootstrap={bootstrap} linkedin={linkedin} whatsapp={whatsapp} />
     </div>
    </>
  )
}

export default App
