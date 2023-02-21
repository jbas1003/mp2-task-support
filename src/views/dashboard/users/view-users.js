import React from 'react'
import {Row,Col, Modal, Form, Button} from 'react-bootstrap'
import Card from '../../../components/Card'
import { getUsers, addUser, updateUser, deleteUser } from '../../../assets/Utils/methods'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
   

const TableData = () => {
   
//    try{
//       const isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
//       if(isUserLoggedIn && isUserLoggedIn.id){
//           // do nothing, continue lang
//       }else{
//           localStorage.clear();
//           window.location.href = 'http://localhost:3001/'
//       }
//   }catch(error){
//       localStorage.clear();
//       window.location.href = 'http://localhost:3001/'
//   }

   const [userId, setUserId] = useState(0)
   const [fname, setFname] = useState('')
   const [mname, setMname] = useState('')
   const [lname, setLname] = useState('')
   const [email, setEmail] = useState('')
   const [uname, setUname] = useState('')
   const [pword, setPword] = useState('')


   const [showAdd, setShowAdd] = useState(false);
   const showModalAdd = () => setShowAdd(true);
   const closeModalAdd = () => setShowAdd(false)


   const [showEdit, setShowEdit] = useState(false)
   const showModalEdit = () => setShowEdit(true)
   const closeModalEdit = () => setShowEdit(false)

   const [users, setUsers] = useState([])

   
   function edtUser(userId, fname, lname, mname, email, uname, pword){
      setUserId(userId)
      setFname(fname)
      setLname(lname)
      setMname(mname)
      setEmail(email)
      setUname(uname)
      setPword(pword)
      showModalEdit()

   }

   function add(){
      addUser(fname, lname, mname, email, uname, pword).then(result=>{
         get()
      }).catch(error=>{
         console.log(error)
      })
      closeModalAdd()
      Redirect(TableData)
   }

   function updateUsers(){
      updateUser(userId, fname, lname, mname, email, uname, pword)
      get()
      closeModalEdit()
      Redirect(TableData)
   }

   function delUser(userId){
      deleteUser(userId)
      get()
      Redirect(TableData)
   }

   function get(){
      
      getUsers((_return)=>{
         setUsers(_return)
      })
   }

   useEffect(()=>{
      get()
   }, [])

    return (
      <>
         <Row>
            <Col sm="12">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Users</h4>
                     </div>
                     <div>
                        <Button  className="text-center btn-primary btn-icon mt-lg-0 mt-md-0 mt-3" onClick={() => {showModalAdd()}}>
                           <i className="btn-inner">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                           </i>
                           <span>Add User</span>
                        </Button>
                        <Modal show={showAdd} onHide={closeModalAdd}>
                              <Modal.Header closeButton>
                              <Modal.Title>Add New User</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                 <Form.Group className="mb-3 md-12" controlId="frmFname">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" onChange={e => setFname(e.target.value)}/>
                                 </Form.Group>

                                 <Form.Group className="mb-3 md-12" controlId="frmMname">
                                    <Form.Label>Middle Name</Form.Label>
                                    <Form.Control type="text" onChange={e => setMname(e.target.value)}/>
                                 </Form.Group>

                                 <Form.Group className="mb-3 md-12" controlId="frmLname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" onChange={e => setLname(e.target.value)}/>
                                 </Form.Group>

                                 <Form.Group className="mb-3 md-12" controlId="frmEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" onChange={e => setEmail(e.target.value)}/>
                                 </Form.Group>

                                 <Form.Group className="mb-3 md-12" controlId="frmUname">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" onChange={e => setUname(e.target.value)}/>
                                 </Form.Group>

                                 <Form.Group className="mb-3 md-12" controlId="frmPword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' onChange={e => setPword(e.target.value)}/>
                                 </Form.Group>

                                 <Button variant="primary" onClick={() =>{add()}}>
                                    Save
                                 </Button>{' '}
                                 <Button variant="danger" onClick={() => {closeModalAdd()}}>
                                    Cancel
                                 </Button>
                              </Modal.Body>
                        </Modal>

                        <Modal show={showEdit} onHide={closeModalEdit}>
                           <Modal.Header closeButton>
                              <Modal.Title>Add New User</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                              <Form.Group className="mb-3 md-12" controlId="frmEdit">
                                 <Form.Label>First Name</Form.Label>
                                 <Form.Control type="text" defaultValue={fname} onChange={e => setFname(e.target.value)}/>
                                 <Form.Label>Middle Name</Form.Label>
                                 <Form.Control type="text" defaultValue={mname} onChange={e => setMname(e.target.value)}/>
                                 <Form.Label>Last Name</Form.Label>
                                 <Form.Control type="text" defaultValue={lname} onChange={e => setLname(e.target.value)}/>
                                 <Form.Label>Email</Form.Label>
                                 <Form.Control type="email" defaultValue={email} onChange={e => setEmail(e.target.value)}/>
                                 <Form.Label>Username</Form.Label>
                                 <Form.Control type="text" defaultValue={uname} onChange={e => setUname(e.target.value)}/>
                                 <Form.Label>Password</Form.Label>
                                 <Form.Control type='text' defaultValue={pword} onChange={e => setPword(e.target.value)}/>
                              </Form.Group>
                              <Button variant="primary" onClick={() =>{updateUsers()}}>
                                 Save
                              </Button>{' '}
                              <Button variant="danger" onClick={() => {closeModalEdit()}}>
                                 Cancel
                              </Button>
                           </Modal.Body>
                        </Modal>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     
                     <div className="table-responsive">
                        <table id="datatable" className="table table-striped" data-toggle="data-table">
                           <thead>
                              <tr>
                                 <th>Name</th>
                                 <th>Email</th>
                                 <th>Username</th>
                                 <th>Password</th>
                                 <th>Actions</th>
                              </tr>
                           </thead>
                           <tbody>
                           {
                                 users.map((item) => (
                              <tr key={item.userId}>
                                 <td>{item.fname + ' ' + item.mname.charAt(0) + '. ' + item.lname}</td>
                                 <td>{item.email}</td>
                                 <td>{item.uname}</td>
                                 <td>{item.pword}</td>
                                 <td>
                                    <div style={{float:"left"}}>
                                       <Link className="btn btn-sm btn-icon text-primary flex-end" data-bs-toggle="tooltip" title="Edit User" to="#"    onClick={() => {edtUser(item.userId, item.fname, item.lname, item.mname, item.email, item.uname, item.pword)}}>
                                             <span className="btn-inner">
                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                   <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                   <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                             </span>
                                       </Link>
                                       <Link className="btn btn-sm btn-icon text-danger"  data-bs-toggle="tooltip" title="Delete User" to="#" onClick={() => {delUser(item.userId)}}>
                                             <span className="btn-inner">
                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                   <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                   <path d="M20.708 6.23975H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                   <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                             </span>
                                       </Link>
                                       </div>
                                 </td>
                              </tr>
                                 ))
                           }
                           </tbody>
                           
                           <tfoot>
                              <tr>
                                 <th>Name</th>
                                 <th>Email</th>
                                 <th>Username</th>
                                 <th>Password</th>
                                 <th>Actions</th>
                              </tr>
                           </tfoot>
                        </table>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </>
   )
}

export default TableData
