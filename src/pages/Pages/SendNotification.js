import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
  Card,
  Alert,
} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import FormData from 'form-data';
import Axios from 'axios'
import { sendNotifcation } from '../../utils/config/API'

const Notifications = () => {

  const [uploadObj, setUploadObj] = useState({
    title: '',
    image: '',
    description: '',
    filterMode: 'all'
  })
  const [selectedPremiumTags, setselectedPremiumTags] = useState([])
  const [selectedGradeTags, setSelectedGradeTags] = useState([])
  const [showBasicAlert, setShowBasicAlert] = useState(false)
  const [responseStatus, setresponseStatus] = useState(false)
  const [responseMessage, setresponseMessage] = useState('')
  // const handleImageChange = (e) => {
  //   if (e.target.files.length) {
  //     storeImage(e.target.files[0], userEmail)
  //   }
  // }
  // const handleBannerChange = (e)=>{
  //   if (e.target.files.length) {
  //     setUploadObj({
  //       ...uploadObj,
  //       image: e.target.files[0],
  //     })

  //   }
  //   }

  const handleGradeTagsChecked = (e) => {
    if (e.target.checked)
      if (!selectedGradeTags) setSelectedGradeTags([e.target.value])
      else setSelectedGradeTags([...selectedGradeTags, e.target.value])
    else {
      const filteredArr = selectedGradeTags.filter(
        (tag) => tag !== e.target.value
      )
      setSelectedGradeTags(filteredArr)
    }
    console.log(selectedGradeTags)

  }
  const handlePremiumTagsChecked = (e) => {
    if (e.target.checked)
      if (!selectedPremiumTags) setselectedPremiumTags([e.target.value])
      else setselectedPremiumTags([...selectedPremiumTags, e.target.value])
    else {
      const filteredArr = selectedPremiumTags.filter(
        (tag) => tag !== e.target.value
      )
      setselectedPremiumTags(filteredArr)
    }
    console.log(selectedPremiumTags)
  }

  const handleSubmit = async () => {
    const data = new FormData()
    data.append('title', uploadObj.title)
    data.append('image', uploadObj.image)
    data.append('description', uploadObj.description)
    data.append('filterMode', uploadObj.filterMode)
    data.append('tags', selectedPremiumTags)
    data.append('grades', selectedGradeTags)
    console.log(data)
    try {
      console.log("trying")
      const insertResponse = await fetch(
        sendNotifcation,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
          body: data,
        }
      )
      
      if(insertResponse.status === 200)
      {
        setresponseStatus(true)
        setresponseMessage(insertResponse.message)
        console.log("setting sucess message", responseMessage)
      }
      else{
        setresponseStatus(false)
        setresponseMessage(insertResponse.message)
        console.log("setting unsucessful message", responseMessage)
      }
      console.log(insertResponse)
      setShowBasicAlert(true)
    }
    catch (err) {
      console.log(err)
    }


  }
  return (<Container fluid className="w-100">
    <Row className="mb-3">
      <h3 className="title">
        <Link to="/notifications">
          <i className="bi bi-arrow-left"></i>
        </Link>
        SEND NOTIFICATIONS
      </h3>
    </Row>
    <Form>
      <Row>
        <Col className="mb-4">
          <FloatingLabel
            controlId="title"
            label="Title"
            className={
              false
                ? 'fs-6 color-light-pink'
                : 'color-light-pink'
            }
          >
            <Form.Control
              className="bg-grey color-white"
              type="text"
              placeholder="Title"
              defaultValue={uploadObj?.title}
              name="Title"
              onChange={(e) =>
                setUploadObj({
                  ...uploadObj,
                  title: e.target.value,
                })
              }
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col className="mb-4">
          <FloatingLabel
            controlId="Description"
            label="Description"
            className={
              false
                ? 'fs-6 color-light-pink'
                : 'color-light-pink'
            }
          >
            <Form.Control
              className="bg-grey color-white"
              type="text"
              placeholder="Description"
              defaultValue={uploadObj?.description}
              name="Description"
              onChange={(e) => {
                setUploadObj({
                  ...uploadObj,
                  description: e.target.value
                })
              }}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col className="mb-4">

          <Form.Label className="fs-6 color-light-pink">
            Image Banner For Notification

          </Form.Label>
          <Form.Control
            type="file"
            size="sm"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => {
              e.target.files.length ? setUploadObj({
                ...uploadObj,
                image: e.target.files[0]
              }) : null

            }}
          />

        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="bg-grey color-white p-3">
            <Form.Group controlId="gradeTag">
              <Form.Label className="fs-6 color-light-pink">
                Grades
              </Form.Label>
              <Form.Check
                checked={
                  selectedGradeTags
                    ? selectedGradeTags.includes('1')
                    : false
                }
                type="checkbox"
                label="Grade 8"
                value="1"
                name="gradeTag"
                className="color-white"
                onChange={(e) => handleGradeTagsChecked(e)}
              />
              <Form.Check
                checked={
                  selectedGradeTags
                    ? selectedGradeTags?.includes('2')
                    : false
                }
                type="checkbox"
                label="Grade 9"
                value="2"
                name="gradeTag"
                className="color-white"
                onChange={(e) => handleGradeTagsChecked(e)}
              />
              <Form.Check
                checked={
                  selectedGradeTags
                    ? selectedGradeTags?.includes('3')
                    : false
                }
                type="checkbox"
                label="Grade 10"
                value="3"
                name="gradedTag"
                className="color-white"
                onChange={(e) => handleGradeTagsChecked(e)}
              />
              <Form.Check
                checked={
                  selectedGradeTags
                    ? selectedGradeTags?.includes('4')
                    : false
                }
                type="checkbox"
                label="Grade 11"
                value="4"
                name="gradeTag"
                className="color-white"
                onChange={(e) => handleGradeTagsChecked(e)}
              />
              <Form.Check
                checked={
                  selectedGradeTags
                    ? selectedGradeTags?.includes('5')
                    : false
                }
                type="checkbox"
                label="Grade 12"
                value="5"
                name="gradeTag"
                className="color-white"
                onChange={(e) => handleGradeTagsChecked(e)}
              />
            </Form.Group>
          </Card>

        </Col>
        <Col>
          <Card className="bg-grey color-white p-3">
            <Form.Group controlId="premiumTag">
              <Form.Label className="fs-6 color-light-pink">
                Premium level
              </Form.Label>
              <Form.Check
                checked={
                  selectedPremiumTags
                    ? selectedPremiumTags.includes('1')
                    : false
                }
                type="checkbox"
                label="Basic"
                value="1"
                name="premiumTag"
                className="color-white"
                onChange={(e) => handlePremiumTagsChecked(e)}
              />
              <Form.Check
                checked={
                  selectedPremiumTags
                    ? selectedPremiumTags?.includes('2')
                    : false
                }
                type="checkbox"
                label="Plus"
                value="2"
                name="premiumTag"
                className="color-white"
                onChange={(e) => handlePremiumTagsChecked(e)}
              />
              <Form.Check
                checked={
                  selectedPremiumTags
                    ? selectedPremiumTags?.includes('3')
                    : false
                }
                type="checkbox"
                label="Premium"
                value="3"
                name="premiumTag"
                className="color-white"
                onChange={(e) => handlePremiumTagsChecked(e)}
              />
              <Form.Check
                checked={
                  selectedPremiumTags
                    ? selectedPremiumTags?.includes('4')
                    : false
                }
                type="checkbox"
                label="Premium Plus"
                value="4"
                name="premiumTag"
                className="color-white"
                onChange={(e) => handlePremiumTagsChecked(e)}
              />
            </Form.Group>
          </Card>
        </Col>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col className="mb-4">
          <Button
            className="btn-primary"
            onClick={handleSubmit}

          >
            Send notification
          </Button>
        </Col>
      </Row>
    </Form>

    <Row className="mt-3 px-2">
                {showBasicAlert && responseStatus === true ? (
                  <Alert
                    variant="success"
                    onClose={() => setShowBasicAlert(false)}
                    dismissible
                    className="rounded"
                  >
                    {responseMessage}
                  </Alert>
                ) : null}
                {showBasicAlert && responseStatus === false ? (
                  <Alert
                    variant="danger"
                    onClose={() => setShowBasicAlert(false)}
                    dismissible
                    className="rounded"
                  >
                    {responseMessage}
                  </Alert>
                ) : null}
              </Row>
    
  </Container>)
}

export default Notifications