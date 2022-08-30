import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link
} from "@material-ui/core";


const Footer = () => <>
        <AppBar position="static" elevation={0} component="footer" color="default">
        <Grid container justify="center" style={{minHeight: "212px"}}>
        <Grid item sm={5} xs={11}>
                    <Typography variant="caption">
                    © Copyright 2022 Alma Health Platform Limited. Publishing rights reserved.
                    </Typography>
                </Grid>
                <Grid item sm={5} xs={11}>
                    
                    <Typography variant="caption">
              
                    <Link href="https://almahealth.io/about-us/">About us</Link>
                    &emsp;
                    <Link href="https://almahealth.io/contact-us/">Contact us</Link> 
                    &emsp;
                    <Link href="https://almahealth.io/terms-conditions/">Terms and Conditions  </Link> 
                    &emsp;
                    <Link href="https://almahealth.io/privacy-policy/">Privacy Policy  </Link>
                    &emsp;
                    <Link href="https://almahealth.io/patient-center/patients-rights/">Patient Center  </Link>
                  
                    </Typography>
                </Grid>
                <Grid container justify="left" >
                <Grid item sm={5} xs={11}>
                <Typography >
                <figure class="wp-caption">
										<img src="https://almahealth.io/wp-content/uploads/elementor/thumbs/payment_options-pjjaq67tgxgz1djsg5bndqjchm3xrkr3z78q0a4c1s.png" title="payment_options" alt="payment_options"/>											
                    <figcaption class="widget-image-caption wp-caption-text">Accepted</figcaption>
										</figure>
                
                </Typography>
                </Grid>
                </Grid>

                </Grid>
                
                

                
                
            
        </AppBar>
    </>

export default Footer;