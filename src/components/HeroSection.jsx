import React from 'react'

const HeroSection = () => {
    return (
        <div id="home" className="rn-slider-area">
            <div className="slide slider-style-1 pb-5">
                <div className="container">
                    <div className="row row--30 align-items-center">
                        <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                            <div className="content">
                                <div className="inner mb-3">
                                    <span className="subtitle">Welcome to our world</span>
                                    <h1 className="title">we are <span>Freelancer.</span><br />
                                        <span className="header-caption" id="page-top">
                                            <span className="cd-headline clip is-full-width">
                                                <span className='me-4'>a </span>
                                                <span className="cd-words-wrapper">
                                                    <b className="is-visible">Developer.</b>
                                                    <b className="is-hidden">Professional Coder.</b>
                                                </span>
                                            </span>
                                        </span>
                                    </h1>

                                    <div>
                                        <p className="description">We are expert freelancers in web and app development, coding, and graphic design. We build high-quality freelancing websites, ensuring functionality, aesthetics, and timely delivery. Committed to excellence and client satisfaction, we transform ideas into reality with professionalism and precision.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 row mt_mobile-30">
                                        <div className="skill-share-inner">
                                            <span className="title">best skill on</span>
                                            <ul className="skill-share d-flex liststyle">
                                                <li><img src="assets/images/icons/react.png" alt="Icons" /></li>
                                                <li><img src="assets/images/icons/flutter.png" alt="Icons" /></li>
                                                <li><img src="assets/images/icons/php.png" alt="Icons" /></li>
                                                <li><img src="assets/images/icons/js.png" alt="Icons" /></li>
                                                <li><img src="assets/images/icons/html.png" alt="Icons" /></li>
                                                <li><img src="assets/images/icons/css-3.png" alt="Icons" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 order-lg-2 col-lg-5">
                                    <img src="/assets/images/hero.webp" className='rounded-2'  alt="Personal Portfolio"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection