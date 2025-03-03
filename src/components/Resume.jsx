import React from 'react'

const Resume = () => {
    const blogPosts = [
        {
            id: 1,
            image: "assets/images/man.jpg",
            name: "Gulshan Patel",
            readTime: "5years exp.",
            title: "T-shirt design is the part of design",
            category: "Web Developer",
            whatsapp : "918770353366",
            mail : "",
            linkedin : "",
            github:"https://github.com/gulshan096"
        },
        {
            id: 2,
            image: "assets/images/man.jpg",
            name: "Avinash Chandraker",
            readTime: "3years exp.",
            title: "The services provide for design",
            category: "Web Developer",
            whatsapp : "916268745654",
            mail : "avichandraker@gmail.com",
            linkedin : "https://www.linkedin.com/in/avinash-chandraker-99a667149/",
            github:"https://github.com/avinash-123-del"
        },
        {
            id: 3,
            image: "assets/images/man.jpg",
            name: "Mithlesh Janghel",
            readTime: "4years exp.",
            title: "Mobile app landing design & app maintain",
            category: "App Developer",
            whatsapp : "919827840898",
            mail : "",
            linkedin : "",
            github:""
        }
    ];

    return (
        <div>
            <div className="rn-resume-area rn-section-gap section-separator" id="resume">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">Years of Experience</span>
                                <h2 className="title">Our Resume</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="rn-portfolio-area mt-4" id="portfolio">
                            <div className="row row--25">
                                {blogPosts.map((post, index) => (
                                    <div
                                        key={post.id}
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay={100 + index * 50}
                                        data-aos-once="true"
                                        className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30 "
                                    >
                                        <div className="rn-blog " data-bs-toggle="modal" data-bs-target="#exampleModalCenters">
                                            <div className="inner">
                                                <div className="thumbnail">
                                                    <a href="/">
                                                        <img src={post.image} alt="Personal Portfolio" />
                                                    </a>
                                                </div>
                                                <div className="content px-3">
                                                    <div className="category-info">
                                                        <div className="category-list d-flex flex-column align-items-start">
                                                            <a href="/" className='fs-4'>{post.name}</a>
                                                            <a href="/" className='fs-6 text-dark'>{post.category}</a>
                                                        </div>
                                                        <div className="meta">
                                                            <span><i className="feather-clock"></i> {post.readTime}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row slide py-4">
                                                        <div className="col-12 row mt_mobile-30">
                                                            <div className="skill-share-inner">
                                                                <ul className="skill-share d-flex liststyle justify-content-center">
                                                                    <li><a href={post?.linkedin} target='_blank'><img src="assets/images/icons/linkedin.png" alt="Icons" /></a> </li>
                                                                    <li><a href={`mailto:${post.mail}`} target='_blank'><img src="assets/images/icons/gmail.png" alt="Icons" /></a></li>
                                                                    <li><a href={post?.github} target='_blank'><img src="assets/images/icons/github.png" alt="Icons" /></a></li>
                                                                    <li> <a href={`https://wa.me/${post?.whatsapp}?text=I'm%20interested%20in%20your%20work%20and%20would%20like%20to%20discuss%20further.`} target='_blank'><img src="assets/images/icons/whatsapp.png" alt="Icons" /></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume

