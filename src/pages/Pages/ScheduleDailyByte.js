//import axios from 'axios'
import { Container, Row, Col, Button, Card, Form, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import './styles.css'

const ScheduleDailyByte = () => {

  return (
        <Container fluid className="w-100">
          <Row className="mb-3">
            <h3 className="title">
              <Link to="/series">
                <i className="bi bi-arrow-left"></i>
              </Link>
              Daily Byte
            </h3>
          </Row>
          <Row className="mb-3 p-4" style={{
              background: '#2d2f44',
              }}>
              <Col>
                  <Form>
                      <Row>
                          <Col className="mb-6 col-lg-6 col-md-4 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Byte Title</h6></Col>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6><input type="text" /></h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                          <Col className="mb-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row className="byte-date">
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Release Date</h6></Col>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6 style={{
                                            textAlign: 'right'
                                          }}>
                                            <Form.Group controlId="rd">
                                              <Form.Control type="date" name="rd" placeholder="" />
                                            </Form.Group>
                                      </h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>
                      <Row>
                        <Col className="mb-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <Row>
                                <Col className="box box m-2 p-3">
                                    <Row>
                                        <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Byte Video Link </h6></Col>
                                        <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6><input type="text" placeholder="Vimeo Link" /></h6></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mb-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row className="byte-date">
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Expires on</h6></Col>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6 style={{
                                            textAlign: 'right'
                                          }}>
                                            <Form.Group controlId="rd">
                                              <Form.Control type="date" name="rd" placeholder="" />
                                            </Form.Group>
                                      </h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="value-form mt-4 mb-3" style={{
                              textAlign: 'center'
                          }}>
                            <Button>Save</Button>
                          </Col>
                      </Row>
                  </Form>
              </Col>
          </Row>
        </Container>
  )
}

export default ScheduleDailyByte