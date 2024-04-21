import email from "../assets/img/skill-icons_email.png"
import GitHub from "../assets/img/skill-icons_gitHub.png"
import FaceBook from "../assets/img/skill-icons_linkedin.png"
import Instagram from "../assets/img/skill-icons_instagram.png"
import Telegram from "../assets/img/telegram.png"
import { useForm } from "react-hook-form"

const Contact = () => {
  const {
    handleSubmit, // formani tasdiqlovchi funksiya
    reset,        // tozalovchi
    formState: {
    }
  } = useForm({
    mode: "onChange"
  })
  function SendReset() {
    reset()
  }
  return (
    <div className="Contact">
      <div className="container">
        <div className="Contact__title" data-aos="zoom-in-up" data-aos-duration='1000'>Contact</div>
        <div className="Contact__Context">
          <div className="Contact__box">
            <form onSubmit={handleSubmit(SendReset)}>
              <label className="Contact__box_div1" data-aos="fade-up" data-aos-duration='1000'>
                <span className="Contact__box_div1_text">Name</span>
                <input className="Contact__box_div1_name" type="text" placeholder="Name:" />
              </label>
              <label className="Contact__box_div2" data-aos="fade-up" data-aos-duration='1000'>
                <span className="Contact__box_div2_text">Email</span>
                <input className="Contact__box_div2_email" type="email" placeholder="Email:" />
              </label>
              <label className="Contact__box_div3" data-aos="fade-up" data-aos-duration='1000'>
                <span className="Contact__box_div3_text">Message</span>
                <textarea className="Contact__box_div3_textarea" name="Message" placeholder="Message:"></textarea>
              </label>
            </form>
            <button className="Contact__box_send">
              Send
            </button>
          </div>
          <div className="Contact__box2" data-aos="fade-left" data-aos-duration='1000'>
            <h1 className="Contact__box2_title">DON’T BE SHY</h1>
            <p className="Contact__box2_text">Feel free to reach out if you have any questions, <br /> collaboration opportunities, or just want to connect. <br /> I'm always open to new projects and discussions.</p>
            <div className="Contact__box2_div">
              <a className="Contact__box2_div_emailImg" href="https://mail.google.com/mail/u/0/#search/bdbhdujcjbsjd%40gmail.com?compose=new" target="_blank"><img src={email} alt="" /></a>
              <div className="Contact__box2_div_emailDiv">
                <p className="Contact__box2_div_emailDiv_text">Mail me</p>
                <a className="Contact__box2_div_emailDiv_email" href="https://mail.google.com/mail/u/0/#search/bdbhdujcjbsjd%40gmail.com?compose=new" target="_blank">bdbhdujcjbsjd@gmail.com</a>
              </div>
            </div>
            <div className="Contact__box2_div2">
              <a href="https://github.com/Murodjon2009" target="_blank"><img className="Contact__box2_div2_GitHub" src={GitHub} alt="" /></a>
              <a href="https://www.facebook.com/profile.php?id=100089597918343" target="_blank"><img className="Contact__box2_div2_FaceBook" src={FaceBook} alt="" /></a>
              <a href="https://www.instagram.com/programmist_2009/" target="_blank"><img className="Contact__box2_div2_Instagram" src={Instagram} alt="" /></a>
              <a href="https://t.me/Fronlend" target="_blank"><img className="Contact__box2_div2_Telegram" src={Telegram} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact