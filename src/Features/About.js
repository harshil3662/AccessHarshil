import '../Css/About.css'
import { Link } from "react-router-dom"

function About() {
  return (
    <div class="container about">

      <div className='p-5 head d-flex justify-content-center align-items-center'>About Me</div>

      <div className='col'>

        <div className='row introduction p-5'>
          <div className='p-2 intro-head d-flex justify-content-start align-items-center'>Intoduction</div>
          <div className='row'>
            <div className='container d-flex justify-content-center align-items-center'>
              <div className='introduction-box'>
                <div className='intro ps-4 pt-1'>I'm Harshil Vaghani, a seasoned web developer with over 5 to 6 years of experience specializing in
                  designing and developing websites and web applications for diverse purposes. Throughout my career, I've honed my skills in
                  various web development technologies, including React.js, Node.js, and more. My expertise lies in crafting innovative digital
                  solutions that not only meet but exceed client expectations. I'm dedicated to staying updated with the latest trends and
                  technologies in the field to deliver cutting-edge projects. Take a look on my tech skills <Link className='links' to={'/skills'}>here</Link>.<br/>
                  <br/>
                  I'm a graduate of Government Engineering College in Ahmedabad, where I honed my web development skills and brought my
                  vision to life by creating websites. Through self-learning and formal education, including a post-graduation in Mobile
                  Application and Blockchain Development, I've acquired a diverse skill set. Leveraging these skills, I've developed numerous
                  projects showcasing my expertise in app development and blockchain technology. Explore my projects <Link className='links' to={'/projects'}>here</Link>.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='rov experience p-5 mt-5'>
          <div className='p-2 experience-head d-flex justify-content-start align-items-center'>Experience</div>
          <div className='row'>
            <div className='container d-flex justify-content-center align-items-center'>
              <div className='experience-box'>
                <div className='ps-4 pt-1'>
                  <div className='mb-2'><span className='company-name'>Software Lab</span><br/><span className='timeline'>Jun 2021 - Apr 2022</span></div>
                  <div className='exp'>
                    Design and develop robust backend components for Python applications and APIs using Django and Flask, ensuring efficient and
                    scalable solutions. Implement data fetching mechanisms from databases and third-party APIs to enrich and optimise functionality
                    within existing applications. Actively participate in debugging and troubleshooting processes to identify and address issues promptly, ensuring
                    the reliability and stability of APIs. Continuously improve and optimise APIs, employing thorough testing methodologies to validate functionality and
                    enhance overall code quality.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='row'>
          <div className='container d-flex justify-content-center align-items-center'>
            <a className='cv mt-5' href='https://drive.google.com/file/d/1HNVyHXM4Q87DApEYk9HLuwZmW7F5U_yQ/view?usp=sharing'>My Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About