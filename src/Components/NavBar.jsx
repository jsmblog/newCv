
const NavBar = ({translateLogo , iconCellphone , changeDarkMode , changeIconDm , changeDlCv , isOnDlCv ,changeIconMh ,changeCellphone , isOnCellphone ,changeVPort , changeIconSPort}) => {
  return (
    <>
    <nav className="navBarMenu">
        <div><img onClick={changeDlCv} width={45} src={changeIconMh} alt="img-" /></div>
        <div><img width={45} src={translateLogo} alt="img-" /></div>
        <div><img onClick={changeCellphone} width={45} src={iconCellphone} alt="img-" /></div>
        <div><img onClick={changeVPort} width={45} src={changeIconSPort} alt="img-" /></div>
        <div><img onClick={changeDarkMode} width={45} src={changeIconDm} alt="img-" /></div>
    </nav>
    <div>
      <span className="JSM">JSM</span>
    </div>
    <div>
      <a className={`${isOnDlCv} aOff`} download href="/src/Img/Cv-rb-JoelSm.pdf">Download Cv ↓</a>
    </div>
    <div className={`${isOnCellphone} aOff`}>
      <div><a href="tel:+593962915626" ><button><h2>CellPhone →</h2></button></a></div>
      <div><button><h2>Email →</h2></button></div>
    </div>
    </>
  )
}

export default NavBar