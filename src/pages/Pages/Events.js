/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Container, Row, Table, Button, Form, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  getEventsFullData,
  deleteEventAction,
} from '../../actions/eventsActions'

const Events = () => {
  const dispatch = useDispatch()
  const events = useSelector((state) => state.events.events)

  const [sortAsc, setSortAsc] = useState(false)
  const [activeSort, setActiveSort] = useState('date')

  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    dispatch(getEventsFullData())
  }, [dispatch])

  const handleDeleteEvent = (id) => {
    dispatch(deleteEventAction(id))
    dispatch(getEventsFullData())
  }

  const handleClick = (eventData) => {
    window.open(`events/edit-event/${eventData.ID}`)
  }

  const handleAdd = () => {
    window.open('events/add-event')
  }

  let tableBodyComponent = null

  if (events !== undefined && events !== null && events.length > 0) {
    if (searchInput.length > 0) {
      tableBodyComponent = events
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
            case 'regCount': {
              if (sortAsc)
                return a.REGISTRATION_COUNT > b.REGISTRATION_COUNT ? 1 : -1
              else return a.REGISTRATION_COUNT < b.REGISTRATION_COUNT ? 1 : -1
            }
            case 'attendeeCount': {
              if (sortAsc) return a.ATTENDEES_COUNT > b.ATTENDEES_COUNT ? 1 : -1
              else return a.ATTENDEES_COUNT < b.ATTENDEES_COUNT ? 1 : -1
            }
            default:
              return 1
          }
        })
        .map((eventData) => {
          return (
            <tr key={eventData.ID} className="data-row">
              <td>{eventData.NAME}</td>
              <td>{moment(eventData.DATE_TIME).utc().format('DD/MM/YYYY')}</td>
              <td>{eventData.ZOOMID}</td>
              <td>{eventData.ZOOM_PASS}</td>
              <td>{eventData.REGISTRATION_COUNT}</td>
              <td>{eventData.ATTENDEES_COUNT}</td>
              <td>
                <Button
                  className="btn-primary"
                  onClick={() => handleClick(eventData)}
                >
                  Edit
                </Button>
              </td>

              <td>
                <Button
                  className="btn-dlt"
                  onClick={() => handleDeleteEvent(eventData.ID)}
                >
                  DELETE
                </Button>
              </td>
            </tr>
          )
        })
    } else {
      tableBodyComponent = events
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
            case 'regCount': {
              if (sortAsc)
                return a.REGISTRATION_COUNT > b.REGISTRATION_COUNT ? 1 : -1
              else return a.REGISTRATION_COUNT < b.REGISTRATION_COUNT ? 1 : -1
            }
            case 'attendeeCount': {
              if (sortAsc) return a.ATTENDEES_COUNT > b.ATTENDEES_COUNT ? 1 : -1
              else return a.ATTENDEES_COUNT < b.ATTENDEES_COUNT ? 1 : -1
            }
            default:
              return 1
          }
        })
        .map((eventData) => {
          return (
            <tr key={eventData.ID} className="data-row">
              <td>{eventData.NAME}</td>
              <td>{moment(eventData.DATE_TIME).utc().format('DD/MM/YYYY')}</td>
              <td>{eventData.ZOOMID}</td>
              <td>{eventData.ZOOM_PASS}</td>
              <td>{eventData.REGISTRATION_COUNT}</td>
              <td>{eventData.ATTENDEES_COUNT}</td>
              <td>
                <Button
                  className="btn-primary"
                  onClick={() => handleClick(eventData)}
                >
                  Edit
                </Button>
              </td>

              <td>
                <Button
                  className="btn-dlt"
                  onClick={() => handleDeleteEvent(eventData.ID)}
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
        <h3 className="title">Events</h3>
      </Row>

      <Row
        className="mb-3"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Col xs={8} sm={4}>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="text"
              placeholder="Enter Event Title"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </Form>
        </Col>
        <Col sm={4} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Form>
            <Button className="btn-primary" onClick={() => handleAdd()}>
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
                Event Title{' '}
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
              <th>Zoom ID </th>
              <th>Zoom Password</th>
              <th>
                Registration Count{' '}
                <i
                  className={
                    activeSort === 'regCount'
                      ? 'bi bi-arrow-down-up cursor-pointer active-sort'
                      : 'bi bi-arrow-down-up cursor-pointer inactive-sort'
                  }
                  onClick={() => {
                    setSortAsc(!sortAsc)
                    setActiveSort('regCount')
                  }}
                ></i>
              </th>
              <th>
                Attendees Count{' '}
                <i
                  className={
                    activeSort === 'attendeeCount'
                      ? 'bi bi-arrow-down-up cursor-pointer active-sort'
                      : 'bi bi-arrow-down-up cursor-pointer inactive-sort'
                  }
                  onClick={() => {
                    setSortAsc(!sortAsc)
                    setActiveSort('attendeeCount')
                  }}
                ></i>
              </th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{tableBodyComponent}</tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default Events
