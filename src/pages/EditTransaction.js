import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from "react-router-dom";


const EditTransaction = () => {
    let { id } = useParams(); 
    var url = 'http://127.0.0.1:8000/policy/detail/' + String(id) + '/'
    const [policydetail, setpolicydetail] = useState({});
    const [policydetailError, setPolicydetailError] = useState({});
    const navigate = useNavigate();

    function transaction(){
        axios.put(url, policydetail)
        .then(res => {
            navigate("/list-policy");        
            setPolicydetailError({})
        }).catch(error => {
            if (error.response && error.response.status == 400) {
                setPolicydetailError(error.response.data)
            } else {
                // todo
                // show user errors  
                console.log('Error', error.message);}
        })
    }

    useEffect(() => { 
        axios.get(url)
        .then(res => {
            setpolicydetail(res['data'])
        }).catch(error => {
                navigate("/");                
        })
    }, [])

    return (
        <div>
            <Row>
            <h1 className='mt-3'>Edit User Policy</h1>
                <Col className='p-3' lg='6' sm='10' xs='12' style={{backgroundColor: 'white', margin: 'auto', borderRadius: '5px', background: 'white', boxShadow: 'rgba(149, 140, 141, 0.1) 0px 4px 16px, rgba(149, 140, 141,0.1) 0px 8px 24px, rgba(149, 140, 141, 0.1) 0px 16px 56px'}}>
                    
                    <div style={{padding: '40px'}}>
                        <Row className='mb-3'>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['policy_id']} onInput={e => setpolicydetail(prev => ({...prev, ['policy_id']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Policy ID</label>
                                    <small style={{color: 'red'}}>{policydetailError['policy_id']?policydetailError['policy_id'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['date_of_purchase']} onInput={e => setpolicydetail(prev => ({...prev, ['date_of_purchase']: e.target.value}))}
                                        id="floatingInputCustom"
                                        type="date"
                                        disabled={true}
                                    />
                                    <label htmlFor="floatingInputCustom">Date of Purchase</label>
                                    <small style={{color: 'red'}}>{policydetailError['date_of_purchase']?policydetailError['date_of_purchase'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['fuel']} onInput={e => setpolicydetail(prev => ({...prev, ['fuel']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Fuel</label>
                                    <small style={{color: 'red'}}>{policydetailError['fuel']?policydetailError['fuel'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['vehicle_segment']} onInput={e => setpolicydetail(prev => ({...prev, ['vehicle_segment']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Vehicle Segment</label>
                                    <small style={{color: 'red'}}>{policydetailError['vehicle_segment']?policydetailError['vehicle_segment'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['premium']} onInput={e => setpolicydetail(prev => ({...prev, ['premium']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Premium</label>
                                    <small style={{color: 'red'}}>{policydetailError['premium']?policydetailError['premium'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['bodily_injury_liability']} onInput={e => setpolicydetail(prev => ({...prev, ['bodily_injury_liability']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Bodily Injury Liability</label>
                                    <small style={{color: 'red'}}>{policydetailError['bodily_injury_liability']?policydetailError['bodily_injury_liability'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['personal_injury_protection']} onInput={e => setpolicydetail(prev => ({...prev, ['personal_injury_protection']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Personal Injury Protection</label>
                                    <small style={{color: 'red'}}>{policydetailError['personal_injury_protection']?policydetailError['personal_injury_protection'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['property_damage_liability']} onInput={e => setpolicydetail(prev => ({...prev, ['property_damage_liability']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Property Damage Liability</label>
                                    <small style={{color: 'red'}}>{policydetailError['property_damage_liability']?policydetailError['property_damage_liability'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['collision']} onInput={e => setpolicydetail(prev => ({...prev, ['collision']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Collision</label>
                                    <small style={{color: 'red'}}>{policydetailError['collision']?policydetailError['collision'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['comprehensive']} onInput={e => setpolicydetail(prev => ({...prev, ['comprehensive']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Comprehensive</label>
                                    <small style={{color: 'red'}}>{policydetailError['comprehensive']?policydetailError['comprehensive'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['customer_gender']} onInput={e => setpolicydetail(prev => ({...prev, ['customer_gender']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Customer Gender</label>
                                    <small style={{color: 'red'}}>{policydetailError['customer_gender']?policydetailError['customer_gender'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['customer_income_group']} onInput={e => setpolicydetail(prev => ({...prev, ['customer_income_group']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Customer Income Group</label>
                                    <small style={{color: 'red'}}>{policydetailError['customer_income_group']?policydetailError['customer_income_group'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['customer_region']} onInput={e => setpolicydetail(prev => ({...prev, ['customer_region']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Customer Region</label>
                                    <small style={{color: 'red'}}>{policydetailError['customer_region']?policydetailError['customer_region'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                            <Col lg='6' sm='6' xs='6'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        value={policydetail['customer_marital_status']} onInput={e => setpolicydetail(prev => ({...prev, ['customer_marital_status']: e.target.value}))}
                                        id="floatingInputCustom"
                                    />
                                    <label htmlFor="floatingInputCustom">Customer Marital Status</label>
                                    <small style={{color: 'red'}}>{policydetailError['customer_marital_status']?policydetailError['customer_marital_status'][0]: "" }</small>
                                </Form.Floating>
                            </Col>
                        </Row>
                        <div className='mt-3'>
                            <Button variant="primary" onClick={transaction}>Update</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Button className='m-3' variant="outline-secondary" size="lg" onClick={()=> navigate("/")}>Home</Button>
            <Button className='m-3' variant="outline-secondary" size="lg" onClick={()=> navigate("/list-policy")}>List Policy</Button>
    </div>
    )
}
export default EditTransaction;