import React from 'react'
export function PortfolioScreen() {
    return (
        <div className="page pt-portfolio" data-simplebar="">
            <section className="container">

                <div className="header-page mt-70 mob-mt">
                    <h2>Portfolio </h2>
                    <span></span>
                </div>

                <div className="row mt-100">
                    <div className="col-lg-12 col-sm-12 portfolio-filter">
                        <ul>
                            <li className="active" data-filter="*">All </li>
                            <li data-filter=".brand">Brand </li>
                            <li data-filter=".design">Design </li>
                            <li data-filter=".graphic">Graphic </li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-items mt-100 mb-100">

                    <div className="item col-lg-4 col-sm-6 graphic">
                        <figure>
                            <img alt="" src="img/portfolio/img-1.jpg" />
                            <figcaption>
                                <h3>Project Name </h3>
                                <p>Graphic </p><i className="fas fa-image"></i>
                                <a className="image-link" href="img/portfolio/img-1.jpg"> </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="item col-lg-4 col-sm-6 design">
                        <figure>
                            <img alt="" src="img/portfolio/img-2.jpg" />
                            <figcaption>
                                <h3>Project Name </h3>
                                <p>Design </p><i className="fas fa-image"></i>
                                <a className="image-link" href="img/portfolio/img-2.jpg"> </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="item col-lg-4 col-sm-6 brand">
                        <figure>
                            <img alt="" src="img/portfolio/img-3.jpg" />
                            <figcaption>
                                <h3>Project Name </h3>
                                <p>Graphic </p><i className="fas fa-video"></i>
                                <a className="video-link"
                                    href="https://www.youtube.com/watch?v=k_okcNVZqqI"> </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="item col-lg-4 col-sm-6 graphic">
                        <figure>
                            <img alt="" src="img/portfolio/img-4.jpg" />
                            <figcaption>
                                <h3>Project Name </h3>
                                <p>Design </p><i className="fas fa-image"></i>
                                <a className="image-link" href="img/portfolio/img-4.jpg"> </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="item col-lg-4 col-sm-6 design">
                        <figure>
                            <img alt="" src="img/portfolio/img-5.jpg" />
                            <figcaption>
                                <h3>Project Name </h3>
                                <p>Design </p><i className="fas fa-video"></i>
                                <a className="video-link"
                                    href="https://www.youtube.com/watch?v=k_okcNVZqqI"> </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="item col-lg-4 col-sm-6 brand">
                        <figure>
                            <img alt="" src="img/portfolio/img-6.jpg" />
                            <figcaption>
                                <h3>Project Name </h3>
                                <p>Brand </p><i className="fas fa-image"></i>
                                <a className="image-link" href="img/portfolio/img-6.jpg"> </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="item col-lg-4 col-sm-6 graphic">
                        <figure>
                            <img alt="" src="img/portfolio/img-7.jpg" />
                            <figcaption>
                                <h3>Project Name </h3>
                                <p>Brand </p><i className="fas fa-image"></i>
                                <a className="image-link" href="img/portfolio/img-7.jpg"> </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="item col-lg-4 col-sm-6 design">
                        <figure>
                            <img alt="" src="img/portfolio/img-8.jpg" />
                            <figcaption>
                                <h3>Project Name </h3>
                                <p>Brand </p><i className="fas fa-image"></i>
                                <a className="image-link" href="img/portfolio/img-8.jpg"> </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="item col-lg-4 col-sm-6 brand">
                        <figure>
                            <img alt="" src="img/portfolio/img-9.jpg" />
                            <figcaption>
                                <h3>Project Name </h3>
                                <p>Graphic </p><i className="fas fa-image"></i>
                                <a className="image-link" href="img/portfolio/img-9.jpg"> </a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </div>

    )
}
