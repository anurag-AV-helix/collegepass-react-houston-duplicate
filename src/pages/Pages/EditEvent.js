/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
  Card,
} from 'react-bootstrap'
import moment from 'moment'
import { convertArrayToCSV } from 'convert-array-to-csv'
import { fetchDataById } from '../../actions/eventsActions'
import {
  getEventRegistrationData,
  getEventAttendeeData,
} from '../../utils/config/API'

const FormData = require('form-data')

const EditEvent = () => {
  const dispatch = useDispatch()
  const eventId = useParams().id
  const [uploadObj, setUploadObj] = useState({
    event_id: '',
    event_name: '',
    event_desc: '',
    event_datetime: '',
    event_zoom_id: '',
    event_password: '',
    event_primeplus: '',
    event_type: '',
    event_isdeleted: '',
    event_banner: '',
    event_tile: '',
    event_premium_level: '2',
  })
  const [selectedEventTags, setSelectedEventTags] = useState([])
  const [bannerImg, setBannerImg] = useState({ preview: '', raw: '' })
  // const [bannerVid, setBannerVid] = useState({ preview: '', raw: '' })
  // const [bannerGIF, setBannerGIF] = useState({ preview: '', raw: '' })
  const [eventDateTime, setEventDateTime] = useState()
  let { eventByIdData, eventTags } = useSelector((state) => state.eventById)

  useEffect(() => {
    if (eventId) dispatch(fetchDataById(eventId))
  }, [dispatch, eventId])

  useEffect(() => {
    if (eventId) {
      setUploadObj(eventByIdData)
      setSelectedEventTags(eventTags)
      setEventDateTime(
        moment(eventByIdData?.event_datetime)
          .utc()
          .format('YYYY-MM-DD[T]HH:mm:ss.SSS')
      )
    }
    if (eventByIdData?.event_desc === 'null')
      setUploadObj({ ...uploadObj, event_desc: '' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventByIdData, eventTags, eventId])

  const handleEventTagsChecked = (e) => {
    if (e.target.checked)
      if (!selectedEventTags) setSelectedEventTags([e.target.value])
      else setSelectedEventTags([...selectedEventTags, e.target.value])
    else {
      let filteredArr = selectedEventTags.filter(
        (tag) => tag !== e.target.value
      )
      setSelectedEventTags(filteredArr)
    }
  }

  const handleBannerChange = (e) => {
    if (e.target.files.length) {
      
      setBannerImg({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      })
    }
  }
  // const handleVideoBannerChange = (e) => {
  //   if (e.target.files.length) {
     
  //     setBannerVid({
  //       preview: URL.createObjectURL(e.target.files[0]),
  //       raw: e.target.files[0],
  //     })
  //   }
  // }
  // const handleGIFBannerChange = (e) => {
  //   if (e.target.files.length) {
      
  //     setBannerGIF({
  //       preview: URL.createObjectURL(e.target.files[0]),
  //       raw: e.target.files[0],
  //     })
  //   }
  // }

  const handleEdit = async (e) => {
    e.preventDefault()
    let data = new FormData()
    // eslint-disable-next-line guard-for-in

    if (uploadObj.event_id > 0) {
      data.append('event_id', uploadObj.event_id)
    }
    data.append('event_name', uploadObj.event_name)
    data.append('event_desc', uploadObj.event_desc)
    data.append(
      'event_datetime',
      `${moment(eventDateTime).utc().format('YYYY-MM-DD[T]HH:mm:ss.SSS')}Z`
    )
    data.append('event_zoom_id', uploadObj.event_zoom_id)
    data.append('event_password', uploadObj.event_password)
    data.append('event_primeplus', 0)
    data.append('event_type', uploadObj.event_type)
    data.append('event_isdeleted', 0)
    data.append('event_banner', bannerImg.raw)
    // data.append('event_banner_vid', bannerVid.raw)
    // data.append('event_banner_gif', bannerGIF.raw)

    data.append('event_tile', bannerImg.raw)
    data.append('event_premium_level', uploadObj.event_premium_level)
    data.append('tags', selectedEventTags)
    // for (const pair of data.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`)
    // }
  //   for (let value of data.values()) {
  //     console.log(value);
  //  }
     
    try {
      if (uploadObj.event_id > 0) {
        const updateResponse = await fetch(
          'https://mvfdi3wy33.execute-api.ap-south-1.amazonaws.com/dev/api/v1/updateEventDetails',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
            body: data,
          }
        )

        if (updateResponse.status === 200) {
          window.open('/events', '_self')
        }
      } else {
        const insertResponse = await fetch(
          'https://mvfdi3wy33.execute-api.ap-south-1.amazonaws.com/dev/api/v1/insertEventDetails',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
            body: data,
          }
        )
        if (insertResponse.status === 200) {
          window.open('/events', '_self')
        }
      }
    } catch (error) {
      // console.error(error)
    }
  }

  const fetchEventRegistrationData = async () => {
    Axios.get(getEventRegistrationData + eventId, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then((e) => {
      const csvFromArrayOfObjects = convertArrayToCSV(e.data.body)
      let csvContent = `data:text/csv;charset=utf-8,${csvFromArrayOfObjects}`
      const encodedUri = encodeURI(csvContent)
      const downloadLink = document.createElement('a')
      downloadLink.href = encodedUri
      downloadLink.download = `registration_event_${eventId}.csv`
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    })
  }

  const fetchEventAttendeeData = async (id) => {
    Axios.get(getEventAttendeeData + id, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then((e) => {
      const csvFromArrayOfObjects = convertArrayToCSV(e.data.body)
      let csvContent = `data:text/csv;charset=utf-8,${csvFromArrayOfObjects}`
      const encodedUri = encodeURI(csvContent)
      const downloadLink = document.createElement('a')
      downloadLink.href = encodedUri
      downloadLink.download = `Attendee_event_${id}.csv`
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
      // window.open(encodedUri);
    })
  }

  return (
    <Container fluid className="w-100">
      <Row className="mb-3">
        <h3 className="title">
          <Link to="/events">
            <i className="bi bi-arrow-left"></i>
          </Link>
          {eventId ? 'EDIT EVENT' : 'ADD EVENT'}
        </h3>
      </Row>

      <Row className="mb-3">
        <Form>
          <Row>
            <Col className="mb-4">
              <FloatingLabel
                controlId="eventName"
                label="Event Name"
                className={
                  uploadObj?.event_name
                    ? 'fs-6 color-light-pink'
                    : 'color-light-pink'
                }
              >
                <Form.Control
                  className="bg-grey color-white"
                  type="text"
                  placeholder="Event Name"
                  defaultValue={uploadObj?.event_name}
                  name="eventName"
                  onChange={(e) =>
                    setUploadObj({
                      ...uploadObj,
                      event_name: e.target.value.toUpperCase(),
                    })
                  }
                />
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
                  value={eventDateTime}
                  name="eventDate"
                  onChange={(e) => {
                    setEventDateTime(e.target.value)
                  }}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col className="mb-4">
              <FloatingLabel
                controlId="eventDesc"
                label="Event Description"
                className={
                  uploadObj?.event_desc
                    ? 'fs-6 color-light-pink'
                    : 'color-light-pink'
                }
              >
                <Form.Control
                  className="bg-grey color-white"
                  as="textarea"
                  placeholder="Event Description"
                  defaultValue={uploadObj?.event_desc}
                  name="eventDesc"
                  onChange={(e) => {
                    setUploadObj({
                      ...uploadObj,
                      event_desc:
                        e.target.value !== 'null' ? e.target.value : '',
                    })
                  }}
                  style={{
                    height: 'max-content',
                    paddingTop: '2rem',
                    paddingBottom: '2rem',
                  }}
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
                  uploadObj?.event_zoom_id
                    ? 'fs-6 color-light-pink'
                    : 'color-light-pink'
                }
              >
                <Form.Control
                  className="bg-grey color-white"
                  type="text"
                  placeholder="Zoom Id"
                  defaultValue={uploadObj?.event_zoom_id}
                  name="zoomId"
                  onChange={(e) =>
                    setUploadObj({
                      ...uploadObj,
                      event_zoom_id: e.target.value,
                    })
                  }
                />
              </FloatingLabel>
            </Col>
            <Col className="mb-4">
              <FloatingLabel
                controlId="zoomPassword"
                label="Zoom Password"
                className={
                  uploadObj?.event_password
                    ? 'fs-6 color-light-pink'
                    : 'color-light-pink'
                }
              >
                <Form.Control
                  className="bg-grey color-white"
                  type="text"
                  placeholder="Zoom Password"
                  defaultValue={uploadObj?.event_password}
                  name="zoomPassword"
                  onChange={(e) =>
                    setUploadObj({
                      ...uploadObj,
                      event_password: e.target.value,
                    })
                  }
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col className="mb-4">
              <Card className="bg-grey color-white p-3">
                <Form.Group controlId="eventType">
                  <Form.Label className="fs-6 color-light-pink">
                    Event Type
                  </Form.Label>
                  <Form.Check
                    checked={uploadObj?.event_type === 'EVENT'}
                    type="radio"
                    label="Event"
                    id="EVENT"
                    name="eventType"
                    className="color-white"
                    onChange={(e) => {
                      if (e.target.value === 'on')
                        setUploadObj({ ...uploadObj, event_type: e.target.id })
                    }}
                  />
                  <Form.Check
                    checked={uploadObj?.event_type === 'MASTERCLASS'}
                    type="radio"
                    label="Masterclass"
                    id="MASTERCLASS"
                    name="eventType"
                    className="color-white"
                    onChange={(e) => {
                      if (e.target.value === 'on')
                        setUploadObj({ ...uploadObj, event_type: e.target.id })
                    }}
                  />
                </Form.Group>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card className="bg-grey color-white p-3">
                <Form.Group controlId="eventTag">
                  <Form.Label className="fs-6 color-light-pink">
                    Event Tags
                  </Form.Label>
                  <Form.Check
                    checked={
                      selectedEventTags
                        ? selectedEventTags.includes('22')
                        : false
                    }
                    type="checkbox"
                    label="Ivy League"
                    value="22"
                    name="eventTag"
                    className="color-white"
                    onChange={(e) => handleEventTagsChecked(e)}
                  />
                  <Form.Check
                    checked={
                      selectedEventTags
                        ? selectedEventTags?.includes('23')
                        : false
                    }
                    type="checkbox"
                    label="Oxbridge"
                    value="23"
                    name="eventTag"
                    className="color-white"
                    onChange={(e) => handleEventTagsChecked(e)}
                  />
                  <Form.Check
                    checked={
                      selectedEventTags
                        ? selectedEventTags?.includes('3')
                        : false
                    }
                    type="checkbox"
                    label="US"
                    value="3"
                    name="eventTag"
                    className="color-white"
                    onChange={(e) => handleEventTagsChecked(e)}
                  />
                  <Form.Check
                    checked={
                      selectedEventTags
                        ? selectedEventTags?.includes('2')
                        : false
                    }
                    type="checkbox"
                    label="UK"
                    value="2"
                    name="eventTag"
                    className="color-white"
                    onChange={(e) => handleEventTagsChecked(e)}
                  />
                  <Form.Check
                    checked={
                      selectedEventTags
                        ? selectedEventTags?.includes('4')
                        : false
                    }
                    type="checkbox"
                    label="Canada"
                    value="4"
                    name="eventTag"
                    className="color-white"
                    onChange={(e) => handleEventTagsChecked(e)}
                  />
                </Form.Group>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="mb-4 h-100">
              <FloatingLabel
                controlId="premiumLevel"
                label="Premium Level"
                className={
                  uploadObj?.event_premium_level
                    ? 'fs-6 color-light-pink'
                    : 'color-light-pink'
                }
              >
                <Form.Select
                  className="bg-grey color-white"
                  aria-label="Floating label select example"
                  value={uploadObj?.event_premium_level}
                  name="premiumLevel"
                  onChange={(e) =>
                    setUploadObj({
                      ...uploadObj,
                      event_premium_level: e.target.value,
                    })
                  }
                >
                  <option>--Select Premium Level--</option>
                  <option value="1">Free</option>
                  <option value="2">Plus</option>
                  <option value="3">Premium</option>
                  <option value="4">Premium Plus</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mh-100">
            <Col className="mb-4 mh-100">
              <Card className="bg-grey color-white p-3 h-100">
                <Form.Label className="fs-6 color-light-pink">
                  Image Banner For Registration Page (990*360):{' '}
                  {uploadObj?.event_banner ? (
                    <a
                      href={uploadObj?.event_banner}
                      alt="banner image"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Open current banner image
                    </a>
                  ) : (
                    <span className="color-white">No current banner image</span>
                  )}
                </Form.Label>
                <Form.Control
                  type="file"
                  size="sm"
                  onChange={handleBannerChange}
                />
              </Card>
            </Col>
          </Row>
          {/* <Row className="mh-100">
            <Col className="mb-4 mh-100">
              <Card className="bg-grey color-white p-3 h-100">
                <Form.Label className="fs-6 color-light-pink">
                  Video Banner For Registration Page (File size should be less than 6MB):{' '}
                  {uploadObj?.event_banner_vid ? (
                    <a
                      href={uploadObj?.event_banner_vid}
                      alt="banner video"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Open current banner video
                    </a>
                  ) : (
                    <span className="color-white">No current banner image</span>
                  )}
                </Form.Label>
                <Form.Control
                  type="file"
                  size="sm"
                  onChange={handleVideoBannerChange}
                />
              </Card>
            </Col>
          </Row> */}
          {/* <Row className="mh-100">
            <Col className="mb-4 mh-100">
              <Card className="bg-grey color-white p-3 h-100">
                <Form.Label className="fs-6 color-light-pink">
                  GIF Banner For Registration Page (File size should be less than 6MB):{' '}
                  {uploadObj?.event_banner_gif ? (
                    <a
                      href={uploadObj?.event_banner_gif}
                      alt="banner gif"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Open current banner GIF
                    </a>
                  ) : (
                    <span className="color-white">No current banner gif</span>
                  )}
                </Form.Label>
                <Form.Control
                  type="file"
                  size="sm"
                  onChange={handleGIFBannerChange}
                />
              </Card>
            </Col>
          </Row> */}
          {eventId && (
            <Row>
              <Col className="mb-4 mh-100">
                <Card className="bg-grey color-white p-3 h-100">
                  <Form.Label className="fs-6 color-light-pink">
                    Registration Links
                  </Form.Label>
                  <div className="reg-icon-div">
                    <a
                      href={`https://www.collegepass.org/registration/${uploadObj.event_zoom_id}?utm_source=facebook`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="bi bi-facebook reg-icon"></i>
                    </a>
                    <a
                      href={`https://www.collegepass.org/registration/${uploadObj.event_zoom_id}?utm_source=instagram`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="bi bi-instagram reg-icon"></i>
                    </a>
                    <a
                      href={`https://www.collegepass.org/registration/${uploadObj.event_zoom_id}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="bi bi-link reg-icon"></i>
                    </a>
                  </div>
                </Card>
              </Col>
              <Col className="mb-4 mh-100">
                <Card className="p-3 h-100 bg-grey color-white">
                  <Form.Label className="fs-6 color-light-pink">
                    Other Info
                  </Form.Label>
                  <div>
                    <div type="button" onClick={fetchEventRegistrationData}>
                      <u>Download Registrered Users Data</u>
                    </div>
                    <div type="button" onClick={fetchEventAttendeeData}>
                      <u>Download Attendees Data</u>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          )}
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              className="btn-primary"
              onClick={handleEdit}
              style={{ width: '5rem' }}
            >
              {eventId ? 'SAVE' : 'ADD'}
            </Button>
          </Row>
        </Form>
      </Row>
    </Container>
  )
}

export default EditEvent
