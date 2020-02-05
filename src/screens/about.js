import React from 'react'
import { InterestItem } from '../components/about/InterestItem'
import { ServiceItem } from '../components/about/ServiceItem'
import { TestimonialsItem } from '../components/about/testimonialsItem'
import { PriceItem } from '../components/about/PriceItem'
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
              <h3>Testimonials </h3>
            </div>
          </div>

          <div className="owl-carousel owl-theme">

            <TestimonialsItem 
              name="John Doe" 
              job="Web Development" 
              avatar="img/testimonials/testimonial-1.jpg"
              description="Curabitur eleifend tempor gnceleris placeratvel phasellus
              eget sem just consequat gestas facilisis eleifend tempor
              metus sem just metup gestas facilisis eleifend posures temporureture."
            />

            <TestimonialsItem 
              name="Alex Doe" 
              job="UI/UX Designer" 
              avatar="img/testimonials/testimonial-2.jpg"
              description="Curabitur eleifend tempor gnceleris placeratvel phasellus
              eget sem just consequat gestas facilisis eleifend tempor
              metus sem just metup gestas facilisis eleifend posures temporureture."
            />

            <TestimonialsItem 
              name="David Doe" 
              job="Hybrid Development" 
              avatar="img/testimonials/testimonial-3.jpg"
              description="Curabitur eleifend tempor gnceleris placeratvel phasellus
              eget sem just consequat gestas facilisis eleifend tempor
              metus sem just metup gestas facilisis eleifend posures temporureture."
            />

          </div>
        </div>

        <div className="row mt-100 mb-60">

          <div className="col-md-12">
            <div className="header-box mb-90">
              <h3>Price </h3>
            </div>
          </div>

          <PriceItem 
            title="Basic"
            price="25"
            skills={['Web Design', 'Web Development']}
          />

          <PriceItem 
            title="Standard"
            price="45"
            skills={['Web Design', 'Web Development', 'Responsive Design']}
          />

          <PriceItem 
            title="Premium"
            price="75"
            skills={['Web Design', 'Web Development', 'Responsive Design', 'Game Development']}
          />

        </div>
      </section>
    </div>

  )
}