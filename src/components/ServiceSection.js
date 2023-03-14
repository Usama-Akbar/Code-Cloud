import React from 'react'
import "../styles/ServiceSection.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






export default function ServiceSection() {
    return (
        <>
        <div className='ServiceSection-main-div'>
            <Container>
                <Row className='text-center'>
                    <Col>
                        <div className='ServiceBox'>
                            <div className='service-icon websitedevelopment'>
                                <i className='fa fa-code'></i>
                            </div>
                            <div>
                                <h3 className='title'>Website Development</h3>
                                <p className='description'>We are experts in web development; RK Infotech takes care of all your development needs.</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='ServiceBox'>
                            <div className='service-icon appdevelopment'>
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <div>
                                <h3 className='title'>App Development</h3>
                                <p className='description'>We are committed to providing excellence in our iOS and Android application development services.</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='ServiceBox'>
                            <div className='service-icon graphicdesign'>
                                <i className='fas fa-bezier-curve'></i>
                            </div>
                            <div>
                                <h3 className='title'>Graphic Design</h3>
                                <p className='description'>We design, develop and print innovative graphic designs as per the client requirements.</p>
                            </div>
                        </div>
                    </Col>
                </Row>


                <Row className='text-center'> 
                    <Col>
                        <div className='ServiceBox'>
                            <div className='service-icon softwaredevelopment'>
                                <i class="fas fa-desktop"></i>
                            </div>
                            <div>
                                <h3 className='title'>Software Development</h3>
                                <p className='description'>If you are looking for an effective software development company, your search ends here with us!</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='ServiceBox'>
                            <div className='service-icon seobybestitcompany'>
                                <i class="fas fa-search"></i>
                            </div>
                            <div>
                                <h3 className='title'>SEO By Best IT Company</h3>
                                <p className='description'>RK Infotech provides the best and affordable SEO services with proper SEO strategy, plans, and suggestions.</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='ServiceBox'>
                            <div className='service-icon productdevelopment'>
                                <i className='fas fa-cogs'></i>
                            </div>
                            <div>
                                <h3 className='title'>Product Development</h3>
                                <p className='description'>We have mastered the art of custom software developments per the client's requirements.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
      );
}
