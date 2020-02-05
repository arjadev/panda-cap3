import React from 'react'
import { DB } from '../utils/db'
export function BlogScreen() {
    return (
        <div className="page pt-blog" data-simplebar="">
            <section className="container">

                <div className="header-page mt-70 mob-mt">
                    <h2>Blog</h2>
                    <span></span>
                </div>

                <div className="row blog-masonry mt-100 mb-50">

                    {
                        DB.myBlogs.map((item, index) =>
                            <div key={index} className="col-lg-4 col-sm-6">
                                <div className="blog-item">
                                    <div className="thumbnail">
                                        <img alt=""
                                            src={item.img} />
                                    </div>
                                    <h4>Get Source Code </h4>
                                    <p>{item && item.description}</p>

                                </div>
                            </div>)
                    }
                </div>
            </section>
        </div>

    )
}
