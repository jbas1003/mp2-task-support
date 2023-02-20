import React from 'react'
import {Row,Col, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import mail from '../../assets/images/auth/03.png'
import Card from '../../components/Card'
import brand from '../../assets/images/task support logo - 2.png'

const TaskSubmitted = () => {
    return (
        <>
            <section className="login-content">
               <Row className="m-0 align-items-center bg-white vh-100">            
                  <Col md="6" className="p-0">    
                     <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-3">
                        <Card.Body>
                           <Link to="/dashboard" className="navbar-brand d-flex align-items-center mb-3">
                              <Col className='d-flex justify-content-around' >
                                 <Image src={brand} width={300} className="img-fluid animated-scaleX" alt="images" />
                              </Col>
                           </Link>
                           <h2 className="mt-3 mb-0">Success !</h2>
                           <p className="cnf-mail mb-1">Congratulations. Your request has been successfully submitted.</p>
                           <div className="d-inline-block w-100">
                              <Link to="/request-form" className="btn btn-primary mt-3">Back to Home</Link>
                           </div>
                        </Card.Body>
                     </Card>          
                  </Col>
                  <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                     <Image src={mail} className="img-fluid gradient-main animated-scaleX" alt="images"/>
                  </Col>
               </Row>
            </section>
        </>
    )
}

export default TaskSubmitted;
