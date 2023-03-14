import React from 'react'
import "../styles/ITServicesWork.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import firstProject from "../assets/Giriraj-Tractors-300x300.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';








export default function ITServicesWork() {
  return (
    <>
    <div className='ITServicesWork-main-div'>
        <div className='ITServicesWork-text'>
            <h3 className='headingColor'>Our Latest IT Services Work</h3>
            <p className='paragraphColor'>If you need one of the best IT Companies for your IT service requirements, Contact Us! Check out our latest work & see how RK Infotech is adding value to our client's business.</p>
        </div>
        <Container>
            <Row className='text-center'>
                <Col md={8} lg={8} xl={8} xxl={8}>
                    <Row style={{padding:"0px"}}>
                        <Col style={{padding:"5px 0px"}}>
                            <img src={firstProject} alt="Giriraj Tractors" style={{width:"230px", height:"166px"}} />
                        </Col>
                        <Col style={{padding:"5px 0px"}}>
                            <img src={firstProject} alt="Giriraj Tractors" style={{width:"230px", height:"166px"}} />
                        </Col>
                        <Col style={{padding:"5px 0px"}}>
                            <img src={firstProject} alt="Giriraj Tractors" style={{width:"230px", height:"166px"}} />
                        </Col>
                    </Row>


                    <Row style={{padding:"0px"}}>
                        <Col style={{padding:"5px 0px"}}>
                            <img src={firstProject} alt="Giriraj Tractors" style={{width:"230px", height:"166px"}} />
                        </Col>
                        <Col style={{padding:"5px 0px"}}>
                            <img src={firstProject} alt="Giriraj Tractors" style={{width:"230px", height:"166px"}} />
                        </Col>
                        <Col style={{padding:"5px 0px"}}>
                            <img src={firstProject} alt="Giriraj Tractors" style={{width:"230px", height:"166px"}} />
                        </Col>
                    </Row>


                    <Row style={{padding:"0px"}}>
                        <Col style={{padding:"5px 0px"}}>
                            <img src={firstProject} alt="Giriraj Tractors" style={{width:"230px", height:"166px"}} />
                        </Col>
                        <Col style={{padding:"5px 0px"}}>
                            <img src={firstProject} alt="Giriraj Tractors" style={{width:"230px", height:"166px"}} />
                        </Col>
                        <Col style={{padding:"5px 0px"}}>
                            <img src={firstProject} alt="Giriraj Tractors" style={{width:"230px", height:"166px"}} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='LatestWorkButtonAlign'>
                                <div className="more-latest-work">More Latest Work</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} lg={4} xl={4} xxl={4}>
                    <div className='form-header'>
                        <span>ORDER NOW</span>
                        <p>Forms to fill out when starting a Business?</p>
                    </div>
                    <div className='form-input-fields'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Your Name *" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="email" placeholder="Email Address *" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="tel" placeholder="Phone *" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="City *" />
                            </Form.Group>


                            <div className="form-submit-button">Submit</div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}
