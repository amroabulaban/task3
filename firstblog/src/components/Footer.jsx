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
        <Grid container justify="center" style={{minHeight: "200px"}}>
        <Grid item sm={5} xs={11}>
                    <Typography variant="caption">
                    © Copyright 2022 Alma Health Platform Limited. Publishing rights reserved.
                    </Typography>
                </Grid>
                <Grid item sm={5} xs={11}>
                    
                    <Typography variant="caption">
              
                    <Link color="inherit" href="https://almahealth.io/about-us/">About us</Link>
                    &emsp;
                    <Link color="inherit" href="https://almahealth.io/contact-us/">Contact us</Link> 
                    &emsp;
                    <Link color="inherit" href="https://almahealth.io/terms-conditions/">Terms and Conditions  </Link> 
                    &emsp;
                    <Link color="inherit" href="https://almahealth.io/privacy-policy/">Privacy Policy  </Link>
                    &emsp;
                    <Link color="inherit" href="https://almahealth.io/patient-center/patients-rights/">Patient Center  </Link>
                  
                    </Typography>
                </Grid>
                <Grid container justify="left" spacing = {2} >
                <Grid item sm={2} xs={4} >
                <Typography  >
                <figure class="wp-caption">
					<img src="https://almahealth.io/wp-content/uploads/elementor/thumbs/payment_options-pjjaq67tgxgz1djsg5bndqjchm3xrkr3z78q0a4c1s.png" title="payment_options" alt="payment_options"/>											
                    <figcaption class="widget-image-caption wp-caption-text">Accepted</figcaption>
					</figure>
                    
                
                </Typography>
                </Grid>
                <Grid item sm={2} xs={4}>
                <Typography>
                <img width="130" height="90" src="https://almahealth.io/wp-content/uploads/2020/10/HIPAA-Seal-footer.jpg" alt=" "/>											
                </Typography>
                </Grid>
                </Grid>
                <Grid container justify="flex-end" spacing = {3} >
                <Grid item sm={2} xs={1}>
                <h5 class="elementor-heading-title elementor-size-default">A member of</h5>
                </Grid>
                <Grid item sm={1} xs={1}>
                    <img width= "54" height="18" src= "https://almahealth.io/wp-content/uploads/elementor/thumbs/Hub71_Logo_Black_RGB-01-pjjaq67tgxh780hi6ksmskvcn5hm9xjl0lfutgqbcw.png" alt=" "/>
                </Grid>
                <Grid item sm={1} xs={1}>
                    <img width= "54" height="47" src= "https://almahealth.io/wp-content/uploads/elementor/thumbs/ghadan-pjjaq67tgxh780hi6ksmskvcn5hm9xjl0lfutgqbcw.jpg" alt=" "/>
                </Grid>
                </Grid>
                </Grid>
                
                

                
                
            
        </AppBar>
    </>

export default Footer;