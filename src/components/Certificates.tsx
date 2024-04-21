
import Aos from 'aos'
import 'aos/dist/aos.css'

Aos.init();

function Certificates() {
  return (
    <div className="Certificates">
      <div className="container">
      <h1 className="Certificates__title" data-aos="zoom-in" data-aos-duration='1000'>Certificates</h1>
         <h1 className='Certificates__text' data-aos="fade-right" data-aos-duration='500'>I have not received a certificate so far alas. <br />Certificates issued by PROWEB will soon be added</h1>
         <h1 className='Certificates__text' data-aos="fade-left" data-aos-duration='500'>I have not received a certificate so far alas. <br />Certificates issued by PROWEB will soon be added</h1>
      </div>
    </div>
  )
}

export default Certificates