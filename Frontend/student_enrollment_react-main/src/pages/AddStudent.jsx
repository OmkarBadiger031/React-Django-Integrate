import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const AddStudent = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [department, setDepartment] = useState("")
  const [course, setCourse] = useState("")

  const navigate = useNavigate()

  function handleForm(e){
    e.preventDefault()
    const studentData = {name,email,department,course}
    axios.post('http://127.0.0.1:8000/api/students/create/',studentData)
    .then(()=>{
      toast.success("Student Added")
      setName("")
      setEmail("")
      setDepartment("")
      setCourse("")
      navigate("/viewstudent")
    })
    .catch(err=>{
      const validationErrors = err.response?.data
      const errorMessage = validationErrors
        ? Object.entries(validationErrors)
            .flatMap(([field, messages]) => `${field}: ${messages.join(', ')}`)
            .join(' | ')
        : "Unable to add student. Check that the backend is running."
      toast.error(errorMessage)
    })
  }

  return (
    <>
    <Navbar/>
      <center><h1>Add Student</h1></center>
      <center>
        <form onSubmit={handleForm}>
          <input type="text" placeholder='Enter Name' required value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />
          <input type="email" placeholder='Enter Email' required value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
          <input type="text" placeholder='Enter Department' required value={department} onChange={(e)=>{setDepartment(e.target.value)}} /> <br />
          <input type="text" placeholder='Enter Course' required value={course} onChange={(e)=>{setCourse(e.target.value)}} /> <br />
          <button>Add</button>
          
        </form>
        
        
      </center>
    </>
  )
}

export default AddStudent