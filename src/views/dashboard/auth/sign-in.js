import React, { useState } from 'react'
import {Row,Col,Image,Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Card from '../../../components/Card'

// img
import auth1 from     '../../../assets/images/auth/01.png'
import brand from '../../../assets/images/task support logo - 2.png'
import { signIn } from '../../../assets/Utils/methods'

function SignIn () {
   

   const [username, setUsername] = useState();
   const [password, setPassword] = useState();

   const signInUser = () => {


      try {
         const isUserSignedIn = JSON.parse(localStorage.getItem('user'))
   
         if (isUserSignedIn && isUserSignedIn.uname) {
            window.location.href = 'http://localhost:3001/dashboard'
         }
         else{
            signIn(username, password)
         .then(result => {
            return result.json()
         })
         .then(async result => {
            console.log(result)
            if (result.success) {
               console.log(result)
               localStorage.setItem('user', JSON.stringify(result.userData))
               window.location.href = 'http://localhost:3001/dashboard'
            }
            else{
               alert('Invalid login')
            }
         })
         .catch((error) => {
            console.log('Login Error: ', error)
         })
         }
     } catch (error) {
         
     }

      
   }

   return (
      <>
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">            
               <Col md="6">
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                           <Card.Body>
                              <Link to="/" className="navbar-brand d-flex align-items-center mb-3">
                                 <Image src={brand} className="Image-fluid gradient-main animated-scaleX" />
                              </Link>
                              <h2 className="mb-2 text-center">Sign In</h2>
                              {/* <Form> */}
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="email" className="">Username</Form.Label>
                                          <Form.Control type="text" className="" id="email" aria-describedby="email" placeholder=" " onChange={e => setUsername(e.target.value)} />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="12" className="">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="password" className="">Password</Form.Label>
                                          <Form.Control type="password" className="" id="password" aria-describedby="password" placeholder=" " onChange={e => setPassword(e.target.value)} />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="12" className="d-flex justify-content-between">
                                       <Form.Check className="form-check mb-3">
                                          <Form.Check.Input type="checkbox"  id="customCheck1"/>
                                          <Form.Check.Label htmlFor="customCheck1">Remember Me</Form.Check.Label>
                                       </Form.Check>
                                       <p>
                                          <Link to="/request-form">Submit a ticket</Link>.
                                       </p>
                                    </Col>
                                 </Row>
                                 <div className="d-flex justify-content-center">
                                    <Button type="submit" onClick={() => {signInUser()}} variant="btn btn-primary">Sign In</Button>
                                 </div>
                              {/* </Form> */}
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
               <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src={auth1} className="Image-fluid gradient-main animated-scaleX" alt="images"/>
               </Col>
            </Row>
         </section>
        </>
    )
}


export default SignIn