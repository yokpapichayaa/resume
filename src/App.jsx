import Banner from './components/banner';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'tailwindcss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelopeOpen,faHouse,faEarthAmericas,faUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={4} className='leftRow d-flex flex-column clearfix'>
              <h1 className="uppercase pt-6 pb-6">Papichaya<br></br>Saretae</h1>
              <div class="text-center">
                <div class="portImage">
                  <Banner />
                </div>
                <div class="title mt-3">
                  <h3 className="uppercase pt-3 pb-6">Contact</h3>
                  <i></i>
                </div>
                <div class="icon tele pb-6 pl-16 pr-16 text-left">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Papichaya Saretae (Yok)</span>
                </div>
                <div class="icon tele pb-6 pl-16 pr-16 text-left">
                  <FontAwesomeIcon className='pr-6' icon={faPhone} />
                  <span>0922971830</span>
                </div>
                <div class="icon email pb-6 pl-16 pr-16 text-left">
                  <FontAwesomeIcon className='pr-6' icon={faEnvelopeOpen} />
                  <span>yokpapichaya@gmail.com</span>
                </div>
                <div class="icon address pb-6 pl-16 pr-16 text-left">
                  <FontAwesomeIcon className='pr-6' icon={faHouse} />
                  <span>189/87 baan klang muang phaholyothin-ramintra Tha Raeng Subdistrict, Bang Khen District, Bangkok 10220</span>
                </div>
                <div class="title mt-3">
                  <h3 className="uppercase pt-3 pb-6">Skill</h3>
                  <i></i>
                </div>
                <div class="text-left">
                    <ul>
                      <li>CMS System WordPress</li>
                      <li>Databases: SQL (basic commands)</li>
                      <li>HTML, CSS, Javascript, C#, React.js, TailwindCss, Boostrap</li>
                      <li>Unity Engine</li>
                      <li>Github</li>
                    </ul>
                </div>
                <div class="title mt-3">
                  <h3 className="uppercase pt-3 pb-6">Language skills </h3>
                  <i></i>
                </div>
                <div class="text-left mb-10">
                    <ul>
                      <li>Thai : Good</li>
                      <li>English : Intermediate </li>
                    </ul>
                </div>
              </div>
          </Col>
          <Col xs={12} md={8} className='rightRow d-flex flex-column clearfix'>
              <h2 className="uppercase pt-3 pb-6 h2">Resume</h2>
              <div class="gray pt-30 pb-30">
                  <h3 className="uppercase pt-3 pb-6 pl-20 text-left">Career objective</h3>
                  <div class="pr-30 pl-20 text-left">For the 1-4 years, I worked in web development using HTML, CSS, JavaScript, and WordPress templates. After that, from 5-7 year, I switched to game development using Unity Engine. I learned to improve myself in all areas and was always able to apply my knowledge to each project.</div>
              </div>
              <div class="pt-10 pb-10">
                  <h3 className="uppercase pt-3 pb-6 pl-20 text-left">Education</h3>
                  <div class="text-left">
                    <ul>
                      <li>Information Technology</li>Suranaree university of technology, 2014-2018
                    </ul>
                </div>
              </div>
              <div class="pb-10">
                <h3 className="uppercase pt-3 pb-6 pl-20 text-left">Technical Experiance</h3>
                <div class="text-left">
                  <ul>
                      <li>CMS System WordPress (5 years)</li>
                      <li>Databases: SQL (basic commands)(5 years)</li>
                      <li>HTML, CSS, Javascript, Boostrap (5 years)</li>
                      <li>React.js, TailwindCss (6 Month)</li>
                      <li>C# (3 years)</li>
                      <li>Unity Engine (3 years)</li>
                      <li>Github (8 years)</li>
                      <li>Tools & Utilities Postman(1 years), VS code(8 years)</li>
                  </ul>
                </div>
              </div>
              <div class="pb-10">
                <h3 className="uppercase pt-3 pb-6 pl-20 text-left">Profressional Experiance</h3>
                <div class="text-left">
                  <div class="d-flex pl-20">
                    <FontAwesomeIcon icon={faEarthAmericas} />
                    <h4 class="pl-2">Outsourcify.</h4>
                  </div>
                  <ul>
                    <li>March 2018 - April 2020 <br></br>I create WordPress sites by customizing themes according to client specifications, 
                      modifying plugins, 
                      and optimizing website SEO.</li>
                  </ul>
                </div>
                <div class="text-left">
                  <div class="d-flex pl-20">
                    <FontAwesomeIcon icon={faEarthAmericas} />
                    <h4 class="pl-2">Tigonsoft</h4>
                  </div>
                  <ul>
                    <li>May 2020 - June 2023<br></br>I developed WordPress websites for a company and experimented with React before switching to game development.</li>
                    <li>June 2023 - December 2025<br></br>I worked with the Unity Engine, utilizing C# and learning game development.</li>
                  </ul>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App