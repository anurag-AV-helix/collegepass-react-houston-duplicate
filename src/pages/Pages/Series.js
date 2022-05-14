//import axios from 'axios'
import { Container, Row, Col, Button, Card, Form, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import './styles.css'

const Series = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                          <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6>Series Name</h6></Col>
                                          <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6><input type="text" /></h6></Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                          <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={12} md={12} sm={12} xs={12}><label className="color-light-pink form-label" style={{
                                                fontSize: '10px'
                                            }}>Image Banner For Registration Page (990*360): <a href="#" alt="banner image" rel="noreferrer" target="_blank">Open current banner image</a></label></Col>
                                          <Col lg={7} md={7} sm={12} xs={12} className="value-form"><h6>Series Thumbnail</h6></Col>
                                          <Col lg={5} md={5} sm={12} xs={12} className="value-form"><h6 style={{
                                            textAlign: 'right'
                                          }}>
                                              <label for="files" className="btn m-0" style={{
                                                                background: '#cc52e0',
                                                                color: '#ffffff',
                                                                padding: '0px 10px'
                                                            }}>Select</label>
                                                <input id="files" style={{display: 'none'}} type="file" />
                                            </h6>
                                            </Col>
                                      </Row>
                                  </Col>
                              </Row>
                          </Col>
                          <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6>Series Trailer</h6></Col>
                                          <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6><input type="text" /></h6></Col>
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
                      <Row>    
                          <Col className="mb-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <Row>
                                  <Col className="box box m-2 p-3">
                                      <Row>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Release Time</h6></Col>
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6 style={{
                                            textAlign: 'right'
                                          }}>
                                            <Form.Group controlId="rd">
                                              <Form.Control type="time" name="rd" placeholder="" />
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
                                          <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Countries Tags</h6></Col>
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
                      <Row className="plus-form-sep">
                          <Col>
                            <Row>
                                <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <Row>
                                        <Col className="box box m-2 p-3">
                                            <Row>
                                                <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6>Episode Name</h6></Col>
                                                <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6 style={{
                                                    textAlign: 'right'
                                                }}>
                                                    <input type="text" />
                                            </h6></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <Row>
                                        <Col className="box box m-2 p-3">
                                            <Row>
                                                <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6>Episode Vimeo Link </h6></Col>
                                                <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6><input type="text" /></h6></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="mb-4 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <Row>
                                        <Col className="box box m-2 p-2">
                                            <Row>
                                            <Col lg={12} md={12} sm={12} xs={12}><label className="color-light-pink form-label" style={{
                                                fontSize: '10px'
                                            }}>Image Banner For Registration Page (990*360): <a href="#" alt="banner image" rel="noreferrer" target="_blank">Open current banner image</a></label></Col>
                                                <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Episode Thumbnail</h6></Col>
                                                
                                                    <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6 style={{
                                                            textAlign: 'right'
                                                        }}>
                                                            <label for="files" className="btn m-0" style={{
                                                                background: '#cc52e0',
                                                                color: '#ffffff',
                                                                padding: '0px 10px'
                                                            }}>Select</label>
                                                            <input id="files" style={{display: 'none'}} type="file" />
                                                    </h6></Col>
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
                                                }}>PLUS<div className="form-check form-check-inline">
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
                                <Col className="mb-4 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                    <Row>
                                        <Col className="box box m-2 p-3">
                                            <Row>
                                                <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6 style={{
                                                    textAlign: 'left',
                                                }}>
                                                    <label style={{
                                                        paddingBottom: '10px'
                                                    }}>Episode Description</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                            </h6></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="mb-4 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <Row>
                                        <Col className="box box m-2 p-3">
                                            <Row>
                                                <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Duration</h6></Col>
                                            
                                                <Col lg={6} md={6} sm={12} xs={12} className="value-form">
                                                    <h6 style={{
                                                        textAlign: 'right'
                                                    }}>
                                                    <select className="custom-select" id="inputGroupSelect01">
                                                        <option selected>00</option>
                                                        <option value="1">01</option>
                                                        <option value="2">02</option>
                                                        <option value="3">03</option>
                                                        <option value="4">04</option>
                                                        <option value="5">05</option>
                                                        <option value="6">06</option>
                                                        <option value="7">07</option>
                                                        <option value="8">08</option>
                                                        <option value="9">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="13">13</option>
                                                        <option value="14">14</option>
                                                        <option value="15">15</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                        <option value="20">20</option>
                                                        <option value="21">21</option>
                                                        <option value="22">22</option>
                                                        <option value="23">23</option>
                                                        <option value="24">24</option>
                                                        <option value="25">25</option>
                                                        <option value="26">26</option>
                                                        <option value="27">27</option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="30">30</option>
                                                        <option value="31">31</option>
                                                        <option value="32">32</option>
                                                        <option value="33">33</option>
                                                        <option value="34">34</option>
                                                        <option value="35">35</option>
                                                        <option value="36">36</option>
                                                        <option value="37">37</option>
                                                        <option value="38">38</option>
                                                        <option value="39">39</option>
                                                        <option value="40">40</option>
                                                        <option value="41">41</option>
                                                        <option value="42">42</option>
                                                        <option value="43">43</option>
                                                        <option value="44">44</option>
                                                        <option value="45">45</option>
                                                    </select> 
                                                    </h6>
                                                </Col>
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
                                            }} onClick={handleShow}></i>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                      </Row>

                      <Row className="plus-form-sep">
                          <Col>
                            <Row>
                                <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <Row>
                                        <Col className="box box m-2 p-3">
                                            <Row>
                                                <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6>Episode Name</h6></Col>
                                                <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6 style={{
                                                    textAlign: 'right'
                                                }}>
                                                    <input type="text" />
                                            </h6></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="mb-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <Row>
                                        <Col className="box box m-2 p-3">
                                            <Row>
                                                <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6>Episode Vimeo Link </h6></Col>
                                                <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6><input type="text" /></h6></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="mb-4 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <Row>
                                        <Col className="box box m-2 p-2">
                                            <Row>
                                                <Col lg={12} md={12} sm={12} xs={12}><label class="color-light-pink form-label" style={{
                                                    fontSize: '10px'
                                                }}>Image Banner For Registration Page (990*360): <a href="#" alt="banner image" rel="noreferrer" target="_blank">Open current banner image</a></label></Col>
                                                    <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Episode Thumbnail</h6></Col>
                                                    
                                                        <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6 style={{
                                                                textAlign: 'right'
                                                            }}>
                                                            <label for="files" className="btn m-0" style={{
                                                                background: '#cc52e0',
                                                                color: '#ffffff',
                                                                padding: '0px 10px'
                                                            }}>Select</label>
                                                            <input id="files" style={{display: 'none'}} type="file" />
                                                    </h6></Col>
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
                                                }}>PLUS<div className="form-check form-check-inline">
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
                                <Col className="mb-4 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                    <Row>
                                        <Col className="box box m-2 p-3">
                                            <Row>
                                                <Col lg={12} md={12} sm={12} xs={12} className="value-form"><h6 style={{
                                                    textAlign: 'left',
                                                }}>
                                                    <label style={{
                                                        paddingBottom: '10px'
                                                    }}>Episode Description</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                            </h6></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="mb-4 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <Row>
                                    <Col className="box box m-2 p-3">
                                            <Row>
                                                <Col lg={6} md={6} sm={12} xs={12} className="value-form"><h6>Duration</h6></Col>
                                            
                                                <Col lg={6} md={6} sm={12} xs={12} className="value-form">
                                                    <h6 style={{
                                                        textAlign: 'right'
                                                    }}>
                                                    <select className="custom-select" id="inputGroupSelect01">
                                                    <option selected>00</option>
                                                        <option value="1">01</option>
                                                        <option value="2">02</option>
                                                        <option value="3">03</option>
                                                        <option value="4">04</option>
                                                        <option value="5">05</option>
                                                        <option value="6">06</option>
                                                        <option value="7">07</option>
                                                        <option value="8">08</option>
                                                        <option value="9">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="13">13</option>
                                                        <option value="14">14</option>
                                                        <option value="15">15</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                        <option value="20">20</option>
                                                        <option value="21">21</option>
                                                        <option value="22">22</option>
                                                        <option value="23">23</option>
                                                        <option value="24">24</option>
                                                        <option value="25">25</option>
                                                        <option value="26">26</option>
                                                        <option value="27">27</option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="30">30</option>
                                                        <option value="31">31</option>
                                                        <option value="32">32</option>
                                                        <option value="33">33</option>
                                                        <option value="34">34</option>
                                                        <option value="35">35</option>
                                                        <option value="36">36</option>
                                                        <option value="37">37</option>
                                                        <option value="38">38</option>
                                                        <option value="39">39</option>
                                                        <option value="40">40</option>
                                                        <option value="41">41</option>
                                                        <option value="42">42</option>
                                                        <option value="43">43</option>
                                                        <option value="44">44</option>
                                                        <option value="45">45</option>
                                                    </select> 
                                                    </h6>
                                                </Col>
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
                                            }} onClick={handleShow}></i>
                                        </Col>
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

          <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure? You want to delete this Video/Episode</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Yes
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    No
                </Button>
                </Modal.Footer>
            </Modal>
            
        </Container>
  )
}

export default Series