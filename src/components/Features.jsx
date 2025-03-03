import React from 'react'

const Features = () => {
    return (
        <div className="rn-service-area rn-section-gap section-separator" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-left" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                            <span className="subtitle">Features</span>
                            <h2 className="title">What We Do</h2>
                        </div>
                    </div>
                </div>

                <div className="row row--25 mt_md--10 mt_sm--10">
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className=" mt--50 mt_md--30 mt_sm--30 feature-cards">
                        <div className="rn-service">
                            <div className="inner d-flex flex-column flex-md-row align-items-start justify-content-between">
                                <div className="content col-12 col-md-8">
                                    <h4 className="title"><a href="/">Web Development</a></h4>
                                    <p className="description fs-4">We specialize in web development, delivering high-quality projects using React and Laravel. With experience serving over 50 clients, we create robust, scalable, and efficient digital solutions tailored to business needs, ensuring seamless functionality and exceptional user experience.</p>
                                    <a className="read-more-button" href="/"><i className="feather-arrow-right"></i></a>
                                </div>
                                <div className="content">
                                   <img src="/assets/images/web.svg" className='w-100' alt="Service" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className=" mt--50 mt_md--30 mt_sm--30 feature-cards">
                        <div className="rn-service">
                            <div className="inner d-flex flex-column flex-md-row align-items-start justify-content-between">
                                <div className="content col-12 col-md-8">
                                    <h4 className="title"><a href="/">App Development</a></h4>
                                    <p className="description"> We excel in app development using Flutter, crafting seamless, high-performance mobile applications. Having worked with over 20 clients, we deliver scalable, user-friendly solutions tailored to business needs, ensuring a smooth cross-platform experience with modern design and robust functionality.</p>
                                    <a className="read-more-button" href="/"><i className="feather-arrow-right"></i></a>
                                </div>
                                <div className="content">
                                   <img src="/assets/images/app.svg" className='w-100' alt="Service" />
                                </div>
                            </div>
                        </div>
                    </div>

                    
                  
                </div>
            </div>
        </div>
    )
}

export default Features