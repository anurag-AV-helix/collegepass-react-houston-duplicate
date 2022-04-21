/* eslint-disable no-else-return */
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Form, Button, Table, Col } from 'react-bootstrap'
import { convertArrayToCSV } from 'convert-array-to-csv'
import { getClassesData } from '../../actions/classesActions'
import { deleteEventAction } from '../../actions/eventsActions'

import {
  getEventRegistrationData,
  getEventAttendeeData,
} from '../../utils/config/API'

const Classes = () => {
  const dispatch = useDispatch()
  const classes = useSelector((state) => state.classes.classes)

  const [sortAsc, setSortAsc] = useState(false)
  const [activeSort, setActiveSort] = useState('date')

  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    dispatch(getClassesData())
  }, [dispatch])

  const fetchClassRegistrationData = async (id) => {
    Axios.get(getEventRegistrationData + id, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then((e) => {
      const csvFromArrayOfObjects = convertArrayToCSV(e.data.body)
      const csvContent = `data:text/csv;charset=utf-8,${csvFromArrayOfObjects}`
      const encodedUri = encodeURI(csvContent)
      const downloadLink = document.createElement('a')
      downloadLink.href = encodedUri
      downloadLink.download = `registration_event_${id}.csv`
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    })
  }

  const fetchClassAttendeeData = async (id) => {
    Axios.get(getEventAttendeeData + id, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then((e) => {
      const csvFromArrayOfObjects = convertArrayToCSV(e.data.body)
      const csvContent = `data:text/csv;charset=utf-8,${csvFromArrayOfObjects}`
      const encodedUri = encodeURI(csvContent)
      const downloadLink = document.createElement('a')
      downloadLink.href = encodedUri
      downloadLink.download = `registration_event_${id}.csv`
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    })
  }

  const handleDeleteEvent = (id) => {
    dispatch(deleteEventAction(id))
    dispatch(getClassesData())
  }
  let tableBodyComponent = null

  if (classes !== undefined && classes !== null && classes.length > 0) {
    if (searchInput.length > 0) {
      tableBodyComponent = classes
        .filter((e) => e.NAME.toLowerCase().includes(searchInput))
        .sort((a, b) => {
          switch (activeSort) {
            case 'name': {
              if (sortAsc) return a.NAME > b.NAME ? 1 : -1
              else return a.NAME < b.NAME ? 1 : -1
            }
            case 'date': {
              const dateA = new Date(a.DATE_TIME)
              const dateB = new Date(b.DATE_TIME)
              if (sortAsc) return dateA > dateB ? 1 : -1
              else return dateA < dateB ? 1 : -1
            }
            default:
              return 1
          }
        })
        .map((classData) => {
          return (
            <tr key={classData.ID} className="data-row">
              <td>{classData.NAME}</td>
              <td>{moment(classData.DATE_TIME).utc().format('DD/MM/YYYY')}</td>
              <td>{classData.ZOOMID}</td>
              <td>{classData.ZOOM_PASS}</td>
              <td>
                <a
                  href={classData?.banner_image}
                  rel="noreferrer"
                  target="_blank"
                >
                  Image
                </a>
              </td>
              <td>
                <a
                  href={classData?.CALLENDER_LINK}
                  rel="noreferrer"
                  target="_blank"
                >
                  Calender
                </a>
              </td>
              <td>
                <div
                  type="button"
                  onClick={() => fetchClassRegistrationData(classData.ID)}
                >
                  <u>Registered</u>
                </div>
                <div
                  type="button"
                  onClick={() => fetchClassAttendeeData(classData.ID)}
                >
                  <u>Attended</u>
                </div>
              </td>

              <td>
                <Button
                  className="btn-dlt"
                  onClick={() => handleDeleteEvent(classData.ID)}
                >
                  DELETE
                </Button>
              </td>
            </tr>
          )
        })
    } else {
      tableBodyComponent = classes
        ?.sort((a, b) => {
          switch (activeSort) {
            case 'name': {
              if (sortAsc) return a.NAME > b.NAME ? 1 : -1
              else return a.NAME < b.NAME ? 1 : -1
            }
            case 'date': {
              const dateA = new Date(a.DATE_TIME)
              const dateB = new Date(b.DATE_TIME)
              if (sortAsc) return dateA > dateB ? 1 : -1
              else return dateA < dateB ? 1 : -1
            }
            default:
              return 1
          }
        })
        .map((classData) => {
          return (
            <tr key={classData.ID} className="data-row">
              <td>{classData.NAME}</td>
              <td>{moment(classData.DATE_TIME).utc().format('DD/MM/YYYY')}</td>
              <td>{classData.ZOOMID}</td>
              <td>{classData.ZOOM_PASS}</td>
              <td>
                <a
                  href={classData?.banner_image}
                  rel="noreferrer"
                  target="_blank"
                >
                  Image
                </a>
              </td>
              <td>
                <a
                  href={classData?.CALLENDER_LINK}
                  rel="noreferrer"
                  target="_blank"
                >
                  Calender
                </a>
              </td>
              <td>
                <div
                  type="button"
                  onClick={() => fetchClassRegistrationData(classData.ID)}
                >
                  <u>Registered</u>
                </div>
                <div
                  type="button"
                  onClick={() => fetchClassAttendeeData(classData.ID)}
                >
                  <u>Attended</u>
                </div>
              </td>

              <td>
                <Button
                  className="btn-dlt"
                  onClick={() => handleDeleteEvent(classData.ID)}
                >
                  DELETE
                </Button>
              </td>
            </tr>
          )
        })
    }
  }

  return (
    <Container fluid className="w-100">
      <Row className="heading mb-3">
        <h3 className="title">CLASSES</h3>
      </Row>

      {/* <Row className="mb-3">
        <Form>
          <Button
            className="btn-primary"
            onClick={() => window.open('classes/add-class')}
          >
            Add Class
          </Button>
        </Form>
      </Row> */}

      <Row
        className="mb-3"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Col xs={8} sm={4}>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="text"
              placeholder="Enter Class Title"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </Form>
        </Col>
        <Col sm={4} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Form>
            <Button
              className="btn-primary"
              onClick={() => window.open('classes/add-class')}
            >
              Add Event
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Table responsive className="table">
          <thead>
            <tr>
              <th>
                Class Title{' '}
                <i
                  className={
                    activeSort === 'name'
                      ? 'bi bi-arrow-down-up cursor-pointer active-sort'
                      : 'bi bi-arrow-down-up cursor-pointer inactive-sort'
                  }
                  onClick={() => {
                    setSortAsc(!sortAsc)
                    setActiveSort('name')
                  }}
                ></i>
              </th>
              <th>
                Date{' '}
                <i
                  className={
                    activeSort === 'date'
                      ? 'bi bi-arrow-down-up cursor-pointer active-sort'
                      : 'bi bi-arrow-down-up cursor-pointer inactive-sort'
                  }
                  onClick={() => {
                    setSortAsc(!sortAsc)
                    setActiveSort('date')
                  }}
                ></i>
              </th>
              <th>Zoom ID</th>
              <th>Zoom Password</th>
              <th>Banner Image</th>
              <th>Calender Link</th>
              <th>Download</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{tableBodyComponent}</tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default Classes
