import React, { useEffect, useState } from 'react'
import { Container, Row, Table, Button, Form, Col, Modal } from 'react-bootstrap'

const DailyByte = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {
    window.open('schedule-daily-byte')
  }
  return (
    <Container fluid className="w-100">
      <Row className="heading mb-3">
        <h3 className="title">Daily Byte</h3>
      </Row>

      <Row
        className="mb-3"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Col xs={8} sm={4}>
          <Form>
            <Form.Control
              type="text"
              placeholder="Enter Byte Title"
              value=""
            />
          </Form>
        </Col>
        <Col sm={4} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Form>
            <Button className="btn-primary" onClick={() => handleAdd()}>
              Schedule A Byte
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Table responsive className="table">
          <thead>
            <tr>
              <th className='width-30'>
                Byte Title{' '}
                <i class="bi bi-arrow-down-up cursor-pointer inactive-sort"></i>
              </th>
              <th>
              Release Date{' '}
              <i class="bi bi-arrow-down-up cursor-pointer inactive-sort"></i>
              </th>
              <th>
              Number Of Views{' '}
              <i class="bi bi-arrow-down-up cursor-pointer inactive-sort"></i>
              </th>
              <th>
              Watched Duration{' '}
                <i class="bi bi-arrow-down-up cursor-pointer inactive-sort"></i>
              </th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="data-row">
                <td className='width-30'>Daily Byte Title</td>
                <td>10/05/2022</td>
                <td>80</td>
                <td>45</td>
                <td>
                    <Button
                    className="btn-primary"
                    >
                    Edit
                    </Button>
                </td>

                <td>
                    <Button
                    className="btn-dlt"
                    onClick={handleShow}
                    >
                    DELETE
                    </Button>
                </td>
            </tr>
            <tr className="data-row">
                <td>Daily Byte Title</td>
                <td>12/05/2022</td>
                <td>90</td>
                <td>45</td>
                <td>
                    <Button
                    className="btn-primary"
                    >
                    Edit
                    </Button>
                </td>

                <td>
                    <Button
                    className="btn-dlt"
                    onClick={handleShow}
                    >
                    DELETE
                    </Button>
                </td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure? You want to delete?</Modal.Body>
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

export default DailyByte
