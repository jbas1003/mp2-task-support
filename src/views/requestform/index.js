import React, { useState } from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'
import { AddTask } from '../../assets/Utils/methods';
import Card from '../../components/Card'



const FormElement = () => {
    const [taskName, settaskName] = useState();
    const [taskDesc, settaskDesc] = useState();
    const [requestor, setRequestor] = useState();
    const [workNumber, setWorkNumber] = useState();
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState();

    const addTask = () => {
        AddTask(taskName, taskDesc, requestor, workNumber, mobile, email)
        .then(result => {
            return result.json()
        })
        .then(result => {
            if (result.success) {
                window.location.href = 'https://stellar-bubblegum-f0fa59.netlify.app/request-form/submitted'
            }
        })
    }

    return (
        <>
            <div>
                <Row>
                    <div className='d-flex justify-content-around'>
                        <Col sm="12" lg="4" className='md-5'>
                            <Card className='mt-5'>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Support Request Form</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Form.Group className="form-group">
                                            <Form.Label  htmlFor="exampleInputText1">Full Name </Form.Label>
                                            <Form.Control type="text"  id="exampleInputText1" defaultValue="" placeholder="" onChange={e => setRequestor(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label  htmlFor="exampleInputEmail3">Email</Form.Label>
                                            <Form.Control type="email"  id="exampleInputEmail3" defaultValue="" placeholder="" onChange={e => setEmail(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label  htmlFor="exampleInputphone">Work Phone</Form.Label>
                                            <Form.Control type="tel"  id="exampleInputphone" defaultValue="" onChange={e => setWorkNumber(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label  htmlFor="exampleInputNumber1">Mobile</Form.Label>
                                            <Form.Control type="number"  id="exampleInputNumber1" defaultValue="" onChange={e => setMobile(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label  htmlFor="exampleInputText1">Title </Form.Label>
                                            <Form.Control type="text"  id="exampleInputText1" defaultValue="" placeholder="" onChange={e => settaskName(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group">
                                            <Form.Label  htmlFor="exampleFormControlTextarea1">Description</Form.Label>
                                            <Form.Control as="textarea"  id="exampleFormControlTextarea1" rows="5" onChange={e => settaskDesc(e.target.value)}/>
                                        </Form.Group>
                                        <Button type="button" variant="btn btn-primary" onClick={() => {addTask()}}>Submit</Button>{' '}
                                        <Button type="button" variant="btn btn-danger" onClick={() => {window.location.href = 'https://stellar-bubblegum-f0fa59.netlify.app'}}>cancel</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </div>
        </>
    )
}

export default FormElement
