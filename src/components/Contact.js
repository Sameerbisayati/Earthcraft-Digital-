import React, { useState } from 'react'
import{motion} from 'framer-motion';
const Contact = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  })

const [errors,setErrors]=useState({})


  const handleChange=(event)=>{
const {name,value}=event.target
setFormData((prev)=>({...prev,[name]:value}))
  }

  const handleSubmit=(e)=>{
e.preventDefault();
    const newErrors={}
    if(!formData.name) newErrors.name="Name is required"
    if(!formData.email) newErrors.email="Email is required"
    if(!formData.message) newErrors.message="Message is required"
    if(Object.keys(newErrors).length!==0){
      setErrors(newErrors)
    }else{
console.log("Form Submitted",formData)
    }
  }
  return (
    <div id='contact' className='contact flex  justify-center py-16 w-full min-h-screen items-center bg-gray-100'>
      <motion.form
      initial={{opacity:0,y:-50}}
whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      
      className='flex flex-col gap-4 bg-white shadow-lg p-10 border-white rounded-md w-full max-w-md' onSubmit={handleSubmit} >

<h1 className='text-2xl font-semibold'>Contact Form</h1>
<label htmlFor='name' className='text-gray-600 font-bold'>Name</label>
<input type='text' className='border rounded-md p-2' name='name' id='name' value={formData.name} onChange={handleChange}/>
{errors.name && <p style={{color:"red"}}>{errors.name}</p>}

<label htmlFor='email' className='text-gray-600 font-bold' >Email</label>
<input type='text' name='email' id='email' className='border rounded-md p-2' value={formData.email} onChange={handleChange}/>
{errors.email && <p style={{color:"red"}}>{errors.email}</p>}

<label htmlFor='message' className='text-gray-600 font-bold'>Message</label>
<textarea type='text' name='message' id='message' className='border rounded-md p-2' rows="4" value={formData.message} onChange={handleChange}/>
{errors.message && <p style={{color:"red"}}>{errors.message}</p>}

<button type="submit" className='bg-indigo-500 hover:bg-indigo-700 px-2 py-3 border-white text-white'>Submit</button>
      </motion.form>
    </div>
  )
}

export default Contact
