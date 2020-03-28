import React from 'react'
import { DB } from '../utils/db'
import Slider from "react-slick";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class PortfolioScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            preview: false,
            myIndex: 0,
        };
    }

    showPreview(x) {
        this.setState({
            preview: true,
            myIndex: x
        });
    }

    hide() {
        this.setState({
            visible: false,
            preview: false
        });
    }

    render() {

        const { myIndex } = this.state;

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="page pt-portfolio" data-simplebar="">
                <section className="container">

                    <div className="header-page mt-70 mob-mt">
                        <h2>Portfolio </h2>
                        <span></span>
                    </div>

                    <div className="row mt-100">
                        <div className="col-lg-12 col-sm-12 portfolio-filter">
                            <ul>
                                <li className="active" data-filter="*">All </li>
                                <li data-filter=".React">React </li>
                                <li data-filter=".Angular">Angular </li>
                                <li data-filter=".Django">Django </li>
                                <li data-filter=".Node">Node </li>
                                <li data-filter=".Vue">Vue </li>
                                <li data-filter=".PHP">PHP </li>
                                <li data-filter=".Devops">Devops </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-items mt-100 mb-100">

                        {
                            DB.myProjects.map((item, index) =>
                                <div key={index} className={`item col-lg-4 col-sm-6 ${item.skill}`} >
                                        <img alt="" src={item.img} onClick={() => this.showPreview(index)}/>
                                </div>
                            )
                        }

                    </div>
                </section>

                <Rodal
                    height={620}
                    width={1100}
                    animation={'door'}
                    visible={this.state.preview}
                    onClose={this.hide.bind(this)}
                >
                    <center>
                        <h5 style={{ color: 'purple', marginBottom: 20 }}>
                            Major Screens
                        </h5>
                    </center>

                    <Slider {...settings}>
                        {
                            myIndex >= 0 &&
                            DB.myProjects[myIndex].apps.map((item, index) =>
                                <div key={index}>
                                    <img
                                        src={item}
                                        alt="First slide"
                                        height={540}
                                        width={1100}
                                    />
                                </div>)
                        }
                    </Slider>

                </Rodal>
            </div>
        )
    }
}
