import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

const ListUserPolicy = () => {
    const [transactiondetail, setTransactiondetail] = useState({});
    const [nexturl, setNexturl] = useState('');
    const [prevurl, setPrevurl] = useState('');
    const [search, setsearch] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => { 
        get_list()
    }, [])

    function get_list(request_url=false){
        // todo: use base urls
        let url = ''
        if (request_url){
            url = request_url
        }else{
            url = `http://127.0.0.1:8000/policy/list/?search=` + String(search)
        }
        axios.get(url)
        .then(res => {
            setTransactiondetail(res['data']['results'])
            setNexturl(res['data']['next'])
            setPrevurl(res['data']['previous'])
        }).catch(error => {
            // navigate("/");                
        })
    }

    return (
        <div>
            <div><h1>User Policy List</h1></div>
            <Row>
                <Col className='p-3' lg='10' sm='12' xs='12' style={{minHeight: '80vh', backgroundColor: 'white', margin: 'auto', borderRadius: '5px', background: 'white', boxShadow: 'rgba(149, 140, 141, 0.1) 0px 4px 16px, rgba(149, 140, 141,0.1) 0px 8px 24px, rgba(149, 140, 141, 0.1) 0px 16px 56px'}}>
                    <Row>
                        <Col lg='1' sm='1' xs='1' className='m-auto'><Button variant="success" size="sm" disabled={!prevurl} onClick={() => {get_list(prevurl)}}>Prev</Button></Col>
                        <Col lg='9' sm='9' xs='9'>
                                <Form.Control
                                    value={search} onInput={e => setsearch(e.target.value)}
                                    type="text"
                                    id="inputPassword5"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                        </Col>
                        <Col lg='1' sm='1' xs='1' className='m-auto'><Button variant="primary" size="sm" onClick={() => {get_list(false)}}>Search</Button></Col>
                        <Col lg='1' sm='1' xs='1' className='m-auto'><Button variant="success" size="sm" disabled={!nexturl} onClick={() => {get_list(nexturl)}}>Next</Button></Col>
                    </Row>
                    <Table striped borderless hover variant="white">
                        <thead>
                            <tr>
                            <th>Policy ID</th>
                            <th>Customer ID</th>
                            <th>Date of Purchase</th>
                            <th>Premium</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactiondetail &&  Object.keys(transactiondetail).map((row, row_index) => ( 
                                <tr>
                                    <td>{transactiondetail[row]['policy_id']}</td>
                                    <td>{transactiondetail[row]['customer_id']}</td>
                                    <td>{transactiondetail[row]['date_of_purchase']}</td>
                                    <td>{transactiondetail[row]['premium']}</td>
                                    <td><Button 
                                        variant="outline-success" 
                                        size="sm" 
                                        onClick={() => navigate("/edit-userpolicy/"+ transactiondetail[row]['id'])}
                                    >
                                        Edit
                                    </Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Button className='m-3' variant="outline-secondary" size="lg" onClick={()=> navigate("/")}>Home</Button>
    </div>
    )
}
export default ListUserPolicy;