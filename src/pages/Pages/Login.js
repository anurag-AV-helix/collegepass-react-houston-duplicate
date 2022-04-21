import axios from 'axios'
import { Button, Card, Form } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LOGIN_SUCCESS } from '../../constants/authConstants'
import { authAPI } from '../../utils/config/API'

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [passwd, setPasswd] = useState('')
  const [isAuthSuccesful, setIsAuthSuccesful] = useState(true)

  const onSubmitHandler = async () => {
    axios
      .post(authAPI, { EMAIL: email, PASSWORD: passwd })
      .then((e) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: e.data,
        })
        setIsAuthSuccesful(true)
        window.location.href = '/'
      })
      .catch(() => {
        setIsAuthSuccesful(false)
      })
  }

  return (
    <div>
      <div>
        <div>
          <Card>
            <Card.Body>
              <Form>
                <div>
                  {/* <img
										src='https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png'
										alt=''
										className='block'
									/> */}
                  <h2>Admin Login</h2>
                  <div className="heading">
                    Sign in with your email id and password to continue.
                  </div>
                </div>
                <Form.Control
                  className="mb-3"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email ID"
                />
                <Form.Control
                  type="password"
                  onChange={(e) => setPasswd(e.target.value)}
                  value={passwd}
                  placeholder="Password"
                />
                <br />
                {!isAuthSuccesful && (
                  <div style={{ color: '#ff0000' }}>
                    Something is wrong with your email or password
                  </div>
                )}
                <br />
                <br />
                <Button
                  variant="contained"
                  color=""
                  style={{
                    color: '#ffffff',
                    backgroundColor: '#c83232',
                  }}
                  fullWidth
                  onClick={() => onSubmitHandler()}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login
