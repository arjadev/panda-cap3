import React from 'react'
import { ExperienceItem } from '../components/resume/experienceItem'

const RESUME_EXPERIENCE = [
    {
        title: 'Web Design',
        calendar: '2012 - 2014',
        description: 'Work experience is essential getting a job. Whether a short work placement a longer internship, work is always viewed favourably employers and can help decide your future career. '
    },
    {
        title: 'Frontend Developer',
        calendar: '2014 - 2015',
        description: 'Work experience is essential getting a job. Whether a short work placement a longer internship, work is always viewed favourably employers and can help decide your future career. '
    }
]

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
                            {RESUME_EXPERIENCE.map((item, index) => <ExperienceItem
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
                                {RESUME_EXPERIENCE.map((item, index) => <ExperienceItem
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
                                <h4 className="progress-title">HTML5 </h4>
                                <div className="progress">
                                    <div className="progress-bar width-98" >
                                        <div className="progress-value">98% </div>
                                    </div>
                                </div>
                            </div>

                            <div className="skill-item">
                                <h4 className="progress-title">CSS3 </h4>
                                <div className="progress">
                                    <div className="progress-bar width-85" >
                                        <div className="progress-value">85% </div>
                                    </div>
                                </div>
                            </div>

                            <div className="skill-item">
                                <h4 className="progress-title">JavaScript </h4>
                                <div className="progress">
                                    <div className="progress-bar width-90" >
                                        <div className="progress-value">90% </div>
                                    </div>
                                </div>
                            </div>

                            <div className="skill-item">
                                <h4 className="progress-title">UI/UX designer </h4>
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
                                    <div className="chart" data-percent="80" data-bar-color="#fff"> 80%
															<p>PHP </p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <div className="chart" data-percent="70" data-bar-color="#fff"> 70%
															<p>Illustrator </p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <div className="chart" data-percent="60" data-bar-color="#fff"> 60%
															<p>Photoshop </p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <div className="chart" data-percent="90" data-bar-color="#fff"> 90%
															<p>AngularJS </p>
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
                                <p>I could describe these ___________, also impress upon paper ___
														that is living. </p>
                            </div>

                            <div className="single-wp width-sm process-2">
                                <p className="wp-step">02 </p>
                                <h4 className="wp-title">Creative concept </h4>
                                <p>I could describe these ___________, also impress upon paper ___
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
                                <p>I could describe these ___________, also impress upon paper ___
														that is living. </p>
                            </div>

                            <div className="single-wp width-sm process-4">
                                <p className="wp-step">04 </p>
                                <h4 className="wp-title">Final concept </h4>
                                <p>I could describe these ___________, also impress upon paper ___
														that is living. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
