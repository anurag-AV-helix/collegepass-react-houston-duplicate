/* eslint-disable radix */
import React, { useState } from 'react'
import Axios from 'axios'
import moment from 'moment'
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { insertNewClass } from '../../utils/config/API'

const AddClass = () => {
  const [uploadObj, setUploadObj] = useState({
    classID: 0,
    dateTime: '',
    zoomID: '',
    password: '',
    description: '',
  })

  const [classDateTime, setClassDateTime] = useState()

  const DefaultSATERW = {
    zoomId: '84647706818',
    password: '891941',
  }

  const DefaultSATMATH = {
    zoomId: '88480473846',
    password: '434999',
  }

  const DefaultSATMasterClass = {
    zoomId: '92090758171',
    password: '729993',
  }

  const classOnChangeSelection = (e) => {
    const val = e.target.value
    if (e.target.value === '1') {
      setUploadObj({
        ...uploadObj,
        classID: parseInt(val),
        zoomID: DefaultSATERW.zoomId,
        password: DefaultSATERW.password,
      })
    } else if (e.target.value === '2') {
      setUploadObj({
        ...uploadObj,
        classID: parseInt(val),
        zoomID: DefaultSATMATH.zoomId,
        password: DefaultSATMATH.password,
      })
    } else if (e.target.value === '3') {
      setUploadObj({
        ...uploadObj,
        classID: parseInt(e.target.value),
        zoomID: DefaultSATMasterClass.zoomId,
        password: DefaultSATMasterClass.password,
      })
    } else if (e.target.value === '4') {
      setUploadObj({
        ...uploadObj,
        classID: parseInt(e.target.value),
        zoomID: '',
        password: '',
      })
    } else if (e.target.value === '5') {
      setUploadObj({
        ...uploadObj,
        classID: parseInt(e.target.value),
        zoomID: '',
        password: '',
      })
    }
  }

  const handleSubmit = () => {
    Axios.put(insertNewClass, uploadObj, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then(() => {
      window.open('/classes', '_self')
    })
  }

  return (
    <Container fluid className="w-100">
      <Row className="mb-3">
        <h3 className="title">
          <Link to="/classes">
            <i className="bi bi-arrow-left"></i>
          </Link>
          ADD CLASS
        </h3>
      </Row>

      <Row className="mb-3">
        <Form>
          <Row>
            <Col className="mb-4">
              <FloatingLabel
                controlId="grade"
                label="Grade"
                className="fs-6 color-light-pink"
              >
                <Form.Select
                  className="bg-grey color-white"
                  aria-label="Floating label select example"
                  defaultValue={uploadObj.classID}
                  name="classId"
                  onChange={(e) => {
                    classOnChangeSelection(e)
                  }}
                >
                  <option value={0} disabled>
                    --Select--
                  </option>
                  <option value={1}>SAT ERW</option>
                  <option value={2}>SAT Masterclass Math</option>
                  <option value={3}>SAT Masterclass Pro</option>
                  <option value={4}>AP</option>
                  <option value={5}>IELTS</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col className="mb-4">
              <FloatingLabel
                controlId="eventDate"
                label="Event Date"
                className="fs-6 color-light-pink"
              >
                <Form.Control
                  className="bg-grey color-white"
                  format="YYYY-MM-DDTHH:mm:ss.SSS"
                  type="datetime-local"
                  placeholder="Event Date"
                  value={classDateTime}
                  name="eventDate"
                  onChange={(e) => {
                    setClassDateTime(e.target.value)
                    setUploadObj({
                      ...uploadObj,
                      dateTime: `${moment(e.target.value)
                        .utc()
                        .format('YYYY-MM-DDTHH:mm:ss.SSS')}Z`,
                    })
                  }}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
          <Col className="mb-4">
              <FloatingLabel
                controlId="description"
                label="Description"
                className={
                  uploadObj?.description
                    ? 'fs-6 color-light-pink'
                    : 'color-light-pink'
                }
              >
                <Form.Control
                  className="bg-grey color-white"
                  type="text"
                  placeholder="Description"
                  defaultValue={uploadObj.description}
                  name="description"
                  onChange={(e) =>
                    setUploadObj({ ...uploadObj, description: e.target.value })
                  }
                />
              </FloatingLabel>
            </Col>

          </Row>
          <Row>
            <Col className="mb-4">
              <FloatingLabel
                controlId="zoomId"
                label="Zoom Id"
                className={
                  uploadObj?.zoomID
                    ? 'fs-6 color-light-pink'
                    : 'color-light-pink'
                }
              >
                <Form.Control
                  className="bg-grey color-white"
                  type="text"
                  placeholder="Zoom Id"
                  defaultValue={uploadObj.zoomID}
                  name="zoomId"
                  onChange={(e) =>
                    setUploadObj({ ...uploadObj, zoomID: e.target.value })
                  }
                />
              </FloatingLabel>
            </Col>
            <Col className="mb-4">
              <FloatingLabel
                controlId="zoomPassword"
                label="Zoom Password"
                className={
                  uploadObj?.password
                    ? 'fs-6 color-light-pink'
                    : 'color-light-pink'
                }
              >
                <Form.Control
                  className="bg-grey color-white"
                  type="text"
                  placeholder="Zoom Password"
                  defaultValue={uploadObj?.password}
                  name="zoomPassword"
                  onChange={(e) =>
                    setUploadObj({ ...uploadObj, password: e.target.value })
                  }
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              className="btn-primary"
              onClick={handleSubmit}
              style={{ width: '5rem' }}
            >
              ADD
            </Button>
          </Row>
        </Form>
      </Row>
    </Container>
  )
}

export default AddClass
