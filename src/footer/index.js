import * as React from 'react';
import logo from '../images/logo.png';
import { Box, Grid, Container, Link, Typography, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Linkdin from '../images/linkdin.png';
import Twitter from '../images/twitter.png';
import Decord from '../images/decord.png';
import Instagram from '../images/instagram.png';



const Footer = () => {

    return (
        <div className='footer-main'>
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={6} sm={12}>
                        <Box className='footer-first'>
                            <img src={logo} alt="logo" />
                            <p>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... <Link href='#'>Read More</Link></p>
                            <Box className='footer-icons'>
                                <IconButton aria-label="Example">
                                    <img src={Linkdin} alt='linkdin' />
                                </IconButton>
                                <IconButton aria-label="Example">
                                    <img src={Twitter} alt='Twitter' />
                                </IconButton>
                                <IconButton aria-label="Example">
                                    <img src={Decord} alt='Decord' />
                                </IconButton>
                                <IconButton aria-label="Example">
                                    <img src={Instagram} alt='Instagram' />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={2} sm={4} className='footer-links'>
                        <h4>About</h4>
                        <Link href="#" textAlign="left">About us</Link>
                        <Link href="#" textAlign="left">Blog</Link>
                        <Link href="#" textAlign="left">Careers</Link>
                        <Link href="#" textAlign="left">Jobs</Link>
                        <Link href="#" textAlign="left">In Press</Link>
                    </Grid>
                    <Grid item md={2} sm={4} className='footer-links'>
                        <h4>Support</h4>
                        <Link href="#" textAlign="left">Contact us</Link>
                        <Link href="#" textAlign="left">Online Chat</Link>
                        <Link href="#" textAlign="left">Whatsapp</Link>
                        <Link href="#" textAlign="left">Telegram</Link>
                        <Link href="#" textAlign="left">Ticketing</Link>
                    </Grid>
                    <Grid item md={2} sm={4} className='footer-links'>
                        <h4>FAQ</h4>
                        <Link href="#" textAlign="left">Account</Link>
                        <Link href="#" textAlign="left">Manage Deliveries</Link>
                        <Link href="#" textAlign="left">Orders</Link>
                        <Link href="#" textAlign="left">Payments</Link>
                        <Link href="#" textAlign="left">Payments</Link>
                    </Grid>
                    <Grid item xs={12} className="footer-copyright">
                        <Typography>© 2022-2022, All Rights Reserved</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
export default Footer;
