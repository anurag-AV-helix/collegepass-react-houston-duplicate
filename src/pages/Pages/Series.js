import React, {useState} from 'react';
import { Container, Row, Table, Button, Form, Col } from 'react-bootstrap';

const Series = ()=>{


const [sortAsc,setSortAsc] = useState(false)
const [activeSort, setActiveSort] = useState(null)
const [searchInput, setSearchInput] = useState(null)


const handleAdd = ()=>{

}


    return (
        <Container fluid className="w-100">
          <Row className="heading mb-3">
            <h3 className="title">Series</h3>
          </Row>
    
          <Row
            className="mb-3"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Col xs={8} sm={4}>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Control
                  type="text"
                  placeholder="Enter Series Title"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </Form>
            </Col>
            <Col sm={4} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <Form>
                <Button className="btn-primary" onClick={() => handleAdd()}>
                  Add Series
                </Button>
              </Form>
            </Col>
          </Row>
    
          <Row>
            <Table responsive className="table">
              <thead>
                <tr>
                  <th>
                    Series Title{' '}
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
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
             
            </Table>
          </Row>
        </Container>
      )
}

export default Series;