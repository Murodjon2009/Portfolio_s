import burger from '../assets/img/Burger_project.jpg';
import Vue_cinema from '../assets/img/Vue_cinema_project.jpg';
import OnlineShop from '../assets/img/OnlineShop_project.jpg';
import Weather from '../assets/img/Weather_project.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

Aos.init();

function Projects() {
  return (
    <div className="Project">
      <div className="container Project__context">
        <h1 className="Project__title" data-aos="zoom-in" data-aos-duration='1000'>Projects</h1>
        <div className="Project__box">
          <div data-aos="flip-up" data-aos-duration='700' className='Project__box_div1'>
            <div className='Project__box_div1_img'>
              <a href="https://murodjon2009.github.io/burger/"><img src={burger} alt="" /></a>
            </div>
            <h1 className='Project__box_div1_title'>Burger</h1>
          </div>
          <div data-aos="flip-up" data-aos-duration='700' className='Project__box_div2'>
            <div className='Project__box_div2_img'>
              <a href="https://murodjon2009.github.io/vue-cinem/"><img src={Vue_cinema} alt="" /></a>
            </div>
            <h1 className='Project__box_div2_title'>Vue Cinema</h1>
          </div>
        </div>
        <div className="Project__box2">
          <div data-aos="flip-up" data-aos-duration='700' className='Project__box2_div1'>
            <div className='Project__box2_div1_img'>
              <a href="https://murodjon2009.github.io/burger/"><img src={Weather} alt="" /></a>
            </div>
            <h1 className='Project__box2_div1_title'>Weather</h1>
          </div>
          <div data-aos="flip-up" data-aos-duration='700' className='Project__box2_div2'>
            <div className='Project__box2_div2_img'>
              <a href="https://murodjon2009.github.io/burger/"><img src={OnlineShop} alt="" /></a>
            </div>
            <h1 className='Project__box2_div2_title'>OnlineSHop</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects