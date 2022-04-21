/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Table, Button, Form } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import { getUserList, getSearchedUsers } from '../../actions/userListActions'

const UserList = ({ title }) => {
  const dispatch = useDispatch()
  const userListData = useSelector((state) => state.userList.userList)
  const searchedUsers = useSelector(
    (state) => state.searchedUsers.searchedUsers
  )

  const [currPage, setCurrPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(25)
  const [searchText, setSearchText] = useState('')
  const [showSearched, setShowSearched] = useState(false)

  const list = showSearched ? searchedUsers : userListData

  const handleClick = (params) => {
    window.open(`user/edit-user/${params}`)
  }

  useEffect(() => {
    dispatch(getUserList(0, 100))
  }, [dispatch])

  const indexOfLastUser = currPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage

  let tableBodyComponent = null

  if (list !== undefined && list !== null && list.length > 0) {
    tableBodyComponent = list?.map((userData) => {
      return (
        <tr
          key={userData.ID}
          onClick={() => handleClick(userData.ID)}
          role="button"
          className="data-row"
        >
          <td>{userData.ID}</td>
          <td>{userData.EMAIL}</td>
          <td>{`${userData.FIRSTNAME} ${userData.LASTNAME}`}</td>
          <td>{userData.PHONENUMBER}</td>
          
          <td>{userData.ISPREMIUM === 4 ? 'Premium plus' : userData.ISPREMIUM === 3 ? 'Premium' : userData.ISPREMIUM === 2 ? 'Plus' : 'Basic'}</td>
          <td>
            <Button className="btn-primary">Edit</Button>
          </td>
        </tr>
      )
    })
  }
  // <td>{userData.ISPREMIUM === 2 ? 'prime' : 'basic'}</td> 

  const onSearchHandler = (e) => {
    if (searchText) {
      e.preventDefault()
      dispatch(getSearchedUsers(searchText))
      setShowSearched(true)
    }
  }

  return (
    <Container fluid className="w-100">
      <Row className="heading mb-3">
        <h3 className="title">
          User List
          {/* {userListData !== undefined
            ? userListData.length > 0
              ? userListData.length
              : 0
            : 0}
          ) */}
        </h3>
      </Row>

      <Row className="mb-3 w-25">
        <Form onSubmit={onSearchHandler}>
          <Form.Control
            type="text"
            placeholder="Enter Email / Phone"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Form>
      </Row>

      <Row>
        <Table responsive className="table">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Email</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Premium Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{tableBodyComponent}</tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default UserList
