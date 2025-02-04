import  { useRef } from 'react'
import InputField from '../componets/ui/InputField'
import { Button } from '../componets/ui/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const signUp = async() => {
    const username = usernameRef?.current?.value
    const password = passwordRef?.current?.value
    
    if(username && password){ 
       const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`,{username,password})
       

       if(response.status === 200){
          navigate("/signin")
       }else{
        alert("Signup failed")
       }



         


  }
}

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-cyan-500">Sign Up</h1>
        </div>
        <div className="space-y-4">
          <InputField 
            ref={usernameRef}
            placeholder="Enter Username"
          />
          <InputField
            ref={passwordRef}
            placeholder="Enter Password" 
          />
          <div className="mt-6">
            <Button
              text="Sign Up"
              variants="primary"
              onClick={() => {signUp()}}
              width={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp