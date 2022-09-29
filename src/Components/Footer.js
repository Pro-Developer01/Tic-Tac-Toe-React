import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(props) {


    return (
        <footer>

            <div className="Footer">
                <hr
                //   style={{color: props.mode==='light'?'grey':'#c3bebe'}} 
                ></hr>
                <div className="container" >
                    <center>

                        <h3
                        //   style={{color: props.mode==='light'?'black':'white'}}
                        >Contact The Developer</h3>

                        <div className="icons">
                            <a
                                href="https://api.whatsapp.com/send?phone=918948492799&text=Hello,%20I%20visited%20your%20text%20Utils%20website."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsAppIcon />
                            </a>
                            <a
                                href="http://www.linkedin.com/in/shashank-yadav-93b35b163/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon />
                            </a>
                            <a
                                href="mailto:yadavshashank70@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <EmailIcon style={{    color:' #551A8B'}}/>
                            </a>
                            <a
                                href="https://github.com/Pro-Developer01"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHubIcon />
                            </a>
                        </div>

                        <p className="copyright"
                        // style={{color: props.mode==='light'?'rgb(88, 87, 87)':'#c3bebe'}}
                        >Copyright &copy; 2022 - Shashank </p>
                    </center>
                </div>
            </div>
        </footer>
    );
}