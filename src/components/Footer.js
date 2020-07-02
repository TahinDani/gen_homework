import React, { Component } from 'react';
import '../styles/Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="content-container">
                    <div className="Footer-links">
                        <a href="#">Jogi közlemény</a>
                        <a href="#">Adatkezelés</a>
                        <a href="#">Adóügyi illetőség</a>
                        <a href="#">Határozatok</a>
                        <a href="#">Pénzügyi navigátor</a>
                        <a href="#">Karrier</a>
                        <a href="#">Korábbi ERGO eszközalapokkal kapcsolatos információk</a>
                    </div>
                    <div className="Footer-social">
                        <img src="/images/fb.svg" alt=""/>
                        <img src="/images/insta.svg" alt=""/>
                        <img src="/images/yt.svg" alt=""/>
                        <img src="/images/linkedin.svg" alt=""/>
                    </div>
                    <div className="Footer-copyright">
                        <div>© GENERALI BIZTOSÍTÓ ZRT.</div>
                        <div>A GENERALI CSOPORT TAGJA</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;