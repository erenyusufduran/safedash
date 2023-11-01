// import { send } from 'emailjs-com';
import { useState } from 'react';
import '../styles/Contact.css';
import { TbMailFilled } from 'react-icons/tb';
import { FaPhoneSquareAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blankField, setBlankField] = useState(false);

  const { username, email, message } = formData;

  const sendEmail = (e) => {
    e.preventDefault();
    if (!(username === '' || email === '' || message === '')) {
      setLoading(true);

      // send('service_es1y7ur', 'template_hiw8xpr', formData, 'XdAKsxFytxwHq0-oS')
      //   .then((response) => {
      //     console.log('SUCCESS!', response.status, response.text);
      //     setFormData({ username: '', email: '', message: '' });
      //   })
      //   .catch((err) => {
      //     console.error('FAILED!', err);
      //   });
      setLoading(false);
      setBlankField(false);
    } else {
      console.error('FAILED! You must fill all the blank fields.');
      setBlankField(true);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setBlankField(false);
  };

  return (
    <div id='contact' className="text-center pb-3">
      <h2 className="head-text text-center fw-bold">
        <span>Contact</span> with US!
      </h2>

      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <TbMailFilled className="me-2" style={{ fontSize: '2em' }} />
          <a className="contact_a p-text" href="mailto:support@safedash.co.uk">
            support@safedash.co.uk
          </a>
        </div>
        <div className="app__contact-card">
          <FaPhoneSquareAlt className="me-2" style={{ fontSize: '2em' }} />
          <a href="tel:+445603075062" className="contact_a p-text">
            +44 560 307 50 62
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form onSubmit={sendEmail} className="app__contact-form app__flex">
          <div className="contact_form_div app__flex">
            <input className="contact_input p-text" type="text" placeholder="Name Surname" name="name" value={username} onChange={handleChangeInput} />
          </div>
          <div className="contact_form_div app__flex">
            <input className="contact_input p-text" type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div className="contact_form_div">
            <textarea className="contact_textarea p-text" placeholder="Message" value={message} name="message" onChange={handleChangeInput} />
          </div>
          <p className="contact_p" style={{ color: 'red' }}>
            {blankField && 'Fill all the fields.'}
          </p>
          <button className="contact_button p-text" type="submit">
            {!loading ? 'Send us a message' : 'Sending...'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Yazi</h3>
        </div>
      )}
    </div>
  );
};

export default Contact;
