import { useState,useEffect,useRef } from "react"
import '../Css/Contact.css'

function Contact() {

  const [formData, setFormData] = useState({
      name: '',
      subject: '',
      message: ''
  });
  const [screenSize, setScreenSize] = useState('');
  const scrollableRef = useRef(null);
  const [divSize, setDivSize] = useState();

  useEffect(() => {
    
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
    const { name, subject, message } = formData;
    const mailtoLink = `mailto:hv3662@gmail.com?subject=${encodeURIComponent(subject)}
    &body=${encodeURIComponent(`Hello Harshil,\n I am ${name}. ${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div ref={scrollableRef} className='container contact' style={divSize >= screenSize ? {height:'fit-content'} : {height: screenSize}}>
      <div className='p-xxl-5 p-xl-4 p-lg-3 p-md-3 p-sm-3 p-4 heading d-flex justify-content-center align-items-center'>Contact Me</div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input 
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Fullname"
                  className="form-control"
                  autoComplete="off"
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
                ></textarea>
              </div>
              <div className="row p-2">
                <button className="portfolio-btn p-xxl-2 p-xl-2 p-lg-2 p-md-2 p-sm-2 p-2" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact