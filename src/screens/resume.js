import React from 'react'
import { ExperienceItem } from '../components/resume/experienceItem'
import { DB } from '../utils/db'

export function ResumeScreen() {
    return (
        <div className="page pt-resume" data-simplebar="">
            <section className="container">

                <div className="header-page mt-70 mob-mt">
                    <h2>Resume </h2>
                    <span></span>
                </div>

                <div className="row mt-100">

                    <div className="col-lg-6 col-sm-12">

                        <div className="header-box mb-50">
                            <h3>Experience </h3>
                        </div>

                        <div className="experience box-1">
                            {DB.myResum.map((item, index) => <ExperienceItem
                                key={index}
                                title={item.title}
                                calendar={item.calendar}
                                description={item.description}
                            />)}
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">

                        <div className="header-box mb-50 mob-box-mt">
                            <h3>Education </h3>
                        </div>

                        <div className="experience box-2">

                            <div className="experience box-1">
                                {DB.myEducation.map((item, index) => <ExperienceItem
                                    key={index}
                                    title={item.title}
                                    calendar={item.calendar}
                                    description={item.description}
                                />)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-100">

                    <div className="col-md-12">
                        <div className="header-box mb-50">
                            <h3>Skills </h3>
                        </div>
                    </div>
                </div>

                <div className="box-1 skills">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">

                            <div className="skill-item">
                                <h4 className="progress-title">React-Native </h4>
                                <div className="progress">
                                    <div className="progress-bar width-98" >
                                        <div className="progress-value">98% </div>
                                    </div>
                                </div>
                            </div>

                            <div className="skill-item">
                                <h4 className="progress-title">Angular.JS </h4>
                                <div className="progress">
                                    <div className="progress-bar width-85" >
                                        <div className="progress-value">85% </div>
                                    </div>
                                </div>
                            </div>

                            <div className="skill-item">
                                <h4 className="progress-title">React.JS </h4>
                                <div className="progress">
                                    <div className="progress-bar width-90" >
                                        <div className="progress-value">90% </div>
                                    </div>
                                </div>
                            </div>

                            <div className="skill-item">
                                <h4 className="progress-title">Vue.JS </h4>
                                <div className="progress">
                                    <div className="progress-bar width-77" >
                                        <div className="progress-value">77% </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="row">

                                <div className="col-lg-6 col-sm-6">
                                    <div className="chart" data-percent="92" data-bar-color="#fff"> 92%
															<p>Node </p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <div className="chart" data-percent="88" data-bar-color="#fff"> 88%
															<p>PHP </p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <div className="chart" data-percent="87" data-bar-color="#fff"> 87%
															<p>Java Spring </p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <div className="chart" data-percent="95" data-bar-color="#fff"> 95%
															<p>Python </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-100">

                    <div className="col-md-12">
                        <div className="header-box mb-50">
                            <h3>My Working Process </h3>
                        </div>
                    </div>
                </div>

                <div className="box-2 work-process mb-100">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 ltr">

                            <div className="single-wp width-sm process-1">
                                <p className="wp-step">01 </p>
                                <h4 className="wp-title">Discuss idea </h4>
                                <p>I could describe these , also impress upon paper 
														that is living. </p>
                            </div>

                            <div className="single-wp width-sm process-2">
                                <p className="wp-step">02 </p>
                                <h4 className="wp-title">Creative concept </h4>
                                <p>I could describe these , also impress upon paper 
														that is living. </p>
                            </div>
                        </div>

                        <div className="col-lg-4 hidden-sm">

                            <div className="wp-circle">
                                <h4>Working Process </h4>
                                <span className="dots top-l"></span>
                                <span className="dots bottom-l"></span>
                                <span className="dots top-r"></span>
                                <span className="dots bottom-r"></span>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12 rtl">

                            <div className="single-wp width-sm process-3">
                                <p className="wp-step">03 </p>
                                <h4 className="wp-title">Web concept </h4>
                                <p>I could describe these , also impress upon paper 
														that is living. </p>
                            </div>

                            <div className="single-wp width-sm process-4">
                                <p className="wp-step">04 </p>
                                <h4 className="wp-title">Final concept </h4>
                                <p>I could describe these , also impress upon paper 
														that is living. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
