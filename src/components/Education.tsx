
import stick from "../assets/img/stick.png"

function Education() {
    return (
        <div className="Education">
            <div className="container">
                <h1 className='Education__title' data-aos="zoom-in" data-aos-duration='1000'>Education</h1>
                <div className="Education__context">
                    <div className='Education__box1' data-aos="fade-right" data-aos-duration='1000'>
                        <h2 className="Education__box1_text1">Currently</h2>
                        <h2 className="Education__box1_text2">Programming and</h2>
                        <h2 className="Education__box1_text3">English language</h2>
                        <h2 className="Education__box1_text4">Course</h2>
                    </div>
                    <div className='Education__box2' >
                        <div className='Education__box2_div1' data-aos="zoom-in" data-aos-duration='1000'>
                            <img className='Education__box2_div1_img' src={stick} alt="" />
                        </div>
                        <div className='Education__box2_div2' data-aos="fade-left" data-aos-duration='1000'>
                            <div className='Education__box2_div2_info1'>
                                <div className="Education__box2_div2_info1_year">2022-2023</div>
                                <h1 className="Education__box2_div2_info1_text1">Programming  <span className="span1">-</span> <span className="span2">Proweb Academy</span></h1>
                                <p className="Education__box2_div2_info1_text2">Teacher Izzatullah</p>
                                <p className="Education__box2_div2_info1_text3">10 months training course</p>
                                <p className="Education__box2_div2_info1_text4">Chilanzor branch.</p>
                            </div>
                            <div className='Education__box2_div2_info2'>
                                <div className="Education__box2_div2_info2_year">2021-2022</div>
                                <h1 className="Education__box2_div2_info2_text1">English language<span className="span1">-</span> <span className="span2">Everest Academy</span></h1>
                                <p className="Education__box2_div2_info2_text2">Teacher Ruqiya</p>
                                <p className="Education__box2_div2_info2_text3">15 months training course</p>
                                <p className="Education__box2_div2_info2_text4">Novza branch.</p>
                            </div>
                            <div className='Education__box2_div2_info3'>
                                <div className="Education__box2_div2_info3_year">2020-2021</div>
                                <h1 className="Education__box2_div2_info3_text1">Mathematics <span className="span1">-</span> <span className="span2">Barkamol Avlod Academy</span></h1>
                                <p className="Education__box2_div2_info3_text2">Teacher Dilnoza</p>
                                <p className="Education__box2_div2_info3_text3">5 months training course</p>
                                <p className="Education__box2_div2_info3_text4">Qashqadaryo Province</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education