//import axios from 'axios'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import './styles.css'

const Series = () => {

  return (
        <Container fluid className="w-100">
          <Row className="mb-3">
            <h3 className="title">
              <Link to="/series">
                <i className="bi bi-arrow-left"></i>
              </Link>
              Series
            </h3>
          </Row>
          <Row className="mb-3 p-4" style={{
              background: '#2d2f44',
              }}>
              <Col>
                  <Form>
                      <Row>
                          <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Series Name</h6></Col>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6><input type="text" /></h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                          <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={7} md={7} sm={12} xs={12} className="value-form"><h6>Series Thumbnail</h6></Col>
                                          <Col lg={5} md={5} sm={12} xs={12} className="value-form"><h6 style={{
                                            textAlign: 'right'
                                          }}><input className="form-control" type="file" id="formFile" /></h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                          <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Series Trailer</h6></Col>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6><input type="text" /></h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="mb-4 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={12} md={12} sm={12} xs={12} className="value-form">
                                              <h6>
                                                <label style={{
                                                paddingBottom: '10px'
                                              }}>Series Description</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                              </h6>
                                          </Col>
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
                          <Col className="mb-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Series Tags</h6></Col>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6 style={{
                                            textAlign: 'right'
                                          }}>
                                            <DropdownMultiselect
                                                options={["8", "9", "10", "11", "12", "Undergraduate"]}
                                                name="Series Tags"
                                                value=""
                                                placeholder="Select Tags"
                                            />
                                      </h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>
                  </Form>
              </Col>
          </Row>

          <Row className="mb-3 p-4" style={{
              background: '#2d2f44',
              }}>
              <Col>
                  <Form>
                      <Row>
                        <Col className="mb-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Add Video/Episode</h6></Col>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6 style={{
                                            textAlign: 'center',
                                            cursor: 'pointer'
                                          }}>
                                            <i className="fa fa-plus-circle" aria-hidden="true" style=
                                            {{fontSize: '35px'}}></i>
                                      </h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                          <Col className="mb-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          </Col>
                      </Row>
                      <Row>
                          <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={4} md={4} sm={12} xs={12} className="value-form"><h6>Episode Name</h6></Col>
                                          <Col lg={8} md={8} sm={12} xs={12} className="value-form"><h6 style={{
                                            textAlign: 'right'
                                          }}>
                                            <input type="text" />
                                      </h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                          <Col className="mb-4 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Episode Thumbnail</h6></Col>
                                          
                                            <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6 style={{
                                                    textAlign: 'right'
                                                }}>
                                                    <input className="form-control" type="file" id="formFile" />
                                            </h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                          <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Episode Vimeo Link </h6></Col>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6><input type="text" /></h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                          <Col className="mb-4 col-lg-1 col-md-1 col-sm-12 col-xs-12">
                            <Row>
                                <Col className="box box m-2 p-2">
                                    <Row>
                                        <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6 style={{
                                            textAlign: 'center',
                                            fontSize: '12px',
                                            color: '#c852e6'
                                        }}>Paid<div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" style={{
                                                marginLeft: '-5px',
                                                marginTop: '10px'
                                            }} />
                                          </div></h6></Col>
                                    </Row>
                                </Col>
                            </Row>               
                          </Col>
                      </Row>
                      <Row>
                          <Col className="mb-4 col-lg-11 col-md-11 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6 style={{
                                            textAlign: 'left',
                                          }}>
                                              <label style={{
                                                paddingBottom: '10px'
                                              }}>Episode Description</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                      </h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                          <Col className="mb-4 col-lg-1 col-md-1 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="mt-5 pt-4">
                                  <i class="fa fa-minus-circle" aria-hidden="true" style=
                                    {{
                                        fontSize: '35px',
                                        cursor: 'pointer',
                                        color: '#ffffff',
                                        opacity: '0.6',
                                    }}></i>
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

export default Series