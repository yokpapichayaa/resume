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
          <Col xs={12} md={5} lg={4} className='leftRow d-flex flex-column clearfix'>
              <h1 className="uppercase pt-6 pb-6">Papichaya<br></br>Saretae</h1>
              <div class="text-center">
                <div class="portImage">
                  <Banner />
                </div>
                <div class="title mt-3">
                  <h3 className="uppercase pt-3 pb-6">Contact</h3>
                  <i></i>
                </div>
                <div class="icon tele pb-6 pl-8 lg:pl-16 pr-8 lg:pr-16 text-left">
                  <FontAwesomeIcon className='pr-4' icon={faUser} />
                  <span>Papichaya Saretae (Yok)</span>
                </div>
                <div class="icon tele pb-6 pl-8 lg:pl-16 pr-8 lg:pr-16 text-left">
                  <FontAwesomeIcon className='pr-4' icon={faPhone} />
                  <span>0922971830</span>
                </div>
                <div class="icon email pb-6 pl-6 lg:pl-16 pr-8 lg:pr-16 text-left break-all">
                  <FontAwesomeIcon className='pr-4' icon={faEnvelopeOpen} />
                  <span>yokpapichaya@gmail.com</span>
                </div>
                <div class="icon address pb-6 pl-8 lg:pl-16 pr-8 lg:pr-16 text-left">
                  <FontAwesomeIcon className='pr-4' icon={faHouse} />
                  <span>189/87 Baan Klang Muang Phaholyothin-Ramintra,Tha Raeng Subdistrict,Bang Khen District,Bangkok,10220</span>
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
          <Col xs={12} md={7} lg={8} className='rightRow d-flex flex-column clearfix'>
              <h2 className="uppercase pt-3 pb-6 h2">Resume</h2>
              <div class="gray pt-20 md:pt-30 pb-20 md:pb-30">
                  <h3 className="uppercase pt-3 pb-6 pl-10 md:pl-20 text-left">Career objective</h3>
                  <div class="pr-10 md:pr-30 pl-10 md:pl-20 text-left">For the 1-4 years, I worked in web development using HTML, CSS, JavaScript, and WordPress templates. After that, from 5-7 year, I switched to game development using Unity Engine. I learned to improve myself in all areas and was always able to apply my knowledge to each project.</div>
              </div>
              <div class="pt-10 pb-10">
                  <h3 className="uppercase pt-3 pb-6 pl-10 md:pl-20 text-left">Education</h3>
                  <div class="text-left">
                    <ul>
                      <li>Information Technology</li>Suranaree university of technology, 2014-2018
                    </ul>
                </div>
              </div>
              <div class="pb-10">
                <h3 className="uppercase pt-3 pb-6 pl-10 md:pl-20 text-left">Technical Experiance</h3>
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
                <h3 className="uppercase pt-3 pb-6 pl-10 md:pl-20 text-left">Profressional Experiance</h3>
                <div class="text-left">
                  <div class="d-flex pl-10 md:pl-20">
                    <FontAwesomeIcon icon={faEarthAmericas} />
                    <h4 class="pl-2">Outsourcify.</h4>
                  </div>
                  <ul>
                    <li>March 2018 - April 2020 <br></br>I have 5 years of experience working with WordPress.<br></br>- During my first job, I worked with WordPress:
I used HTML, CSS, WordPress, and JS for main projects.<br></br>-I customized themes collaborated with UX/UI designers, and gained experience working with international clients. 
<br></br>-I also modified various WordPress plugins to meet client needs, worked with project managers, and learned about client meetings.</li>
                  </ul>
                </div>
                <div class="text-left">
                  <div class="d-flex pl-10 md:pl-20">
                    <FontAwesomeIcon icon={faEarthAmericas} />
                    <h4 class="pl-2">Tigonsoft</h4>
                  </div>
                  <ul>
                    <li>May 2020 - June 2023<br></br> My work was similar to my first job, but focused on SEO. This included installing and providing initial support to clients through Yeost SEO. I also handled website translation using WPML, creating and installing translated web pages, and enabling website users to select their preferred language. Before switching to game development, I learned basic React programming, including creating landing pages. You can see examples on the demo website I've included in my resume.</li>
                    <li>June 2023 - December 2025<br></br>In terms of game development, I learned to use Unity. I collaborated with the UX/UI and graphic design teams to create assets that met client requirements and were compatible with Unity. We then structured the entire project using these assets, linking and configuring animations, and writing code in C# to define the desired animation events. Finally, I worked with QA to verify the accuracy and deliver the final work.</li>
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