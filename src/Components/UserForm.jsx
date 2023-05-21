import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const UserForm = ({onForm , t}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [statusMessages, setStatusMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name && user.email && user.message) {
        emailjs
          .sendForm('service_ot1i799', 'template_ahweaiw', e.target, '3P8xV6npEyaK9sRCC')
          .then((response) => {
            const successMessage = `Email sent successfully!`;
          setStatusMessages([...statusMessages, successMessage]);
            console.log( response.status, response.text);
            setUser({ name: '', email: '', message: '' });
          })
          .catch((error) => {
            const errorMessage = `Failed to send email:`;
          setStatusMessages([...statusMessages, errorMessage]);
            console.error(error);
          });
      } else {
        const errorMessage = 'Please complete all fields before sending the email.';
      setStatusMessages([...statusMessages, errorMessage]);
        console.log('Por favor, completa todos los campos antes de enviar el correo electrónico.')
      }
  };
{/*'Correo electrónico enviado con éxito!'    'Error al enviar el correo electrónico:'  'Por favor, completa todos los campos antes de enviar el correo electrónico.' */}

useEffect(() => {
    if (statusMessages) {
      const timer = setTimeout(() => {
        setStatusMessages('');
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [statusMessages]);
  return (
    <>
    <div className={`${onForm} aOff`}>
        <div className='BoxForm'>
            <div className='SmsContactMe'><h2>{t("title.Contact-Me!")}</h2></div>
        <form onSubmit={handleSubmit}>
      <label>
        {t("title.Name:")}
        <input
        required
        placeholder='Your Name here...'
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
        required
        placeholder='user@email.com'
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        {t("title.Message:")}
        <textarea
        placeholder='write here...'
          name="message"
          value={user.message}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className='btnSendEmail' type="submit">{t("title.")}</button>
    </form>
        </div>
        {statusMessages && (
        <div className='SmSConfirmed'>
          <h3>{t("title.Status:")}</h3>
          <p>{statusMessages}</p>
        </div>
      )}
    </div>
    </>
  );
};

export default UserForm;