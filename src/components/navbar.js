import React from 'react'
export function NavbarScreen() {
    return (
        <nav className="header-main" data-simplebar="">

            <div className="logo">
                <img src="img/logo.png" alt="" />
            </div>

            <ul>
                <li data-tooltip="home" data-position="top">
                    <a href="#home" className="icon-h fas fa-house-damage" alt=""> </a>
                </li>
                <li data-tooltip="about" data-position="top">
                    <a href="#about" className="icon-a fas fa-user-tie" alt=""> </a>
                </li>
                <li data-tooltip="resume" data-position="top">
                    <a href="#resume" className="icon-r fas fa-address-book" alt=""> </a>
                </li>
                <li data-tooltip="portfolio" data-position="top">
                    <a href="#portfolio" className="icon-p fas fa-briefcase" alt=""> </a>
                </li>
                <li data-tooltip="blog" data-position="top">
                    <a href="#blog" className="icon-b fas fa-receipt" alt=""> </a>
                </li>

            </ul>

        </nav>
    )
}
