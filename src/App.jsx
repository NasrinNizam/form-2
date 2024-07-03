
import { useState } from 'react'
import './App.css'
import { Bounce } from 'react-toastify'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [email , setEmail] =useState('')
  const [emailError , setEmailError] = useState('')
  const [password , setPassword] = useState('')
  const [passwordError , setPasswordError] = useState('')


  const handleEmail=(e)=>{
    setEmail(e.target.value)
    setEmailError('')
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
    setPasswordError('')
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!email){
      setEmailError('please enter your email !')
    }
    if(!password){
      setPasswordError('please enter your password')
    }
    else{
      toast.success('🦄 Login Success!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }
  }

  return (
    <>
      <div className="container">
        <div className="flex ">
          <div className=" flex gap-32">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label className=""> Email : </label>
                <input onChange={handleEmail} className="w-[250px] mb-1 h-[40px] border-[1px] border-black rounded-lg text-center" type="email"  placeholder='Entar your Email'/>
                <p className="text-red-500">{emailError}</p>
                <div className="mt-5 flex flex-col">
                <label className="mt-5"> Password : </label>
                <input onChange={handlePassword} className="w-[250px] mb-1 h-[40px] border-[1px] border-black rounded-lg text-center" type="password" placeholder='Enter your Password' />
                <p className="text-red-500">{passwordError}</p>
                </div>
                <button className=" w-[100px] h-[40px] mt-5 bg-lime-300 text-black text-20px flex justify-center items-center rounded-3xl">Submit</button>
            </form>
            <div className="w-[300px] h-[300px]">
              <img className="rounded-full" src="photo.jpg" alt="photo" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
