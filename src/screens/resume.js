import React from 'react'
import { ExperienceItem } from '../components/resume/experienceItem'
import { HistoryItem } from '../components/resume/historyItem'
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
              <h3>Education </h3>
            </div>

            <div className="experience box-1">
              {DB.myEducation.map((item, index) => <ExperienceItem
                key={index}
                title={item.title}
                calendar={item.calendar}
                description={item.description}
              />)}
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">

            <div className="header-box mb-50 mob-box-mt">
              <h3> Experience </h3>
            </div>

            <div className="experience box-2">

              <div className="experience box-1"> {DB.myResum.map((item, index) => <HistoryItem
                key={index}
                title={item.title}
                calendar={item.calendar}
                place={item.place}
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
                <h4 className="progress-title">Machine Learning </h4>
                <div className="progress">
                  <div className="progress-bar width-85" >
                    <div className="progress-value">85% </div>
                  </div>
                </div>
              </div>

              <div className="skill-item">
                <h4 className="progress-title">Devops </h4>
                <div className="progress">
                  <div className="progress-bar width-93" >
                    <div className="progress-value">93% </div>
                  </div>
                </div>
              </div>

              <div className="skill-item">
                <h4 className="progress-title">Blockchain </h4>
                <div className="progress">
                  <div className="progress-bar width-60" >
                    <div className="progress-value">60% </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="row">

                <div className="col-lg-6 col-sm-6">
                  <div className="chart" data-percent="96" data-bar-color="#fff"> 96%
                    <p>Node </p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="chart" data-percent="86" data-bar-color="#fff"> 86%
                    <p>PHP </p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="chart" data-percent="100" data-bar-color="#fff"> 100%
                    <p>React </p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="chart" data-percent="90" data-bar-color="#fff"> 90%
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
              <h3>My Working Solutions </h3>
            </div>
          </div>
        </div>

        <div className="box-2 work-process mb-100">
          <div className="row">
            <div className="col-lg-4 col-sm-12 ltr">

              <div className="single-wp width-sm process-1">
                <p className="wp-step">01 </p>
                <h4 className="wp-title">Team idea </h4>
                <p>Happy working solo as well as in a team where members are effectivecoders too.
                </p>
              </div>

              <div className="single-wp width-sm process-2">
                <p className="wp-step">02 </p>
                <h4 className="wp-title">Relationships </h4>
                <p>Build long term relationships with client's satisfication and developer's dilligent.
                </p>
              </div>
            </div>

            <div className="col-lg-4 hidden-sm">

              <div className="wp-circle">
                <h4>Working Solutions </h4>
                <span className="dots top-l"></span>
                <span className="dots bottom-l"></span>
                <span className="dots top-r"></span>
                <span className="dots bottom-r"></span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12 rtl">

              <div className="single-wp width-sm process-3">
                <p className="wp-step">03 </p>
                <h4 className="wp-title">Main focus </h4>
                <p>My main focus is the best quality work within the timeframe!</p>
              </div>

              <div className="single-wp width-sm process-4">
                <p className="wp-step">04 </p>
                <h4 className="wp-title">Fluent English </h4>
                <p>Speaking & Writing and daily calling are possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
