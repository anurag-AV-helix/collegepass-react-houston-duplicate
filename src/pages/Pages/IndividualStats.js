import axios from 'axios'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import React, { useState } from 'react'
import './styles.css'

const IndividualStats = () => {

  return (
        <Container fluid className="w-100">
            <Row className="mt-5 mb-5 p-4" style={{
                background: '#2d2f44'
                }}>
                <Col>
                    <Form>
                    <Row className="mb-3">
                        <Col>
                            <h3 className="title">
                                Individual Stats
                            </h3>
                        </Col>
                        <Col>
                            <Button className="float-right">Sort AZ</Button>
                        </Col>
                    </Row>
                        <Row>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 tile-main-box">
                                <Row>
                                    <Col className="tile-img-sec">
                                        <img src="brown_test.webp" alt="test" style={{
                                            opacity: '0.4'
                                        }} />
                                    </Col>
                                </Row>
                                <Row className="tile-text-box">
                                    <Col className="">
                                        <Row>
                                            <Col style={{
                                                marginTop: '10px',
                                            }}>
                                                <span style={{
                                                    background: '#c83232',
                                                    padding: '2px 8px',
                                                    textAlign: 'left',
                                                    marginLeft: '-25px',
                                                    marginTop: '15px',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    letterSpacing: '.12em',
                                                    lineHeight: 'normal',
                                                    textTransform: 'uppercase',
                                                    borderRadius: '4px',
                                                    transition: 'background .25s ease,box-shadow .25s ease,opacity .25s ease',
                                                    verticalAlign: 'middle',
                                                    border: '0',
                                                    fontFamily: 'Lato,Helvetica,Arial,sans-serif!important'
                                                }}>LIVE STREAM</span>
                                            </Col>
                                            <Col>
                                                <span style={{
                                                    background: '#ffffff',
                                                    padding: '2px 5px',
                                                    color: '#000000',
                                                    textAlign: 'left',
                                                    float: 'right',
                                                    marginTop: '10px',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    letterSpacing: '.12em',
                                                    lineHeight: 'normal',
                                                    textTransform: 'uppercase',
                                                    borderRadius: '4px',
                                                    transition: 'background .25s ease,box-shadow .25s ease,opacity .25s ease',
                                                    verticalAlign: 'middle',
                                                    border: '0',
                                                    fontFamily: 'Lato,Helvetica,Arial,sans-serif!important'
                                                }}>PREMIUM</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <h2 style={{
                                                            fontSize: '27px',
                                                            marginTop: '10px',
                                                            lineHeight: '30px',
                                                            textTransform: 'uppercase',
                                                            fontWeight: '800',
                                                            color: '#ffffff',
                                                            opacity: '.8'
                                                        }}>APPLIED MATH AT HARVARD</h2>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h4 style={{
                                                            fontSize: '24px',
                                                            fontWeight: '600',
                                                            letterSpacing: '-1px',
                                                            lineHeight: '1.2',
                                                            color: '#e6a851'
                                                        }}>Saturday, May 07</h4>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h6 style={{
                                                            fontWeight: '800',
                                                            color: '#fff',
                                                            opacity: '.8',
                                                            lineHeight: '1',
                                                            letterSpacing: '0',
                                                            fontSize: '17px',
                                                            marginTop: '1%'
                                                        }}>07:30 PM</h6>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Button style={{
                                                            marginTop: '3%',
                                                            background: '#c83232',
                                                            padding: '5px 10px',
                                                            borderRadius: '4px',
                                                            border: 'none',
                                                            color: '#fff',
                                                            fontSize: '14px',
                                                            letterSpacing: '.03rem',
                                                            fontWeight: '500'
                                                        }}>Notify Me</Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 tile-main-box">
                                <Row>
                                    <Col className="tile-img-sec">
                                        <img src="brown_test.webp" alt="test" style={{
                                            opacity: '0.4'
                                        }} />
                                    </Col>
                                </Row>
                                <Row className="tile-text-box">
                                    <Col className="">
                                        <Row>
                                            <Col style={{
                                                marginTop: '10px',
                                            }}>
                                                <span style={{
                                                    background: '#c83232',
                                                    padding: '2px 8px',
                                                    textAlign: 'left',
                                                    marginLeft: '-25px',
                                                    marginTop: '15px',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    letterSpacing: '.12em',
                                                    lineHeight: 'normal',
                                                    textTransform: 'uppercase',
                                                    borderRadius: '4px',
                                                    transition: 'background .25s ease,box-shadow .25s ease,opacity .25s ease',
                                                    verticalAlign: 'middle',
                                                    border: '0',
                                                    fontFamily: 'Lato,Helvetica,Arial,sans-serif!important'
                                                }}>LIVE STREAM</span>
                                            </Col>
                                            <Col>
                                                <span style={{
                                                    background: '#ffffff',
                                                    padding: '2px 5px',
                                                    color: '#000000',
                                                    textAlign: 'left',
                                                    float: 'right',
                                                    marginTop: '10px',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    letterSpacing: '.12em',
                                                    lineHeight: 'normal',
                                                    textTransform: 'uppercase',
                                                    borderRadius: '4px',
                                                    transition: 'background .25s ease,box-shadow .25s ease,opacity .25s ease',
                                                    verticalAlign: 'middle',
                                                    border: '0',
                                                    fontFamily: 'Lato,Helvetica,Arial,sans-serif!important'
                                                }}>PREMIUM</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <h2 style={{
                                                            fontSize: '27px',
                                                            marginTop: '10px',
                                                            lineHeight: '30px',
                                                            textTransform: 'uppercase',
                                                            fontWeight: '800',
                                                            color: '#ffffff',
                                                            opacity: '.8'
                                                        }}>APPLIED MATH AT HARVARD</h2>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h4 style={{
                                                            fontSize: '24px',
                                                            fontWeight: '600',
                                                            letterSpacing: '-1px',
                                                            lineHeight: '1.2',
                                                            color: '#e6a851'
                                                        }}>Saturday, May 07</h4>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h6 style={{
                                                            fontWeight: '800',
                                                            color: '#fff',
                                                            opacity: '.8',
                                                            lineHeight: '1',
                                                            letterSpacing: '0',
                                                            fontSize: '17px',
                                                            marginTop: '1%'
                                                        }}>07:30 PM</h6>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Button style={{
                                                            marginTop: '3%',
                                                            background: '#c83232',
                                                            padding: '5px 10px',
                                                            borderRadius: '4px',
                                                            border: 'none',
                                                            color: '#fff',
                                                            fontSize: '14px',
                                                            letterSpacing: '.03rem',
                                                            fontWeight: '500'
                                                        }}>Notify Me</Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 tile-main-box">
                                <Row>
                                    <Col className="tile-img-sec">
                                        <img src="brown_test.webp" alt="test" style={{
                                            opacity: '0.4'
                                        }} />
                                    </Col>
                                </Row>
                                <Row className="tile-text-box">
                                    <Col className="">
                                        <Row>
                                            <Col style={{
                                                marginTop: '10px',
                                            }}>
                                                <span style={{
                                                    background: '#c83232',
                                                    padding: '2px 8px',
                                                    textAlign: 'left',
                                                    marginLeft: '-25px',
                                                    marginTop: '15px',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    letterSpacing: '.12em',
                                                    lineHeight: 'normal',
                                                    textTransform: 'uppercase',
                                                    borderRadius: '4px',
                                                    transition: 'background .25s ease,box-shadow .25s ease,opacity .25s ease',
                                                    verticalAlign: 'middle',
                                                    border: '0',
                                                    fontFamily: 'Lato,Helvetica,Arial,sans-serif!important'
                                                }}>LIVE STREAM</span>
                                            </Col>
                                            <Col>
                                                <span style={{
                                                    background: '#ffffff',
                                                    padding: '2px 5px',
                                                    color: '#000000',
                                                    textAlign: 'left',
                                                    float: 'right',
                                                    marginTop: '10px',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    letterSpacing: '.12em',
                                                    lineHeight: 'normal',
                                                    textTransform: 'uppercase',
                                                    borderRadius: '4px',
                                                    transition: 'background .25s ease,box-shadow .25s ease,opacity .25s ease',
                                                    verticalAlign: 'middle',
                                                    border: '0',
                                                    fontFamily: 'Lato,Helvetica,Arial,sans-serif!important'
                                                }}>PREMIUM</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <h2 style={{
                                                            fontSize: '27px',
                                                            marginTop: '10px',
                                                            lineHeight: '30px',
                                                            textTransform: 'uppercase',
                                                            fontWeight: '800',
                                                            color: '#ffffff',
                                                            opacity: '.8'
                                                        }}>APPLIED MATH AT HARVARD</h2>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h4 style={{
                                                            fontSize: '24px',
                                                            fontWeight: '600',
                                                            letterSpacing: '-1px',
                                                            lineHeight: '1.2',
                                                            color: '#e6a851'
                                                        }}>Saturday, May 07</h4>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h6 style={{
                                                            fontWeight: '800',
                                                            color: '#fff',
                                                            opacity: '.8',
                                                            lineHeight: '1',
                                                            letterSpacing: '0',
                                                            fontSize: '17px',
                                                            marginTop: '1%'
                                                        }}>07:30 PM</h6>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Button style={{
                                                            marginTop: '3%',
                                                            background: '#c83232',
                                                            padding: '5px 10px',
                                                            borderRadius: '4px',
                                                            border: 'none',
                                                            color: '#fff',
                                                            fontSize: '14px',
                                                            letterSpacing: '.03rem',
                                                            fontWeight: '500'
                                                        }}>Notify Me</Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="tile-detail">
                                <p>Total No. of views -  </p>         
                                <p>No. of unique views - </p>
                                <p>Viewed on iOS - 800 times </p>
                                <p>Viewed on Android - 1200 times </p>
                                <p>Viewed on website - 240 times </p>
                                <p>Total Minutes consumed on iOS  - 200 mins </p>
                                <p>Total Minutes consumed on Android - 33 mins </p>
                                <p>Total Minutes consumed on website -  120 mins </p>
                                <p>Consumption Pattern (Total time) </p>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
  )
}

export default IndividualStats
