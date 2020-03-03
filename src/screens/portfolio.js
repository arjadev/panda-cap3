import React from 'react'
import { DB } from '../utils/db'

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
                            <li data-filter=".React">React </li>
                            <li data-filter=".Angular">Angular </li>
                            <li data-filter=".Django">Django </li>
                            <li data-filter=".Node">Node </li>
                            <li data-filter=".Vue">Vue </li>
                            <li data-filter=".PHP">PHP </li>
                            <li data-filter=".Devops">Devops </li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-items mt-100 mb-100">

                    {
                        DB.myProjects.map((item, index) =>
                            <div key={index} className={`item col-lg-4 col-sm-6 ${item.skill}`}>
                                <figure>
                                    <img alt="" src={item.img} />
                                    <figcaption>
                                        <h3>{item.name}</h3>
                                        <p>{item.skill} </p><i className="fas fa-image"></i>
                                        <a className="image-link" href={item.img}> </a>
                                    </figcaption>
                                </figure>
                            </div>
                        )
                    }

                </div>
            </section>
        </div>

    )
}
