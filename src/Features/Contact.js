import { useState,useEffect,useRef } from "react"
import '../Css/Contact.css'
import emailjs from '@emailjs/browser'

function Contact() {

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
  });
  const [screenSize, setScreenSize] = useState('');
  const scrollableRef = useRef(null);
  const [divSize, setDivSize] = useState();
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0)
    const handleResize = () => {
      const height = window.innerHeight;
      setScreenSize(height);
    };

    const { clientHeight } = scrollableRef.current;
    setDivSize(clientHeight)

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_0gsqgl1';
    const TEMPLATE_ID = 'template_wreowhs';
    const PUBLIC_KEY = '89ZIq2UEhL9tZ59Eh';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'hvaghani3662@gmail.com'
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatusMessage('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatusMessage('Failed to send message. Please try again later.');
        setIsSubmitting(false);
      });
  };

  return (
    <div ref={scrollableRef} className='container contact' style={divSize >= screenSize ? {height:'fit-content'} : {height: screenSize}}>
      <div className='mt-5 heading d-flex justify-content-center align-items-center'>Contact Me</div>
      <hr className="mb-5" style={{
        color: '#000',
        backgroundColor: '#008080',
        height: 5,
        border: 'none',
        margin: '10px 0',
      }}/>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input 
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="form-control"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <input 
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="form-control"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <input 
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Query Subject"
                  className="form-control"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave your query here"
                  className="form-control"
                  autoComplete="off"
                  required
                ></textarea>
              </div>
              <div className="row p-2">
                <button 
                  className="portfolio-btn p-xxl-2 p-xl-2 p-lg-2 p-md-2 p-sm-2 p-2" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
              {statusMessage && (
                <div className={`alert ${statusMessage.includes('success') ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact