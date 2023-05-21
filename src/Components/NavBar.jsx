import { useState } from "react";
import UserForm from "./UserForm";

const NavBar = ({translateLogo , iconCellphone , changeDarkMode , changeIconDm , changeDlCv , isOnDlCv ,changeIconMh ,changeCellphone , isOnCellphone ,changeVPort , changeIconSPort , arrow , equis}) => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [visibilityForm, setVisibilityForm] = useState(false)

  const changeForm = ()=> {
    setVisibilityForm(!visibilityForm)
    console.log(visibilityForm)
  }

  const onForm = (visibilityForm) ? "ContForm scale-in-center" : ""
  const onFormIcon = (visibilityForm) ? `${equis}` : `${arrow}`

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
      <div><button onClick={changeForm}><h2>Email <img width={15} src={onFormIcon} alt="" /></h2></button></div>
    </div>
    <UserForm onForm={onForm} />
    </>
  )
}

export default NavBar