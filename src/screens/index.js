import React from 'react'
import { AboutScreen } from './about'
import { ResumeScreen } from './resume'
import { PortfolioScreen } from './portfolio'
import { BlogScreen } from './blog'
import { HomeScreen } from './home'
import { NavbarScreen } from '../components/navbar'
import { PreLoad } from '../components/preLoad'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <PreLoad />
        <div id="home">
          <div id="about">
            <div id="resume">
              <div id="portfolio">
                <div id="blog">
                  <div id="contact">
                    <div className="header-mobile">
                      <div className="header-toggle"><i className="fas fa-bars"></i></div>
                    </div>
                    <NavbarScreen />
                    <HomeScreen />
                    <AboutScreen />
                    <ResumeScreen />
                    <PortfolioScreen />
                    <BlogScreen />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}