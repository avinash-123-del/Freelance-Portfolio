import React from 'react'
import { testimonialData } from './ObjectData'
import Slider from 'react-slick';

const Testimonial = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>

            <div className="rn-testimonial-area rn-section-gap section-separator" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="section-title text-center">
                                <span className="subtitle">What Clients Say</span>
                                <h2 className="title">Testimonial</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true">

                        <div className="col-lg-12">

                            <Slider {...settings}>
                                {testimonialData.map((e, i) => (
                                    <div key={i} className="testimonial-activation testimonial-pb mb--30">
                                        <div className="testimonial mt--50 mt_md--40 mt_sm--40">
                                            <div className="inner">
                                                <div className="card-info">
                                                    <div className="card-thumbnail">
                                                        <img src={e.img} alt=""  width={200}/>
                                                    </div>
                                                    <div className="card-content">
                                                        <h3 className="title">{e.name}</h3>
                                                        <span className="designation">{e.designation}</span>
                                                    </div>
                                                </div>
                                                <div className="card-description">
                                                    <div className="title-area">
                                                        <div className="title-info">
                                                            <h3 className="title">{e.work}</h3>
                                                            <span className="date">{e.via}</span>
                                                        </div>
                                                        <div className="rating">
                                                            <img src="assets/images/icons/rating.png" alt="rating" />
                                                            <img src="assets/images/icons/rating.png" alt="rating" />
                                                            <img src="assets/images/icons/rating.png" alt="rating" />
                                                            <img src="assets/images/icons/rating.png" alt="rating" />
                                                            <img src="assets/images/icons/rating.png" alt="rating" />
                                                        </div>
                                                    </div>
                                                    <div className="seperator"></div>
                                                    <p className="discription fs-4">
                                                        {e.desp}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial