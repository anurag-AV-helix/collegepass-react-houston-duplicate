import axios from 'axios'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import './styles.css'

const Dashboard = () => {

  return (
        <Container fluid className="w-100">
            <Row className="mt-5 mb-5 p-4" style={{
                background: 'rgb(45, 47, 68)',
                position: 'sticky',
                zIndex: '10',
                left: '10.55%',
                right: '3.6%',
                top: '-8%',
                height: 'auto'
            }}>
                <Col>
                    <Row className='text-center mt-2 mb-4 pt-3 pb-3' style={{
                            background: '#27293d',
                            border: '1px solid #3f3f40'
                        }}>
                        <Col>
                            <Form.Group controlId="dob">
                                <Form.Label>Date From</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date From" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="dob">
                                <Form.Label>Date To</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date From" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <a href="#"><p className='pt-4 mt-2 pb-0'>Clear all filters</p></a>
                        </Col>
                    </Row>

                    <Row className='text-center mt-2 mb-2 pt-3 pb-3' style={{
                        background: '#27293d',
                        border: '1px solid #3f3f40'
                    }}>
                        <Col>
                            <DropdownMultiselect
                                options={["8", "9", "10", "11", "12", "Undergraduate"]}
                                name="Relevant Grades"
                            />
                        </Col>
                        <Col>
                            <DropdownMultiselect
                                options={["US", "UK", "Canada", "Europe", "Singapore", "Hongkong"]}
                                name="countries"
                            />
                        </Col>
                        <Col>
                            <DropdownMultiselect
                                options={["1", "2", "3", "4", "5", "6"]}
                                name="Specialization"
                            />
                        </Col>
                        <Col>
                            <Button>Ivy League</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mb-5 p-4" style={{
                background: '#2d2f44',
                }}>
                <Col>
                    <Form>
                    <Row className="mb-3">
                        <h3 className="title">
                            {/*<Link to="/notifications">
                            <i className="bi bi-arrow-left"></i>
                            </Link>*/}
                            User Stats
                        </h3>
                    </Row>
                        <Row>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box box m-2 p-3">
                                        <Row>
                                            <Col className="text-center color-white">Total Users</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>12000</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-up" aria-hidden="true"></i> 567</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">Monthly Active Users</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>4320</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-down" aria-hidden="true"></i> 45</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">Total Plus Users</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>689</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-up" aria-hidden="true"></i> 23</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">Total Premium Plus Users</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>69</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-up" aria-hidden="true"></i> 6</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">UG Admissions Landing Page Visit</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>354</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-up" aria-hidden="true"></i> 36</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">SAT Landing Page Visits</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>31</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-down" aria-hidden="true"></i> 4</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">UG Admissions Landing Page submitted</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>14</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-up" aria-hidden="true"></i>23</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3 ">
                                        <Row>
                                            <Col className="text-center color-white">SAT Landing Page submitted</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>123</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-down" aria-hidden="true"></i> 14</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

            <Row className="mt-5 mb-5 p-4" style={{
                background: '#2d2f44'
                }}>
                <Col>
                    <Form>
                    <Row className="mb-3">
                        <h3 className="title">
                            {/*<Link to="/notifications">
                            <i className="bi bi-arrow-left"></i>
                            </Link>*/}
                            Engagement (Time) Stats
                        </h3>
                    </Row>
                        <Row>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box box m-2 p-3">
                                        <Row>
                                            <Col className="text-center color-white">Time Spent</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>3400 <span>mins</span></h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-up" aria-hidden="true"></i> 567</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">Time spent by Monthly Active Users</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>4320</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-down" aria-hidden="true"></i> 33</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">Time spent by Plus users</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>8760 <span>mins</span></h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-up" aria-hidden="true"></i> 23</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">Avg. time spent per MAU</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>34 <span>mins</span></h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-up" aria-hidden="true"></i> 13</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

            <Row className="mt-5 mb-5 p-4" style={{
                background: '#2d2f44'
                }}>
                <Col>
                    <Form>
                    <Row className="mb-3">
                        <h3 className="title">
                            {/*<Link to="/notifications">
                            <i className="bi bi-arrow-left"></i>
                            </Link>*/}
                            Engagement Stats - Detailed
                        </h3>
                    </Row>
                        <Row>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box box m-2 p-3">
                                        <Row>
                                            <Col className="text-center color-white">No. of Videos watched</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>58</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-up" aria-hidden="true"></i> 27</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">No. of unique Videos watched</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>33</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-down" aria-hidden="true"></i> 18</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">Chance Calculator</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>4587</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-up" aria-hidden="true"></i> 223</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">GPA ConverterU</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>2214</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-down" aria-hidden="true"></i> 45</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">Contact Us Page</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>112</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-down" aria-hidden="true"></i> 11</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <Row>
                                    <Col className="box m-2 p-3">
                                        <Row>
                                            <Col className=" text-center color-white">Submit Contact Us</Col>
                                        </Row>
                                        <Row>
                                            <Col className="box-value"><h5>22</h5></Col>
                                            <Col className="value-icon"><h6><i className="fa fa-caret-up" aria-hidden="true"></i> 3</h6></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

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

export default Dashboard
