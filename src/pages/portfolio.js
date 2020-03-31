import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaChevronDown } from 'react-icons/fa';
import "../styles/portfolio.scss";
import "../styles/components.scss";

import constructionImage from "../images/in-construction.svg";
export default () => (
  <Layout>
    <SEO title="Portfolio" />
    {/* <h1>Portfolio</h1> */}

    <div id="portfolio-container">
      <div id="portfolio-banner">
        <h2>Professional Portfolio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit adipisci sint magni quam blanditiis soluta voluptatem fuga cupiditate tempora alias, repudiandae similique minus perferendis.</p>
      </div>
      <div id="portfolio-main">
        <section id="portfolio-sidebar">
          <div className="portfolio-sidebar--section categories">
            <span>CATEGORIES</span>
            <ul>
              <li className="active"><a href="#">Professional</a></li>
              <li><a href="#">Personal</a></li>
            </ul>
          </div>
          <div className="portfolio-sidebar--section tags">
            <span>TAGS</span>
            <ul>
              <li><a href="#">web-app</a></li>
              <li><a href="#">ui-design</a></li>
              <li><a href="#">mockup</a></li>
              <li><a href="#">mobile-app</a></li>
            </ul>
          </div>
        </section>
        <section id="portfolio-content">
          <div id="portofolio-content--header">
            <span>PROJECTS</span>
            <div id="portfolio-sort">
              <FaChevronDown/> &nbsp; SORT BY PROJECT
            </div>
          </div>
          <div id="portfolio-content--body">
            <div className="card">
              <div className="card-image" style={{ backgroundImage: "url(https://secure-images.bridestory.com/image/upload/v1458716392/banner/opengraph/tagline.png)" }}></div>
              <div className="card-body">
                <div className="card-title">bridestory</div>
                <div className="card-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eum?</div>
               </div>
            </div>

            <div className="card">
              <div className="card-image" style={{ backgroundImage: "url(https://secure-images.bridestory.com/image/upload/v1458716392/banner/opengraph/tagline.png)" }}></div>


              <div className="card-body">
                <div className="card-title">bridestory</div>
                <div className="card-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eum?</div>
               </div>
            </div>

            <div className="card">
              <div className="card-image" style={{ backgroundImage: "url(https://secure-images.bridestory.com/image/upload/v1458716392/banner/opengraph/tagline.png)" }}></div>
              <div className="card-body">
                <div className="card-title">bridestory</div>
                <div className="card-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eum?</div>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)