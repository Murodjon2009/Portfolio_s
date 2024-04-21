import Aos from 'aos'
import 'aos/dist/aos.css'

Aos.init();

function Skills() {
  return (
    <div className="Skills">
      <div className="container Skills__context">
        <h1 className="Skills__title" data-aos="zoom-in" data-aos-duration='1000'>Skills</h1>
        <div className="Skills__box">
          <div data-aos="fade-up" data-aos-duration="500">
            <div className='Skills__box_html_div'>90%</div>
            <h1 className='Skills__box_html_text'>HTML</h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <div className='Skills__box_css_div'>70%</div>
            <h1 className='Skills__box_css_text'>Css</h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <div className='Skills__box_figma_div'>78%</div>
            <h1 className='Skills__box_figma_text'>Figma</h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <div className='Skills__box_java_div'>70%</div>
            <h1 className='Skills__box_java_text'>JavaScript</h1>
          </div>
        </div>
        <div className="Skills__box2">
          <div data-aos="fade-up" data-aos-duration="500">
            <div className='Skills__box2_react_div'>80%</div>
            <h1 className="Skills__box2_react_text">React</h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <div className='Skills__box2_types_div'>75%</div>
            <h1 className="Skills__box2_types_text">TypeScript</h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <div className='Skills__box2_sass_div'>60%</div>
            <h1 className="Skills__box2_sass_text">Sass</h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <div className='Skills__box2_git_div'>30%</div>
            <h1 className="Skills__box2_git_text">Git</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills