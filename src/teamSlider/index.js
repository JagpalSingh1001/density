import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Team from '../images/team-img.png';
import { Box, Grid, Container, Link, Typography, IconButton } from '@mui/material';

class TeamSlider extends React.Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            rows: 2,

            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    rows: 1,
                    autoplay: true,
                }
            }]
        }
        return (
            <div className='team-main'>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item md={4} sm={12}>
                            <div className='team-left-content'>
                                <h2>Meet our Team of experts.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec in egestas semper adipiscing non sit ullamcorper leo.</p>
                            </div>
                        </Grid>
                        <Grid item md={8} sm={12}>
                            <Slider {...settings} className="team-slider-main">
                                <div>
                                    <div className='team-slider-list'>
                                        <img src={Team} alt="" />
                                        <h5>Facilisis scelerisque aliquet.</h5>
                                        <p>CBO</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='team-slider-list'>
                                        <img src={Team} alt="" />
                                        <h5>Facilisis scelerisque aliquet.</h5>
                                        <p>CBO</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='team-slider-list'>
                                        <img src={Team} alt="" />
                                        <h5>Facilisis scelerisque aliquet.</h5>
                                        <p>CBO</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='team-slider-list'>
                                        <img src={Team} alt="" />
                                        <h5>Facilisis scelerisque aliquet.</h5>
                                        <p>CBO</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='team-slider-list'>
                                        <img src={Team} alt="" />
                                        <h5>Facilisis scelerisque aliquet.</h5>
                                        <p>CBO</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='team-slider-list'>
                                        <img src={Team} alt="" />
                                        <h5>Facilisis scelerisque aliquet.</h5>
                                        <p>CBO</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='team-slider-list'>
                                        <img src={Team} alt="" />
                                        <h5>Facilisis scelerisque aliquet.</h5>
                                        <p>CBO</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='team-slider-list'>
                                        <img src={Team} alt="" />
                                        <h5>Facilisis scelerisque aliquet.</h5>
                                        <p>CBO</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='team-slider-list'>
                                        <img src={Team} alt="" />
                                        <h5>Facilisis scelerisque aliquet.</h5>
                                        <p>CBO</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='team-slider-list'>
                                        <img src={Team} alt="" />
                                        <h5>Facilisis scelerisque aliquet.</h5>
                                        <p>CBO</p>
                                    </div>
                                </div>
                            </Slider>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

// class App extends React.Component {
// 	render(){
// 		return (
// 			<div id='app'>
// 				<SliderExample />
// 			</div>
// 		)
// 	}
// }

// ReactDOM.render(<App />, document.getElementById('react-root'))

export default TeamSlider;