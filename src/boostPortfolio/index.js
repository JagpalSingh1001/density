import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bitCoin from '../images/Bitcoin-icon.png';
import bootsImg from '../images/boots-icon.png';
import { Grid, Container, Box } from '@mui/material';

class BoostPortfolio extends React.Component {
    render() {
        let settings = {
            dots: false,
            arrows: true,
            infinite: false,
            autoplay: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,

            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
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
                    arrows: false,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }]
        }
        return (
            <div className='boots-main'>
                <Container>
                    <Grid item md={4} sm={12}>
                        <div className='boost-content'>
                            <h2><img src={bootsImg} alt="boots-icon" /> <span>Boots </span> your portfolio with leverage</h2>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Slider {...settings} className="boots-slider-main">
                            <div>
                                <div className='boots-slider-list'>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6} className="boots-list-left">
                                            <Box className="boots-list-hdg">
                                                <img src={bitCoin} alt="" />
                                                <h5>Bitcoin</h5>
                                            </Box>
                                            <p>Volume</p>
                                            <span>$12,345.43M</span>
                                        </Grid>
                                        <Grid item xs={6} className="boots-list-right">
                                            <h5>S2.25</h5>
                                            <p>24h Change</p>
                                            <span style={{ color: "red" }}>23.1%</span>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            <div>
                                <div className='boots-slider-list'>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6} className="boots-list-left">
                                            <Box className="boots-list-hdg">
                                                <img src={bitCoin} alt="" />
                                                <h5>Bitcoin</h5>
                                            </Box>
                                            <p>Volume</p>
                                            <span>$12,345.43M</span>
                                        </Grid>
                                        <Grid item xs={6} className="boots-list-right">
                                            <h5>S2.25</h5>
                                            <p>24h Change</p>
                                            <span style={{ color: "red" }}>23.1%</span>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            <div>
                                <div className='boots-slider-list'>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6} className="boots-list-left">
                                            <Box className="boots-list-hdg">
                                                <img src={bitCoin} alt="" />
                                                <h5>Bitcoin</h5>
                                            </Box>
                                            <p>Volume</p>
                                            <span>$12,345.43M</span>
                                        </Grid>
                                        <Grid item xs={6} className="boots-list-right">
                                            <h5>S2.25</h5>
                                            <p>24h Change</p>
                                            <span style={{ color: "red" }}>23.1%</span>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            <div>
                                <div className='boots-slider-list'>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6} className="boots-list-left">
                                            <Box className="boots-list-hdg">
                                                <img src={bitCoin} alt="" />
                                                <h5>Bitcoin</h5>
                                            </Box>
                                            <p>Volume</p>
                                            <span>$12,345.43M</span>
                                        </Grid>
                                        <Grid item xs={6} className="boots-list-right">
                                            <h5>S2.25</h5>
                                            <p>24h Change</p>
                                            <span style={{ color: "red" }}>23.1%</span>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            <div>
                                <div className='boots-slider-list'>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6} className="boots-list-left">
                                            <Box className="boots-list-hdg">
                                                <img src={bitCoin} alt="" />
                                                <h5>Bitcoin</h5>
                                            </Box>
                                            <p>Volume</p>
                                            <span>$12,345.43M</span>
                                        </Grid>
                                        <Grid item xs={6} className="boots-list-right">
                                            <h5>S2.25</h5>
                                            <p>24h Change</p>
                                            <span style={{ color: "red" }}>23.1%</span>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            <div>
                                <div className='boots-slider-list'>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6} className="boots-list-left">
                                            <Box className="boots-list-hdg">
                                                <img src={bitCoin} alt="" />
                                                <h5>Bitcoin</h5>
                                            </Box>
                                            <p>Volume</p>
                                            <span>$12,345.43M</span>
                                        </Grid>
                                        <Grid item xs={6} className="boots-list-right">
                                            <h5>S2.25</h5>
                                            <p>24h Change</p>
                                            <span style={{ color: "red" }}>23.1%</span>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Slider>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default BoostPortfolio;