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
import sol from './Img/sol.png'
import equis from './Img/letra-x.png'
import mUp1 from './Img/mockupOne.png'
import mUp2 from './Img/mockupTwo.png'
import mUp3 from './Img/mockupThird.png'
import mUp4 from './Img/mockupFourth.png'
import mUp5 from './Img/mockupFiveth.png'
import mUp6 from './Img/mockupSixth.png'
import mUp7 from './Img/mockupSeven.png'
import mUp8 from './Img/mockupEight.png'
import arrow from './Img/arrow.png'
/************************************************************/
import NavBar from './Components/NavBar'
import './App.css'
import Principal from './Components/Principal'
import { useState } from 'react'
import { useEffect } from 'react'
import Portfolio from './Components/Portfolio'
import {useTranslation} from "react-i18next"



function App() {
 const [darkMode, setDarkMode] = useState(false)
 const [downloadCv, setdownLoadCv] = useState(false)
 const [cellphone, setCellphone] = useState(false)
 const [isLoading, setIsLoading] = useState(true);
 const [visibilityPortfolio, setVisibilityPortfolio] = useState(false)
 const [changeLanguage, setChangeLanguage] = useState(false)

 const changeLgEnEs = ()=> {
  setChangeLanguage(!changeLanguage)
  console.log(changeLanguage)
}
const changeDarkMode = ()=> {
  setDarkMode(!darkMode)
  console.log(darkMode)
}
 const changeDlCv = ()=> {
   setdownLoadCv(!downloadCv)
  console.log(downloadCv)
}

 const changeCellphone = ()=> {
  setCellphone(!cellphone)
  console.log(cellphone)
}

const changeVPort = ()=> {
  setVisibilityPortfolio(!visibilityPortfolio)
  console.log(visibilityPortfolio)
}

const {t , i18n } = useTranslation("global")

const En = () => {
  i18n.changeLanguage("en")
}
const Es = () => {
  i18n.changeLanguage("es")
}

 const isOnDarkMode = (darkMode) ? "onDarkMode" : "" ;
 const changeIconDm = (darkMode) ? `${sol}` : `${moon}` ;
 const changeIconLanguage = (changeLanguage) ? `${equis}` : `${translateLogo}` ;

 const OnChangeLanguage = (changeLanguage) ? "BtnLanguage slide-in-blurred-bottom": ""
 const isOnDlCv = (downloadCv) ? "menuHamburguer slide-in-right" : "" ;
 const isOnCellphone = (cellphone) ? "cellPhoneAndEmail slide-in-right" : "" ;
 const changeIconMh = (downloadCv) ? `${equis}` : `${menuHam}` ;
 const isOnSPort = (visibilityPortfolio) ? "contPortfolio slide-in-elliptic-left-fwd" : "" ;
 const changeIconSPort = (visibilityPortfolio) ? `${equis}` : `${portfolio}` ;
 // effect loading 
 useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1800); // 3000 milliseconds = 3 seconds

  return () => clearTimeout(timer); // Clears the timer if the component is unmounted before it finishes
}, []); // The second argument to useEffect is an empty array to ensure that it is only executed once when mounting the component.

if (isLoading) {
  return (
    <div className="loader">
      <div className='loaderStyleCe'>
      <div className="lds-hourglass"></div>
      {/* loading animation this style is stylePrincipal*/}
      <h2>CHARGING...</h2>
      </div>
    </div>
  );
}
  return (
    <>
     <div id={`${isOnDarkMode}`}> 
     <NavBar changeIconLanguage={changeIconLanguage} t={t} En={En} Es={Es} OnChangeLanguage={OnChangeLanguage} changeLgEnEs={changeLgEnEs} arrow={arrow} equis={equis} changeIconSPort={changeIconSPort} changeVPort={changeVPort} isOnCellphone={isOnCellphone} changeCellphone={changeCellphone} changeIconMh={changeIconMh} isOnDlCv={isOnDlCv} changeDlCv={changeDlCv} changeIconDm={changeIconDm}  changeDarkMode={changeDarkMode} iconCellphone={iconCellphone} />
      <Principal t={t} html={html} css={css} js={js} react={react} github={github} slack={slack} notion={notion} bootstrap={bootstrap} linkedin={linkedin} whatsapp={whatsapp} />
      <Portfolio t={t} mUp1={mUp1} mUp2={mUp2} mUp3={mUp3} mUp4={mUp4} mUp5={mUp5} mUp6={mUp6} mUp7={mUp7} mUp8={mUp8} isOnSPort={isOnSPort}/>
     </div>
    </>
  )
}

export default App
