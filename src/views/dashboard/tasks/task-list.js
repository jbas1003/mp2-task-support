import React from 'react'
import {Row,Col, Modal, Form, Button} from 'react-bootstrap'
import Card from '../../../components/Card'
import { deleteTask, getTasks, AddTask } from '../../../assets/Utils/methods'
// import { getUsers , addUser, updateUser } from '../../../assets/Utils/methods'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'





const TaskData = () => {

   try{
      const isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
      if(isUserLoggedIn && isUserLoggedIn.uname){
         
   }else{
      localStorage.clear();
      window.location.href = 'https://stellar-bubblegum-f0fa59.netlify.app'
   }
   }catch(error){
   localStorage.clear();
   window.location.href = 'https://stellar-bubblegum-f0fa59.netlify.app/'
   }

   const [taskId, setTaskId] = useState(0)
   const [fname, setFname] = useState('')
   const [mname, setMname] = useState('')
   const [lname, setLname] = useState('')
   const [requestor, setRequestor] = useState('')
   const [workNumber, setWorkNumber] = useState('')
   const [mobile, setMobile] = useState('')
   const [email, setEmail] = useState('')
   const [taskName, setTaskName] = useState('')
   const [taskDesc, setTaskDesc] = useState('')
   const [dateCreated, setDateCreated] = useState('')

   const fullName = `${fname} ${mname.charAt(0)}. ${lname}`

   const [showAdd, setShowAdd] = useState(false);
   const showModalAdd = () => setShowAdd(true);
   const closeModalAdd = () => setShowAdd(false)


   const [showEdit, setShowEdit] = useState(false)
   const showModalEdit = () => setShowEdit(true)
   const closeModalEdit = () => setShowEdit(false)

   const [tasks, setTasks] = useState([])

   const add = () => {
      AddTask(taskName, taskDesc, fullName, setWorkNumber, mobile, email).then(result=>{
         get()
      }).catch(error=>{
         console.log(error)
      })
      closeModalAdd()
      Redirect(TaskData)
   }

   const editTask = (taskId, taskName, taskDesc, requestor, workNumber, mobile, email, dateCreated) => {
      setTaskId(taskId)
      setTaskName(taskName)
      setTaskDesc(taskDesc)
      setRequestor(requestor)
      setWorkNumber(workNumber)
      setMobile(mobile)
      setEmail(email)
      setDateCreated(dateCreated)
      showModalEdit()
   }

   const updateTask = () => {
      updateTask(taskId, taskName, taskDesc, requestor, workNumber, mobile, email)
      get()
      Redirect(TaskData)
   }

   const delTask = (taskId) => {
      deleteTask(taskId)
      get()
      Redirect(TaskData)
   }

   const get = () => {
      getTasks((_return)=>{
         setTasks(_return)
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
                        <h4 className="card-title">Tasks</h4>
                     </div>
                     <div>
                        <Button  className="text-center btn-primary btn-icon mt-lg-0 mt-md-0 mt-3" onClick={() => {showModalAdd()}}>
                           <i className="btn-inner">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                           </i>
                           <span>New Task</span>
                        </Button>
                        <Modal show={showAdd} onHide={closeModalAdd}>
                              <Modal.Header closeButton>
                              <Modal.Title>Create New Task</Modal.Title>
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

                                 <Form.Group className="mb-3 md-12" controlId="frmLname">
                                    <Form.Label>Work Phone</Form.Label>
                                    <Form.Control type="text" onChange={e => setWorkNumber(e.target.value)}/>
                                 </Form.Group>

                                 <Form.Group className="mb-3 md-12" controlId="frmLname">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="text" onChange={e => setMobile(e.target.value)}/>
                                 </Form.Group>

                                 <Form.Group className="mb-3 md-12" controlId="frmEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" onChange={e => setEmail(e.target.value)}/>
                                 </Form.Group>

                                 <Form.Group className="mb-3 md-12" controlId="frmEmail">
                                    <Form.Label>Task Name</Form.Label>
                                    <Form.Control type="email" onChange={e => setTaskName(e.target.value)}/>
                                 </Form.Group>

                                 <Form.Group className="mb-3 form-group">
                                      <Form.Label  htmlFor="exampleFormControlTextarea1">Description</Form.Label>
                                      <Form.Control as="textarea"  id="exampleFormControlTextarea1" rows="5" onChange={e => setTaskDesc(e.target.value)}/>
                                  </Form.Group>

                                 <Button variant="primary" onClick={() =>{add()}}>
                                    Save
                                 </Button>{' '}
                                 <Button variant="danger" onClick={() => {closeModalAdd()}}>
                                    Cancel
                                 </Button>
                              </Modal.Body>
                        </Modal>

                        <Modal show={showEdit} onHide={() => {closeModalEdit()}}>
                           <Modal.Header closeButton>
                              <Modal.Title>Task</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                              <Form.Group className="mb-3 md-12" controlId="frmEdit">
                                 <Form.Label>Full Name</Form.Label>
                                 <Form.Control type="text" defaultValue={requestor} onChange={e => setRequestor(e.target.value)}/>
                                 <Form.Label>Work Phone</Form.Label>
                                 <Form.Control type="email" defaultValue={setWorkNumber} onChange={e => setEmail(e.target.value)}/>
                                 <Form.Label>Mobile</Form.Label>
                                 <Form.Control type="text" defaultValue={mobile} onChange={e => setMobile(e.target.value)}/>
                                 <Form.Label>Email</Form.Label>
                                 <Form.Control type='text' defaultValue={email} onChange={e => setEmail(e.target.value)}/>
                                 <Form.Label>Date Created</Form.Label>
                                 <Form.Control type='text' defaultValue={dateCreated} onChange={e => setDateCreated(e.target.value)}/>
                                 <Form.Label>Task Name</Form.Label>
                                 <Form.Control type="text" defaultValue={taskName} onChange={e => setMname(e.target.value)}/>
                                 <Form.Label>Description</Form.Label>
                                 <Form.Control as="textarea" row="5" defaultValue={taskDesc} onChange={e => setTaskDesc(e.target.value)}/>
                              </Form.Group>
                              <Button variant="primary" onClick={() => {updateTask()}}>
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
                                 <th>Tasks</th>
                                 <th>Date Created</th>
                                 <th>Due Date</th>
                                 <th>Actions</th>
                              </tr>
                           </thead>
                           <tbody>
                           {
                                 tasks.map((item) => (
                              <tr key={item.taskId}>
                                 <td width={'60%'} onClick={() => { editTask(item.taskId, item.taskName, item.taskDescription, item.requestor, item.workNumber, item.mobile, item.email, item.dateCreated ) }} style={{cursor: 'pointer'}}>{item.taskName}</td>
                                 <td onClick={() => { editTask(item.taskId, item.taskName, item.taskDescription, item.requestor, item.workNumber, item.mobile, item.email, item.dateCreated ) }} style={{cursor: 'pointer'}}>{item.dateCreated}</td>
                                 <td onClick={() => { editTask(item.taskId, item.taskName, item.taskDescription, item.requestor, item.workNumber, item.mobile, item.email, item.dateCreated ) }} style={{cursor: 'pointer'}}>{item.dateDue}</td>
                                 <td>
                                    <div style={{float:"left"}}>
                                       <Link className="btn btn-sm btn-icon text-danger"  data-bs-toggle="tooltip" title="Delete Task" to="#" onClick={() => {delTask(item.taskId)}}>
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
                                 <th>Tasks</th>
                                 <th>Date Created</th>
                                 <th>Due Date</th>
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

export default TaskData
