
const NavBar = ({menuHam , translateLogo , iconCellphone , portfolio , moon , changeDarkMode}) => {
  return (
    <>
    <nav className="navBarMenu">
        <div><img width={45} src={menuHam} alt="img-" /></div>
        <div><img width={45} src={translateLogo} alt="img-" /></div>
        <div><img width={45} src={iconCellphone} alt="img-" /></div>
        <div><img width={45} src={portfolio} alt="img-" /></div>
        <div><img onClick={changeDarkMode} width={45} src={moon} alt="img-" /></div>
    </nav>
    <div>
      <span className="JSM">JSM</span>
    </div>
    </>
  )
}

export default NavBar