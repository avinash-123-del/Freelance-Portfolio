import React from 'react';

const portfolioItems = [
    {
        id: 1,
        image: "assets/images/portfolio/abhinav.png",
        category: "Development",
        link:"https://abhinavdesignhub.ca/",
        title: "A portfolio for Abhinav Kapila’s DesignHub, showcasing graphic design expertise with a visually appealing and user-friendly interface",
    },
    {
        id: 2,
        image: "assets/images/portfolio/navdurga.png",
        category: "Development",
        link:"https://navdurgagroup.in/",
        title: "Navdurga Group, with multiple branches, produces steel bars, iron ore materials, and industrial products, ensuring quality, innovation, and reliability in the metal and construction industries.",
    },
    {
        id: 3,
        image: "assets/images/portfolio/srishti.png",
        category: "Development",
        link:"https://shrishtiitmt.com/",
        title: "Srishti TMT, a branch of Navdurga Group, specializes in manufacturing high-quality steel bars, ensuring durability, strength, and reliability for construction and industrial applications.",
    },
    {
        id: 4,
        image: "assets/images/portfolio/jj.png",
        category: "Development",
        link:"https://jjrenovations.ca/",
        title: "JJ Renovations, based in Canada, specializes in construction, remodeling, and renovations, delivering high-quality, durable, and innovative building solutions for clients.",
    },
    {
        id: 5,
        image: "assets/images/portfolio/divine.png",
        category: "Development Design",
        link:"https://divinesteelsltd.com/",
        title: "Divine Steels, a branch of Navdurga Group based in Tanzania, specializes in supplying high-quality steel bars, supporting Navdurga Group’s operations with durable and reliable construction materials.",
    },
    // {
    //     id: 6,
    //     image: "assets/images/portfolio/portfolio-06.png",
    //     category: "Web Design",
    //     likes: 690,
    //     title: "App for technology & services",
    // }
];

const Portfolio = () => {
    return (
        <div>
            <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">Visit our portfolio and keep your feedback</span>
                                <h2 className="title">Our Portfolio</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                        {portfolioItems.map((item, index) => (
                            <div 
                                key={item.id} 
                                data-aos="fade-up" 
                                data-aos-delay={(index + 1) * 200} 
                                data-aos-once="true" 
                                className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
                            >
                                <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <a href={item?.link} target='_blank' rel="noreferrer"   >
                                                <img src={item.image} alt="Personal Portfolio" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="category-info">
                                                <div className="category-list">
                                                    <a href="/">{item.category}</a>
                                                </div>
                                            </div>
                                            <h6 className="title fs-6">
                                                <a href="/" className='fs-5' >{item.title} <i className="feather-arrow-up-right"></i></a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
