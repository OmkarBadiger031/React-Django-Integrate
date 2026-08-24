import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const UpdateStudent = () => {
  const [name,setName] = useState("")
  const [email, setEmail] = useState("")
  const [department, setDepartment] = useState("")
  const [course, setCourse] = useState("")

  const {id} = useParams()
  const navigate = useNavigate()
  useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/students/retrieve/${id}/`)
      .then(x=>{
        setName(x.data.name)
        setEmail(x.data.email)
        setDepartment(x.data.department)
        setCourse(x.data.course)
      })
  },[])

  function handleUpdate(e){
      e.preventDefault()
      let newData = {name, email, department, course}
      axios.put(`http://127.0.0.1:8000/api/students/update/${id}/`,newData)
      .then(()=>{
        toast.success("Updated...")
        navigate("/viewstudent")
      })
      .catch(err=>{
        toast.error("Failed to update")
      })
  }
  return (
    <>
    <Navbar/>
      <center><h1>Update Student</h1></center>
      <center>
        <form onSubmit={handleUpdate}>
          <input type="text" required value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />

          <input type="text" required  value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br />
          
          <input type="text" required value={department} onChange={(e)=>{setDepartment(e.target.value)}} /> <br />

          <input type="text" required value={course} onChange={(e)=>{setCourse(e.target.value)}} /> <br />

          <button>Update</button>
        </form>
      </center>
    </>
  )
}

export default UpdateStudent