import React from 'react'
import { DB } from '../utils/db'
import Slider from "react-slick";
import Modal from 'react-modal';
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
            width: 0,
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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

        const { myIndex, width } = this.state;

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
                        <h2>Portfolio</h2>
                        <span></span>
                    </div>

                    <div className="row mt-100">
                        <div className="col-lg-12 col-sm-12 portfolio-filter">
                            <ul>
                                <li className="active" data-filter="*">All </li>
                                <li data-filter=".devops">Devops </li>
                                {/* <li data-filter=".Node">Node </li> */}
                                <li data-filter=".Django">Python </li>
                                <li data-filter=".PHP">PHP </li>
                                {/* <li data-filter=".ASP">ASP.NET </li> */}
                                {/* <li data-filter=".JAVA">JAVA </li> */}
                                {/* <li data-filter=".Golang">Go </li> */}

                                <li data-filter=".React">React </li>
                                <li data-filter=".Angular">Angular </li>
                                <li data-filter=".Vue">Vue </li>

                                <li data-filter=".android">Android </li>
                                {/* <li data-filter=".ios">IOS </li> */}
                                {/* <li data-filter=".rn">React Native </li> */}
                                {/* <li data-filter=".ionic">Ionic </li> */}
                                {/* <li data-filter=".flutter">Flutter </li> */}

                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-items mt-100 mb-100">

                        {
                            DB.myProjects.map((item, index) =>
                                <div key={index} className={`item col-lg-4 col-sm-6 ${item.skill}`} >
                                    <img alt="" src={item.img} onClick={() => this.showPreview(index)} />
                                </div>
                            )
                        }

                    </div>
                </section>

                <Modal
                    animation={'door'}
                    isOpen={this.state.preview}
                    onRequestClose={this.hide.bind(this)}
                    style={{
                        content: {
                            left: '16%',
                            width: width / 1.3,
                            height: width * 620 / 1100 / 1.3,
                        }
                    }}
                >
                    <center>
                        <h5 style={{ color: 'purple', marginBottom: 12 }}>
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
                                        width={width / 1.3}
                                        height={width > 1030 ? width * 540 / 1.3 / 1100 : width * 540 / 1.9 / 1100}

                                    />
                                </div>)
                        }
                    </Slider>

                </Modal>
            </div>
        )
    }
}
