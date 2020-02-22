import React from 'react'
import rnInput from '../utils/rn/input.json';

export function BlogScreen() {
    return (
        <div className="page pt-blog" data-simplebar="">
            <section className="container">

                <div className="header-page mt-70 mob-mt">
                    <h2>Packages</h2>
                    <span></span>
                </div>

                <div className="row blog-masonry mt-100 mb-50">

                    {
                        rnInput.map((item, index) =>
                            <div key={index} className="col-lg-3 col-sm-6">
                                <div className="blog-item">
                                    <div className="thumbnail">
                                        <img alt=""
                                            src={'/img/rn/' + item.FIELD5} />
                                    </div>
                                    <p><a href={'https://www.npmjs.com/package/' + item.Repository} target="_blank" rel="noopener noreferrer">{item.Repository}</a></p>
                                </div>
                            </div>)
                    }
                </div>
            </section>
        </div>

    )
}
