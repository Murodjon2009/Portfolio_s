import bacground_profil from '../assets/img/bacground_profil.png'
import Personal_photo from '../assets/img/Personal_photo.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

Aos.init();

function Header() {
  return (
    <header className='header' >
      <div className='container header__box'>
        <div className='header__div1'>
          <h4 className='header__div1_portfolio' data-aos="zoom-in-down" data-aos-duration='1000'>Welcome to my portfolio</h4>
          <h1 className='header__div1_title' data-aos="zoom-in-down" data-aos-duration='2000'>HELLO I AM <br /> MURODJON UROLOV</h1>
          <p className='header__div1_skill' data-aos="zoom-in-down" data-aos-duration='3000'>Backend Developer , Frontend Developer  </p>
          <a href="https://t.me/Fronlend" target="_blank"><button className='header__div1_contactMe' >CONTACT ME</button></a>
        </div>
        <div className='header__div2' >
          <img data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='header__div2_bacgroundImg' src={bacground_profil} alt="" />
          <img data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='header__div2_personalPhoto' src={Personal_photo} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header