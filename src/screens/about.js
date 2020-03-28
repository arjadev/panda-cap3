import React from 'react'
import { InterestItem } from '../components/about/InterestItem'
import { ServiceItem } from '../components/about/ServiceItem'
import { TestimonialsItem } from '../components/about/testimonialsItem'
import { DB } from '../utils/db'

export function AboutScreen() {
  return (
    <div className="page pt-about" data-simplebar="">
      <section className="container">

        <div className="header-page mt-70 mob-mt">
          <h2>About Me </h2>
          <span></span>
        </div>

        <div className="row mt-100">

          <div className="col-lg-12 col-sm-12">
            <div className="info box-1">
              <div className="row">
                <div className="col-lg-3 col-sm-4">
                  <div className="photo">
                    <img alt="" src="img/user-photo.jpg" />
                  </div>
                </div>
                <div className="col-lg-9 col-sm-8">
                    <h4>{DB.username}</h4>
                  <div className="loc">
                    <i className="fas fa-map-marked-alt"></i> {DB.city}
									</div>
                  <p>{DB.description}</p>
                </div>

                <div className="col-lg-3 col-sm-4">
                  <div className="info-icon">
                    <i className="fas fa-award"></i>
                    <div className="desc-icon">
                      <h6>8 Years Job </h6>
                      <p>Experience </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-4">
                  <div className="info-icon">
                    <i className="fas fa-certificate"></i>
                    <div className="desc-icon">
                      <h6>500+ Projects </h6>
                      <p>Completed </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-4">
                  <div className="info-icon">
                    <i className="fas fa-user-astronaut"></i>
                    <div className="desc-icon">
                      <h6>Freelance </h6>
                      <p>Available </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="row mt-100">

          <div className="col-md-12">
            <div className="header-box mb-50">
              <h3>My Interests </h3>
            </div>
          </div>

          <div className="col-lg-12 col-sm-12">
            <div className="box-2">
              <div className="row">
                {DB.myInterests.map((item, index)=><InterestItem key={index} title={item.title} class={item.icon}/>)}
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-100">

          <div className="col-md-12">
            <div className="header-box mb-50">
              <h3>Services </h3>
            </div>
          </div>

          {DB.myServices.map((item, index)=><ServiceItem 
            key={index}
            class={item.icon}
            title={item.title}
            description={item.description}
          />)}

        </div>

        <div className="row testimonial mt-60">

          <div className="col-md-12">
            <div className="header-box mb-50">
              <h3>Feedbacks </h3>
            </div>
          </div>

          <div className="owl-carousel owl-theme">

            <TestimonialsItem 
              name="Shiva Kumar Ramachandran" 
              job="Rect Native iOS App to be complied and make it working" 
              avatar="img/testimonials/testimonial-1.jpg"
              description="Excellent communication, understood the details of the project very quick. Excellent coding skills. Very good technical skills. Will hire him again for more work."
            />

            <TestimonialsItem 
              name="Mac Tichner" 
              job="Create a react native mobile application prototype from designs" 
              avatar="img/testimonials/testimonial-1.jpg"
              description="Junel is the best developer I have worked with on this platform and has incredible talent for react native.

              He is extremely responsive and turns around high quality work fast.
              
              I will 100% use him for future projects."
            />

            <TestimonialsItem 
              name="Steve Kinuthia" 
              job="Need a react expert" 
              avatar="img/testimonials/testimonial-1.jpg"
              description="Great developer.
              He worked fast and resolved some issues in the good way.
              Highly recommended.
              I am sure that I will rehire him when I have any jobs."
            />

          </div>
        </div>

        <div className="row mt-100 mb-60">


        </div>
      </section>
    </div>

  )
}