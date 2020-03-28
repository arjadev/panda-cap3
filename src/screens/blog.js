import React from 'react'
import { DB } from '../utils/db.js'

export function BlogScreen() {
    return (
        <div className="page pt-blog" data-simplebar="">
            <section className="container">

                <div className="header-page mt-70 mob-mt">
                    <h2>React.js Services</h2>
                    <span></span>
                </div>

                <div className="row blog-masonry mt-100 mb-50">

                    {
                        DB.reactServices.map((item, index) =>
                            <div key={index} className="col-lg-4 col-sm-6">
                                <div className="blog-item">
                                    <div className="thumbnail" style={{ background: '#fff', margin: 5, textAlign: 'center', padding: 12}}>
                                        <h2 style={{ color: '#000'}}>{item.name}</h2>
                                    </div>
                                    <div style={{ textAlign: 'center', margin: 12}}>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                            {item.description}
                                            </a>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </section>
        </div>

    )
}
