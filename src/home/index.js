import * as React from 'react';
import Icon1 from '../images/icon-1.png';
import Icon2 from '../images/icon-2.png';
import Icon3 from '../images/icon-3.png';
import Icon4 from '../images/icon-4.png';
import Icon5 from '../images/icon-5.png';
import Icon6 from '../images/icon-6.png';
import advisorLogo from '../images/advisor-Logos.png';
import userImage1 from '../images/advisor-1.png';
import userImage2 from '../images/advisor-2.png';
import userImage3 from '../images/advisor-3.png';
import userImage4 from '../images/advisor-4.png';
import userImage5 from '../images/advisor-5.png';
import referIcon from '../images/refer-icon.png';

import tradeFutures from '../images/trade-image.png';
import referImage from '../images/refer-img.png';
import faqImage from '../images/faq-image.png';
// import bootsImage from '../images/boots-graph.png';
import './style.css';
import { Grid, Container, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../header';
import Footer from '../footer';
import Team from '../teamSlider';
import BoostPortfolio from '../boostPortfolio';
import loadingGif from "../images/first-image-gif.gif";
import videoMain from "../images/Wave.mp4";
// import backgroundVideo from "../images/Wave.mp4";
import { ReactVideoPlayer } from 'video-player-for-react';
import 'video-player-for-react/dist/index.css';

import Slider from '@mui/material/Slider';

function valueLabelFormat(value) {
    const units = ['KB', 'MB', 'GB', 'TB'];

    let unitIndex = 0;
    let scaledValue = value;

    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
        unitIndex += 1;
        scaledValue /= 1024;
    }

    return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value) {
    return 2 ** value;
}


function Home() {

    const [value, setValue] = React.useState(10);

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    return (
        <div className="App">
            <Header />

            <div className="">
                <Container fixed maxWidth="xl" className='first-main-top'>
                    <div className="first-back"></div>
                    <Container>
                        <Grid container spacing={2} columns={16} className="first-main">
                            <Grid container item md={6} sm={12}>
                                <div className='first-left-content'>
                                    <h2>TRADE THE</h2>
                                    <h1>FUTURE</h1>
                                    <p>Trade in <span>PERPETUAL</span> contract of  bitcoin, ethereum and <span>100+ COINS</span> using leverage upto <span>10x</span></p>
                                    <span className='text-first'>🎉 Get reward upto $10 on first signup</span>
                                    <button className='start-trading-btn'>START TRADING</button>
                                </div>
                            </Grid>
                            <Grid container item md={6} sm={12} className='first-right-image-right'>
                                <div className='first-right-image'>
                                    <img src={loadingGif} alt="wait until the page loads" />
                                    <button className='start-trading-btn'>START TRADING</button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>

                <Container maxWidth="xl" className='discover-future-crypto p-0'>
                    <Container>
                        <div className=''>
                            <Grid item p={2}>
                                <div className='discover-future-content'>
                                    <h2>Discover the FUTURE of Crypto</h2>

                                    <div className='discover-video'>
                                        <ReactVideoPlayer
                                            url={videoMain}
                                            type='video/mp4'
                                            poster={videoMain}
                                        />
                                    </div>

                                    <div className='discover-button'>
                                        <button className='start-trading-btn'>START TRADING</button>
                                    </div>
                                </div>
                            </Grid>
                        </div>
                    </Container>

                    <div className='choose-main video-background'>
                        <video autoplay="true" muted loop style={{ width: "100%" }}>
                            <source src={videoMain} type="video/mp4" />
                        </video>
                        <Container>
                            <div className='choose-content'>
                                <h2>Why  choose  Density ?</h2>
                                <Grid container spacing={3}>
                                    <Grid container item xs={12} sm={6} md={4}>
                                        <div className='choose-list'>
                                            <img src={Icon1} alt="icon" />
                                            <h4>Security</h4>
                                            <p>Best in-class security system with 2F authentication, advanced data encryption and cold wallet storage</p>
                                        </div>
                                    </Grid>
                                    <Grid container item xs={12} sm={6} md={4}>
                                        <div className='choose-list'>
                                            <img src={Icon2} alt="icon" />
                                            <h4>Lowest Trading Fee</h4>
                                            <p>Lowest trading fee in industry 0.015 % in Maker fee and 0.030% in taker fee.</p>
                                        </div>
                                    </Grid>
                                    <Grid container item xs={12} sm={6} md={4}>
                                        <div className='choose-list'>
                                            <img src={Icon3} alt="icon" />
                                            <h4>Leverage</h4>
                                            <p>Maximise your trading power with leverage upto 10x across all the coins.</p>
                                        </div>
                                    </Grid>
                                    <Grid container item xs={12} sm={6} md={4}>
                                        <div className='choose-list'>
                                            <img src={Icon4} alt="icon" />
                                            <h4>Liquidity</h4>
                                            <p>Deep liquidity in all markets and minimum bid ask spread.</p>
                                        </div>
                                    </Grid>
                                    <Grid container item xs={12} sm={6} md={4}>
                                        <div className='choose-list'>
                                            <img src={Icon5} alt="icon" />
                                            <h4>Speed</h4>
                                            <p>Low latency order execution in lightening speed.</p>
                                        </div>
                                    </Grid>
                                    <Grid container item xs={12} sm={6} md={4}>
                                        <div className='choose-list'>
                                            <img src={Icon6} alt="icon" />
                                            <h4>24*7 Customer Support</h4>
                                            <p>Our customer service available for 24*7 for all our customers.</p>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className='density-button'>
                                    <button className='start-trading-btn'>START TRADING</button>
                                </div>
                            </div>
                        </Container>
                    </div>

                    <div className='trade-main video-background'>
                        <video autoplay="true" muted loop style={{ width: "100%" }}>
                            <source src={videoMain} type="video/mp4" />
                        </video>
                        <Container className='trade-content-main'>
                            <div className='trade-content'>
                                <Grid container spacing={3} className="trade-cont-Futures">
                                    <Grid item md={5} sm={12}>
                                        <div className='trade-left'>
                                            <h2>Trade Using Our <span>Simple Futures</span></h2>
                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco labo</p>
                                            <button className='start-trading-btn'>START TRADING</button>
                                        </div>
                                    </Grid>
                                    <Grid item md={7} sm={12}>
                                        <div className='trade-right'>
                                            <img src={tradeFutures} alt="icon" />
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>

                    <div className="boost-portfolio">
                        <Container>
                            <BoostPortfolio />
                        </Container>
                        <div className="boost-portfolio-content">
                            <div className="first-back"></div>
                            <Container className="boost-portfolio-contain">
                                <Grid container spacing={3}>
                                    <Grid item md={6} sm={12}>
                                        <div className="boost-portfolio-left-content">
                                            <p>Select leverage from below slider</p>

                                            <div className="boost-slide">
                                                <Box sx={{ width: 250 }}>
                                                    <Slider
                                                        value={value}
                                                        min={5}
                                                        step={1}
                                                        max={30}
                                                        scale={calculateValue}
                                                        getAriaValueText={valueLabelFormat}
                                                        valueLabelFormat={valueLabelFormat}
                                                        onChange={handleChange}
                                                        valueLabelDisplay="auto"
                                                        aria-labelledby="non-linear-slider"
                                                    />
                                                </Box>
                                            </div>

                                            <p>By trading in long side,  your profit in last 24 hour:</p>

                                            <Grid container spacing={3} className="boots-cont-list">
                                                <Grid item md={6} sm={12}>
                                                    <div className="boots-cont-lists">
                                                        <h4>Normal market return</h4>
                                                        <p>12%</p>
                                                    </div>
                                                </Grid>
                                                <Grid item md={6} sm={12}>
                                                    <div className="boots-cont-lists">
                                                        <h4>Leverage account return</h4>
                                                        <p>84%</p>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Grid item md={6} sm={12}>
                                        <Box className="boost-right-graph">
                                            {/* <img src={bootsImage} alt="" /> */}
                                            <div class="css-bars">
                                                <div class="bar-list">
                                                    <div class="bar one" style={{ height: "20%" }}>
                                                        <div class="bar-value">
                                                            <span>20%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="bar-list">
                                                    <div class="bar two" style={{ height: "60%" }}>
                                                        <div class="bar-value">
                                                            <span>60%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>

                        <Container>
                            <Box className="boost-buton">
                                <p>🔥 Trade with full power </p>
                                <button className='start-trading-btn'>START TRADING</button>
                            </Box>

                        </Container>
                    </div>


                    <div className='advisor-main'>
                        <Container>
                            <Grid container spacing={3} className="advisor-cont">
                                <Grid item md={5} sm={12}>
                                    <div className='advisor-left'>
                                        <h2>We’re fortunate to have incredible investors and advisors</h2>
                                    </div>
                                </Grid>
                                <Grid item md={7} sm={12}>
                                    <div className='advisor-right'>
                                        <img src={advisorLogo} alt="icon" />
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>

                    <div className='advisors-main'>
                        <Container>
                            <Grid container spacing={3} className="advisors-cont">
                                <Grid item xs={12}>
                                    <div className='advisors-heading'>
                                        <h2>Individual Investors and Advisors</h2>
                                    </div>
                                    <div className='advisors-content'>
                                        <ul>
                                            <li>
                                                <img src={userImage1} alt='userImage' />
                                                <h5>Ross Daniel</h5>
                                                <p>CFO, Bain & Co</p>
                                            </li>
                                            <li>
                                                <img src={userImage2} alt='userImage' />
                                                <h5>Tyler Skiles</h5>
                                                <p>CFO, Bain & Co</p>
                                            </li>
                                            <li>
                                                <img src={userImage3} alt='userImage' />
                                                <h5>Darnell Bruen</h5>
                                                <p>CFO, Bain & Co</p>
                                            </li>
                                            <li>
                                                <img src={userImage4} alt='userImage' />
                                                <h5>Ross Daniel</h5>
                                                <p>CFO, Bain & Co</p>
                                            </li>
                                            <li>
                                                <img src={userImage5} alt='userImage' />
                                                <h5>Ryan Wisozk</h5>
                                                <p>CFO, Bain & Co</p>
                                            </li>
                                        </ul>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </Container>

                <div className='team-meet-main video-background'>
                    <video autoplay="true" muted loop style={{ width: "100%" }}>
                        <source src={videoMain} type="video/mp4" />
                    </video>
                    <Team />
                </div>

                <div className='countMatter-main'>
                    <Container>
                        <Grid container spacing={3} className="countMatter-cont">
                            <Grid item xs={12}>
                                <div className='countMatter-heading'>
                                    <h2>Some count that matters</h2>
                                    <p>Our achievement in the journey depicted in numbers</p>
                                </div>
                                <div className='countMatter-content'>
                                    <Grid container spacing={3} className='countMatter-content-lists'>
                                        <Grid container item xs={3} className='countMatter-lists'>
                                            <div className='countMatter-list'>
                                                <h4>40+</h4>
                                                <p>Users </p>
                                            </div>
                                        </Grid>
                                        <Grid container item xs={3} className='countMatter-lists'>
                                            <div className='countMatter-list'>
                                                <h4>540+</h4>
                                                <p>Listed Coins</p>
                                            </div>
                                        </Grid>
                                        <Grid container item xs={3} className='countMatter-lists'>
                                            <div className='countMatter-list'>
                                                <h4>300+</h4>
                                                <p>24hrs Volume</p>
                                            </div>
                                        </Grid>
                                        <Grid container item xs={3} className='countMatter-lists'>
                                            <div className='countMatter-list'>
                                                <h4>25+</h4>
                                                <p>Awards Won</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div className='refer-earn-main'>
                    <Container>
                        <div className='refer-earn-content'>
                            <Box className='refer-earn-heading'>
                                <h2><span>Refer</span> and Earn</h2>
                                <img src={referIcon} alt="refer" />
                            </Box>

                            <Grid container spacing={3} className="refer-earn-contents">
                                <Grid item xs={8} p-0>
                                    <div className="refer-earn-cont">
                                        <h3>Invite Friends & Earn INR 100 Amazon vouchers</h3>
                                        <p>For every friend who joins Density and deposit $50 and Trade, we’ll reward you with INR 100 Amazon vouchers and your friend will get additional $10 rewards in wallet.</p>
                                        <button className='start-trading-btn'>REFER NOW</button>
                                    </div>
                                </Grid>
                                <Grid item xs={4} p-0>
                                    <div className='refer-earn-img'>
                                        <img src={referImage} alt="refer" />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

                <div className='faq-main'>
                    <Container>
                        <div className='faq-content'>
                            <Box className='faq-heading'>
                                <h2>FAQs</h2>
                            </Box>
                            <Grid container spacing={3} className="faq-cont">
                                <Grid item md={6} sm={12}>
                                    <div className="faq-left">
                                        <img src={faqImage} alt="" />
                                    </div>
                                </Grid>
                                <Grid item md={6} sm={12} className="faq-right">
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>What is crypto currency? </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Where can I buy crypto in India?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Why should I trade in Crypto Futures?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Is crypto trading legal in India?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Why should I trade in crypto futures?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Why should I use Density exchange?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

            </div>
            <Footer />
        </div >
    );
}

export default Home;
