import About from "./components/About"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import PersonalPhoto from './assets/img/PersonalPhoto.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


Aos.init();


function App() {

  return (
    <>
      <nav className="Nav">
        <div className="container">
          <div className="Nav__box">
            <div className="Nav__box_div1" data-aos="fade-right" data-aos-duration='2500'>
              <div className="Nav__box_div1_profil">
                <img className="Nav__box_div1_profil_img" src={PersonalPhoto} alt="" />
              </div>
              <h4 className="Nav__box_div1_name">Urolov Murodjon</h4>
            </div>
            <div className="Nav__box_div2" data-aos="fade-left" data-aos-duration='2500'>
              <ul className="Nav__box_div2_ul">
                <li className="Nav__box_div2_ul_li"><a href="#">Home</a></li>
                <li className="Nav__box_div2_ul_li"><a href="#About">About</a></li>
                <li className="Nav__box_div2_ul_li"><a href="#Education">Education</a></li>
                <li className="Nav__box_div2_ul_li"><a href="#Skills">Skill</a></li>
                <li className="Nav__box_div2_ul_li"><a href="#Projects">Projects</a></li>
                <li className="Nav__box_div2_ul_li"><a href="#Certificates">Certificates</a></li>
                <li className="Nav__box_div2_ul_li"><a href="#Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div id="Header"><Header /></div>
      <div id="About"><About /></div>
      <div id="Education"><Education /></div>
      <div id="Skills"><Skills /></div>
      <div id="Projects"><Projects /></div>
      <div id="Certificates"><Certificates /></div>
      <div id="Contact"><Contact /></div>
    </>
  )
}

export default App
