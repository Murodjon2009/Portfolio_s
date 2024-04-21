import { PersonalInfo1, PersonalInfo2 } from './PersonalInfo'

import Aos from 'aos'
import 'aos/dist/aos.css'

Aos.init();

function About() {
  return (
    <>
      <div className="AboutMe">
        <div className="container" >
          <h1 className="AboutMe__title" data-aos="zoom-in" data-aos-duration='1000'>About Me</h1>
          <h3 className="AboutMe__PersonalInfo" data-aos="zoom-in" data-aos-duration='2000'>Personal Info</h3>
          <div className="AboutMe__box" >
            <div className='AboutMe__box_div1' data-aos="zoom-out-down" data-aos-duration='2000'>
              <PersonalInfo1 title={'First name'} name={'Murodjon'} />
              <PersonalInfo1 title={'Age'} name={'15'} />
              <PersonalInfo1 title={'Freelance'} name={'Available'} />
              <PersonalInfo1 title={'Phone'} name={'904410923'} />
            </div>
            <div className='AboutMe__box_div2' data-aos="zoom-out-down" data-aos-duration='2000' >
              <PersonalInfo2 title={'Last name'} name={'Urolov'} />
              <PersonalInfo2 title={'Nationality'} name={'Uzbek'} />
              <PersonalInfo2 title={'Address'} name={'Sergili, 8th building square, 72-Dom'} />
              <PersonalInfo2 title={'Email'} name={'bdbhdujcjbsjd@gmail.com'} />
            </div>

          </div>
          <div className='AboutMe__box2'>
            <p className='AboutMe__box2_text' data-aos="fade-up-right" data-aos-duration='1000'>Dive into my portfolio and explore the fusion of creativity and technology. <br /> Whether it's coding in Python, crafting web solutions, or pushing the <br /> boundaries of hardware and robotics — every line of code tells a story.</p>
            <div className="AboutMe__box2_div" data-aos="fade-down-left" data-aos-duration='1000'> 
            <h1 className='AboutMe__box2_div_title' >DOWNLOAD CV</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About