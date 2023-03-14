import React from "react";
import "../styles/Footer.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import facebookIcon from "../assets/facebook.png"
import githubIcon from "../assets/github.png"
import envantoIcon from "../assets/envato.png"
import linkedInIcon from "../assets/linkedin.png"
import instagramIcon from "../assets/instagram.png"
import twitterIcon from "../assets/twitter.png"
import pinterestIcon from "../assets/pinterest.png"
import flickIcon from "../assets/flickr.png"
import youtubeIcon from "../assets/youtube.png"
import dribbleIcon from "../assets/dribble.png"


function Footer() {
  return (
    <div className="footer-wrap">
      <div className="textAlign">
        <h2>Code Cloud</h2>
        <div className="maps">
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover id={`popover-positioned-${"top"}`}>
                <Popover.Header as="h3">{`25724 Hayden Prairie Ct,
                  Aldie, Va 20105`}</Popover.Header>
                <Popover.Body>
                  <a
                    style={{ color: "#04a3cf" }}
                    href="https://www.google.com/maps/place/25724+Hayden+Prairie+Ct,+Aldie,+VA+20105,+USA/@38.9061041,-77.5536966,17z/data=!3m1!4b1!4m5!3m4!1s0x89b641f9f1658921:0xf63c50a5b8d86998!8m2!3d38.9061041!4d-77.5515079"
                    target="_blank"
                  >
                    View Map
                  </a>
                </Popover.Body>
              </Popover>
            }
          >
            <h6 className="map-name">VIRGINA</h6>
          </OverlayTrigger>

          <h6>/</h6>
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover id={`popover-positioned-${"top"}`}>
                <Popover.Header as="h3">{`3365 WRAY Court,
                  Loveland, CO 80538`}</Popover.Header>
                <Popover.Body>
                  <a
                    style={{ color: "#04a3cf" }}
                    href="https://www.google.com/maps/place/3365+Wray+Ct,+Loveland,+CO+80538,+USA/@40.4234944,-105.1252747,17z/data=!3m1!4b1!4m5!3m4!1s0x8769521fa7a2f0d3:0x6c9414986a72ff7c!8m2!3d40.4234944!4d-105.123086"
                    target="_blank"
                  >
                    View Map
                  </a>
                </Popover.Body>
              </Popover>
            }
          >
            <h6 className="map-name">DENVER</h6>
          </OverlayTrigger>

          <h6>/</h6>
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover id={`popover-positioned-${"top"}`}>
                <Popover.Header as="h3">{`1001 main Street West Hamilton,L8S 1A9`}</Popover.Header>
                <Popover.Body>
                  <a
                    style={{ color: "#04a3cf" }}
                    href="https://www.google.com/maps/place/1001+Main+St+W,+Hamilton,+ON+L8S+1A9,+Canada/@43.257515,-79.9078591,17z/data=!3m1!4b1!4m5!3m4!1s0x882c9b45242922c7:0xb331ab6a1b65b6ee!8m2!3d43.257515!4d-79.9056704"
                    target="_blank"
                  >
                    View Map
                  </a>
                </Popover.Body>
              </Popover>
            }
          >
            <h6 className="map-name">HAMILTON</h6>
          </OverlayTrigger>

          <h6>/</h6>
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover id={`popover-positioned-${"top"}`}>
                <Popover.Header as="h3">{`Vlamoven 34
6826 TN, Arnhem`}</Popover.Header>
                <Popover.Body></Popover.Body>
              </Popover>
            }
          >
            <h6 className="map-name">AMSTERDAM</h6>
          </OverlayTrigger>

          <h6>/</h6>
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover id={`popover-positioned-${"top"}`}>
                <Popover.Header as="h3">{`510, Sakar 2, Ellisbridge, Ashram Rd, Ahmedabad, Gujarat 380006`}</Popover.Header>
                <Popover.Body>
                  <a
                    style={{ color: "#04a3cf" }}
                    href="https://www.google.com/maps/place/KrishaWeb+Technologies+Pvt.+Ltd./@23.026946,72.5559793,17z/data=!3m1!4b1!4m5!3m4!1s0x395e84f7c8824d8b:0x8fffe3d6c166ffd!8m2!3d23.026946!4d72.558168"
                    target="_blank"
                  >
                    View Map
                  </a>
                </Popover.Body>
              </Popover>
            }
          >
            <h6 className="map-name">AHMADABAD</h6>
          </OverlayTrigger>
        </div>
        <div className="mt-5">
          <div className="social-icons-settings">
            <a href="#"><img src={facebookIcon} alt="" /></a>
            <a href="#"><img src={githubIcon} alt="" /></a>
            <a href="#"><img src={envantoIcon} alt="" /></a>
            <a href="#"><img src={linkedInIcon} alt="" /></a>
            <a href="#"><img src={instagramIcon} alt="" /></a>
            <a href="#"><img src={twitterIcon} alt="" /></a>
            <a href="#"><img src={pinterestIcon} alt="" /></a>
            <a href="#"><img src={flickIcon} alt="" /></a>
            <a href="#"><img src={youtubeIcon} alt="" /></a>
            <a href="#"><img src={dribbleIcon} alt="" /></a>
          </div>
          {/* <hr className="hor-line" /> */}
        </div>



        <div className="footer-bottom-div">
          <button className="download-profile-btn">
              DOWNLAOD COMPANY PROFILE{" "}
          </button>
          <div>
            <h6>© 2023 KrishaWeb All rights reserved. Privacy Policy</h6>
          </div>
          <button className="download-profile-btn">SUBSCRIBE </button>
        </div>
      </div>
    </div>
  );
}
export default Footer;