import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  Alert,
} from 'react-bootstrap'
import {
  listUserBasicDetails,
  listUserPrimeDetails,
  listUserPrimePlusDetails,
  updateUserPrimeDetails,
  updateUserPrimePlusDetails,
  updateUserMandatoryDetails,
  updateUserPassword,
} from '../../actions/userActions'

export const EditUser = () => {
  const userID = useParams().id

  const dispatch = useDispatch()
  const editUserDetails = useSelector((state) => state.editUserDetails)
  const editUserPrimeDetails = useSelector(
    (state) => state.editUserPrimeDetails
  )
  const editUserPrimePlusDetails = useSelector(
    (state) => state.editUserPrimePlusDetails
  )

  const updatePrimeReducer = useSelector((state) => state.updatePrimeReducer)
  const updatePrimePlusReducer = useSelector(
    (state) => state.updatePrimePlusReducer
  )
  const updateMandatoryReducer = useSelector(
    (state) => state.updateMandatoryReducer
  )

  const updatePassword = useSelector((state) => state.updatePassword)

  const currentDate = moment().format('YYYY-MM-DD')
  const currentNextYearDate = moment().add(1, 'years').format('YYYY-MM-DD')

  const [mandatoryData, setMandatoryData] = useState({
    userID,
    fName: '',
    lName: '',
    countryCode: '',
    phoneNumber: '',
    grade: '',
    curriculum: '',
    graduationYear: '',
    mobileOTP: '',
  })

  const {
    fName,
    lName,
    countryCode,
    phoneNumber,
    grade,
    curriculum,
    graduationYear,
    mobileOTP,
  } = mandatoryData

  const [primeFields, setPrimeFields] = useState({
    prime: editUserPrimeDetails.userDetails.ISPREMIUM,
    primeStartDate: editUserPrimeDetails.userDetails.PREMIUMSTART,
    primeEndDate: editUserPrimeDetails.userDetails.PREMIUMEND,
  })

  const [primePlusFields, setPrimePlusFields] = useState([
    // {primePlusID: 1, startDate: currentDate, endDate: currentNextYearDate},
  ])

  const [password, setPassword] = useState('')

  const [showPrimePlusAlert, setShowPrimePlusAlert] = useState(false)
  const [showPrimeAlert, setShowPrimeAlert] = useState(false)
  const [showBasicAlert, setShowBasicAlert] = useState(false)

  const [showPasswordAlert, setShowPasswordAlert] = useState(false)

  const [passwordMinErrorText, setPasswordMinErrorText] = useState('')

  function onChangePrimePlusStatus(i, event) {
    const values = [...primePlusFields]
    values[i][event.target.name] = event.target.value
    setPrimePlusFields(values)
  }

  function handleAddPrimePlus() {
    const values = [...primePlusFields]
    values.push({
      primePlusID: 1,
      startDate: currentDate,
      endDate: currentNextYearDate,
    })
    setPrimePlusFields(values)
  }

  function handleRemovePrimePlus(i) {
    const values = [...primePlusFields]
    values.splice(i, 1)
    setPrimePlusFields(values)
  }

  useEffect(() => {
    dispatch(listUserBasicDetails(userID))
    dispatch(listUserPrimeDetails(userID))
    dispatch(listUserPrimePlusDetails(userID))
  }, [dispatch, userID])

  useEffect(() => {
    setMandatoryData({
      userID,
      fName: editUserDetails?.userDetails?.FIRSTNAME,
      lName: editUserDetails?.userDetails?.LASTNAME,
      countryCode: editUserDetails?.userDetails?.COUNTRY_CODE,
      phoneNumber: editUserDetails?.userDetails?.PHONENUMBER,
      grade: editUserDetails?.userDetails?.GRADE,
      curriculum: editUserDetails?.userDetails?.CURRICULUM,
      graduationYear: editUserDetails?.userDetails?.GRADUATION_YEAR,
      mobileOTP: editUserDetails?.userDetails?.MOBILE_OTP,
    })
  }, [editUserDetails.userDetails, userID])

  useEffect(() => {
    setPrimeFields({
      prime: editUserPrimeDetails.userDetails.ISPREMIUM,
      primeStartDate: moment(
        editUserPrimeDetails.userDetails.PREMIUMSTART
      ).format('YYYY-MM-DD'),
      primeEndDate: moment(editUserPrimeDetails.userDetails.PREMIUMEND).format(
        'YYYY-MM-DD'
      ),
    })
  }, [
    editUserPrimeDetails.userDetails.ISPREMIUM,
    editUserPrimeDetails.userDetails.PREMIUMSTART,
    editUserPrimeDetails.userDetails.PREMIUMEND,
    userID,
  ])

  useEffect(() => {
    if (editUserPrimePlusDetails.userDetails.length > 0) {
      const finPrimePlus = []

      editUserPrimePlusDetails.userDetails.map((primePlus) => {
        const instance = {
          primePlusID: primePlus.ADDON_ID,
          startDate: moment(primePlus.START_DATE).format('YYYY-MM-DD'),
          endDate: moment(primePlus.END_DATE).format('YYYY-MM-DD'),
        }

        finPrimePlus.push(instance)
        return null
      })

      setPrimePlusFields(finPrimePlus)
    }
  }, [editUserPrimePlusDetails.userDetails, userID])

  const onChangePrimeStatus = (e) => {
    setPrimeFields({ ...primeFields, [e.target.name]: e.target.value })
  }

  const onChangeMandatoryFields = (e) => {
    e.preventDefault()
    
    setMandatoryData({ ...mandatoryData, [e.target.name]: e.target.value })
  }

  const onSubmitPrimeStatus = (e) => {
    e.preventDefault()
    // console.log('SUBMIT PRESSED')
    const primeDetails = {
      id: userID,
      prime: primeFields.prime,
      startDate: primeFields.primeStartDate,
      endDate: primeFields.primeEndDate,
    }
    dispatch(updateUserPrimeDetails(primeDetails))
    setShowPrimeAlert(true)
  }

  const onSubmitPrimePlusStatus = (e) => {
    e.preventDefault()
    // console.log('SUBMIT PRESSED')
    // let primePlusDetails = [
    // 	{
    // 		primePlusID: 1,
    // 		startDate: '2020-07-03',
    // 		endDate: '2022-07-03',
    // 	},
    // 	{
    // 		primePlusID: 2,
    // 		startDate: '2020-07-03',
    // 		endDate: '2022-07-03',
    // 	},
    // ]
    dispatch(updateUserPrimePlusDetails(userID, primePlusFields))
    setShowPrimePlusAlert(true)
  }

  const onSubmitMandatoryDetails = (e) => {
    e.preventDefault()
    // {
    // "userID": 8525,
    // "fName": "Chirag",
    // "lName": "Ramachandra",
    // "countryCode": "91",
    // "phoneNumber": 8951831967,
    // "grade": 3,
    // "curriculum": 4,
    // "graduationYear": "2025",
    // "mobileOTP": 1,
    //
    // }

    dispatch(updateUserMandatoryDetails(mandatoryData))
    setShowBasicAlert(true)
  }

  const onUpdatePassword = (e) => {
    e.preventDefault()

    if (password.length >= 6) {
      dispatch(updateUserPassword(password, userID))
      setShowPasswordAlert(true)
      setPassword('')
      setPasswordMinErrorText('')
    } else {
      setShowPasswordAlert(true)
      setPasswordMinErrorText('Entered Password is not 6 characters in length')
    }
  }

  const primePlusFieldsComponents = primePlusFields.map((primePlus, idx) => {
    return (
      <Row className="mt-3 p-3 rounded">
        <Col xs={12} sm={12} md={5}>
          <FloatingLabel
            controlId="primePlusID"
            label="Premium Plus"
            className="fs-6"
          >
            <Form.Select
              className="bg-grey color-white"
              aria-label="Floating label select example"
              defaultValue={primePlus.primePlusID}
              name="primePlusID"
              onChange={(e) => onChangePrimePlusStatus(idx, e)}
            >
              <option value={1}>SAT - Weekdays</option>
              <option value={3}>Admission Platform</option>
              <option value={4}>SAT - Saturdays</option>
              <option value={5}>SAT - Sundays(M)</option>
              <option value={6}>SAT - Sundays(E)</option>
              <option value={7}>SAT 1-on-1</option>
              <option value={10}>AP Classes</option>
            </Form.Select>
          </FloatingLabel>
        </Col>

        <Col xs={12} sm={12} md={3}>
          <FloatingLabel
            controlId="primeStartDate"
            label="Start Date"
            className="fs-6"
          >
            <Form.Control
              className="bg-grey color-white"
              type="date"
              placeholder="Start Date"
              defaultValue={primePlus.startDate}
              name="startDate"
              onChange={(e) => onChangePrimePlusStatus(idx, e)}
            />
          </FloatingLabel>
        </Col>

        <Col xs={12} sm={12} md={3}>
          <FloatingLabel
            controlId="primeEndDate"
            label="End Date"
            className="fs-6"
          >
            <Form.Control
              className="bg-grey color-white"
              type="date"
              placeholder="End Date"
              defaultValue={primePlus.endDate}
              name="endDate"
              onChange={(e) => onChangePrimePlusStatus(idx, e)}
            />
          </FloatingLabel>
        </Col>

        <Col xs={12} sm={12} md={1}>
          <i
            onClick={() => handleRemovePrimePlus(idx)}
            style={{
              fontSize: '30px',
              fontWeight: '600',
              color: '#c93432',
              textDecoration: 'none',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="bi bi-trash"
          ></i>
        </Col>
      </Row>
    )
  })

  return (
    <Container fluid>
      <Row className="heading mb-3">
        <h3 className="title">
          <Link to="/">
            <i className="bi bi-arrow-left"></i>
          </Link>
          EDIT USER
        </h3>
      </Row>

      <Row className="mh-100">
        <Col sm={12} md={6} className="mh-100">
          <Card className="text-center edit-user-card-bg color-white h-100">
            <Card.Body>
              <Card.Title>
                <h3 className="color-white">Mandatory Details</h3>
              </Card.Title>
              <Card.Text>
                <div className="mb-4 color-pink">
                  {editUserDetails.userDetails.EMAIL}
                </div>
                <p className="text-warning fs-6">
                  Set Mobile OTP to 1, to activate students mobile OTP
                  verification
                </p>
              </Card.Text>
              <Form onSubmit={onSubmitMandatoryDetails}>
                <Row>
                  <Col xs={12} sm={12} md={6} className="mb-3">
                    <FloatingLabel
                      controlId="firstName"
                      label="First Name"
                      className={
                        fName ? 'fs-6 color-light-pink' : 'color-light-pink'
                      }
                    >
                      <Form.Control
                        className="bg-grey color-white"
                        type="text"
                        placeholder="First Name"
                        defaultValue={fName}
                        name="fName"
                        onChange={onChangeMandatoryFields}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={12} md={6} className="mb-3">
                    <FloatingLabel
                      controlId="lastName"
                      label="Last Name"
                      className={
                        lName ? 'fs-6 color-light-pink' : 'color-light-pink'
                      }
                    >
                      <Form.Control
                        className="bg-grey color-white"
                        type="text"
                        placeholder="Last Name"
                        defaultValue={lName}
                        name="lName"
                        onChange={onChangeMandatoryFields}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={6} className="mb-3">
                    <FloatingLabel
                      controlId="countryCode"
                      label="Country Code"
                      className={
                        countryCode
                          ? 'fs-6 color-light-pink'
                          : 'color-light-pink'
                      }
                    >
                      <Form.Control
                        className="bg-grey color-white"
                        type="text"
                        defaultValue={countryCode}
                        placeholder="Country Code"
                        name="countryCode"
                        onChange={onChangeMandatoryFields}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={12} md={6} className="mb-3">
                    <FloatingLabel
                      controlId="phoneNumber"
                      label="Phone Number"
                      className={
                        phoneNumber
                          ? 'fs-6 color-light-pink'
                          : 'color-light-pink'
                      }
                    >
                      <Form.Control
                        className="bg-grey color-white"
                        type="text"
                        placeholder="Phone Number"
                        defaultValue={phoneNumber}
                        name="phoneNumber"
                        onChange={onChangeMandatoryFields}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={6} className="mb-3">
                    <FloatingLabel
                      controlId="graduationYear"
                      label="Graduation Year"
                      className={
                        graduationYear
                          ? 'fs-6 color-light-pink'
                          : 'color-light-pink'
                      }
                    >
                      <Form.Control
                        className="bg-grey color-white"
                        type="text"
                        defaultValue={graduationYear}
                        placeholder="Graduation Year"
                        name="graduationYear"
                        onChange={onChangeMandatoryFields}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={12} md={6} className="mb-3">
                    <FloatingLabel
                      controlId="mobileOTP"
                      label="Mobile OTP"
                      className={
                        mobileOTP ? 'fs-6 color-light-pink' : 'color-light-pink'
                      }
                    >
                      <Form.Control
                        className="bg-grey color-white"
                        type="text"
                        placeholder="Mobile OTP"
                        defaultValue={mobileOTP}
                        name="mobileOTP"
                        onChange={onChangeMandatoryFields}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={6} className="mb-3">
                    <FloatingLabel
                      controlId="grade"
                      label="Grade"
                      className={
                        grade ? 'fs-6 color-light-pink' : 'color-light-pink'
                      }
                    >
                      <Form.Select
                        className="bg-grey color-white"
                        aria-label="Floating label select example"
                        // defaultValue={grade}
                        value={grade}
                        name="grade"
                        onChange={onChangeMandatoryFields}
                      >
                        <option value="1">Grade 8</option>
                        <option value="2">Grade 9</option>
                        <option value="3">Grade 10</option>
                        <option value="4">Grade 11</option>
                        <option value="5">Grade 12</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={12} md={6} className="mb-3">
                    <FloatingLabel
                      controlId="curriculum"
                      label="Curriculum"
                      className="fs-6 color-light-pink"
                    >
                      <Form.Select
                        className="bg-grey color-white"
                        aria-label="Floating label select example"
                        // defaultValue={curriculum}
                        value={curriculum}
                        name="curriculum"
                        onChange={onChangeMandatoryFields}
                      >
                        <option value="0" >
                          --Select--
                        </option>
                        <option value="1">IGCSE</option>
                        <option value="2">IB</option>
                        <option value="3">CBSE</option>
                        <option value="4">ICSE</option>
                        <option value="5">STATE BOARD</option>
                        <option value="6">CAIE</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row className="m-0">
                  <Col className="text-center mt-3">
                    <Button type="submit">Update Changes</Button>
                  </Col>
                </Row>
              </Form>

              <Row className="mt-3 px-2">
                {showBasicAlert && updateMandatoryReducer.status === true ? (
                  <Alert
                    variant="success"
                    onClose={() => setShowBasicAlert(false)}
                    dismissible
                    className="rounded"
                  >
                    {updateMandatoryReducer.success}
                  </Alert>
                ) : null}
                {showBasicAlert && updateMandatoryReducer.status === false ? (
                  <Alert
                    variant="danger"
                    onClose={() => setShowBasicAlert(false)}
                    dismissible
                    className="rounded"
                  >
                    {updateMandatoryReducer.error}
                  </Alert>
                ) : null}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Row className="mt-sm-3 mt-md-0">
            <Card className="text-center edit-user-card-bg color-white">
              <Card.Body>
                <Card.Title>
                  <h3 className="color-white">Change Password</h3>
                </Card.Title>
                <Card.Text className="mb-3">
                  {/* <div>{editUserDetails.userDetails.EMAIL}</div> */}
                  <p className="text-warning fs-6 mt-3">
                    Enter atleast 6 characters, there is no validation as of
                    now. Please use this wisely
                  </p>
                </Card.Text>
                <Form onSubmit={onUpdatePassword}>
                  <Row>
                    <Col className="mb-2">
                      <FloatingLabel
                        controlId="password"
                        label="Enter Password"
                        className={
                          password.length > 0
                            ? 'fs-6 color-light-pink'
                            : 'color-light-pink'
                        }
                      >
                        <Form.Control
                          className="bg-grey color-white"
                          type="text"
                          placeholder="Enter Password"
                          defaultValue={password}
                          name="password"
                          onChange={(e) => {
                            setPassword(e.target.value)
                          }}
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="m-0">
                    <Col className="text-center mt-2">
                      <Button type="submit">Update Password</Button>
                    </Col>
                  </Row>
                </Form>
                {showPasswordAlert && updatePassword.status === true ? (
                  <Alert
                    variant="success"
                    onClose={() => setShowPasswordAlert(false)}
                    dismissible
                    className="rounded"
                  >
                    {updatePassword.success}
                  </Alert>
                ) : null}
                {showPasswordAlert && updatePassword.status === false ? (
                  <Alert
                    variant="danger"
                    onClose={() => setShowPasswordAlert(false)}
                    dismissible
                    className="rounded"
                  >
                    {updatePassword.error}
                  </Alert>
                ) : null}
                {showPasswordAlert && passwordMinErrorText.length > 1 ? (
                  <Alert
                    variant="danger"
                    onClose={() => setShowPasswordAlert(false)}
                    dismissible
                    className="rounded"
                  >
                    {passwordMinErrorText}
                  </Alert>
                ) : null}
              </Card.Body>
            </Card>
          </Row>
          <Row className="mt-3">
            <Card className="text-center edit-user-card-bg color-white">
              <Card.Body>
                <Card.Title className="mb-3">
                  <h3 className="color-white">Prime/ Premium Status</h3>
                </Card.Title>
                <Form onSubmit={onSubmitPrimeStatus}>
                  <Row>
                    <Col className="mb-3">
                      <FloatingLabel
                        controlId="prime"
                        label="Premium"
                        className="fs-6 color-light-pink"
                      >
                        <Form.Select
                          className="bg-grey color-white"
                          aria-label="Floating label select example"
                          // defaultValue={
                          //   primeFields.prime === 2 ? 'Premium' : 'Basic'
                          // }
                          value={primeFields.prime}
                          name="prime"
                          onChange={onChangePrimeStatus}
                        >
                          <option value="1">Basic</option>
                          <option value="2">Plus</option>
                          <option value="3">Premium</option>
                          <option value="4">Premium plus</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={6} className="mb-2">
                      <FloatingLabel
                        controlId="primeStartDate"
                        label="Start Date"
                        className="fs-6 color-light-pink"
                      >
                        <Form.Control
                          className="bg-grey color-white"
                          type="date"
                          placeholder="Start Date"
                          // defaultValue={
                          //   primeFields.primeStartDate
                          //     ? primeFields.primeStartDate
                          //     : 'DD-MM-YYYY'
                          // }
                          value={
                              primeFields.primeStartDate
                              ? primeFields.primeStartDate
                              : 'DD-MM-YYYY'
                          }
                          name="primeStartDate"
                          onChange={onChangePrimeStatus}
                        />
                      </FloatingLabel>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="mb-2">
                      <FloatingLabel
                        controlId="primeEndDate"
                        label="End Date"
                        className="fs-6 color-light-pink"
                      >
                        <Form.Control
                          className="bg-grey color-white"
                          type="date"
                          placeholder="End Date"
                          // defaultValue={
                          //   primeFields.primeEndDate
                          //     ? primeFields.primeEndDate
                          //     : 'DD-MM-YYYY'
                          // }
                          value={
                              primeFields.primeEndDate
                              ? primeFields.primeEndDate
                              : 'DD-MM-YYYY'
                          }
                          name="primeEndDate"
                          onChange={onChangePrimeStatus}
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="m-0">
                    <Col className="text-center mt-2">
                      <Button type="submit">Update Changes</Button>
                    </Col>
                  </Row>
                </Form>

                <Row className="mt-3 px-2">
                  {showPrimeAlert && updatePrimeReducer.status === true ? (
                    <Alert
                      variant="success"
                      onClose={() => setShowPrimeAlert(false)}
                      dismissible
                      className="rounded"
                    >
                      {updatePrimeReducer.success}
                    </Alert>
                  ) : null}
                  {showPrimeAlert && updatePrimeReducer.status === false ? (
                    <Alert
                      variant="danger"
                      onClose={() => setShowPrimeAlert(false)}
                      dismissible
                      className="rounded"
                    >
                      {updatePrimeReducer.error}
                    </Alert>
                  ) : null}
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
      <Row className="mt-3">
        <Card className="text-center edit-user-card-bg color-white">
          <Card.Body>
            <Card.Title className="mb-3">
              <h3 className="color-white">Prime Plus Servicess</h3>
            </Card.Title>
            <Row className="mb-3">
              <Col>
                <Button onClick={() => handleAddPrimePlus()}>Add Plan</Button>
              </Col>
            </Row>

            {primePlusFieldsComponents}

            <Row className="mt-3">
              <Col>
                <Button onClick={onSubmitPrimePlusStatus}>Save</Button>
              </Col>
            </Row>

            {showPrimePlusAlert && updatePrimePlusReducer.status === true ? (
              <Alert
                variant="success"
                onClose={() => setShowPrimePlusAlert(false)}
                dismissible
                className="rounded"
              >
                {updatePrimePlusReducer.success}
              </Alert>
            ) : null}
            {showPrimePlusAlert && updatePrimePlusReducer.status === false ? (
              <Alert
                variant="danger"
                onClose={() => setShowPrimePlusAlert(false)}
                dismissible
                className="rounded"
              >
                {updatePrimePlusReducer.error}
              </Alert>
            ) : null}
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}
