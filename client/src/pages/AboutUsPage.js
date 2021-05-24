import React from 'react';
import Helmet from 'react-helmet';
import "./AboutUsPage.css";

function AboutUsPage(props) {
  return (

    <div>
      
      <Helmet>
        <body className='about-page' />
        <html className='about-page' />
      </Helmet>

      <div>A little info about us.</div>

      <div className="container">
        <div className="row member">
            <div className="col">
              <img alt="shafiulah pic" src="" />
            </div>

            <div className="col">
              Im ___. I_____
            </div>
        </div>

        <div className="row member">
            <div className="col">
              Im ___. I_____
            </div>

            <div className="col">
              <img alt="elian pic" src="" />
            </div>
        </div>

        <div className="row member">
            <div className="col">
              <img alt="henry pic" src="" />
            </div>

            <div className="col">
              Im ___. I_____
            </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUsPage;