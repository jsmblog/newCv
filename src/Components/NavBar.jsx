
const NavBar = ({translateLogo , iconCellphone , portfolio , changeDarkMode , changeIconDm , changeDlCv , isOnDlCv ,changeIconMh}) => {
  return (
    <>
    <nav className="navBarMenu">
        <div><img onClick={changeDlCv} width={45} src={changeIconMh} alt="img-" /></div>
        <div><img width={45} src={translateLogo} alt="img-" /></div>
        <div><img width={45} src={iconCellphone} alt="img-" /></div>
        <div><img width={45} src={portfolio} alt="img-" /></div>
        <div><img onClick={changeDarkMode} width={45} src={changeIconDm} alt="img-" /></div>
    </nav>
    <div>
      <span className="JSM">JSM</span>
    </div>
    <div>
      <a className={`${isOnDlCv} aOff`} download href="/src/Img/Cv-JoelSm.pdf" target="_blank" rel="noopener noreferrer">Download Cv ↓</a>
    </div>
    </>
  )
}

export default NavBar