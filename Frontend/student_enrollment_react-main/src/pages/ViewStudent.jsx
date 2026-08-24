import React from 'react'
import Navbar from '../components/Navbar'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
const ViewStudent = () => {
  const [students, setStudents] = useState([])

  const navigate = useNavigate()
  function fetchStudents(){
      axios.get("http://127.0.0.1:8000/api/students/list/")
      .then(x=>setStudents(x.data))
      .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchStudents()
  },[])

  function handleUpdate(id){
    navigate(`/updatestudent/${id}`)
  }

  function handleDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/students/delete/${id}/`)
    .then(()=>{
        toast.success("Student Deleted")
        fetchStudents()
    })
    .catch((err)=>{
      toast.error("Failed to delete")
    })
  }
  return (
    <>
      <Navbar/>
      <center><h1>View Students</h1></center>
      {students.map((x)=>{
        return <div>
          <p><b>Name: </b>{x.name}</p>
          <p><b>Email: </b>{x.email}</p>
          <p><b>Department: </b>{x.department}</p>
          <p><b>Course: </b>{x.course}</p>
          <button onClick={()=>{handleUpdate(x.id)}}>Edit</button>
          <button onClick={()=>{handleDelete(x.id)}}>Delete</button>
        </div>
      })}
    </>
  )
}

export default ViewStudent