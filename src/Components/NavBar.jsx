import { useState } from "react";

const NavBar = ({translateLogo , iconCellphone , changeDarkMode , changeIconDm , changeDlCv , isOnDlCv ,changeIconMh ,changeCellphone , isOnCellphone ,changeVPort , changeIconSPort}) => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleDownload = () => {
    const pdfURL = '/src/Img/Cv-rb-JoelSm.pdf';
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'Cv-Joel.pdf';
    link.click();

    // Mostrar el mensaje de éxito durante 2 segundos
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2500);
  }
  
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
    {showSuccessMessage && <div className="PDFdownloaded">PDF downloaded successfully...</div>}
      <h3 className={`${isOnDlCv} aOff`}  onClick={handleDownload}>Download Cv ↓</h3>
    </div>
    <div className={`${isOnCellphone} aOff`}>
      <div><a href="tel:+593962915626" ><button><h2>CellPhone →</h2></button></a></div>
      <div><button><h2>Email →</h2></button></div>
    </div>
    </>
  )
}

export default NavBar