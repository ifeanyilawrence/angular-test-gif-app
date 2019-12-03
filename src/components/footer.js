import React from 'react';

const serviceSection = (
    <section id="service" className="service section">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-6">
                    <h4>We're expert to create beautiful design & smart technology</h4>
                    <p>Nullam at enim mauris. Donec et nunc ipsum. Suspendi tempus fringilla ipsu Cras metus euismod velit gravida at nunc ipsum.</p>
                </div>
                <div className="col-md-7 col-sm-6">
                    <div className="col-md-4 col-sm-6 service text-center"> <span className="icon icon-browser"></span>
                        <div className="service-content">
                            <h5>Web & Mobile</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 service text-center"> <span className="icon icon-trophy"></span>
                        <div className="service-content">
                            <h5>Branding</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 service text-center"> <span className="icon icon-megaphone"></span>
                        <div className="service-content">
                            <h5>Digital Marketing</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const mainFooter = (
    <footer className="footer">
        <div className="container">
            <div className="col-md-6 left">
                <h4>Let's work together</h4>
                <p> Call: 612.269.8419 OR Email : <a href="mailto:hello@agency.com"> hello@agency.com </a></p>
            </div>
            <div className="col-md-6 right">
                <p>© 2015 All rights reserved. All Rights Reserved</p><br/>>
                <p>Made with <i className="fa fa-heart pulse"></i> by <a href="http://www.designstub.com/">Designstub</a></p>
            </div>
        </div>
    </footer>
);

export const Footer = () => {
    return (
        <div>
            {serviceSection}
            {mainFooter}
        </div>
    )
}